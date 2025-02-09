n.d(t, { Z: () => N }), n(47120), n(177593);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    c = n(392711),
    s = n.n(c),
    l = n(818405),
    d = n(587158),
    u = n(286379),
    _ = n(481060),
    f = n(13245),
    p = n(490029),
    h = n(797614),
    m = n(593481),
    v = n(703656),
    b = n(254761),
    x = n(70956),
    g = n(960048),
    E = n(145597),
    y = n(692546),
    Z = n(518084),
    k = n(987650),
    I = n(981631),
    C = n(388032),
    L = n(119591);
function w(e, t, n) {
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
let A = 10 * x.Z.Millis.SECOND;
function S() {
    let e = (0, E.QF)(),
        t = (0, E.Ht)();
    (0, p.lW)({
        type: I.BmY.DISPATCH,
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
class T extends o.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, A)), f.Z.track(I.rMx.NOTIFICATION_VIEWED, { notif_type: k.n0.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: o } = this;
        return null == o
            ? null
            : (0, i.jsx)(y.Z, {
                  observe: !1,
                  children: (0, i.jsx)(_.f6W, {
                      theme: I.BRd.DARK,
                      children: (o) =>
                          (0, i.jsxs)(_.P3F, {
                              className: a()(o, L.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(m.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(b.Z, {
                                          width: 40,
                                          height: 40,
                                          className: L.notificationIcon
                                      }),
                                      title: C.intl.string(C.t.U38qZm),
                                      confirmText: C.intl.string(C.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(Z.ZP, {
                                            className: L.stackTrace,
                                            children: [
                                                (0, i.jsx)(Z.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(Z.ZP.Content, {
                                                    className: L.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: L.code,
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
            w(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            w(this, 'notificationTimer', void 0),
            w(this, 'hideNotification', () => {
                S();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            w(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    S(),
                    f.Z.track(
                        I.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: k.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            w(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let O = s().throttle(
    () => {
        h.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(l.v.UNHANDLED_JS_ERROR), 'level:'.concat(d.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class P extends o.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, v.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, E.QF)(),
            o = (0, E.Ht)();
        (0, p.lW)({
            type: I.BmY.DISPATCH,
            pid: (0, E.QF)(),
            token: o,
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
            setImmediate(() => window.addEventListener('click', S));
        let r = g.Z.captureCrash(e, { extra: t });
        f.Z.track(I.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            error_level: 'fatal'
        }),
            O();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: o } = this.state;
        return null != n
            ? (0, i.jsx)(T, {
                  error: n,
                  info: o
              })
            : (0, i.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', {
                error: null,
                info: null
            });
    }
}
let N = P;
