n.d(t, { Z: () => h }), n(47120);
var r = n(846519),
    i = n(570140),
    l = n(317770),
    a = n(626135),
    o = n(70956),
    s = n(960048),
    c = n(930446),
    u = n(981631);
function d(e, t, n) {
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
class p extends l.Z {
    _initialize() {
        i.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), i.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), i.Z.subscribe('QUESTS_ENROLL_SUCCESS', this.handleEnrollmentSuccess), this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(), i.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), i.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), i.Z.unsubscribe('QUESTS_ENROLL_SUCCESS', this.handleEnrollmentSuccess);
    }
    constructor(...e) {
        super(...e),
            d(this, 'focusedOrForegrounded', !0),
            d(this, 'heartbeatInterval', new r.Xp()),
            d(this, 'schedulerStarted', !1),
            d(this, 'maybeStartHeartbeat', () => {
                this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(5 * o.Z.Millis.MINUTE, this.trackHeartbeat);
            }),
            d(this, 'startAnalyticHeartbeat', () => {
                !this.schedulerStarted &&
                    ((this.schedulerStarted = !0),
                    s.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Starting ad session heartbeat'
                    }),
                    this.maybeStartHeartbeat());
            }),
            d(this, 'trackHeartbeat', () => {
                if (!this.schedulerStarted) {
                    s.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Ad heartbeat called but scheduler not started'
                    }),
                        this.heartbeatInterval.stop();
                    return;
                }
                let e = (0, c.G)();
                a.default.track(u.rMx.CLIENT_AD_HEARTBEAT, {
                    client_ad_session_id: e.uuid,
                    client_heartbeat_initialization_timestamp: e.initialized,
                    client_heartbeat_version: 1
                });
            }),
            d(this, 'stopAnalyticHeartbeat', () => {
                this.schedulerStarted &&
                    ((this.schedulerStarted = !1),
                    s.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Stopping ad session heartbeat'
                    }),
                    this.heartbeatInterval.stop());
            }),
            d(this, 'scheduleHeartbeatTracking', () => {
                if (this.focusedOrForegrounded)
                    try {
                        this.startAnalyticHeartbeat();
                    } catch (e) {
                        s.Z.captureException(e);
                    }
                else this.stopAnalyticHeartbeat();
            }),
            d(this, 'handleEnrollmentSuccess', () => {}),
            d(this, 'handleWindowFocus', (e) => {
                let { focused: t } = e;
                (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking();
            }),
            d(this, 'handleAppStateUpdate', (e) => {
                let { state: t } = e;
                (this.focusedOrForegrounded = t === u.$7l.ACTIVE), this.scheduleHeartbeatTracking();
            });
    }
}
let h = new p();
