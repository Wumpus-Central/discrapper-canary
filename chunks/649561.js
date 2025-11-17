n.d(t, { Z: () => L }), n(388685), n(358797);
var i = n(54381),
    r = n(473749),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n.n(s),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    h = n(579092),
    p = n(481060),
    f = n(13245),
    g = n(490029),
    m = n(797614),
    y = n(593481),
    b = n(703656),
    _ = n(254761),
    v = n(70956),
    O = n(145597),
    E = n(41534),
    S = n(837268),
    Z = n(692546),
    x = n(518084),
    j = n(987650),
    C = n(981631),
    I = n(388032),
    P = n(975290);
function w(e, t, n) {
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
let T = 10 * v.Z.Millis.SECOND,
    N = new h.Yd("LegacyOverlayErrorBoundary");
function D() {
    let e = (0, O.getPID)(),
        t = (0, O.getRPCAuthToken)();
    (0, g.lW)({
        type: C.BmY.DISPATCH,
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
class k extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, T)),
            f.Z.track(C.rMx.NOTIFICATION_VIEWED, { notif_type: j.n0.OverlayCrashed });
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
            : (0, i.jsx)(Z.Z, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, i.jsx)(p.f6W, {
                      theme: C.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(p.P3F, {
                              innerRef: this.contentDomRef,
                              className: l()(r, P.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(y.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(_.Z, {
                                          width: 40,
                                          height: 40,
                                          className: P.notificationIcon,
                                      }),
                                      title: I.intl.string(I.t.U38qZj),
                                      confirmText: I.intl.string(I.t.TzAl1a),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(x.ZP, {
                                            className: P.stackTrace,
                                            children: [
                                                (0, i.jsx)(x.ZP.Bar, { children: "Error Details" }),
                                                (0, i.jsx)(x.ZP.Content, {
                                                    className: P.stackTraceCode,
                                                    children: (0, i.jsx)("code", {
                                                        className: P.code,
                                                        children: (0, i.jsx)("pre", { children: t.stack }),
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
            w(this, "state", {
                showTrace: !1,
                busy: !1,
            }),
            w(this, "notificationTimer", void 0),
            w(this, "contentDomRef", r.createRef()),
            w(this, "hideNotification", () => {
                D();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            w(this, "handleReload", (e) => {
                this.setState({ busy: !0 }),
                    D(),
                    f.Z.track(
                        C.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: j.n0.OverlayCrashed,
                            action_type: "reload",
                        },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            w(this, "handleNotificationClick", (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let R = a().throttle(
    () => {
        m.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ["reason:".concat(c.v.UNHANDLED_JS_ERROR), "level:".concat(d.c.FATAL)],
            },
            !0,
        );
    },
    100,
    { trailing: !1 },
);
class A extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, b.s1)().location;
        this.setState({
            error: e,
            info: t,
        }),
            N.error("ErrorBoundary caught error: ".concat(e.message), {
                error: e,
                info: t,
            });
        let i = (0, O.getPID)(),
            r = (0, O.getRPCAuthToken)();
        (0, g.lW)({
            type: C.BmY.DISPATCH,
            pid: (0, O.getPID)(),
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
            setImmediate(() => window.addEventListener("click", D));
        let o = (0, E.V6)(e, S.gl.Hook, { extra: t });
        f.Z.track(C.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: "fatal",
        }),
            R();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(k, {
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
            w(this, "state", {
                error: null,
                info: null,
            });
    }
}
let L = A;
