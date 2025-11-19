n.d(t, { Z: () => L }), n(388685);
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
    _ = n(938475),
    p = n(70956),
    h = n(823379),
    m = n(22095),
    g = n(617136),
    E = n(509212),
    b = n(569984),
    y = n(497505),
    O = n(5881),
    v = n(46140);
function I(e, t, n) {
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
let T = +p.Z.Millis.MINUTE,
    S = 2,
    A = +p.Z.Millis.SECOND,
    C = (0, O.T)({ location: v.dr.QUESTS_MANAGER });
function N(e) {
    return !(0, E.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function R(e) {
    for (let r of b.Z.quests.values()) {
        var t, n;
        let a = (0, E.Mo)(r);
        if (
            null != r &&
            (0, E.Rt)(r) &&
            r.config.features.includes(i.S.ACTIVITY_QUEST_AUTO_ENROLLMENT) &&
            !(0, E.zi)(r) &&
            a === e &&
            a !== v.Ts &&
            (null == (t = r.userStatus) ? void 0 : t.completedAt) == null &&
            (null == (n = r.userStatus) ? void 0 : n.enrolledAt) == null
        )
            return void (0, m.AH)(r.id, {
                questContent: y.jn.RUNNING_ACTIVITY,
                questContentCTA: g.jZ.ACCEPT_QUEST,
                sourceQuestContent: y.jn.RUNNING_ACTIVITY,
            });
    }
}
function P(e, t) {
    return null != t && e.some((e) => e === c.eB) && (0, u.le)(t);
}
function D(e) {
    return null != e && e.config.features.includes(i.S.MANUAL_HEARTBEAT_INITIALIZATION);
}
class w extends a.Z {
    syncHeartbeats(e, t, n) {
        for (let r of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            C.log(
                "~ syncHeartbeats -> syncing heartbeats for taskTypes: "
                    .concat(e.join(", "), " (triggered by: ")
                    .concat(t, ")"),
            ),
        e)) {
            let e = this.heartbeats[r],
                t = this.getActivelyProgressingQuests(r);
            for (let n of new Set(e.keys())) t.has(n) || this.terminateHeartbeat(n, r);
            for (let [i, a] of t.entries())
                !e.has(i) && (null == n || n(b.Z.quests.get(i))) && this.initiateHeartbeat(i, r, a.applicationId);
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
                (0, h.vE)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = s.ZP.getRunningGames(),
            n = b.Z.quests;
        C.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t);
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
                let n = (0, E.vj)(r);
                if (!N(r) || null == n) continue;
                let a = n.find((e) => e === t);
                null != a ? e.set(r.id, { applicationId: a }) : P(n, i) && e.set(r.id, { applicationId: c.eB });
            }
        }
        return (
            C.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = d.Z.getCurrentUserActiveStream();
        if (null == t || _.ZP.countVoiceStatesForChannel(t.channelId) < S) return e;
        let n = d.Z.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        C.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of b.Z.quests.values()) {
            let n = (0, E.DR)(t);
            N(t) && null != n && n === r && e.set(t.id, { applicationId: r });
        }
        return (
            C.log(
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
        if ((C.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = b.Z.quests;
        for (let n of t.keys())
            for (let t of r.values()) {
                let r = (0, E.Mo)(t);
                N(t) && null != r && r === n && e.set(t.id, { applicationId: n });
            }
        for (let t of r.values()) N(t) && (0, E.KM)(t) && n && e.set(t.id, { applicationId: v.Ts });
        return (
            C.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
            e
        );
    }
    constructor(...e) {
        super(...e),
            I(this, "heartbeats", {
                [r.X.PLAY_ON_DESKTOP]: new Map(),
                [r.X.STREAM_ON_DESKTOP]: new Map(),
                [r.X.PLAY_ACTIVITY]: new Map(),
            }),
            I(this, "calculateHeartbeatDurationMs", (e) => {
                let t = b.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return T;
                let { progressSeconds: n, targetSeconds: i } = (0, E.il)(t, r.T.DESKTOP),
                    a = Math.max(0, (i - n) * p.Z.Millis.SECOND);
                return a <= T ? a + A : T;
            }),
            I(this, "initiateHeartbeat", (e, t, n) => {
                let i = this.heartbeats[t];
                if (i.has(e))
                    return void C.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
                let a = () => {
                    let o = this.getActivelyProgressingQuests(t);
                    if (o.has(e)) {
                        var s;
                        let c = o.get(e),
                            u = null != (s = null == c ? void 0 : c.applicationId) ? s : n;
                        if (t === r.X.STREAM_ON_DESKTOP) {
                            let n = d.Z.getCurrentUserActiveStream();
                            if (null == n) {
                                C.log(
                                    "~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(
                                        e,
                                    ),
                                ),
                                    this.terminateHeartbeat(e, t);
                                return;
                            }
                            let r = (0, l.V9)(n);
                            C.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.m0)({
                                    questId: e,
                                    streamKey: r,
                                    applicationId: u,
                                });
                        } else
                            C.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.m0)({
                                    questId: e,
                                    applicationId: u,
                                });
                        let f = this.calculateHeartbeatDurationMs(e),
                            _ = window.setTimeout(a, f);
                        i.set(e, _);
                    } else
                        C.log(
                            "~ initiateHeartbeat -> Quest ".concat(
                                e,
                                " is no longer actively progressing, terminating heartbeat",
                            ),
                        ),
                            this.terminateHeartbeat(e, t);
                };
                C.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a();
            }),
            I(this, "terminateHeartbeat", (e, t) => {
                let n = this.heartbeats[t],
                    r = b.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    C.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)),
                        window.clearTimeout(i),
                        n.delete(e);
                    let t = r.get(e);
                    null != t &&
                        N(t) &&
                        (C.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)),
                        (0, m.m0)({
                            questId: e,
                            terminal: !0,
                        }));
                }
            }),
            I(this, "handleSendHeartbeatSuccess", (e) => {
                let { questId: t, userStatus: n } = e;
                if (
                    (C.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")),
                    null != n.completedAt)
                )
                    for (let e of (C.log(
                        "~ handleSendHeartbeatSuccess -> Quest ".concat(
                            t,
                            " completed, terminating any heartbeats for it",
                        ),
                    ),
                    Object.keys(this.heartbeats)))
                        this.terminateHeartbeat(t, e);
            }),
            I(this, "handleSendHeartbeatFailure", (e) => {
                let { questId: t } = e;
                C.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t));
            }),
            I(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP],
                        "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    ),
                QUESTS_ENROLL_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY],
                        "QUESTS_ENROLL_SUCCESS",
                        (e) => !D(e),
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
                    R(t);
                },
                EMBEDDED_ACTIVITY_UPDATE_V2: () =>
                    this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !D(e)),
                QUEST_APPLICATION_START_TIMER: (e) => {
                    let { questId: t } = e;
                    this.syncHeartbeats(
                        [r.X.PLAY_ACTIVITY],
                        "QUEST_APPLICATION_START_TIMER",
                        (e) => null != e && e.id === t && D(e),
                    );
                },
            });
    }
}
let L = new w();
