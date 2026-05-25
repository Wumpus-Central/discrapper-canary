"use strict";
n.d(t, { A: () => U });
var i = n(412703),
    r = n(902173),
    s = n(439372),
    a = n(933958),
    o = n(973522),
    l = n(952818),
    u = n(652896),
    c = n(227309),
    d = n(871633),
    _ = n(616356),
    f = n(760751),
    h = n(607567),
    p = n(927813),
    E = n(403362),
    m = n(340124),
    g = n(859703),
    A = n(507107),
    I = n(759366),
    T = n(192444),
    S = n(590202),
    N = n(851936),
    y = n(710969),
    C = n(639214),
    v = n(792620),
    O = n(814793),
    R = n(190107);
let b = +p.A.Millis.MINUTE,
    D = +p.A.Millis.SECOND,
    L = (0, N.L)({ location: R.rE.QUESTS_MANAGER });
function w(e) {
    return !(0, y.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function M(e) {
    let t = I.A.getState().autoEnroll,
        { enabled: n } = T.Ym.getConfig({ location: R.rE.QUEST_ACTIVITY_HEADER }),
        i = g.A.quests;
    for (let s of (0, C.jm)(i, e))
        if ((s.config.features.includes(r.L.ACTIVITY_QUEST_AUTO_ENROLLMENT) && !n) || (t && 1))
            return void (0, m.Oy)(s.id, {
                questContent: A.uF.RUNNING_ACTIVITY,
                questContentCTA: S.Cy.START_QUEST,
                sourceQuestContent: A.uF.RUNNING_ACTIVITY,
            });
}
function P(e) {
    return null != e && e.config.features.includes(r.L.MANUAL_HEARTBEAT_INITIALIZATION);
}
class x extends s.A {
    heartbeats = {
        [i.n.PLAY_ON_DESKTOP]: new Map(),
        [i.n.STREAM_ON_DESKTOP]: new Map(),
        [i.n.PLAY_ACTIVITY]: new Map(),
    };
    calculateHeartbeatDurationMs = (e) => {
        let t = g.A.quests.get(e);
        if (null == t || null == t.config || null == t.userStatus) return b;
        let { progressSeconds: n, targetSeconds: r } = (0, v.Yh)(t, i.o.DESKTOP),
            s = Math.max(0, (r - n) * p.A.Millis.SECOND);
        return s <= b ? s + D : b;
    };
    initiateHeartbeat = (e, t, n) => {
        let r = this.heartbeats[t];
        if (r.has(e)) return void L.log(`~ initiateHeartbeat -> Heartbeat already initiated for questId: ${e}`);
        let s = () => {
            let a = this.getActivelyProgressingQuests(t);
            if (a.has(e)) {
                let o = a.get(e),
                    l = o?.applicationId ?? n?.applicationId,
                    { enabled: c } = T.ev.getConfig({ location: R.rE.QUESTS_MANAGER }),
                    d = c ? o?.executableFingerprint : void 0,
                    f = o?.executablePath ?? n?.executablePath;
                if (t === i.n.STREAM_ON_DESKTOP) {
                    let n = _.A.getCurrentUserActiveStream();
                    if (null == n) {
                        L.log(
                            `~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ${e}`,
                        ),
                            this.terminateHeartbeat(e, t);
                        return;
                    }
                    let i = (0, u._z)(n);
                    L.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, m.R2)({
                            questId: e,
                            streamKey: i,
                            applicationId: l,
                            executablePath: f,
                            executableFingerprint: d,
                        });
                } else
                    L.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, m.R2)({ questId: e, applicationId: l, executablePath: f, executableFingerprint: d });
                let h = this.calculateHeartbeatDurationMs(e),
                    p = window.setTimeout(s, h);
                r.set(e, p);
            } else
                L.log(`~ initiateHeartbeat -> Quest ${e} is no longer actively progressing, terminating heartbeat`),
                    this.terminateHeartbeat(e, t);
        };
        L.log(`~ initiateHeartbeat -> Initiating heartbeat for Quest ${e}`), s();
    };
    terminateHeartbeat = (e, t) => {
        let n = this.heartbeats[t],
            i = g.A.quests,
            r = n.get(e);
        if (null != r) {
            L.log(`~ terminateHeartbeat -> Terminating heartbeat for questId: ${e}`),
                window.clearTimeout(r),
                n.delete(e);
            let t = i.get(e);
            null != t &&
                w(t) &&
                (L.log(`~ terminateHeartbeat -> Sending terminal heartbeat for questId: ${e}`),
                (0, m.R2)({ questId: e, terminal: !0 }));
        }
    };
    handleSendHeartbeatSuccess = (e) => {
        let { questId: t, userStatus: n } = e;
        if ((L.log(`~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ${t})`), null != n.completedAt))
            for (let e of (L.log(
                `~ handleSendHeartbeatSuccess -> Quest ${t} completed, terminating any heartbeats for it`,
            ),
            Object.keys(this.heartbeats)))
                this.terminateHeartbeat(t, e);
    };
    handleSendHeartbeatFailure = (e) => {
        let { questId: t } = e;
        L.log(`~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ${t}`);
    };
    syncHeartbeats(e, t, n) {
        for (let i of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            L.log(`~ syncHeartbeats -> syncing heartbeats for taskTypes: ${e.join(", ")} (triggered by: ${t})`),
        e)) {
            let e = this.heartbeats[i],
                t = this.getActivelyProgressingQuests(i);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, i);
            for (let [r, s] of t.entries())
                !e.has(r) && (null == n || n(g.A.quests.get(r))) && this.initiateHeartbeat(r, i, s);
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
                (0, E.xb)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = l.Ay.getRunningGames(),
            n = l.Ay.getRunningNonGames(),
            i = g.A.quests;
        L.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
        let r = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                r[e.id] = e;
                continue;
            }
            let t = l.Ay.getOverrideForGame(e);
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
                s = (0, o.Ic)(n.exePath);
            for (let r of i.values()) {
                let i = (0, v.pU)(r);
                if (!w(r) || null == i) continue;
                let a = i.find((e) => e === t);
                if (null != a)
                    e.set(r.id, {
                        applicationId: a,
                        executablePath: s,
                        executableFingerprint: n.executableFingerprint,
                    });
                else
                    null != n &&
                        i.some((e) => e === c.a7) &&
                        (0, d.n1)(n) &&
                        e.set(r.id, {
                            applicationId: c.a7,
                            executablePath: s,
                            executableFingerprint: n.executableFingerprint,
                        });
            }
        }
        return (
            L.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = _.A.getCurrentUserActiveStream();
        if (null == t || 2 > h.Ay.countVoiceStatesForChannel(t.channelId)) return e;
        let n = _.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        L.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let i = n.id;
        if (null == i) return e;
        for (let t of g.A.quests.values()) {
            let n = (0, v.a2)(t);
            w(t) && null != n && n === i && e.set(t.id, { applicationId: i });
        }
        return (
            L.log(
                "~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingActivityQuests() {
        let e = new Map(),
            t = a.Ay.getSelfEmbeddedActivities(),
            n = t.size > 0;
        if ((L.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let i = g.A.quests;
        for (let n of t.keys())
            for (let t of i.values()) {
                let i = (0, v.vS)(t);
                w(t) && null != i && i === n && e.set(t.id, { applicationId: n });
            }
        for (let t of i.values()) w(t) && (0, O._e)(t) && e.set(t.id, { applicationId: R.ej });
        return (
            L.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
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
                (e) => !P(e),
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
            M(t);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t } = e;
            M(t);
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: () =>
            this.syncHeartbeats([i.n.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !P(e)),
        QUEST_APPLICATION_START_TIMER: (e) => {
            let { questId: t } = e;
            this.syncHeartbeats(
                [i.n.PLAY_ACTIVITY],
                "QUEST_APPLICATION_START_TIMER",
                (e) => null != e && e.id === t && P(e),
            );
        },
    };
}
let U = new x();
