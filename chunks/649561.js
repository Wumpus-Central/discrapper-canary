n.d(t, { Z: () => R }), n(388685), n(358797);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    a = n.n(l),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    p = n(481060),
    h = n(13245),
    f = n(490029),
    g = n(797614),
    m = n(593481),
    y = n(703656),
    _ = n(254761),
    O = n(70956),
    b = n(145597),
    v = n(41534),
    E = n(837268),
    x = n(692546),
    S = n(518084),
    Z = n(987650),
    C = n(981631),
    j = n(388032),
    I = n(975290);
function P(e, t, n) {
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
let w = 10 * O.Z.Millis.SECOND;
function T() {
    let e = (0, b.getPID)(),
        t = (0, b.getRPCAuthToken)();
    (0, f.lW)({
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
class N extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, w)),
            h.Z.track(C.rMx.NOTIFICATION_VIEWED, { notif_type: Z.n0.OverlayCrashed });
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
                              className: o()(r, I.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(m.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(_.Z, {
                                          width: 40,
                                          height: 40,
                                          className: I.notificationIcon,
                                      }),
                                      title: j.intl.string(j.t.U38qZm),
                                      confirmText: j.intl.string(j.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(S.ZP, {
                                            className: I.stackTrace,
                                            children: [
                                                (0, i.jsx)(S.ZP.Bar, { children: "Error Details" }),
                                                (0, i.jsx)(S.ZP.Content, {
                                                    className: I.stackTraceCode,
                                                    children: (0, i.jsx)("code", {
                                                        className: I.code,
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
            P(this, "state", {
                showTrace: !1,
                busy: !1,
            }),
            P(this, "notificationTimer", void 0),
            P(this, "contentDomRef", r.createRef()),
            P(this, "hideNotification", () => {
                T();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            P(this, "handleReload", (e) => {
                this.setState({ busy: !0 }),
                    T(),
                    h.Z.track(
                        C.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: Z.n0.OverlayCrashed,
                            action_type: "reload",
                        },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            P(this, "handleNotificationClick", (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let D = a().throttle(
    () => {
        g.Z.increment(
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
class k extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, y.s1)().location;
        this.setState({
            error: e,
            info: t,
        });
        let i = (0, b.getPID)(),
            r = (0, b.getRPCAuthToken)();
        (0, f.lW)({
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
            setImmediate(() => window.addEventListener("click", T));
        let s = (0, v.V6)(e, E.gl.Hook, { extra: t });
        h.Z.track(C.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: s,
            error_level: "fatal",
        }),
            D();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(N, {
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
            P(this, "state", {
                error: null,
                info: null,
            });
    }
}
let R = k;
