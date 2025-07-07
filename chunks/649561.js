(n.d(t, { Z: () => R }), n(388685), n(358797));
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n.n(s),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    h = n(481060),
    p = n(13245),
    f = n(615287),
    g = n(490029),
    m = n(797614),
    y = n(593481),
    O = n(703656),
    v = n(254761),
    _ = n(70956),
    b = n(145597),
    E = n(41534),
    S = n(692546),
    x = n(518084),
    C = n(987650),
    j = n(981631),
    Z = n(388032),
    I = n(137180);
function P(e, t, n) {
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
let w = 10 * _.Z.Millis.SECOND;
function N() {
    let e = (0, b.getPID)(),
        t = (0, b.getRPCAuthToken)();
    (0, g.lW)({
        type: j.BmY.DISPATCH,
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
class T extends r.PureComponent {
    componentDidMount() {
        ((this.notificationTimer = setTimeout(this.hideNotification, w)), p.Z.track(j.rMx.NOTIFICATION_VIEWED, { notif_type: C.n0.OverlayCrashed }));
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
            : (0, i.jsx)(S.Z, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, i.jsx)(h.f6W, {
                      theme: j.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(h.P3F, {
                              innerRef: this.contentDomRef,
                              className: l()(r, I.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(y.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(v.Z, {
                                          width: 40,
                                          height: 40,
                                          className: I.notificationIcon
                                      }),
                                      title: Z.intl.string(Z.t.U38qZm),
                                      confirmText: Z.intl.string(Z.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(x.ZP, {
                                            className: I.stackTrace,
                                            children: [
                                                (0, i.jsx)(x.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(x.ZP.Content, {
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
        (super(...e),
            P(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            P(this, 'notificationTimer', void 0),
            P(this, 'contentDomRef', r.createRef()),
            P(this, 'hideNotification', () => {
                N();
                let { notificationTimer: e } = this;
                (null != e && clearTimeout(e), (this.notificationTimer = null));
            }),
            P(this, 'handleReload', (e) => {
                (this.setState({ busy: !0 }),
                    N(),
                    p.Z.track(
                        j.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: C.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200));
            }),
            P(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                (null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 }));
            }));
    }
}
let k = a().throttle(
    () => {
        m.Z.increment(
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
class D extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, O.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, b.getPID)(),
            r = (0, b.getRPCAuthToken)();
        ((0, g.lW)({
            type: j.BmY.DISPATCH,
            pid: (0, b.getPID)(),
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
            setImmediate(() => window.addEventListener('click', N)));
        let o = (0, E.V)(e, f.gl.Hook, { extra: t });
        (p.Z.track(j.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: 'fatal'
        }),
            k());
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(T, {
                  error: n,
                  info: r
              })
            : (0, i.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        (super(...e),
            P(this, 'state', {
                error: null,
                info: null
            }));
    }
}
let R = D;
