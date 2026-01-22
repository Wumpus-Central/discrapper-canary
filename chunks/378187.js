n.d(t, { A: () => M }), n(896048);
var r = n(412703),
    i = n(902173),
    a = n(439372),
    s = n(933958),
    o = n(15285),
    l = n(652896),
    c = n(227309),
    u = n(847521),
    d = n(616356),
    f = n(760751),
    p = n(607567),
    _ = n(927813),
    h = n(403362),
    m = n(829219),
    g = n(216456),
    E = n(859703),
    b = n(341915),
    y = n(943849),
    O = n(710969),
    A = n(639214),
    v = n(792620),
    S = n(814793),
    I = n(654487);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let C = +_.A.Millis.MINUTE,
    N = 2,
    R = +_.A.Millis.SECOND,
    w = (0, y.L)({ location: I.rE.QUESTS_MANAGER });
function P(e) {
    return !(0, O.Ic)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function D(e) {
    let t = E.A.quests;
    for (let n of (0, A.jm)(t, e))
        if (n.config.features.includes(i.L.ACTIVITY_QUEST_AUTO_ENROLLMENT))
            return void (0, m.Oy)(n.id, {
                questContent: b.uF.RUNNING_ACTIVITY,
                questContentCTA: g.Cy.ACCEPT_QUEST,
                sourceQuestContent: b.uF.RUNNING_ACTIVITY,
            });
}
function x(e, t) {
    return null != t && e.some((e) => e === c.a7) && (0, u.n1)(t);
}
function L(e) {
    return null != e && e.config.features.includes(i.L.MANUAL_HEARTBEAT_INITIALIZATION);
}
class j extends a.A {
    syncHeartbeats(e, t, n) {
        for (let r of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            w.log(
                "~ syncHeartbeats -> syncing heartbeats for taskTypes: "
                    .concat(e.join(", "), " (triggered by: ")
                    .concat(t, ")"),
            ),
        e)) {
            let e = this.heartbeats[r],
                t = this.getActivelyProgressingQuests(r);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, r);
            for (let [i, a] of t.entries())
                !e.has(i) && (null == n || n(E.A.quests.get(i))) && this.initiateHeartbeat(i, r, a.applicationId);
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
        w.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t, "Running non-games: ", n);
        let i = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                i[e.id] = e;
                continue;
            }
            let t = o.Ay.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = f.A.getGameByName(e.name);
            if ((null == n ? void 0 : n.id) != null) {
                i[n.id] = e;
                continue;
            }
        }
        for (let e of n) null != e.id && (i[e.id] = e);
        for (let t of Object.keys(i)) {
            let n = i[t];
            for (let i of r.values()) {
                let r = (0, v.pU)(i);
                if (!P(i) || null == r) continue;
                let a = r.find((e) => e === t);
                null != a ? e.set(i.id, { applicationId: a }) : x(r, n) && e.set(i.id, { applicationId: c.a7 });
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
            t = d.A.getCurrentUserActiveStream();
        if (null == t || p.Ay.countVoiceStatesForChannel(t.channelId) < N) return e;
        let n = d.A.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        w.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of E.A.quests.values()) {
            let n = (0, v.a2)(t);
            P(t) && null != n && n === r && e.set(t.id, { applicationId: r });
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
            t = s.Ay.getSelfEmbeddedActivities(),
            n = t.size > 0;
        if ((w.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = E.A.quests;
        for (let n of t.keys())
            for (let t of r.values()) {
                let r = (0, v.vS)(t);
                P(t) && null != r && r === n && e.set(t.id, { applicationId: n });
            }
        for (let t of r.values()) P(t) && (0, S._e)(t) && n && e.set(t.id, { applicationId: I.ej });
        return (
            w.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
            e
        );
    }
    constructor(...e) {
        super(...e),
            T(this, "heartbeats", {
                [r.n.PLAY_ON_DESKTOP]: new Map(),
                [r.n.STREAM_ON_DESKTOP]: new Map(),
                [r.n.PLAY_ACTIVITY]: new Map(),
            }),
            T(this, "calculateHeartbeatDurationMs", (e) => {
                let t = E.A.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return C;
                let { progressSeconds: n, targetSeconds: i } = (0, v.Yh)(t, r.o.DESKTOP),
                    a = Math.max(0, (i - n) * _.A.Millis.SECOND);
                return a <= C ? a + R : C;
            }),
            T(this, "initiateHeartbeat", (e, t, n) => {
                let i = this.heartbeats[t];
                if (i.has(e))
                    return void w.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
                let a = () => {
                    let s = this.getActivelyProgressingQuests(t);
                    if (s.has(e)) {
                        var o;
                        let c = s.get(e),
                            u = null != (o = null == c ? void 0 : c.applicationId) ? o : n;
                        if (t === r.n.STREAM_ON_DESKTOP) {
                            let n = d.A.getCurrentUserActiveStream();
                            if (null == n) {
                                w.log(
                                    "~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(
                                        e,
                                    ),
                                ),
                                    this.terminateHeartbeat(e, t);
                                return;
                            }
                            let r = (0, l._z)(n);
                            w.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.R2)({
                                    questId: e,
                                    streamKey: r,
                                    applicationId: u,
                                });
                        } else
                            w.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.R2)({
                                    questId: e,
                                    applicationId: u,
                                });
                        let f = this.calculateHeartbeatDurationMs(e),
                            p = window.setTimeout(a, f);
                        i.set(e, p);
                    } else
                        w.log(
                            "~ initiateHeartbeat -> Quest ".concat(
                                e,
                                " is no longer actively progressing, terminating heartbeat",
                            ),
                        ),
                            this.terminateHeartbeat(e, t);
                };
                w.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a();
            }),
            T(this, "terminateHeartbeat", (e, t) => {
                let n = this.heartbeats[t],
                    r = E.A.quests,
                    i = n.get(e);
                if (null != i) {
                    w.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)),
                        window.clearTimeout(i),
                        n.delete(e);
                    let t = r.get(e);
                    null != t &&
                        P(t) &&
                        (w.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)),
                        (0, m.R2)({
                            questId: e,
                            terminal: !0,
                        }));
                }
            }),
            T(this, "handleSendHeartbeatSuccess", (e) => {
                let { questId: t, userStatus: n } = e;
                if (
                    (w.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")),
                    null != n.completedAt)
                )
                    for (let e of (w.log(
                        "~ handleSendHeartbeatSuccess -> Quest ".concat(
                            t,
                            " completed, terminating any heartbeats for it",
                        ),
                    ),
                    Object.keys(this.heartbeats)))
                        this.terminateHeartbeat(t, e);
            }),
            T(this, "handleSendHeartbeatFailure", (e) => {
                let { questId: t } = e;
                w.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t));
            }),
            T(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.n.PLAY_ON_DESKTOP, r.n.STREAM_ON_DESKTOP],
                        "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    ),
                QUESTS_ENROLL_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.n.PLAY_ON_DESKTOP, r.n.STREAM_ON_DESKTOP, r.n.PLAY_ACTIVITY],
                        "QUESTS_ENROLL_SUCCESS",
                        (e) => !L(e),
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
                    D(t);
                },
                EMBEDDED_ACTIVITY_UPDATE_V2: () =>
                    this.syncHeartbeats([r.n.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !L(e)),
                QUEST_APPLICATION_START_TIMER: (e) => {
                    let { questId: t } = e;
                    this.syncHeartbeats(
                        [r.n.PLAY_ACTIVITY],
                        "QUEST_APPLICATION_START_TIMER",
                        (e) => null != e && e.id === t && L(e),
                    );
                },
            });
    }
}
let M = new j();
