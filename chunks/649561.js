n(47120), n(177593);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    c = n.n(l),
    s = n(818405),
    d = n(587158),
    u = n(286379),
    p = n(481060),
    h = n(13245),
    _ = n(490029),
    v = n(797614),
    f = n(593481),
    m = n(703656),
    b = n(254761),
    y = n(70956),
    E = n(960048),
    Z = n(145597),
    g = n(692546),
    k = n(518084),
    C = n(987650),
    x = n(981631),
    w = n(388032),
    I = n(190079);
function L(e, t, n) {
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
let S = 10 * y.Z.Millis.SECOND;
function A() {
    let e = (0, Z.QF)(),
        t = (0, Z.Ht)();
    (0, _.lW)({
        type: x.BmY.DISPATCH,
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
class P extends o.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, S)), h.Z.track(x.rMx.NOTIFICATION_VIEWED, { notif_type: C.n0.OverlayCrashed });
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
            : (0, i.jsx)(g.Z, {
                  observe: !1,
                  children: (0, i.jsx)(p.ThemeProvider, {
                      theme: x.BRd.DARK,
                      children: (o) =>
                          (0, i.jsxs)(p.Clickable, {
                              className: a()(o, I.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(f.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(b.Z, {
                                          width: 40,
                                          height: 40,
                                          className: I.notificationIcon
                                      }),
                                      title: w.intl.string(w.t.U38qZm),
                                      confirmText: w.intl.string(w.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(k.ZP, {
                                            className: I.stackTrace,
                                            children: [
                                                (0, i.jsx)(k.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(k.ZP.Content, {
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
            L(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            L(this, 'notificationTimer', void 0),
            L(this, 'hideNotification', () => {
                A();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            L(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    A(),
                    h.Z.track(
                        x.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: C.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            L(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let O = c().throttle(
    () => {
        v.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(s.v.UNHANDLED_JS_ERROR), 'level:'.concat(d.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class T extends o.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, m.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, Z.QF)(),
            o = (0, Z.Ht)();
        (0, _.lW)({
            type: x.BmY.DISPATCH,
            pid: (0, Z.QF)(),
            token: o,
            payloads: [
                {
                    type: 'OVERLAY_CRASHED',
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
        let r = E.Z.captureCrash(e, { extra: t });
        h.Z.track(x.rMx.APP_CRASHED, {
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
            ? (0, i.jsx)(P, {
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
            L(this, 'state', {
                error: null,
                info: null
            });
    }
}
t.Z = T;
