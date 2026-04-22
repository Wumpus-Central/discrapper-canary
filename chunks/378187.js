"use strict";
n.d(t, { A: () => U });
var r = n(412703),
    i = n(902173),
    s = n(439372),
    a = n(933958),
    o = n(15285),
    l = n(652896),
    u = n(227309),
    d = n(847521),
    c = n(616356),
    _ = n(760751),
    f = n(607567),
    E = n(927813),
    h = n(403362),
    p = n(829219),
    m = n(859703),
    g = n(341915),
    A = n(759366),
    I = n(245853),
    T = n(590202),
    S = n(851936),
    y = n(710969),
    N = n(639214),
    O = n(792620),
    R = n(814793),
    v = n(654487);
let C = +E.A.Millis.MINUTE,
    b = +E.A.Millis.SECOND,
    D = (0, S.L)({ location: v.rE.QUESTS_MANAGER });
function L(e) {
    return !(0, y.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function w(e) {
    let t = A.A.getState().autoEnroll,
        { enabled: n } = I.Ym.getConfig({ location: v.rE.QUEST_ACTIVITY_HEADER }),
        r = m.A.quests;
    for (let s of (0, N.jm)(r, e))
        if ((s.config.features.includes(i.L.ACTIVITY_QUEST_AUTO_ENROLLMENT) && !n) || (t && 1))
            return void (0, p.Oy)(s.id, {
                questContent: g.uF.RUNNING_ACTIVITY,
                questContentCTA: T.Cy.START_QUEST,
                sourceQuestContent: g.uF.RUNNING_ACTIVITY,
            });
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
        let t = m.A.quests.get(e);
        if (null == t || null == t.config || null == t.userStatus) return C;
        let { progressSeconds: n, targetSeconds: i } = (0, O.Yh)(t, r.o.DESKTOP),
            s = Math.max(0, (i - n) * E.A.Millis.SECOND);
        return s <= C ? s + b : C;
    };
    initiateHeartbeat = (e, t, n) => {
        let i = this.heartbeats[t];
        if (i.has(e)) return void D.log(`~ initiateHeartbeat -> Heartbeat already initiated for questId: ${e}`);
        let s = () => {
            let a = this.getActivelyProgressingQuests(t);
            if (a.has(e)) {
                let o = a.get(e),
                    u = o?.applicationId ?? n?.applicationId,
                    { enabled: d } = I.ev.getConfig({ location: v.rE.QUESTS_MANAGER }),
                    _ = d ? o?.executableFingerprint : void 0;
                if (t === r.n.STREAM_ON_DESKTOP) {
                    let n = c.A.getCurrentUserActiveStream();
                    if (null == n) {
                        D.log(
                            `~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ${e}`,
                        ),
                            this.terminateHeartbeat(e, t);
                        return;
                    }
                    let r = (0, l._z)(n);
                    D.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, p.R2)({ questId: e, streamKey: r, applicationId: u, executableFingerprint: _ });
                } else
                    D.log(`~ initiateHeartbeat -> Sending heartbeat for questId: ${e}`),
                        (0, p.R2)({ questId: e, applicationId: u, executableFingerprint: _ });
                let f = this.calculateHeartbeatDurationMs(e),
                    E = window.setTimeout(s, f);
                i.set(e, E);
            } else
                D.log(`~ initiateHeartbeat -> Quest ${e} is no longer actively progressing, terminating heartbeat`),
                    this.terminateHeartbeat(e, t);
        };
        D.log(`~ initiateHeartbeat -> Initiating heartbeat for Quest ${e}`), s();
    };
    terminateHeartbeat = (e, t) => {
        let n = this.heartbeats[t],
            r = m.A.quests,
            i = n.get(e);
        if (null != i) {
            D.log(`~ terminateHeartbeat -> Terminating heartbeat for questId: ${e}`),
                window.clearTimeout(i),
                n.delete(e);
            let t = r.get(e);
            null != t &&
                L(t) &&
                (D.log(`~ terminateHeartbeat -> Sending terminal heartbeat for questId: ${e}`),
                (0, p.R2)({ questId: e, terminal: !0 }));
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
                !e.has(i) && (null == n || n(m.A.quests.get(i))) && this.initiateHeartbeat(i, r, s);
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
            r = m.A.quests;
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
            let n = _.A.findGame(e);
            if (n?.id != null) {
                i[n.id] = e;
                continue;
            }
        }
        for (let e of n) null != e.id && (i[e.id] = e);
        for (let t of Object.keys(i)) {
            let n = i[t];
            for (let i of r.values()) {
                let r = (0, O.pU)(i);
                if (!L(i) || null == r) continue;
                let s = r.find((e) => e === t);
                if (null != s) e.set(i.id, { applicationId: s, executableFingerprint: n.executableFingerprint });
                else
                    null != n &&
                        r.some((e) => e === u.a7) &&
                        (0, d.n1)(n) &&
                        e.set(i.id, { applicationId: u.a7, executableFingerprint: n.executableFingerprint });
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
            t = c.A.getCurrentUserActiveStream();
        if (null == t || 2 > f.Ay.countVoiceStatesForChannel(t.channelId)) return e;
        let n = c.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        D.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of m.A.quests.values()) {
            let n = (0, O.a2)(t);
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
        let r = m.A.quests;
        for (let n of t.keys())
            for (let t of r.values()) {
                let r = (0, O.vS)(t);
                L(t) && null != r && r === n && e.set(t.id, { applicationId: n });
            }
        for (let t of r.values()) L(t) && (0, R._e)(t) && e.set(t.id, { applicationId: v.ej });
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
let U = new P();
