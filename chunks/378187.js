"use strict";
n.d(t, { A: () => k });
var r = n(412703),
    i = n(902173),
    s = n(439372),
    a = n(933958),
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
    E = n(859703),
    g = n(341915),
    A = n(759366),
    I = n(943849),
    T = n(590202),
    S = n(710969),
    y = n(639214),
    v = n(792620),
    N = n(814793),
    C = n(654487);
let b = +p.A.Millis.MINUTE,
    R = 2,
    O = +p.A.Millis.SECOND,
    D = (0, I.L)({ location: C.rE.QUESTS_MANAGER });
function L(e) {
    return !(0, S.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function w(e) {
    let t = A.A.getState().autoEnroll,
        n = E.A.quests;
    for (let r of (0, y.jm)(n, e))
        if (r.config.features.includes(i.L.ACTIVITY_QUEST_AUTO_ENROLLMENT) || (t && 1))
            return void (0, m.Oy)(r.id, {
                questContent: g.uF.RUNNING_ACTIVITY,
                questContentCTA: T.Cy.START_QUEST,
                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
            });
}
function x(e, t) {
    return null != t && e.some((e) => e === u.a7) && (0, c.n1)(t);
}
function M(e) {
    return null != e && e.config.features.includes(i.L.MANUAL_HEARTBEAT_INITIALIZATION);
}
class P extends s.A {
    heartbeats = {
        [r.n.PLAY_ON_DESKTOP]: new Map(),
        [r.n.STREAM_ON_DESKTOP]: new Map(),
        [r.n.PLAY_ACTIVITY]: new Map(),
    };
    calculateHeartbeatDurationMs = (e) => {
        let t = E.A.quests.get(e);
        if (null == t || null == t.config || null == t.userStatus) return b;
        let { progressSeconds: n, targetSeconds: i } = (0, v.Yh)(t, r.o.DESKTOP),
            s = Math.max(0, (i - n) * p.A.Millis.SECOND);
        return s <= b ? s + O : b;
    };
    initiateHeartbeat = (e, t, n) => {
        let i = this.heartbeats[t];
        if (i.has(e)) return void D.log(`~ initiateHeartbeat -> Heartbeat already initiated for questId: ${e}`);
        let s = () => {
            let a = this.getActivelyProgressingQuests(t);
            if (a.has(e)) {
                let o = a.get(e),
                    u = o?.applicationId ?? n;
                if (t === r.n.STREAM_ON_DESKTOP) {
                    let n = d.A.getCurrentUserActiveStream();
                    if (null == n) {
                        D.log(
                            `~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ${e}`,
                        ),
                            this.terminateHeartbeat(e, t);
                        return;
                    }
                    let r = (0, l._z)(n);
                    D.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, m.R2)({ questId: e, streamKey: r, applicationId: u });
                } else
                    D.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, m.R2)({ questId: e, applicationId: u });
                let c = this.calculateHeartbeatDurationMs(e),
                    _ = window.setTimeout(s, c);
                i.set(e, _);
            } else
                D.log(`~ initiateHeartbeat -> Quest ${e} is no longer actively progressing, terminating heartbeat`),
                    this.terminateHeartbeat(e, t);
        };
        D.log(`~ initiateHeartbeat -> Initiating heartbeat for Quest ${e}`), s();
    };
    terminateHeartbeat = (e, t) => {
        let n = this.heartbeats[t],
            r = E.A.quests,
            i = n.get(e);
        if (null != i) {
            D.log(`~ terminateHeartbeat -> Terminating heartbeat for questId: ${e}`),
                window.clearTimeout(i),
                n.delete(e);
            let t = r.get(e);
            null != t &&
                L(t) &&
                (D.log(`~ terminateHeartbeat -> Sending terminal heartbeat for questId: ${e}`),
                (0, m.R2)({ questId: e, terminal: !0 }));
        }
    };
    handleSendHeartbeatSuccess = (e) => {
        let { questId: t, userStatus: n } = e;
        if ((D.log(`~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ${t})`), null != n.completedAt))
            for (let e of (D.log(
                `~ handleSendHeartbeatSuccess -> Quest ${t} completed, terminating any heartbeats for it`,
            ),
            Object.keys(this.heartbeats)))
                this.terminateHeartbeat(t, e);
    };
    handleSendHeartbeatFailure = (e) => {
        let { questId: t } = e;
        D.log(`~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ${t}`);
    };
    syncHeartbeats(e, t, n) {
        for (let r of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            D.log(`~ syncHeartbeats -> syncing heartbeats for taskTypes: ${e.join(", ")} (triggered by: ${t})`),
        e)) {
            let e = this.heartbeats[r],
                t = this.getActivelyProgressingQuests(r);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, r);
            for (let [i, s] of t.entries())
                !e.has(i) && (null == n || n(E.A.quests.get(i))) && this.initiateHeartbeat(i, r, s.applicationId);
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
            r = E.A.quests;
        D.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
        let i = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                i[e.id] = e;
                continue;
            }
            let t = o.Ay.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = _.A.getGameByName_DEPRECATED_DO_NOT_USE(e.name);
            if (n?.id != null) {
                i[n.id] = e;
                continue;
            }
        }
        for (let e of n) null != e.id && (i[e.id] = e);
        for (let t of Object.keys(i)) {
            let n = i[t];
            for (let i of r.values()) {
                let r = (0, v.pU)(i);
                if (!L(i) || null == r) continue;
                let s = r.find((e) => e === t);
                null != s ? e.set(i.id, { applicationId: s }) : x(r, n) && e.set(i.id, { applicationId: u.a7 });
            }
        }
        return (
            D.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = d.A.getCurrentUserActiveStream();
        if (null == t || f.Ay.countVoiceStatesForChannel(t.channelId) < R) return e;
        let n = d.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        D.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of E.A.quests.values()) {
            let n = (0, v.a2)(t);
            L(t) && null != n && n === r && e.set(t.id, { applicationId: r });
        }
        return (
            D.log(
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
        if ((D.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = E.A.quests;
        for (let n of t.keys())
            for (let t of r.values()) {
                let r = (0, v.vS)(t);
                L(t) && null != r && r === n && e.set(t.id, { applicationId: n });
            }
        for (let t of r.values()) L(t) && (0, N._e)(t) && n && e.set(t.id, { applicationId: C.ej });
        return (
            D.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
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
                (e) => !M(e),
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
            w(t);
        },
        FRAME_LAUNCH: (e) => {
            let { applicationId: t } = e;
            w(t);
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: () =>
            this.syncHeartbeats([r.n.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !M(e)),
        QUEST_APPLICATION_START_TIMER: (e) => {
            let { questId: t } = e;
            this.syncHeartbeats(
                [r.n.PLAY_ACTIVITY],
                "QUEST_APPLICATION_START_TIMER",
                (e) => null != e && e.id === t && M(e),
            );
        },
    };
}
let k = new P();
