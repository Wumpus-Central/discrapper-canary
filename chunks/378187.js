"use strict";
n.d(t, { A: () => U });
var i = n(412703),
    r = n(902173),
    s = n(439372),
    a = n(933958),
    o = n(91242),
    l = n(973522),
    u = n(952818),
    c = n(652896),
    d = n(227309),
    _ = n(871633),
    h = n(616356),
    f = n(760751),
    p = n(607567),
    E = n(927813),
    m = n(403362),
    g = n(340124),
    A = n(859703),
    I = n(24001),
    T = n(759366),
    S = n(192444),
    y = n(590202),
    C = n(851936),
    N = n(710969),
    v = n(639214),
    R = n(792620),
    O = n(814793),
    b = n(190107);
let D = +E.A.Millis.MINUTE,
    L = +E.A.Millis.SECOND,
    w = (0, C.L)({ location: b.rE.QUESTS_MANAGER });
function M(e) {
    return !(0, N.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function P(e) {
    let t = T.A.getState().autoEnroll,
        n = A.A.quests;
    for (let i of (0, v.jm)(n, e))
        if (t && 1)
            return (0, g.Oy)(i.id, {
                questContent: I.uF.RUNNING_ACTIVITY,
                questContentCTA: y.Cy.START_QUEST,
                sourceQuestContent: I.uF.RUNNING_ACTIVITY,
            });
}
function x(e) {
    return null != e && e.config.features.includes(r.L.MANUAL_HEARTBEAT_INITIALIZATION);
}
class k extends s.A {
    heartbeats = {
        [i.n.PLAY_ON_DESKTOP]: new Map(),
        [i.n.STREAM_ON_DESKTOP]: new Map(),
        [i.n.PLAY_ACTIVITY]: new Map(),
    };
    calculateHeartbeatDurationMs = (e) => {
        let t = A.A.quests.get(e);
        if (null == t || null == t.config || null == t.userStatus) return D;
        let { progressSeconds: n, targetSeconds: r } = (0, R.Yh)(t, i.o.DESKTOP),
            s = Math.max(0, (r - n) * E.A.Millis.SECOND);
        return s <= D ? s + L : D;
    };
    initiateHeartbeat = (e, t, n) => {
        let r = this.heartbeats[t];
        if (r.has(e)) return void w.log(`~ initiateHeartbeat -> Heartbeat already initiated for questId: ${e}`);
        let s = () => {
            let a = this.getActivelyProgressingQuests(t);
            if (a.has(e)) {
                let o = a.get(e),
                    l = o?.applicationId ?? n?.applicationId,
                    { enabled: u } = S.ev.getConfig({ location: b.rE.QUESTS_MANAGER }),
                    d = u ? o?.executableFingerprint : void 0,
                    _ = o?.executablePath ?? n?.executablePath;
                if (t === i.n.STREAM_ON_DESKTOP) {
                    let n = h.A.getCurrentUserActiveStream();
                    if (null == n) {
                        w.log(
                            `~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ${e}`,
                        ),
                            this.terminateHeartbeat(e, t);
                        return;
                    }
                    let i = (0, c._z)(n);
                    w.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, g.R2)({
                            questId: e,
                            streamKey: i,
                            applicationId: l,
                            executablePath: _,
                            executableFingerprint: d,
                        });
                } else
                    w.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, g.R2)({ questId: e, applicationId: l, executablePath: _, executableFingerprint: d });
                let f = this.calculateHeartbeatDurationMs(e),
                    p = window.setTimeout(s, f);
                r.set(e, p);
            } else
                w.log(`~ initiateHeartbeat -> Quest ${e} is no longer actively progressing, terminating heartbeat`),
                    this.terminateHeartbeat(e, t);
        };
        w.log(`~ initiateHeartbeat -> Initiating heartbeat for Quest ${e}`), s();
    };
    terminateHeartbeat = (e, t) => {
        let n = this.heartbeats[t],
            i = A.A.quests,
            r = n.get(e);
        if (null != r) {
            w.log(`~ terminateHeartbeat -> Terminating heartbeat for questId: ${e}`),
                window.clearTimeout(r),
                n.delete(e);
            let t = i.get(e);
            null != t &&
                M(t) &&
                (w.log(`~ terminateHeartbeat -> Sending terminal heartbeat for questId: ${e}`),
                (0, g.R2)({ questId: e, terminal: !0 }));
        }
    };
    handleSendHeartbeatSuccess = (e) => {
        let { questId: t, userStatus: n } = e;
        if ((w.log(`~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ${t})`), null != n.completedAt))
            for (let e of (w.log(
                `~ handleSendHeartbeatSuccess -> Quest ${t} completed, terminating any heartbeats for it`,
            ),
            Object.keys(this.heartbeats)))
                this.terminateHeartbeat(t, e);
    };
    handleSendHeartbeatFailure = (e) => {
        let { questId: t } = e;
        w.log(`~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ${t}`);
    };
    syncHeartbeats(e, t, n) {
        for (let i of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            w.log(`~ syncHeartbeats -> syncing heartbeats for taskTypes: ${e.join(", ")} (triggered by: ${t})`),
        e)) {
            let e = this.heartbeats[i],
                t = this.getActivelyProgressingQuests(i);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, i);
            for (let [r, s] of t.entries())
                !e.has(r) && (null == n || n(A.A.quests.get(r))) && this.initiateHeartbeat(r, i, s);
        }
    }
    getActivelyProgressingQuests(e) {
        switch (e) {
            case i.n.PLAY_ON_DESKTOP:
                return this.getActivelyProgressingPlayOnDesktopQuests();
            case i.n.STREAM_ON_DESKTOP:
                return this.getActivelyProgressingStreamOnDesktopQuests();
            case i.n.PLAY_ACTIVITY:
                return this.getActivelyProgressingActivityQuests();
            default:
                (0, m.xb)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = u.Ay.getRunningGames(),
            n = u.Ay.getRunningNonGames(),
            i = A.A.quests;
        w.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
        let r = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                r[e.id] = e;
                continue;
            }
            let t = u.Ay.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = f.A.findGame(e);
            if (n?.id != null) {
                r[n.id] = e;
                continue;
            }
        }
        for (let e of n) null != e.id && (r[e.id] = e);
        for (let t of Object.keys(r)) {
            let n = r[t],
                s = (0, l.Ic)(n.exePath);
            for (let r of i.values()) {
                let i = (0, R.pU)(r);
                if (!M(r) || null == i) continue;
                let a = i.find((e) => e === t);
                if (null != a)
                    e.set(r.id, {
                        applicationId: a,
                        executablePath: s,
                        executableFingerprint: n.executableFingerprint,
                    });
                else
                    null != n &&
                        i.some((e) => e === d.a7) &&
                        (0, _.n1)(n) &&
                        e.set(r.id, {
                            applicationId: d.a7,
                            executablePath: s,
                            executableFingerprint: n.executableFingerprint,
                        });
            }
        }
        return (
            w.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = h.A.getCurrentUserActiveStream();
        if (null == t || 2 > p.Ay.countVoiceStatesForChannel(t.channelId)) return e;
        let n = h.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        w.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let i = n.id;
        if (null == i) return e;
        for (let t of A.A.quests.values()) {
            let n = (0, R.a2)(t);
            M(t) && null != n && n === i && e.set(t.id, { applicationId: i });
        }
        return (
            w.log(
                "~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingActivityQuests() {
        let e = new Map(),
            t = a.Ay.getSelfEmbeddedActivities(),
            n = o.A.getConnectedFrame(),
            i = new Set(t.keys());
        if (
            (null != n && i.add(n.applicationId),
            w.log("~ getActivelyProgressingActivityQuestIds -> Running activity applicationIds: ", Array.from(i)),
            0 === i.size)
        )
            return e;
        let r = A.A.quests;
        for (let t of i)
            for (let n of r.values()) {
                let i = (0, R.vS)(n);
                M(n) && null != i && i === t && e.set(n.id, { applicationId: t });
            }
        for (let t of r.values()) M(t) && (0, O._e)(t) && e.set(t.id, { applicationId: b.ej });
        return (
            w.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
            e
        );
    }
    actions = {
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
            this.syncHeartbeats([i.n.PLAY_ON_DESKTOP, i.n.STREAM_ON_DESKTOP], "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS"),
        QUESTS_ENROLL_SUCCESS: () =>
            this.syncHeartbeats(
                [i.n.PLAY_ON_DESKTOP, i.n.STREAM_ON_DESKTOP, i.n.PLAY_ACTIVITY],
                "QUESTS_ENROLL_SUCCESS",
                (e) => !x(e),
            ),
        QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
        QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
        QUESTS_PREVIEW_UPDATE_SUCCESS: () =>
            this.syncHeartbeats(
                [i.n.PLAY_ON_DESKTOP, i.n.STREAM_ON_DESKTOP, i.n.PLAY_ACTIVITY],
                "QUESTS_PREVIEW_UPDATE_SUCCESS",
            ),
        RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "RUNNING_GAMES_CHANGE"),
        RUNNING_NON_GAMES_CHANGE: () => this.syncHeartbeats([i.n.PLAY_ON_DESKTOP], "RUNNING_NON_GAMES_CHANGE"),
        STREAM_START: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "STREAM_START"),
        STREAM_CREATE: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "STREAM_CREATE"),
        STREAM_CLOSE: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "STREAM_CLOSE"),
        PASSIVE_UPDATE_V2: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "PASSIVE_UPDATE_V2"),
        VOICE_STATE_UPDATES: () => this.syncHeartbeats([i.n.STREAM_ON_DESKTOP], "VOICE_STATE_UPDATES"),
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: (e) => {
            let { applicationId: t } = e;
            P(t);
        },
        FRAME_LAUNCH: async (e) => {
            let { applicationId: t } = e;
            await P(t), this.syncHeartbeats([i.n.PLAY_ACTIVITY], "FRAME_LAUNCH", (e) => !x(e));
        },
        FRAME_STOP: () => {
            this.syncHeartbeats([i.n.PLAY_ACTIVITY], "FRAME_STOP");
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: () => {
            this.syncHeartbeats([i.n.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !x(e));
        },
        QUEST_APPLICATION_START_TIMER: (e) => {
            let { questId: t } = e;
            this.syncHeartbeats(
                [i.n.PLAY_ACTIVITY],
                "QUEST_APPLICATION_START_TIMER",
                (e) => null != e && e.id === t && x(e),
            );
        },
    };
}
let U = new k();
