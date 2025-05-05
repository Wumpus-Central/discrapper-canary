n.d(t, { Z: () => D }), n(388685), n(358797);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    o = n.n(s),
    l = n(392711),
    a = n.n(l),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    h = n(481060),
    p = n(13245),
    f = n(490029),
    g = n(797614),
    m = n(593481),
    y = n(703656),
    v = n(254761),
    _ = n(70956),
    O = n(960048),
    b = n(145597),
    x = n(692546),
    E = n(518084),
    S = n(987650),
    C = n(981631),
    Z = n(388032),
    j = n(137180);
function I(e, t, n) {
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
let P = 10 * _.Z.Millis.SECOND;
function N() {
    let e = (0, b.getPID)(),
        t = (0, b.getRPCAuthToken)();
    (0, f.lW)({
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
class w extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, P)), p.Z.track(C.rMx.NOTIFICATION_VIEWED, { notif_type: S.n0.OverlayCrashed });
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
                  children: (0, i.jsx)(h.f6W, {
                      theme: C.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(h.P3F, {
                              innerRef: this.contentDomRef,
                              className: o()(r, j.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(m.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(v.Z, {
                                          width: 40,
                                          height: 40,
                                          className: j.notificationIcon
                                      }),
                                      title: Z.intl.string(Z.t.U38qZm),
                                      confirmText: Z.intl.string(Z.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(E.ZP, {
                                            className: j.stackTrace,
                                            children: [
                                                (0, i.jsx)(E.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(E.ZP.Content, {
                                                    className: j.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: j.code,
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
            I(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            I(this, 'notificationTimer', void 0),
            I(this, 'contentDomRef', r.createRef()),
            I(this, 'hideNotification', () => {
                N();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            I(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    N(),
                    p.Z.track(
                        C.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: S.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            I(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let T = a().throttle(
    () => {
        g.Z.increment(
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
class k extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, y.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, b.getPID)(),
            r = (0, b.getRPCAuthToken)();
        (0, f.lW)({
            type: C.BmY.DISPATCH,
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
            setImmediate(() => window.addEventListener('click', N));
        let s = O.Z.captureCrash(e, { extra: t });
        p.Z.track(C.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: s,
            error_level: 'fatal'
        }),
            T();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: r } = this.state;
        return null != n
            ? (0, i.jsx)(w, {
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
            I(this, 'state', {
                error: null,
                info: null
            });
    }
}
let D = k;
