n.d(t, { Z: () => O }), n(47120), n(177593);
var i = n(200651),
    a = n(192379),
    o = n(120356),
    r = n.n(o),
    s = n(392711),
    l = n.n(s),
    d = n(818405),
    c = n(587158),
    _ = n(286379),
    u = n(481060),
    h = n(13245),
    f = n(490029),
    p = n(797614),
    v = n(593481),
    m = n(703656),
    g = n(254761),
    E = n(70956),
    Z = n(960048),
    y = n(145597),
    b = n(692546),
    C = n(518084),
    I = n(987650),
    k = n(981631),
    x = n(388032),
    L = n(974881);
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
let A = 10 * E.Z.Millis.SECOND;
function T() {
    let e = (0, y.QF)(),
        t = (0, y.Ht)();
    (0, f.lW)({
        type: k.BmY.DISPATCH,
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
class N extends a.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, A)), h.Z.track(k.rMx.NOTIFICATION_VIEWED, { notif_type: I.n0.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: a } = this;
        return null == a
            ? null
            : (0, i.jsx)(b.Z, {
                  observe: !1,
                  children: (0, i.jsx)(u.f6W, {
                      theme: k.BRd.DARK,
                      children: (a) =>
                          (0, i.jsxs)(u.P3F, {
                              className: r()(a, L.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(v.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(g.Z, {
                                          width: 40,
                                          height: 40,
                                          className: L.notificationIcon
                                      }),
                                      title: x.intl.string(x.t.U38qZm),
                                      confirmText: x.intl.string(x.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(C.ZP, {
                                            className: L.stackTrace,
                                            children: [
                                                (0, i.jsx)(C.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(C.ZP.Content, {
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
                T();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            w(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    T(),
                    h.Z.track(
                        k.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: I.n0.OverlayCrashed,
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
let P = l().throttle(
    () => {
        p.Z.increment(
            {
                name: _.V.APP_CRASHED,
                tags: ['reason:'.concat(d.v.UNHANDLED_JS_ERROR), 'level:'.concat(c.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class S extends a.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, m.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, y.QF)(),
            a = (0, y.Ht)();
        (0, f.lW)({
            type: k.BmY.DISPATCH,
            pid: (0, y.QF)(),
            token: a,
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
        let o = Z.Z.captureCrash(e, { extra: t });
        h.Z.track(k.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: 'fatal'
        }),
            P();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: a } = this.state;
        return null != n
            ? (0, i.jsx)(N, {
                  error: n,
                  info: a
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
let O = S;
