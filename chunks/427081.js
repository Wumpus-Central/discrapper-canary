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
    O = n(937797),
    v = n(5881),
    I = n(46140);
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
let S = +p.Z.Millis.MINUTE,
    A = 2,
    C = +p.Z.Millis.SECOND,
    N = (0, v.T)({ location: I.dr.QUESTS_MANAGER });
function R(e) {
    return !(0, E.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function P(e) {
    for (let r of b.Z.quests.values()) {
        var t, n;
        if (
            null != r &&
            (0, E.Rt)(r) &&
            r.config.features.includes(i.S.ACTIVITY_QUEST_AUTO_ENROLLMENT) &&
            !(0, E.zi)(r) &&
            r.config.application.id === e &&
            r.config.application.id !== I.Ts &&
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
function D(e, t) {
    return null != t && e.config.application.id === c.eB && (0, u.le)(t);
}
function w(e) {
    return null != e && e.config.features.includes(i.S.MANUAL_HEARTBEAT_INITIALIZATION);
}
class x extends a.Z {
    syncHeartbeats(e, t, n) {
        for (let r of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            N.log(
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
        N.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t);
        let i = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                i[e.id] = e;
                continue;
            }
            let t = s.ZP.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = f.Z.getGameByName(e.name);
            if ((null == n ? void 0 : n.id) != null) {
                i[n.id] = e;
                continue;
            }
        }
        let a = (0, O.CD)(I.dr.QUESTS_MANAGER);
        for (let t of Object.keys(i)) {
            let o = i[t];
            for (let i of n.values()) {
                let n = i.config.taskConfigV2.tasks[r.X.PLAY_ON_DESKTOP];
                if (!R(i) || null == n) continue;
                let s = [i.config.application];
                a && null != n.applications && (s = n.applications);
                let l = s.find((e) => e.id === t);
                null != l ? e.set(i.id, { applicationId: l.id }) : D(i, o) && e.set(i.id, { applicationId: c.eB });
            }
        }
        return (
            N.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = d.Z.getCurrentUserActiveStream();
        if (null == t || _.ZP.countVoiceStatesForChannel(t.channelId) < A) return e;
        let n = d.Z.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        N.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of b.Z.quests.values())
            R(t) && (0, E.Dr)({ quest: t }) && t.config.application.id === r && e.set(t.id, { applicationId: r });
        return (
            N.log(
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
        if ((N.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = b.Z.quests;
        for (let n of t.keys())
            for (let t of r.values())
                R(t) && (0, E.pO)(t) && t.config.application.id === n && e.set(t.id, { applicationId: n });
        for (let t of r.values()) R(t) && (0, E.KM)(t) && n && e.set(t.id, { applicationId: I.Ts });
        return (
            N.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
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
                let t = b.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return S;
                let { progressSeconds: n, targetSeconds: i } = (0, E.il)(t, r.T.DESKTOP),
                    a = Math.max(0, (i - n) * p.Z.Millis.SECOND);
                return a <= S ? a + C : S;
            }),
            T(this, "initiateHeartbeat", (e, t, n) => {
                let i = this.heartbeats[t];
                if (i.has(e))
                    return void N.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
                let a = () => {
                    let o = this.getActivelyProgressingQuests(t);
                    if (o.has(e)) {
                        var s;
                        let c = o.get(e),
                            u = null != (s = null == c ? void 0 : c.applicationId) ? s : n;
                        if (t === r.X.STREAM_ON_DESKTOP) {
                            let n = d.Z.getCurrentUserActiveStream();
                            if (null == n) {
                                N.log(
                                    "~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(
                                        e,
                                    ),
                                ),
                                    this.terminateHeartbeat(e, t);
                                return;
                            }
                            let r = (0, l.V9)(n);
                            N.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.m0)({
                                    questId: e,
                                    streamKey: r,
                                    applicationId: u,
                                });
                        } else
                            N.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.m0)({
                                    questId: e,
                                    applicationId: u,
                                });
                        let f = this.calculateHeartbeatDurationMs(e),
                            _ = window.setTimeout(a, f);
                        i.set(e, _);
                    } else
                        N.log(
                            "~ initiateHeartbeat -> Quest ".concat(
                                e,
                                " is no longer actively progressing, terminating heartbeat",
                            ),
                        ),
                            this.terminateHeartbeat(e, t);
                };
                N.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a();
            }),
            T(this, "terminateHeartbeat", (e, t) => {
                let n = this.heartbeats[t],
                    r = b.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    N.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)),
                        window.clearTimeout(i),
                        n.delete(e);
                    let t = r.get(e);
                    null != t &&
                        R(t) &&
                        (N.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)),
                        (0, m.m0)({
                            questId: e,
                            terminal: !0,
                        }));
                }
            }),
            T(this, "handleSendHeartbeatSuccess", (e) => {
                let { questId: t, userStatus: n } = e;
                if (
                    (N.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")),
                    null != n.completedAt)
                )
                    for (let e of (N.log(
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
                N.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t));
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
                        (e) => !w(e),
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
                    P(t);
                },
                EMBEDDED_ACTIVITY_UPDATE_V2: () =>
                    this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !w(e)),
                QUEST_APPLICATION_START_TIMER: (e) => {
                    let { questId: t } = e;
                    this.syncHeartbeats(
                        [r.X.PLAY_ACTIVITY],
                        "QUEST_APPLICATION_START_TIMER",
                        (e) => null != e && e.id === t && w(e),
                    );
                },
            });
    }
}
let L = new x();
