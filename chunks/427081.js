n.d(t, { Z: () => w }), n(388685);
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
    m = n(509212),
    g = n(272008),
    E = n(569984),
    b = n(937797),
    y = n(5881),
    O = n(46140);
function v(e, t, n) {
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
let I = +p.Z.Millis.MINUTE,
    T = 2,
    S = +p.Z.Millis.SECOND,
    A = (0, y.T)({ location: O.dr.QUESTS_MANAGER });
function C(e) {
    return !(0, m.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function N(e, t) {
    return null != t && e.config.application.id === c.eB && (0, u.le)(t);
}
function R(e) {
    return null != e && e.config.features.includes(i.S.MANUAL_HEARTBEAT_INITIALIZATION);
}
class P extends a.Z {
    syncHeartbeats(e, t, n) {
        for (let r of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            A.log(
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
                (0, h.vE)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuests() {
        let e = new Map(),
            t = s.ZP.getRunningGames(),
            n = E.Z.quests;
        A.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t);
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
        let a = (0, b.CD)(O.dr.QUESTS_MANAGER);
        for (let t of Object.keys(i)) {
            let o = i[t];
            for (let i of n.values()) {
                let n = i.config.taskConfigV2.tasks[r.X.PLAY_ON_DESKTOP];
                if (!C(i) || null == n) continue;
                let s = [i.config.application];
                a && null != n.applications && (s = n.applications);
                let l = s.find((e) => e.id === t);
                null != l ? e.set(i.id, { applicationId: l.id }) : N(i, o) && e.set(i.id, { applicationId: c.eB });
            }
        }
        return (
            A.log(
                "~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ",
                Array.from(e.keys()),
            ),
            e
        );
    }
    getActivelyProgressingStreamOnDesktopQuests() {
        let e = new Map(),
            t = d.Z.getCurrentUserActiveStream();
        if (null == t || _.ZP.countVoiceStatesForChannel(t.channelId) < T) return e;
        let n = d.Z.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        A.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of E.Z.quests.values())
            C(t) && (0, m.Dr)({ quest: t }) && t.config.application.id === r && e.set(t.id, { applicationId: r });
        return (
            A.log(
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
        if ((A.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = E.Z.quests;
        for (let n of t.keys())
            for (let t of r.values())
                C(t) && (0, m.pO)(t) && t.config.application.id === n && e.set(t.id, { applicationId: n });
        for (let t of r.values()) C(t) && (0, m.KM)(t) && n && e.set(t.id, { applicationId: O.Ts });
        return (
            A.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", Array.from(e.keys())),
            e
        );
    }
    constructor(...e) {
        super(...e),
            v(this, "heartbeats", {
                [r.X.PLAY_ON_DESKTOP]: new Map(),
                [r.X.STREAM_ON_DESKTOP]: new Map(),
                [r.X.PLAY_ACTIVITY]: new Map(),
            }),
            v(this, "calculateHeartbeatDurationMs", (e) => {
                let t = E.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return I;
                let { progressSeconds: n, targetSeconds: i } = (0, m.il)(t, r.T.DESKTOP),
                    a = Math.max(0, (i - n) * p.Z.Millis.SECOND);
                return a <= I ? a + S : I;
            }),
            v(this, "initiateHeartbeat", (e, t, n) => {
                let i = this.heartbeats[t];
                if (i.has(e))
                    return void A.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
                let a = () => {
                    let o = this.getActivelyProgressingQuests(t);
                    if (o.has(e)) {
                        var s;
                        let c = o.get(e),
                            u = null != (s = null == c ? void 0 : c.applicationId) ? s : n;
                        if (t === r.X.STREAM_ON_DESKTOP) {
                            let n = d.Z.getCurrentUserActiveStream();
                            if (null == n) {
                                A.log(
                                    "~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(
                                        e,
                                    ),
                                ),
                                    this.terminateHeartbeat(e, t);
                                return;
                            }
                            let r = (0, l.V9)(n);
                            A.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, g.m0)({
                                    questId: e,
                                    streamKey: r,
                                    applicationId: u,
                                });
                        } else
                            A.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, g.m0)({
                                    questId: e,
                                    applicationId: u,
                                });
                        let f = this.calculateHeartbeatDurationMs(e),
                            _ = window.setTimeout(a, f);
                        i.set(e, _);
                    } else
                        A.log(
                            "~ initiateHeartbeat -> Quest ".concat(
                                e,
                                " is no longer actively progressing, terminating heartbeat",
                            ),
                        ),
                            this.terminateHeartbeat(e, t);
                };
                A.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), a();
            }),
            v(this, "terminateHeartbeat", (e, t) => {
                let n = this.heartbeats[t],
                    r = E.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    A.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)),
                        window.clearTimeout(i),
                        n.delete(e);
                    let t = r.get(e);
                    null != t &&
                        C(t) &&
                        (A.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)),
                        (0, g.m0)({
                            questId: e,
                            terminal: !0,
                        }));
                }
            }),
            v(this, "handleSendHeartbeatSuccess", (e) => {
                let { questId: t, userStatus: n } = e;
                if (
                    (A.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")),
                    null != n.completedAt)
                )
                    for (let e of (A.log(
                        "~ handleSendHeartbeatSuccess -> Quest ".concat(
                            t,
                            " completed, terminating any heartbeats for it",
                        ),
                    ),
                    Object.keys(this.heartbeats)))
                        this.terminateHeartbeat(t, e);
            }),
            v(this, "handleSendHeartbeatFailure", (e) => {
                let { questId: t } = e;
                A.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t));
            }),
            v(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP],
                        "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    ),
                QUESTS_ENROLL_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY],
                        "QUESTS_ENROLL_SUCCESS",
                        (e) => !R(e),
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
                EMBEDDED_ACTIVITY_UPDATE_V2: () =>
                    this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2", (e) => !R(e)),
                QUEST_APPLICATION_START_TIMER: (e) => {
                    let { questId: t } = e;
                    this.syncHeartbeats(
                        [r.X.PLAY_ACTIVITY],
                        "QUEST_APPLICATION_START_TIMER",
                        (e) => null != e && e.id === t && R(e),
                    );
                },
            });
    }
}
let w = new P();
