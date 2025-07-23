(n.d(t, { Z: () => S }), n(388685));
var r = n(754700),
    i = n(147913),
    a = n(317381),
    o = n(594190),
    s = n(569545),
    l = n(199902),
    c = n(77498),
    u = n(938475),
    d = n(70956),
    _ = n(823379),
    f = n(272008),
    p = n(569984),
    h = n(918701),
    m = n(5881),
    g = n(46140);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = +d.Z.Millis.MINUTE,
    y = 2,
    O = +d.Z.Millis.SECOND,
    v = (0, m.T)({ location: g.dr.QUESTS_MANAGER });
function I(e) {
    return !(0, h.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
class T extends i.Z {
    syncHeartbeats(e, t) {
        for (let n of ('VOICE_STATE_UPDATES' !== t && 'PASSIVE_UPDATE_V2' !== t && v.log('~ syncHeartbeats -> syncing heartbeats for taskTypes: '.concat(e.join(', '), ' (triggered by: ').concat(t, ')')), e)) {
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
                (0, _.vE)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuestIds() {
        let e = new Set(),
            t = o.ZP.getRunningGames(),
            n = p.Z.quests;
        v.log('~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ', t);
        let r = new Set();
        for (let e of t) {
            if (e.isLauncher) continue;
            if (null != e.id) {
                r.add(e.id);
                continue;
            }
            let t = o.ZP.getOverrideForGame(e);
            if (null == e.distributor && null != t) continue;
            let n = c.Z.getGameByName(e.name);
            if ((null == n ? void 0 : n.id) != null) {
                r.add(n.id);
                continue;
            }
        }
        for (let t of r) for (let r of n.values()) I(r) && (0, h.Nj)({ quest: r }) && r.config.application.id === t && e.add(r.id);
        return (v.log('~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ', e), e);
    }
    getActivelyProgressingStreamOnDesktopQuestIds() {
        let e = new Set(),
            t = l.Z.getCurrentUserActiveStream();
        if (null == t || u.ZP.countVoiceStatesForChannel(t.channelId) < y) return e;
        let n = l.Z.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        v.log('~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ', n);
        let r = n.id;
        if (null == r) return e;
        for (let t of p.Z.quests.values()) I(t) && (0, h.Dr)({ quest: t }) && t.config.application.id === r && e.add(t.id);
        return (v.log('~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ', e), e);
    }
    getActivelyProgressingActivityQuestIds() {
        let e = new Set(),
            t = a.ZP.getSelfEmbeddedActivities(),
            n = t.size > 0;
        if ((v.log('~ getActivelyProgressingActivityQuestIds -> Embedded activities: ', t), !n)) return e;
        let r = p.Z.quests;
        for (let n of t.keys()) for (let t of r.values()) I(t) && (0, h.pO)(t) && t.config.application.id === n && e.add(t.id);
        for (let t of r.values()) I(t) && (0, h.KM)(t) && n && e.add(t.id);
        return (v.log('~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ', e), e);
    }
    constructor(...e) {
        (super(...e),
            E(this, 'heartbeats', {
                [r.X.PLAY_ON_DESKTOP]: new Map(),
                [r.X.STREAM_ON_DESKTOP]: new Map(),
                [r.X.PLAY_ACTIVITY]: new Map()
            }),
            E(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = p.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return b;
                let { progressSeconds: n, targetSeconds: i } = (0, h.il)(t, r.T.DESKTOP),
                    a = Math.max(0, (i - n) * d.Z.Millis.SECOND);
                return a <= b ? a + O : b;
            }),
            E(this, 'initiateHeartbeat', (e, t) => {
                let n = this.heartbeats[t];
                if (n.has(e)) return void v.log('~ initiateHeartbeat -> Heartbeat already initiated for questId: '.concat(e));
                let i = () => {
                    if (this.getActivelyProgressingQuestIds(t).has(e)) {
                        if (t === r.X.STREAM_ON_DESKTOP) {
                            let n = l.Z.getCurrentUserActiveStream();
                            if (null == n) {
                                (v.log('~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: '.concat(e)), this.terminateHeartbeat(e, t));
                                return;
                            }
                            let r = (0, s.V9)(n);
                            (v.log('~ initiateHeartbeat -> Sending heartbeat for questId: '.concat(e)),
                                (0, f.m0)({
                                    questId: e,
                                    streamKey: r
                                }));
                        } else (v.log('~ initiateHeartbeat -> Sending heartbeat for questId: '.concat(e)), (0, f.m0)({ questId: e }));
                        let a = this.calculateHeartbeatDurationMs(e),
                            o = window.setTimeout(i, a);
                        n.set(e, o);
                    } else (v.log('~ initiateHeartbeat -> Quest '.concat(e, ' is no longer actively progressing, terminating heartbeat')), this.terminateHeartbeat(e, t));
                };
                (v.log('~ initiateHeartbeat -> Initiating heartbeat for Quest '.concat(e)), i());
            }),
            E(this, 'terminateHeartbeat', (e, t) => {
                let n = this.heartbeats[t],
                    r = p.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    (v.log('~ terminateHeartbeat -> Terminating heartbeat for questId: '.concat(e)), window.clearTimeout(i), n.delete(e));
                    let t = r.get(e);
                    null != t &&
                        I(t) &&
                        (v.log('~ terminateHeartbeat -> Sending terminal heartbeat for questId: '.concat(e)),
                        (0, f.m0)({
                            questId: e,
                            terminal: !0
                        }));
                }
            }),
            E(this, 'handleSendHeartbeatSuccess', (e) => {
                let { questId: t, userStatus: n } = e;
                if ((v.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: '.concat(t, ')')), null != n.completedAt)) for (let e of (v.log('~ handleSendHeartbeatSuccess -> Quest '.concat(t, ' completed, terminating any heartbeats for it')), Object.keys(this.heartbeats))) this.terminateHeartbeat(t, e);
            }),
            E(this, 'handleSendHeartbeatFailure', (e) => {
                let { questId: t } = e;
                v.log('~ handleSendHeartbeatFailure -> Heartbeat failed for questId: '.concat(t));
            }),
            E(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP], 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS'),
                QUESTS_ENROLL_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], 'QUESTS_ENROLL_SUCCESS'),
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                QUESTS_PREVIEW_UPDATE_SUCCESS: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP, r.X.STREAM_ON_DESKTOP, r.X.PLAY_ACTIVITY], 'QUESTS_PREVIEW_UPDATE_SUCCESS'),
                RUNNING_GAMES_CHANGE: () => this.syncHeartbeats([r.X.PLAY_ON_DESKTOP], 'RUNNING_GAMES_CHANGE'),
                STREAM_START: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], 'STREAM_START'),
                STREAM_CREATE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], 'STREAM_CREATE'),
                STREAM_CLOSE: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], 'STREAM_CLOSE'),
                PASSIVE_UPDATE_V2: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], 'PASSIVE_UPDATE_V2'),
                VOICE_STATE_UPDATES: () => this.syncHeartbeats([r.X.STREAM_ON_DESKTOP], 'VOICE_STATE_UPDATES'),
                EMBEDDED_ACTIVITY_UPDATE_V2: () => this.syncHeartbeats([r.X.PLAY_ACTIVITY], 'EMBEDDED_ACTIVITY_UPDATE_V2')
            }));
    }
}
let S = new T();
