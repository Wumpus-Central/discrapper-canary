n.d(t, {
    A: () => M,
}),
    n(896048),
    n(142703);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(735438),
    a = n.n(o),
    c = n(258873),
    d = n(622242),
    u = n(731738),
    h = n(118356),
    p = n(397927),
    f = n(684013),
    b = n(996308),
    g = n(831062),
    y = n(471024),
    A = n(976860),
    m = n(144400),
    O = n(927813),
    v = n(9302),
    E = n(777334),
    x = n(41984),
    S = n(941023),
    j = n(855790),
    _ = n(672396),
    I = n(652215),
    C = n(985018),
    w = n(748498);

function N(e, t, n) {
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
let P = 10 * O.A.Millis.SECOND,
    D = new h.Vy("LegacyOverlayErrorBoundary");

function T() {
    let e = (0, v.getPID)(),
        t = (0, v.getRPCAuthToken)();
    (0, b.tN)({
        type: I.kGV.DISPATCH,
        pid: e,
        token: t,
        payloads: [
            {
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: !0,
                pid: e,
            },
        ],
    });
}
class R extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, P)),
            f.A.track(I.HAw.NOTIFICATION_VIEWED, {
                notif_type: _.KS.OverlayCrashed,
            });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: r } = this;
        return null == r
            ? null
            : (0, i.jsx)(S.A, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, i.jsx)(p.NPJ, {
                      theme: I.NJ8.DARK,
                      children: (r) =>
                          (0, i.jsxs)(p.DUT, {
                              innerRef: this.contentDomRef,
                              className: l()(r, w.kL),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(y.Ay, {
                                      expand: !0,
                                      icon: (0, i.jsx)(m.A, {
                                          width: 40,
                                          height: 40,
                                          className: w.Lo,
                                      }),
                                      title: C.intl.string(C.t.U38qZj),
                                      confirmText: C.intl.string(C.t.TzAl1a),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(j.Ay, {
                                            className: w.a2,
                                            children: [
                                                (0, i.jsx)(j.Ay.Bar, {
                                                    children: "Error Details",
                                                }),
                                                (0, i.jsx)(j.Ay.Content, {
                                                    className: w.Xh,
                                                    children: (0, i.jsx)("code", {
                                                        className: w.aY,
                                                        children: (0, i.jsx)("pre", {
                                                            children: t.stack,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                  }),
              });
    }
    constructor(...e) {
        super(...e),
            N(this, "state", {
                showTrace: !1,
                busy: !1,
            }),
            N(this, "notificationTimer", void 0),
            N(this, "contentDomRef", r.createRef()),
            N(this, "hideNotification", () => {
                T();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            N(this, "handleReload", (e) => {
                this.setState({
                    busy: !0,
                }),
                    T(),
                    f.A.track(
                        I.HAw.NOTIFICATION_CLICKED,
                        {
                            notif_type: _.KS.OverlayCrashed,
                            action_type: "reload",
                        },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            N(this, "handleNotificationClick", (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t),
                    e.shiftKey &&
                        this.setState({
                            showTrace: !0,
                        });
            });
    }
}
let k = a().throttle(
    () => {
        g.A.increment(
            {
                name: u.K.APP_CRASHED,
                tags: ["reason:".concat(c.J.UNHANDLED_JS_ERROR), "level:".concat(d.k.FATAL)],
            },
            !0,
        );
    },
    100,
    {
        trailing: !1,
    },
);
class L extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, A.JK)().location;
        this.setState({
            error: e,
            info: t,
        }),
            D.error("ErrorBoundary caught error: ".concat(e.message), {
                error: e,
                info: t,
            });
        let i = (0, v.getPID)(),
            r = (0, v.getRPCAuthToken)();
        (0, b.tN)({
            type: I.kGV.DISPATCH,
            pid: (0, v.getPID)(),
            token: r,
            payloads: [
                {
                    type: "OVERLAY_CRASHED",
                    error: e.message,
                    pid: i,
                },
                {
                    type: "OVERLAY_SET_INPUT_LOCKED",
                    locked: !0,
                    pid: i,
                },
            ],
        }),
            setImmediate(() => window.addEventListener("click", T));
        let s = (0, E.St)(e, x.Ue.Hook, {
            extra: t,
        });
        f.A.track(I.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: s,
            error_level: "fatal",
        }),
            k();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(R, {
                  error: n,
                  info: r,
              })
            : (0, i.jsx)("div", {
                  className: t,
                  children: e,
              });
    }
    constructor(...e) {
        super(...e),
            N(this, "state", {
                error: null,
                info: null,
            });
    }
}
let M = L;
