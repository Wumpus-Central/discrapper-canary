n.d(t, { Z: () => T }), n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(392711),
    a = n.n(s),
    c = n(818405),
    d = n(587158),
    u = n(286379),
    h = n(481060),
    p = n(13245),
    f = n(490029),
    v = n(797614),
    m = n(593481),
    y = n(703656),
    O = n(254761),
    E = n(70956),
    g = n(960048),
    _ = n(145597),
    Z = n(692546),
    b = n(518084),
    P = n(987650),
    x = n(981631),
    C = n(388032),
    I = n(373612);
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
let k = 10 * E.Z.Millis.SECOND;
function j() {
    let e = (0, _.getPID)(),
        t = (0, _.getRPCAuthToken)();
    (0, f.lW)({
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
class w extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, k)), p.Z.track(x.rMx.NOTIFICATION_VIEWED, { notif_type: P.n0.OverlayCrashed });
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
            : (0, i.jsx)(Z.Z, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, i.jsx)(h.f6W, {
                      theme: x.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(h.P3F, {
                              innerRef: this.contentDomRef,
                              className: l()(r, I.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(m.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(O.Z, {
                                          width: 40,
                                          height: 40,
                                          className: I.notificationIcon
                                      }),
                                      title: C.NW.string(C.t.U38qZm),
                                      confirmText: C.NW.string(C.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(b.ZP, {
                                            className: I.stackTrace,
                                            children: [
                                                (0, i.jsx)(b.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(b.ZP.Content, {
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
            N(this, 'contentDomRef', r.createRef()),
            N(this, 'hideNotification', () => {
                j();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            N(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    j(),
                    p.Z.track(
                        x.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: P.n0.OverlayCrashed,
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
let L = a().throttle(
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
class A extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, y.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, _.getPID)(),
            r = (0, _.getRPCAuthToken)();
        (0, f.lW)({
            type: x.BmY.DISPATCH,
            pid: (0, _.getPID)(),
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
            setImmediate(() => window.addEventListener('click', j));
        let o = g.Z.captureCrash(e, { extra: t });
        p.Z.track(x.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: o,
            error_level: 'fatal'
        }),
            L();
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
            N(this, 'state', {
                error: null,
                info: null
            });
    }
}
let T = A;
