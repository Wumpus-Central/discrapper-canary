n.d(t, { Z: () => L }), n(388685), n(358797);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
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
    O = n(703656),
    _ = n(254761),
    v = n(70956),
    b = n(145597),
    E = n(41534),
    S = n(837268),
    x = n(692546),
    Z = n(518084),
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
let N = 10 * v.Z.Millis.SECOND,
    T = new h.Yd("LegacyOverlayErrorBoundary");
function D() {
    let e = (0, b.getPID)(),
        t = (0, b.getRPCAuthToken)();
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
        (this.notificationTimer = setTimeout(this.hideNotification, N)),
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
            : (0, i.jsx)(x.Z, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, i.jsx)(p.f6W, {
                      theme: C.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(p.P3F, {
                              innerRef: this.contentDomRef,
                              className: o()(r, P.container),
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
                                      ? (0, i.jsxs)(Z.ZP, {
                                            className: P.stackTrace,
                                            children: [
                                                (0, i.jsx)(Z.ZP.Bar, { children: "Error Details" }),
                                                (0, i.jsx)(Z.ZP.Content, {
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
        let n = (0, O.s1)().location;
        this.setState({
            error: e,
            info: t,
        }),
            T.error("ErrorBoundary caught error: ".concat(e.message), {
                error: e,
                info: t,
            });
        let i = (0, b.getPID)(),
            r = (0, b.getRPCAuthToken)();
        (0, g.lW)({
            type: C.BmY.DISPATCH,
            pid: (0, b.getPID)(),
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
        let l = (0, E.V6)(e, S.gl.Hook, { extra: t });
        f.Z.track(C.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
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
