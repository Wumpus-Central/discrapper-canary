n.d(t, { Z: () => p }), n(47120);
var r = n(846519),
    i = n(570140),
    l = n(317770),
    a = n(70956),
    o = n(960048),
    s = n(930446),
    c = n(981631);
function u(e, t, n) {
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
class d extends l.Z {
    _initialize() {
        i.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), i.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), i.Z.subscribe('QUESTS_ENROLL_SUCCESS', this.handleEnrollmentSuccess), this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(), i.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), i.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), i.Z.unsubscribe('QUESTS_ENROLL_SUCCESS', this.handleEnrollmentSuccess);
    }
    constructor(...e) {
        super(...e),
            u(this, 'focusedOrForegrounded', !0),
            u(this, 'heartbeatInterval', new r.Xp()),
            u(this, 'schedulerStarted', !1),
            u(this, 'maybeStartHeartbeat', () => {
                this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(5 * a.Z.Millis.MINUTE, this.trackHeartbeat);
            }),
            u(this, 'startAnalyticHeartbeat', () => {
                !this.schedulerStarted &&
                    ((this.schedulerStarted = !0),
                    o.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Starting ad session heartbeat'
                    }),
                    this.maybeStartHeartbeat());
            }),
            u(this, 'trackHeartbeat', () => {
                if (!this.schedulerStarted) {
                    o.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Ad heartbeat called but scheduler not started'
                    }),
                        this.heartbeatInterval.stop();
                    return;
                }
                (0, s.G)();
            }),
            u(this, 'stopAnalyticHeartbeat', () => {
                this.schedulerStarted &&
                    ((this.schedulerStarted = !1),
                    o.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Stopping ad session heartbeat'
                    }),
                    this.heartbeatInterval.stop());
            }),
            u(this, 'scheduleHeartbeatTracking', () => {
                if (this.focusedOrForegrounded)
                    try {
                        this.startAnalyticHeartbeat();
                    } catch (e) {
                        o.Z.captureException(e);
                    }
                else this.stopAnalyticHeartbeat();
            }),
            u(this, 'handleEnrollmentSuccess', () => {}),
            u(this, 'handleWindowFocus', (e) => {
                let { focused: t } = e;
                (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking();
            }),
            u(this, 'handleAppStateUpdate', (e) => {
                let { state: t } = e;
                (this.focusedOrForegrounded = t === c.$7l.ACTIVE), this.scheduleHeartbeatTracking();
            });
    }
}
let p = new d();
