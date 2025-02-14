n.d(t, { Z: () => P }), n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    d = n.n(s),
    l = n(818405),
    c = n(587158),
    u = n(286379),
    _ = n(481060),
    f = n(13245),
    p = n(490029),
    h = n(797614),
    v = n(593481),
    m = n(703656),
    x = n(254761),
    g = n(70956),
    E = n(960048),
    C = n(145597),
    b = n(692546),
    Z = n(518084),
    y = n(987650),
    I = n(981631),
    k = n(388032),
    O = n(912469);
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
let A = 10 * g.Z.Millis.SECOND;
function T() {
    let e = (0, C.QF)(),
        t = (0, C.Ht)();
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
        (this.notificationTimer = setTimeout(this.hideNotification, A)), f.Z.track(I.rMx.NOTIFICATION_VIEWED, { notif_type: y.n0.OverlayCrashed });
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
                              className: o()(r, O.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(v.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(x.Z, {
                                          width: 40,
                                          height: 40,
                                          className: O.notificationIcon
                                      }),
                                      title: k.intl.string(k.t.U38qZm),
                                      confirmText: k.intl.string(k.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(Z.ZP, {
                                            className: O.stackTrace,
                                            children: [
                                                (0, i.jsx)(Z.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(Z.ZP.Content, {
                                                    className: O.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: O.code,
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
                            notif_type: y.n0.OverlayCrashed,
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
let w = d().throttle(
    () => {
        h.Z.increment(
            {
                name: u.V.APP_CRASHED,
                tags: ['reason:'.concat(l.v.UNHANDLED_JS_ERROR), 'level:'.concat(c.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class S extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, m.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, C.QF)(),
            r = (0, C.Ht)();
        (0, p.lW)({
            type: I.BmY.DISPATCH,
            pid: (0, C.QF)(),
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
        let a = E.Z.captureCrash(e, { extra: t });
        f.Z.track(I.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            error_level: 'fatal'
        }),
            w();
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
