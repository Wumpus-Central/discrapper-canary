n.d(t, { Z: () => j }), n(388685);
var r = n(754700),
    i = n(670081),
    a = n(147913),
    o = n(317381),
    s = n(594190),
    l = n(569545),
    c = n(817788),
    u = n(509003),
    d = n(199902),
    f = n(77498),
    p = n(938475),
    _ = n(70956),
    m = n(823379),
    h = n(22095),
    g = n(617136),
    E = n(616022),
    b = n(49436),
    y = n(535584),
    O = n(862657),
    v = n(254579),
    S = n(283689),
    I = n(324805);
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
let A = +_.Z.Millis.MINUTE,
    C = 2,
    N = +_.Z.Millis.SECOND,
    P = (0, y.T)({ location: I.dr.QUESTS_MANAGER });
function R(e) {
    return !(0, O.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function w(e) {
    for (let r of E.Z.quests.values()) {
        var t, n;
        let a = (0, v.Mo)(r);
        if (
            null != r &&
            (0, S.Rt)(r) &&
            r.config.features.includes(i.S.ACTIVITY_QUEST_AUTO_ENROLLMENT) &&
            !(0, O.zi)(r) &&
            a === e &&
            a !== I.Ts &&
            (null == (t = r.userStatus) ? void 0 : t.completedAt) == null &&
            (null == (n = r.userStatus) ? void 0 : n.enrolledAt) == null
        )
            return void (0, h.AH)(r.id, {
                questContent: b.jn.RUNNING_ACTIVITY,
                questContentCTA: g.jZ.ACCEPT_QUEST,
                sourceQuestContent: b.jn.RUNNING_ACTIVITY,
            });
    }
}
function D(e, t) {
    return null != t && e.some((e) => e === c.eB) && (0, u.le)(t);
}
function x(e) {
    return null != e && e.config.features.includes(i.S.MANUAL_HEARTBEAT_INITIALIZATION);
}
class L extends a.Z {
    syncHeartbeats(e, t, n) {
        for (let r of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            P.log(
                "~ syncHeartbeats -> syncing heartbeats for taskTypes: "
                    .concat(e.join(", "), " (triggered by: ")
                    .concat(t, ")"),
            ),
        e)) {
            let e = this.heartbeats[r],
                t = this.getActivelyProgressingQuests(r);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, r);
            for (let [i, a] of t.entries())
                !e.has(i) && (null == n || n(E.Z.quests.get(i))) && this.initiateHeartbeat(i, r, a.applicationId);
        }
    }
    getActivelyProgressingQuests(e) {
        switch (e) {
            case r.X.PLAY_ON_DESKTOP:
                return this.getActivelyProgressingPlayOnDesktopQuests();
            case r.X.STREAM_ON_DESKTOP:
                return this.getActivelyProgressingStreamOnDesktopQuests();
            case r.X.PLAY_ACTIVITY:
                return this.getActivelyProgressingActivityQuests();
            default:
                (0, m.vE)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = s.ZP.getRunningGames(),
            n = E.Z.quests;
        P.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t);
        let r = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                r[e.id] = e;
                continue;
            }
            let t = s.ZP.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = f.Z.getGameByName(e.name);
            if ((null == n ? void 0 : n.id) != null) {
                r[n.id] = e;
                continue;
            }
        }
        for (let t of Object.keys(r)) {
            let i = r[t];
            for (let r of n.values()) {
                let n = (0, v.vj)(r);
                if (!R(r) || null == n) continue;
                let a = n.find((e) => e === t);
                null != a ? e.set(r.id, { applicationId: a }) : D(n, i) && e.set(r.id, { applicationId: c.eB });
            }
        }
        return (
            P.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = d.Z.getCurrentUserActiveStream();
        if (null == t || p.ZP.countVoiceStatesForChannel(t.channelId) < C) return e;
        let n = d.Z.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        P.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of E.Z.quests.values()) {
            let n = (0, v.DR)(t);
            R(t) && null != n && n === r && e.set(t.id, { applicationId: r });
        }
        return (
            P.log(
                "~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingActivityQuests() {
        let e = new Map(),
            t = o.ZP.getSelfEmbeddedActivities(),
            n = t.size > 0;
        if ((P.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = E.Z.quests;
        for (let n of t.keys())
            for (let t of r.values()) {
                let r = (0, v.Mo)(t);
                R(t) && null != r && r === n && e.set(t.id, { applicationId: n });
            }
        for (let t of r.values()) R(t) && (0, S.KM)(t) && n && e.set(t.id, { applicationId: I.Ts });
        return (
            P.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
            e
        );
    }
    constructor(...e) {
        super(...e),
            T(this, "heartbeats", {
                [r.X.PLAY_ON_DESKTOP]: new Map(),
                [r.X.STREAM_ON_DESKTOP]: new Map(),
                [r.X.PLAY_ACTIVITY]: new Map(),
            }),
            T(this, "calculateHeartbeatDurationMs", (e) => {
                let t = E.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return A;
                let { progressSeconds: n, targetSeconds: i } = (0, v.il)(t, r.T.DESKTOP),
                    a = Math.max(0, (i - n) * _.Z.Millis.SECOND);
                return a <= A ? a + N : A;
            }),
            T(this, "initiateHeartbeat", (e, t, n) => {
                let i = this.heartbeats[t];
                if (i.has(e))
                    return void P.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
                let a = () => {
                    let o = this.getActivelyProgressingQuests(t);
                    if (o.has(e)) {
                        var s;
                        let c = o.get(e),
                            u = null != (s = null == c ? void 0 : c.applicationId) ? s : n;
                        if (t === r.X.STREAM_ON_DESKTOP) {
                            let n = d.Z.getCurrentUserActiveStream();
                            if (null == n) {
                                P.log(
                                    "~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(
                                        e,
                                    ),
                                ),
                                    this.terminateHeartbeat(e, t);
                                return;
                            }
                            let r = (0, l.V9)(n);
                            P.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, h.m0)({
                                    questId: e,
                                    streamKey: r,
                                    applicationId: u,
                                });
                        } else
                            P.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, h.m0)({
                                    questId: e,
                                    applicationId: u,
                                });
                        let f = this.calculateHeartbeatDurationMs(e),
                            p = window.setTimeout(a, f);
                        i.set(e, p);
                    } else
                        P.log(
                            "~ initiateHeartbeat -> Quest ".concat(
                                e,
                                " is no longer actively progressing, terminating heartbeat",
                            ),
                        ),
                            this.terminateHeartbeat(e, t);
                };
                P.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a();
            }),
            T(this, "terminateHeartbeat", (e, t) => {
                let n = this.heartbeats[t],
                    r = E.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    P.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)),
                        window.clearTimeout(i),
                        n.delete(e);
                    let t = r.get(e);
                    null != t &&
                        R(t) &&
                        (P.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)),
                        (0, h.m0)({
                            questId: e,
                            terminal: !0,
                        }));
                }
            }),
            T(this, "handleSendHeartbeatSuccess", (e) => {
                let { questId: t, userStatus: n } = e;
                if (
                    (P.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")),
                    null != n.completedAt)
                )
                    for (let e of (P.log(
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
                P.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t));
            }),
            T(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP],
                        "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    ),
                QUESTS_ENROLL_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY],
                        "QUESTS_ENROLL_SUCCESS",
                        (e) => !x(e),
                    ),
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                QUESTS_PREVIEW_UPDATE_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY],
                        "QUESTS_PREVIEW_UPDATE_SUCCESS",
                    ),
                RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP], "RUNNING_GAMES_CHANGE"),
                STREAM_START: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_START"),
                STREAM_CREATE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CREATE"),
                STREAM_CLOSE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "STREAM_CLOSE"),
                PASSIVE_UPDATE_V2: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "PASSIVE_UPDATE_V2"),
                VOICE_STATE_UPDATES: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], "VOICE_STATE_UPDATES"),
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: (e) => {
                    let { applicationId: t } = e;
                    w(t);
                },
                EMBEDDED_ACTIVITY_UPDATE_V2: () =>
                    this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !x(e)),
                QUEST_APPLICATION_START_TIMER: (e) => {
                    let { questId: t } = e;
                    this.syncHeartbeats(
                        [r.X.PLAY_ACTIVITY],
                        "QUEST_APPLICATION_START_TIMER",
                        (e) => null != e && e.id === t && x(e),
                    );
                },
            });
    }
}
let j = new L();
