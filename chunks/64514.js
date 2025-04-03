n.d(t, { Z: () => f }), n(47120);
var r = n(846519),
    i = n(570140),
    l = n(317770),
    a = n(626135),
    o = n(70956),
    s = n(960048),
    c = n(930446),
    u = n(92764),
    d = n(981631);
function p(e, t, n) {
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
class h extends l.Z {
    _initialize() {
        (this.focusedOrForegrounded = (0, u.H)()), i.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), i.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), i.Z.subscribe('QUESTS_ENROLL_SUCCESS', this.handleEnrollmentSuccess), i.Z.subscribe('LOGIN_SUCCESS', this.handleLogin), i.Z.subscribe('LOGOUT', this.handleLogout), this.trackHeartbeat(!0), this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(), i.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), i.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), i.Z.unsubscribe('QUESTS_ENROLL_SUCCESS', this.handleEnrollmentSuccess), i.Z.unsubscribe('LOGIN_SUCCESS', this.handleLogin), i.Z.unsubscribe('LOGOUT', this.handleLogout);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            p(this, 'focusedOrForegrounded', !0),
            p(this, 'heartbeatInterval', new r.Xp()),
            p(this, 'schedulerStarted', !1),
            p(this, 'maybeStartHeartbeat', () => {
                this.heartbeatInterval.isStarted() || this.heartbeatInterval.start(5 * o.Z.Millis.MINUTE, this.trackHeartbeat);
            }),
            p(this, 'startAnalyticHeartbeat', () => {
                this.schedulerStarted ||
                    ((this.schedulerStarted = !0),
                    s.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Starting ad session heartbeat'
                    }),
                    this.maybeStartHeartbeat());
            }),
            p(this, 'trackHeartbeat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!t.schedulerStarted && !e) {
                    s.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Ad heartbeat called but scheduler not started'
                    }),
                        t.heartbeatInterval.stop();
                    return;
                }
                let n = (0, c.Gy)();
                a.default.track(d.rMx.CLIENT_AD_HEARTBEAT, {
                    client_ad_session_id: n.uuid,
                    client_heartbeat_initialization_timestamp: n.initialized,
                    client_heartbeat_version: 1
                });
            }),
            p(this, 'stopAnalyticHeartbeat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'DEFAULT';
                if (!t.schedulerStarted) return;
                t.schedulerStarted = !1;
                let n = (0, c.S9)();
                a.default.track(d.rMx.CLIENT_AD_HEARTBEAT_TERMINATION, {
                    client_ad_session_id: null == n ? void 0 : n.uuid,
                    client_heartbeat_initialization_timestamp: null == n ? void 0 : n.initialized,
                    client_heartbeat_version: 1,
                    reason: e
                }),
                    s.Z.addBreadcrumb({
                        category: 'ad',
                        message: 'Stopping ad session heartbeat: '.concat(e)
                    }),
                    t.heartbeatInterval.stop();
            }),
            p(this, 'scheduleHeartbeatTracking', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'DEFAULT';
                if (t.focusedOrForegrounded)
                    try {
                        t.startAnalyticHeartbeat();
                    } catch (e) {
                        s.Z.captureException(e);
                    }
                else t.stopAnalyticHeartbeat(e);
            }),
            p(this, 'handleLogin', () => {
                this.scheduleHeartbeatTracking(), this.trackHeartbeat(!0);
            }),
            p(this, 'handleLogout', () => {
                this.stopAnalyticHeartbeat('USER_LOGOUT'), (0, c.GG)();
            }),
            p(this, 'handleEnrollmentSuccess', () => {
                (0, c.Gy)(!0);
            }),
            p(this, 'handleWindowFocus', (e) => {
                let { focused: t } = e;
                (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking('WINDOW_FOCUS');
            }),
            p(this, 'handleAppStateUpdate', (e) => {
                let { state: t } = e;
                (this.focusedOrForegrounded = t === d.$7l.ACTIVE), this.scheduleHeartbeatTracking('APP_STATE_UPDATE');
            });
    }
}
let f = new h();
