n.d(t, { Z: () => C }), n(388685);
var r = n(754700),
    i = n(147913),
    o = n(317381),
    a = n(594190),
    s = n(569545),
    l = n(817788),
    c = n(509003),
    u = n(199902),
    d = n(77498),
    f = n(938475),
    _ = n(70956),
    p = n(823379),
    h = n(509212),
    m = n(272008),
    g = n(569984),
    E = n(5881),
    b = n(46140);
function y(e, t, n) {
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
let O = +_.Z.Millis.MINUTE,
    v = 2,
    I = +_.Z.Millis.SECOND,
    T = (0, E.T)({ location: b.dr.QUESTS_MANAGER });
function S(e) {
    return !(0, h.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function A(e, t) {
    return null != t && e.config.application.id === l.eB && (0, c.le)(t);
}
class N extends i.Z {
    syncHeartbeats(e, t) {
        for (let n of ("VOICE_STATE_UPDATES" !== t &&
            "PASSIVE_UPDATE_V2" !== t &&
            T.log(
                "~ syncHeartbeats -> syncing heartbeats for taskTypes: "
                    .concat(e.join(", "), " (triggered by: ")
                    .concat(t, ")"),
            ),
        e)) {
            let e = this.heartbeats[n],
                t = this.getActivelyProgressingQuestIds(n);
            for (let r of new Set(Object.keys(e))) t.has(r) || this.terminateHeartbeat(r, n);
            for (let r of t) e.has(r) || this.initiateHeartbeat(r, n);
        }
    }
    getActivelyProgressingQuestIds(e) {
        switch (e) {
            case r.X.PLAY_ON_DESKTOP:
                return this.getActivelyProgressingPlayOnDesktopQuestIds();
            case r.X.STREAM_ON_DESKTOP:
                return this.getActivelyProgressingStreamOnDesktopQuestIds();
            case r.X.PLAY_ACTIVITY:
                return this.getActivelyProgressingActivityQuestIds();
            default:
                (0, p.vE)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuestIds() {
        let e = new Set(),
            t = a.ZP.getRunningGames(),
            n = g.Z.quests;
        T.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ", t);
        let r = {};
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                r[e.id] = e;
                continue;
            }
            let t = a.ZP.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = d.Z.getGameByName(e.name);
            if ((null == n ? void 0 : n.id) != null) {
                r[n.id] = e;
                continue;
            }
        }
        for (let t of Object.keys(r)) {
            let i = r[t];
            for (let r of n.values())
                S(r) && (0, h.Nj)({ quest: r }) && (r.config.application.id === t || A(r, i)) && e.add(r.id);
        }
        return T.log("~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ", e), e;
    }
    getActivelyProgressingStreamOnDesktopQuestIds() {
        let e = new Set(),
            t = u.Z.getCurrentUserActiveStream();
        if (null == t || f.ZP.countVoiceStatesForChannel(t.channelId) < v) return e;
        let n = u.Z.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        T.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ", n);
        let r = n.id;
        if (null == r) return e;
        for (let t of g.Z.quests.values())
            S(t) && (0, h.Dr)({ quest: t }) && t.config.application.id === r && e.add(t.id);
        return T.log("~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ", e), e;
    }
    getActivelyProgressingActivityQuestIds() {
        let e = new Set(),
            t = o.ZP.getSelfEmbeddedActivities(),
            n = t.size > 0;
        if ((T.log("~ getActivelyProgressingActivityQuestIds -> Embedded activities: ", t), !n)) return e;
        let r = g.Z.quests;
        for (let n of t.keys())
            for (let t of r.values()) S(t) && (0, h.pO)(t) && t.config.application.id === n && e.add(t.id);
        for (let t of r.values()) S(t) && (0, h.KM)(t) && n && e.add(t.id);
        return T.log("~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ", e), e;
    }
    constructor(...e) {
        super(...e),
            y(this, "heartbeats", {
                [r.X.PLAY_ON_DESKTOP]: new Map(),
                [r.X.STREAM_ON_DESKTOP]: new Map(),
                [r.X.PLAY_ACTIVITY]: new Map(),
            }),
            y(this, "calculateHeartbeatDurationMs", (e) => {
                let t = g.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return O;
                let { progressSeconds: n, targetSeconds: i } = (0, h.il)(t, r.T.DESKTOP),
                    o = Math.max(0, (i - n) * _.Z.Millis.SECOND);
                return o <= O ? o + I : O;
            }),
            y(this, "initiateHeartbeat", (e, t) => {
                let n = this.heartbeats[t];
                if (n.has(e))
                    return void T.log("~ initiateHeartbeat -> Heartbeat already initiated for questId: ".concat(e));
                let i = () => {
                    if (this.getActivelyProgressingQuestIds(t).has(e)) {
                        if (t === r.X.STREAM_ON_DESKTOP) {
                            let n = u.Z.getCurrentUserActiveStream();
                            if (null == n) {
                                T.log(
                                    "~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: ".concat(
                                        e,
                                    ),
                                ),
                                    this.terminateHeartbeat(e, t);
                                return;
                            }
                            let r = (0, s.V9)(n);
                            T.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.m0)({
                                    questId: e,
                                    streamKey: r,
                                });
                        } else
                            T.log("~ initiateHeartbeat -> Sending heartbeat for questId: ".concat(e)),
                                (0, m.m0)({ questId: e });
                        let o = this.calculateHeartbeatDurationMs(e),
                            a = window.setTimeout(i, o);
                        n.set(e, a);
                    } else
                        T.log(
                            "~ initiateHeartbeat -> Quest ".concat(
                                e,
                                " is no longer actively progressing, terminating heartbeat",
                            ),
                        ),
                            this.terminateHeartbeat(e, t);
                };
                T.log("~ initiateHeartbeat -> Initiating heartbeat for Quest ".concat(e)), i();
            }),
            y(this, "terminateHeartbeat", (e, t) => {
                let n = this.heartbeats[t],
                    r = g.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    T.log("~ terminateHeartbeat -> Terminating heartbeat for questId: ".concat(e)),
                        window.clearTimeout(i),
                        n.delete(e);
                    let t = r.get(e);
                    null != t &&
                        S(t) &&
                        (T.log("~ terminateHeartbeat -> Sending terminal heartbeat for questId: ".concat(e)),
                        (0, m.m0)({
                            questId: e,
                            terminal: !0,
                        }));
                }
            }),
            y(this, "handleSendHeartbeatSuccess", (e) => {
                let { questId: t, userStatus: n } = e;
                if (
                    (T.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: ".concat(t, ")")),
                    null != n.completedAt)
                )
                    for (let e of (T.log(
                        "~ handleSendHeartbeatSuccess -> Quest ".concat(
                            t,
                            " completed, terminating any heartbeats for it",
                        ),
                    ),
                    Object.keys(this.heartbeats)))
                        this.terminateHeartbeat(t, e);
            }),
            y(this, "handleSendHeartbeatFailure", (e) => {
                let { questId: t } = e;
                T.log("~ handleSendHeartbeatFailure -> Heartbeat failed for questId: ".concat(t));
            }),
            y(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP],
                        "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                    ),
                QUESTS_ENROLL_SUCCESS: () =>
                    this.syncHeartbeats(
                        [r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY],
                        "QUESTS_ENROLL_SUCCESS",
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
                    this.syncHeartbeats([r.X.PLAY_ACTIVITY], "EMBEDDED_ACTIVITY_UPDATE_V2"),
            });
    }
}
let C = new N();
