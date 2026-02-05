"use strict";
n.d(t, { A: () => M });
var r = n(412703),
    i = n(902173),
    a = n(439372),
    s = n(933958),
    o = n(15285),
    l = n(652896),
    u = n(227309),
    c = n(847521),
    d = n(616356),
    _ = n(760751),
    f = n(607567),
    p = n(927813),
    h = n(403362),
    m = n(829219),
    g = n(859703),
    E = n(341915),
    A = n(943849),
    I = n(590202),
    T = n(710969),
    y = n(639214),
    S = n(792620),
    v = n(814793),
    C = n(654487);
let b = +p.A.Millis.MINUTE,
    N = 2,
    R = +p.A.Millis.SECOND,
    O = (0, A.L)({ location: C.rE.QUESTS_MANAGER });
function D(e) {
    return !(0, T.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function L(e) {
    let t = g.A.quests;
    for (let n of (0, y.jm)(t, e))
        if (n.config.features.includes(i.L.ACTIVITY_QUEST_AUTO_ENROLLMENT))
            return void (0, m.Oy)(n.id, {
                questContent: E.uF.RUNNING_ACTIVITY,
                questContentCTA: I.Cy.ACCEPT_QUEST,
                sourceQuestContent: E.uF.RUNNING_ACTIVITY,
            });
}
function w(e, t) {
    return null != t && e.some((e) => e === u.a7) && (0, c.n1)(t);
}
function x(e) {
    return null != e && e.config.features.includes(i.L.MANUAL_HEARTBEAT_INITIALIZATION);
}
class P extends a.A {
    heartbeats = {
        [r.n.PLAY_ON_DESKTOP]: new Map(),
        [r.n.STREAM_ON_DESKTOP]: new Map(),
        [r.n.PLAY_ACTIVITY]: new Map(),
    };
    calculateHeartbeatDurationMs = (e) => {
        let t = g.A.quests.get(e);
        if (null == t || null == t.config || null == t.userStatus) return b;
        let { progressSeconds: n, targetSeconds: i } = (0, S.Yh)(t, r.o.DESKTOP),
            a = Math.max(0, (i - n) * p.A.Millis.SECOND);
        return a <= b ? a + R : b;
    };
    initiateHeartbeat = (e, t, n) => {
        let i = this.heartbeats[t];
        if (i.has(e)) return void O.log(`~ initiateHeartbeat -> Heartbeat already initiated for questId: ${e}`);
        let a = () => {
            let s = this.getActivelyProgressingQuests(t);
            if (s.has(e)) {
                let o = s.get(e),
                    u = o?.applicationId ?? n;
                if (t === r.n.STREAM_ON_DESKTOP) {
                    let n = d.A.getCurrentUserActiveStream();
                    if (null == n) {
                        O.log(
                            `~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ${e}`,
                        ),
                            this.terminateHeartbeat(e, t);
                        return;
                    }
                    let r = (0, l._z)(n);
                    O.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, m.R2)({ questId: e, streamKey: r, applicationId: u });
                } else
                    O.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, m.R2)({ questId: e, applicationId: u });
                let c = this.calculateHeartbeatDurationMs(e),
                    _ = window.setTimeout(a, c);
                i.set(e, _);
            } else
                O.log(`~ initiateHeartbeat -> Quest ${e} is no longer actively progressing, terminating heartbeat`),
                    this.terminateHeartbeat(e, t);
        };
        O.log(`~ initiateHeartbeat -> Initiating heartbeat for Quest ${e}`), a();
    };
    terminateHeartbeat = (e, t) => {
        let n = this.heartbeats[t],
            r = g.A.quests,
            i = n.get(e);
        if (null != i) {
            O.log(`~ terminateHeartbeat -> Terminating heartbeat for questId: ${e}`),
                window.clearTimeout(i),
                n.delete(e);
            let t = r.get(e);
            null != t &&
                D(t) &&
                (O.log(`~ terminateHeartbeat -> Sending terminal heartbeat for questId: ${e}`),
                (0, m.R2)({ questId: e, terminal: !0 }));
        }
    };
    handleSendHeartbeatSuccess = (e) => {
        let { questId: t, userStatus: n } = e;
        if ((O.log(`~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ${t})`), null != n.completedAt))
            for (let e of (O.log(
                `~ handleSendHeartbeatSuccess -> Quest ${t} completed, terminating any heartbeats for it`,
            ),
            Object.keys(this.heartbeats)))
                this.terminateHeartbeat(t, e);
    };
    handleSendHeartbeatFailure = (e) => {
        let { questId: t } = e;
        O.log(`~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ${t}`);
    };
    syncHeartbeats(e, t, n) {
        for (let r of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            O.log(`~ syncHeartbeats -> syncing heartbeats for taskTypes: ${e.join(", ")} (triggered by: ${t})`),
        e)) {
            let e = this.heartbeats[r],
                t = this.getActivelyProgressingQuests(r);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, r);
            for (let [i, a] of t.entries())
                !e.has(i) && (null == n || n(g.A.quests.get(i))) && this.initiateHeartbeat(i, r, a.applicationId);
        }
    }
    getActivelyProgressingQuests(e) {
        switch (e) {
            case r.n.PLAY_ON_DESKTOP:
                return this.getActivelyProgressingPlayOnDesktopQuests();
            case r.n.STREAM_ON_DESKTOP:
                return this.getActivelyProgressingStreamOnDesktopQuests();
            case r.n.PLAY_ACTIVITY:
                return this.getActivelyProgressingActivityQuests();
            default:
                (0, h.xb)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = o.Ay.getRunningGames(),
            n = o.Ay.getRunningNonGames(),
            r = g.A.quests;
        O.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
        let i = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                i[e.id] = e;
                continue;
            }
            let t = o.Ay.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = _.A.getGameByName(e.name);
            if (n?.id != null) {
                i[n.id] = e;
                continue;
            }
        }
        for (let e of n) null != e.id && (i[e.id] = e);
        for (let t of Object.keys(i)) {
            let n = i[t];
            for (let i of r.values()) {
                let r = (0, S.pU)(i);
                if (!D(i) || null == r) continue;
                let a = r.find((e) => e === t);
                null != a ? e.set(i.id, { applicationId: a }) : w(r, n) && e.set(i.id, { applicationId: u.a7 });
            }
        }
        return (
            O.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = d.A.getCurrentUserActiveStream();
        if (null == t || f.Ay.countVoiceStatesForChannel(t.channelId) < N) return e;
        let n = d.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        O.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of g.A.quests.values()) {
            let n = (0, S.a2)(t);
            D(t) && null != n && n === r && e.set(t.id, { applicationId: r });
        }
        return (
            O.log(
                "~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingActivityQuests() {
        let e = new Map(),
            t = s.Ay.getSelfEmbeddedActivities(),
            n = t.size > 0;
        if ((O.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = g.A.quests;
        for (let n of t.keys())
            for (let t of r.values()) {
                let r = (0, S.vS)(t);
                D(t) && null != r && r === n && e.set(t.id, { applicationId: n });
            }
        for (let t of r.values()) D(t) && (0, v._e)(t) && n && e.set(t.id, { applicationId: C.ej });
        return (
            O.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
            e
        );
    }
    actions = {
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
            this.syncHeartbeats([r.n.PLAY_ON_DESKTOP, r.n.STREAM_ON_DESKTOP], "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS"),
        QUESTS_ENROLL_SUCCESS: () =>
            this.syncHeartbeats(
                [r.n.PLAY_ON_DESKTOP, r.n.STREAM_ON_DESKTOP, r.n.PLAY_ACTIVITY],
                "QUESTS_ENROLL_SUCCESS",
                (e) => !x(e),
            ),
        QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
        QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
        QUESTS_PREVIEW_UPDATE_SUCCESS: () =>
            this.syncHeartbeats(
                [r.n.PLAY_ON_DESKTOP, r.n.STREAM_ON_DESKTOP, r.n.PLAY_ACTIVITY],
                "QUESTS_PREVIEW_UPDATE_SUCCESS",
            ),
        RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([r.n.PLAY_ON_DESKTOP], "RUNNING_GAMES_CHANGE"),
        RUNNING_NON_GAMES_CHANGE: () => this.syncHeartbeats([r.n.PLAY_ON_DESKTOP], "RUNNING_NON_GAMES_CHANGE"),
        STREAM_START: () => this.syncHeartbeats([r.n.STREAM_ON_DESKTOP], "STREAM_START"),
        STREAM_CREATE: () => this.syncHeartbeats([r.n.STREAM_ON_DESKTOP], "STREAM_CREATE"),
        STREAM_CLOSE: () => this.syncHeartbeats([r.n.STREAM_ON_DESKTOP], "STREAM_CLOSE"),
        PASSIVE_UPDATE_V2: () => this.syncHeartbeats([r.n.STREAM_ON_DESKTOP], "PASSIVE_UPDATE_V2"),
        VOICE_STATE_UPDATES: () => this.syncHeartbeats([r.n.STREAM_ON_DESKTOP], "VOICE_STATE_UPDATES"),
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: (e) => {
            let { applicationId: t } = e;
            L(t);
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: () =>
            this.syncHeartbeats([r.n.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !x(e)),
        QUEST_APPLICATION_START_TIMER: (e) => {
            let { questId: t } = e;
            this.syncHeartbeats(
                [r.n.PLAY_ACTIVITY],
                "QUEST_APPLICATION_START_TIMER",
                (e) => null != e && e.id === t && x(e),
            );
        },
    };
}
let M = new P();
