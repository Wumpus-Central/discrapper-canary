n.d(t, { Z: () => T }), n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    c = n.n(s),
    d = n(818405),
    l = n(587158),
    u = n(286379),
    _ = n(481060),
    f = n(13245),
    p = n(490029),
    h = n(797614),
    v = n(593481),
    m = n(703656),
    g = n(254761),
    x = n(70956),
    b = n(960048),
    y = n(145597),
    E = n(692546),
    O = n(518084),
    C = n(987650),
    Z = n(981631),
    I = n(388032),
    k = n(665126);
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
let w = 10 * x.Z.Millis.SECOND;
function P() {
    let e = (0, y.QF)(),
        t = (0, y.Ht)();
    (0, p.lW)({
        type: Z.BmY.DISPATCH,
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
        (this.notificationTimer = setTimeout(this.hideNotification, w)), f.Z.track(Z.rMx.NOTIFICATION_VIEWED, { notif_type: C.n0.OverlayCrashed });
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
            : (0, i.jsx)(E.Z, {
                  observe: !1,
                  children: (0, i.jsx)(_.f6W, {
                      theme: Z.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(_.P3F, {
                              className: a()(r, k.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(v.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(g.Z, {
                                          width: 40,
                                          height: 40,
                                          className: k.notificationIcon
                                      }),
                                      title: I.NW.string(I.t.U38qZm),
                                      confirmText: I.NW.string(I.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(O.ZP, {
                                            className: k.stackTrace,
                                            children: [
                                                (0, i.jsx)(O.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(O.ZP.Content, {
                                                    className: k.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: k.code,
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
                P();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            N(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    P(),
                    f.Z.track(
                        Z.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: C.n0.OverlayCrashed,
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
let A = c().throttle(
    () => {
        h.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(d.v.UNHANDLED_JS_ERROR), 'level:'.concat(l.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class j extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, m.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, y.QF)(),
            r = (0, y.Ht)();
        (0, p.lW)({
            type: Z.BmY.DISPATCH,
            pid: (0, y.QF)(),
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
            setImmediate(() => window.addEventListener('click', P));
        let o = b.Z.captureCrash(e, { extra: t });
        f.Z.track(Z.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: 'fatal'
        }),
            A();
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
let T = j;
