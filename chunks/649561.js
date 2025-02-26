n.d(t, { Z: () => T }), n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(392711),
    s = n.n(l),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    f = n(481060),
    p = n(13245),
    h = n(490029),
    v = n(797614),
    E = n(593481),
    O = n(703656),
    m = n(254761),
    x = n(70956),
    y = n(960048),
    g = n(145597),
    _ = n(692546),
    Z = n(518084),
    b = n(987650),
    C = n(981631),
    P = n(388032),
    I = n(665126);
function N(e, t, n) {
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
let j = 10 * x.Z.Millis.SECOND;
function A() {
    let e = (0, g.getPID)(),
        t = (0, g.getRPCAuthToken)();
    (0, h.lW)({
        type: C.BmY.DISPATCH,
        pid: e,
        token: t,
        payloads: [
            {
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: !0,
                pid: e
            }
        ]
    });
}
class L extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, j)), p.Z.track(C.rMx.NOTIFICATION_VIEWED, { notif_type: b.n0.OverlayCrashed });
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
            : (0, i.jsx)(_.Z, {
                  observe: !1,
                  children: (0, i.jsx)(f.f6W, {
                      theme: C.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(f.P3F, {
                              className: a()(r, I.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(E.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(m.Z, {
                                          width: 40,
                                          height: 40,
                                          className: I.notificationIcon
                                      }),
                                      title: P.NW.string(P.t.U38qZm),
                                      confirmText: P.NW.string(P.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(Z.ZP, {
                                            className: I.stackTrace,
                                            children: [
                                                (0, i.jsx)(Z.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(Z.ZP.Content, {
                                                    className: I.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: I.code,
                                                        children: (0, i.jsx)('pre', { children: t.stack })
                                                    })
                                                })
                                            ]
                                        })
                                      : null
                              ]
                          })
                  })
              });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            N(this, 'notificationTimer', void 0),
            N(this, 'hideNotification', () => {
                A();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            N(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    A(),
                    p.Z.track(
                        C.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: b.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            N(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let k = s().throttle(
    () => {
        v.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(c.v.UNHANDLED_JS_ERROR), 'level:'.concat(d.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class w extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, O.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, g.getPID)(),
            r = (0, g.getRPCAuthToken)();
        (0, h.lW)({
            type: C.BmY.DISPATCH,
            pid: (0, g.getPID)(),
            token: r,
            payloads: [
                {
                    type: 'OVERLAY_CRASHED',
                    error: e.message,
                    pid: i
                },
                {
                    type: 'OVERLAY_SET_INPUT_LOCKED',
                    locked: !0,
                    pid: i
                }
            ]
        }),
            setImmediate(() => window.addEventListener('click', A));
        let o = y.Z.captureCrash(e, { extra: t });
        p.Z.track(C.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: 'fatal'
        }),
            k();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(L, {
                  error: n,
                  info: r
              })
            : (0, i.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                error: null,
                info: null
            });
    }
}
let T = w;
