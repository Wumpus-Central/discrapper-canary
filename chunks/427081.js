n.d(t, { Z: () => S }), n(47120);
var r = n(754700),
    i = n(147913),
    o = n(317381),
    a = n(594190),
    s = n(569545),
    l = n(199902),
    c = n(938475),
    u = n(70956),
    d = n(823379),
    f = n(272008),
    _ = n(569984),
    p = n(918701),
    h = n(5881),
    m = n(46140);
function g(e, t, n) {
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
let E = +u.Z.Millis.MINUTE,
    b = 2,
    y = +u.Z.Millis.SECOND,
    v = (0, h.T)({ location: m.dr.QUESTS_MANAGER });
function O(e) {
    return !(0, p.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
class I extends i.Z {
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
                (0, d.vE)(e);
        }
    }
    getActivelyProgressingPlayOnDesktopQuestIds() {
        let e = new Set(),
            t = a.ZP.getRunningGames(),
            n = _.Z.quests;
        for (let r of (v.log('~ getActivelyProgressingPlayOnDesktopQuestIds -> Running games: ', t), t)) if (null != r.id) for (let t of n.values()) O(t) && (0, p.Nj)({ quest: t }) && t.config.application.id === r.id && e.add(t.id);
        return v.log('~ getActivelyProgressingPlayOnDesktopQuestIds -> Actively progressing questIds: ', e), e;
    }
    getActivelyProgressingStreamOnDesktopQuestIds() {
        let e = new Set(),
            t = l.Z.getCurrentUserActiveStream();
        if (null == t || c.ZP.countVoiceStatesForChannel(t.channelId) < b) return e;
        let n = l.Z.getStreamerActiveStreamMetadata();
        if (null == n) return e;
        v.log('~ getActivelyProgressingStreamOnDesktopQuestIds -> Active stream metadata: ', n);
        let r = n.id;
        if (null == r) return e;
        for (let t of _.Z.quests.values()) O(t) && (0, p.Dr)({ quest: t }) && t.config.application.id === r && e.add(t.id);
        return v.log('~ getActivelyProgressingStreamOnDesktopQuestIds -> Actively progressing questIds: ', e), e;
    }
    getActivelyProgressingActivityQuestIds() {
        let e = new Set(),
            t = o.ZP.getSelfEmbeddedActivities(),
            n = t.size > 0;
        if ((v.log('~ getActivelyProgressingActivityQuestIds -> Embedded activities: ', t), !n)) return e;
        let r = _.Z.quests;
        for (let n of t.keys()) for (let t of r.values()) O(t) && (0, p.pO)(t) && t.config.application.id === n && e.add(t.id);
        for (let t of r.values()) O(t) && (0, p.KM)(t) && n && e.add(t.id);
        return v.log('~ getActivelyProgressingActivityQuestIds -> Actively progressing questIds: ', e), e;
    }
    constructor(...e) {
        super(...e),
            g(this, 'heartbeats', {
                [r.X.PLAY_ON_DESKTOP]: new Map(),
                [r.X.STREAM_ON_DESKTOP]: new Map(),
                [r.X.PLAY_ACTIVITY]: new Map()
            }),
            g(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = _.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return E;
                let { progressSeconds: n, targetSeconds: i } = (0, p.il)(t, r.T.DESKTOP),
                    o = Math.max(0, (i - n) * u.Z.Millis.SECOND);
                return o <= E ? o + y : E;
            }),
            g(this, 'initiateHeartbeat', (e, t) => {
                let n = this.heartbeats[t];
                if (n.has(e)) return void v.log('~ initiateHeartbeat -> Heartbeat already initiated for questId: '.concat(e));
                let i = () => {
                    if (this.getActivelyProgressingQuestIds(t).has(e)) {
                        if (t === r.X.STREAM_ON_DESKTOP) {
                            let n = l.Z.getCurrentUserActiveStream();
                            if (null == n) {
                                v.log('~ initiateHeartbeat -> Attempted to beat for stream quest but no active stream, terminating heartbeat for questId: '.concat(e)), this.terminateHeartbeat(e, t);
                                return;
                            }
                            let r = (0, s.V9)(n);
                            v.log('~ initiateHeartbeat -> Sending heartbeat for questId: '.concat(e)),
                                (0, f.m0)({
                                    questId: e,
                                    streamKey: r
                                });
                        } else v.log('~ initiateHeartbeat -> Sending heartbeat for questId: '.concat(e)), (0, f.m0)({ questId: e });
                        let o = this.calculateHeartbeatDurationMs(e),
                            a = window.setTimeout(i, o);
                        n.set(e, a);
                    } else v.log('~ initiateHeartbeat -> Quest '.concat(e, ' is no longer actively progressing, terminating heartbeat')), this.terminateHeartbeat(e, t);
                };
                v.log('~ initiateHeartbeat -> Initiating heartbeat for Quest '.concat(e)), i();
            }),
            g(this, 'terminateHeartbeat', (e, t) => {
                let n = this.heartbeats[t],
                    r = _.Z.quests,
                    i = n.get(e);
                if (null != i) {
                    v.log('~ terminateHeartbeat -> Terminating heartbeat for questId: '.concat(e)), window.clearTimeout(i), n.delete(e);
                    let t = r.get(e);
                    null != t &&
                        O(t) &&
                        (v.log('~ terminateHeartbeat -> Sending terminal heartbeat for questId: '.concat(e)),
                        (0, f.m0)({
                            questId: e,
                            terminal: !0
                        }));
                }
            }),
            g(this, 'handleSendHeartbeatSuccess', (e) => {
                let { questId: t, userStatus: n } = e;
                if ((v.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded for questId: '.concat(t, ')')), null != n.completedAt)) for (let e of (v.log('~ handleSendHeartbeatSuccess -> Quest '.concat(t, ' completed, terminating any heartbeats for it')), Object.keys(this.heartbeats))) this.terminateHeartbeat(t, e);
            }),
            g(this, 'handleSendHeartbeatFailure', (e) => {
                let { questId: t } = e;
                v.log('~ handleSendHeartbeatFailure -> Heartbeat failed for questId: '.concat(t));
            }),
            g(this, 'actions', {
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
            });
    }
}
let S = new I();
