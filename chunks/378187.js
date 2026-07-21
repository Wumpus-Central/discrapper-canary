"use strict";
n.d(t, { A: () => G });
var i = n(412703),
    r = n(902173),
    a = n(439372),
    s = n(933958),
    l = n(91242),
    o = n(973522),
    d = n(952818),
    c = n(652896),
    u = n(227309),
    _ = n(871633),
    E = n(616356),
    A = n(760751),
    h = n(607567),
    I = n(927813),
    f = n(403362),
    p = n(340124),
    T = n(859703),
    m = n(24001),
    g = n(759366),
    S = n(590202),
    N = n(851936),
    C = n(710969),
    O = n(639214),
    R = n(792620),
    L = n(814793),
    y = n(190107);
let D = +I.A.Millis.MINUTE,
    v = +I.A.Millis.SECOND,
    b = (0, N.L)({ location: y.rE.QUESTS_MANAGER });
function M(e) {
    return !(0, C.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function P(e) {
    let t = g.A.getState().autoEnroll,
        n = T.A.quests;
    for (let i of (0, O.jm)(n, e))
        if (t && 1)
            return (0, p.Oy)(i.id, {
                questContent: m.uF.RUNNING_ACTIVITY,
                questContentCTA: S.Cy.START_QUEST,
                sourceQuestContent: m.uF.RUNNING_ACTIVITY,
            });
}
function U(e) {
    return null != e && e.config.features.includes(r.L.MANUAL_HEARTBEAT_INITIALIZATION);
}
class w extends a.A {
    heartbeats = {
        [i.n.PLAY_ON_DESKTOP]: new Map(),
        [i.n.STREAM_ON_DESKTOP]: new Map(),
        [i.n.PLAY_ACTIVITY]: new Map(),
    };
    calculateHeartbeatDurationMs = (e) => {
        let t = T.A.quests.get(e);
        if (null == t || null == t.config || null == t.userStatus) return D;
        let { progressSeconds: n, targetSeconds: r } = (0, R.Yh)(t, i.o.DESKTOP),
            a = Math.max(0, (r - n) * I.A.Millis.SECOND);
        return a <= D ? a + v : D;
    };
    initiateHeartbeat = (e, t, n) => {
        let r = this.heartbeats[t];
        if (r.has(e)) return void b.log(`~ initiateHeartbeat -> Heartbeat already initiated for questId: ${e}`);
        let a = () => {
            let s = this.getActivelyProgressingQuests(t);
            if (s.has(e)) {
                let l = s.get(e),
                    o = l?.applicationId ?? n?.applicationId,
                    d = l?.executableFingerprint,
                    u = l?.executablePath ?? n?.executablePath;
                if (t === i.n.STREAM_ON_DESKTOP) {
                    let n = E.A.getCurrentUserActiveStream();
                    if (null == n) {
                        b.log(
                            `~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ${e}`,
                        ),
                            this.terminateHeartbeat(e, t);
                        return;
                    }
                    let i = (0, c._z)(n);
                    b.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, p.R2)({
                            questId: e,
                            streamKey: i,
                            applicationId: o,
                            executablePath: u,
                            executableFingerprint: d,
                        });
                } else
                    b.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, p.R2)({ questId: e, applicationId: o, executablePath: u, executableFingerprint: d });
                let _ = this.calculateHeartbeatDurationMs(e),
                    A = window.setTimeout(a, _);
                r.set(e, A);
            } else
                b.log(`~ initiateHeartbeat -> Quest ${e} is no longer actively progressing, terminating heartbeat`),
                    this.terminateHeartbeat(e, t);
        };
        b.log(`~ initiateHeartbeat -> Initiating heartbeat for Quest ${e}`), a();
    };
    terminateHeartbeat = (e, t) => {
        let n = this.heartbeats[t],
            i = T.A.quests,
            r = n.get(e);
        if (null != r) {
            b.log(`~ terminateHeartbeat -> Terminating heartbeat for questId: ${e}`),
                window.clearTimeout(r),
                n.delete(e);
            let t = i.get(e);
            null != t &&
                M(t) &&
                (b.log(`~ terminateHeartbeat -> Sending terminal heartbeat for questId: ${e}`),
                (0, p.R2)({ questId: e, terminal: !0 }));
        }
    };
    handleSendHeartbeatSuccess = (e) => {
        let { questId: t, userStatus: n } = e;
        if ((b.log(`~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ${t})`), null != n.completedAt))
            for (let e of (b.log(
                `~ handleSendHeartbeatSuccess -> Quest ${t} completed, terminating any heartbeats for it`,
            ),
            Object.keys(this.heartbeats)))
                this.terminateHeartbeat(t, e);
    };
    handleSendHeartbeatFailure = (e) => {
        let { questId: t } = e;
        b.log(`~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ${t}`);
    };
    syncHeartbeats(e, t, n) {
        for (let i of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            b.log(`~ syncHeartbeats -> syncing heartbeats for taskTypes: ${e.join(", ")} (triggered by: ${t})`),
        e)) {
            let e = this.heartbeats[i],
                t = this.getActivelyProgressingQuests(i);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, i);
            for (let [r, a] of t.entries())
                !e.has(r) && (null == n || n(T.A.quests.get(r))) && this.initiateHeartbeat(r, i, a);
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
                (0, f.xb)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = d.Ay.getRunningGames(),
            n = d.Ay.getRunningNonGames(),
            i = T.A.quests;
        b.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
        let r = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                r[e.id] = e;
                continue;
            }
            let t = d.Ay.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = A.A.findGame(e);
            if (n?.id != null) {
                r[n.id] = e;
                continue;
            }
        }
        for (let e of n) null != e.id && (r[e.id] = e);
        for (let t of Object.keys(r)) {
            let n = r[t],
                a = (0, o.Ic)(n.exePath);
            for (let r of i.values()) {
                let i = (0, R.pU)(r);
                if (!M(r) || null == i) continue;
                let s = i.find((e) => e === t);
                if (null != s)
                    e.set(r.id, {
                        applicationId: s,
                        executablePath: a,
                        executableFingerprint: n.executableFingerprint,
                    });
                else
                    null != n &&
                        i.some((e) => e === u.a7) &&
                        (0, _.n1)(n) &&
                        e.set(r.id, {
                            applicationId: u.a7,
                            executablePath: a,
                            executableFingerprint: n.executableFingerprint,
                        });
            }
        }
        return (
            b.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = E.A.getCurrentUserActiveStream();
        if (null == t || 2 > h.Ay.countVoiceStatesForChannel(t.channelId)) return e;
        let n = E.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        b.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let i = n.id;
        if (null == i) return e;
        for (let t of T.A.quests.values()) {
            let n = (0, R.a2)(t);
            M(t) && null != n && n === i && e.set(t.id, { applicationId: i });
        }
        return (
            b.log(
                "~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingActivityQuests() {
        let e = new Map(),
            t = s.Ay.getSelfEmbeddedActivities(),
            n = l.A.getConnectedFrame(),
            i = new Set(t.keys());
        if (
            (null != n && i.add(n.applicationId),
            b.log("~ getActivelyProgressingActivityQuestIds -> Running activity applicationIds: ", Array.from(i)),
            0 === i.size)
        )
            return e;
        let r = T.A.quests;
        for (let t of i)
            for (let n of r.values()) {
                let i = (0, R.vS)(n);
                M(n) && null != i && i === t && e.set(n.id, { applicationId: t });
            }
        for (let t of r.values()) M(t) && (0, L._e)(t) && e.set(t.id, { applicationId: y.ej });
        return (
            b.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
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
                (e) => !U(e),
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
            await P(t), this.syncHeartbeats([i.n.PLAY_ACTIVITY], "FRAME_LAUNCH", (e) => !U(e));
        },
        FRAME_STOP: () => {
            this.syncHeartbeats([i.n.PLAY_ACTIVITY], "FRAME_STOP");
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: () => {
            this.syncHeartbeats([i.n.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !U(e));
        },
        QUEST_APPLICATION_START_TIMER: (e) => {
            let { questId: t } = e;
            this.syncHeartbeats(
                [i.n.PLAY_ACTIVITY],
                "QUEST_APPLICATION_START_TIMER",
                (e) => null != e && e.id === t && U(e),
            );
        },
    };
}
let G = new w();
