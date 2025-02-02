n.d(t, { Z: () => P }), n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    d = n.n(s),
    c = n(818405),
    l = n(587158),
    u = n(286379),
    _ = n(481060),
    f = n(13245),
    p = n(490029),
    h = n(797614),
    v = n(593481),
    g = n(703656),
    m = n(254761),
    E = n(70956),
    x = n(960048),
    Z = n(145597),
    b = n(692546),
    y = n(518084),
    C = n(987650),
    I = n(981631),
    k = n(388032),
    A = n(974881);
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
let w = 10 * E.Z.Millis.SECOND;
function T() {
    let e = (0, Z.QF)(),
        t = (0, Z.Ht)();
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
class N extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, w)), f.Z.track(I.rMx.NOTIFICATION_VIEWED, { notif_type: C.n0.OverlayCrashed });
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
            : (0, i.jsx)(b.Z, {
                  observe: !1,
                  children: (0, i.jsx)(_.f6W, {
                      theme: I.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(_.P3F, {
                              className: o()(r, A.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(v.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(m.Z, {
                                          width: 40,
                                          height: 40,
                                          className: A.notificationIcon
                                      }),
                                      title: k.intl.string(k.t.U38qZm),
                                      confirmText: k.intl.string(k.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(y.ZP, {
                                            className: A.stackTrace,
                                            children: [
                                                (0, i.jsx)(y.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(y.ZP.Content, {
                                                    className: A.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: A.code,
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
                T();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            L(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    T(),
                    f.Z.track(
                        I.rMx.NOTIFICATION_CLICKED,
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
let O = d().throttle(
    () => {
        h.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(c.v.UNHANDLED_JS_ERROR), 'level:'.concat(l.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class S extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, Z.QF)(),
            r = (0, Z.Ht)();
        (0, p.lW)({
            type: I.BmY.DISPATCH,
            pid: (0, Z.QF)(),
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
            setImmediate(() => window.addEventListener('click', T));
        let a = x.Z.captureCrash(e, { extra: t });
        f.Z.track(I.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            error_level: 'fatal'
        }),
            O();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(N, {
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
            L(this, 'state', {
                error: null,
                info: null
            });
    }
}
let P = S;
