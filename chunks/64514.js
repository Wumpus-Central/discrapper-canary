n.d(t, { Z: () => m }), n(388685);
var r = n(846519),
    i = n(570140),
    l = n(317770),
    a = n(314897),
    o = n(626135),
    s = n(70956),
    c = n(960048),
    u = n(930446),
    d = n(127438),
    p = n(981631);
function f(e, t, n) {
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
let g = a.default.getToken();
class h extends l.Z {
    _initialize() {
        (this.focusedOrForegrounded = (0, d.H)()),
            a.default.addChangeListener(this.handleAuthenticationChange),
            i.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            i.Z.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            i.Z.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            i.Z.subscribe("LOGIN_SUCCESS", this.handleLogin),
            i.Z.subscribe("LOGOUT", this.handleLogout),
            this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(),
            a.default.removeChangeListener(this.handleAuthenticationChange),
            i.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            i.Z.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            i.Z.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            i.Z.unsubscribe("LOGIN_SUCCESS", this.handleLogin),
            i.Z.unsubscribe("LOGOUT", this.handleLogout);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            f(this, "focusedOrForegrounded", (0, d.H)()),
            f(this, "heartbeatInterval", new r.Xp()),
            f(this, "schedulerStarted", !1),
            f(this, "lastHeartbeatTimestamp", 0),
            f(this, "maybeStartHeartbeat", () => {
                this.heartbeatInterval.isStarted() ||
                    (this.trackHeartbeat(), this.heartbeatInterval.start(5 * s.Z.Millis.MINUTE, this.trackHeartbeat));
            }),
            f(this, "startAnalyticHeartbeat", () => {
                this.schedulerStarted ||
                    ((this.schedulerStarted = !0),
                    c.Z.addBreadcrumb({
                        category: "ad",
                        message: "Starting ad session heartbeat",
                    }),
                    this.maybeStartHeartbeat());
            }),
            f(this, "trackHeartbeat", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!t.schedulerStarted && !e) {
                    c.Z.addBreadcrumb({
                        category: "ad",
                        message: "Ad heartbeat called but scheduler not started",
                    }),
                        t.heartbeatInterval.stop();
                    return;
                }
                let n = performance.now(),
                    r = n - t.lastHeartbeatTimestamp,
                    i = 5 * s.Z.Millis.MINUTE;
                if (!e && t.lastHeartbeatTimestamp > 0 && r < i) return;
                let l = (0, u.Gy)();
                o.default.track(p.rMx.CLIENT_AD_HEARTBEAT, {
                    client_ad_session_id: l.uuid,
                    client_heartbeat_initialization_timestamp: l.createdAtTimestamp,
                    client_heartbeat_version: 3,
                }),
                    (t.lastHeartbeatTimestamp = n);
            }),
            f(this, "stopAnalyticHeartbeat", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
                t.schedulerStarted &&
                    ((t.schedulerStarted = !1),
                    (t.lastHeartbeatTimestamp = 0),
                    c.Z.addBreadcrumb({
                        category: "ad",
                        message: "Stopping ad session heartbeat: ".concat(e),
                    }),
                    t.heartbeatInterval.stop());
            }),
            f(this, "scheduleHeartbeatTracking", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
                if (t.focusedOrForegrounded && null != g)
                    try {
                        t.startAnalyticHeartbeat();
                    } catch (e) {
                        c.Z.captureException(e);
                    }
                else t.stopAnalyticHeartbeat(e);
            }),
            f(this, "handleLogin", () => {
                this.scheduleHeartbeatTracking(), this.trackHeartbeat(!0);
            }),
            f(this, "handleLogout", () => {
                this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, u.GG)();
            }),
            f(this, "handleEnrollmentSuccess", () => {
                (0, u.Gy)(!0);
            }),
            f(this, "handleWindowFocus", (e) => {
                let { focused: t } = e;
                (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking("WINDOW_FOCUS");
            }),
            f(this, "handleAppStateUpdate", (e) => {
                let { state: t } = e;
                (this.focusedOrForegrounded = t === p.$7l.ACTIVE), this.scheduleHeartbeatTracking("APP_STATE_UPDATE");
            }),
            f(this, "handleAuthenticationChange", () => {
                let e = a.default.getToken();
                g !== e && ((g = e), (0, u.GG)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking();
            });
    }
}
let m = new h();
