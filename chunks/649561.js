n.d(t, { Z: () => A }), n(47120), n(177593);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(818405),
    d = n(587158),
    _ = n(286379),
    u = n(481060),
    f = n(13245),
    p = n(490029),
    h = n(797614),
    m = n(593481),
    v = n(703656),
    g = n(254761),
    y = n(70956),
    b = n(960048),
    E = n(145597),
    C = n(692546),
    O = n(518084),
    x = n(987650),
    I = n(981631),
    k = n(388032),
    Z = n(137180);
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
let N = 10 * y.Z.Millis.SECOND;
function w() {
    let e = (0, E.getPID)(),
        t = (0, E.getRPCAuthToken)();
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
class L extends r.PureComponent {
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, N)), f.Z.track(I.rMx.NOTIFICATION_VIEWED, { notif_type: x.n0.OverlayCrashed });
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
            : (0, i.jsx)(C.Z, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, i.jsx)(u.f6W, {
                      theme: I.BRd.DARK,
                      children: (r) =>
                          (0, i.jsxs)(u.P3F, {
                              innerRef: this.contentDomRef,
                              className: o()(r, Z.container),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(m.ZP, {
                                      expand: !0,
                                      icon: (0, i.jsx)(g.Z, {
                                          width: 40,
                                          height: 40,
                                          className: Z.notificationIcon
                                      }),
                                      title: k.NW.string(k.t.U38qZm),
                                      confirmText: k.NW.string(k.t.TzAl1d),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(O.ZP, {
                                            className: Z.stackTrace,
                                            children: [
                                                (0, i.jsx)(O.ZP.Bar, { children: 'Error Details' }),
                                                (0, i.jsx)(O.ZP.Content, {
                                                    className: Z.stackTraceCode,
                                                    children: (0, i.jsx)('code', {
                                                        className: Z.code,
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
            P(this, 'state', {
                showTrace: !1,
                busy: !1
            }),
            P(this, 'notificationTimer', void 0),
            P(this, 'contentDomRef', r.createRef()),
            P(this, 'hideNotification', () => {
                w();
                let { notificationTimer: e } = this;
                null != e && clearTimeout(e), (this.notificationTimer = null);
            }),
            P(this, 'handleReload', (e) => {
                this.setState({ busy: !0 }),
                    w(),
                    f.Z.track(
                        I.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: x.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => location.reload(!0), 200);
            }),
            P(this, 'handleNotificationClick', (e) => {
                e.stopPropagation();
                let { notificationTimer: t } = this;
                null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
            });
    }
}
let T = l().throttle(
    () => {
        h.Z.increment(
            {
                name: _.V.APP_CRASHED,
                tags: ['reason:'.concat(c.v.UNHANDLED_JS_ERROR), 'level:'.concat(d.c.FATAL)]
            },
            !0
        );
    },
    100,
    { trailing: !1 }
);
class j extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, v.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, E.getPID)(),
            r = (0, E.getRPCAuthToken)();
        (0, p.lW)({
            type: I.BmY.DISPATCH,
            pid: (0, E.getPID)(),
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
            setImmediate(() => window.addEventListener('click', w));
        let a = b.Z.captureCrash(e, { extra: t });
        f.Z.track(I.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            error_level: 'fatal'
        }),
            T();
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
            P(this, 'state', {
                error: null,
                info: null
            });
    }
}
let A = j;
