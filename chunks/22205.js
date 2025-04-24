n.d(t, { Z: () => L }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    o = n.n(l),
    s = n(272573),
    c = n(818405),
    a = n(587158),
    u = n(286379),
    d = n(442837),
    h = n(481060),
    p = n(224706),
    f = n(13245),
    m = n(615287),
    b = n(493773),
    v = n(797614),
    g = n(703656),
    y = n(594174),
    O = n(254761),
    x = n(70956),
    C = n(960048),
    j = n(145597),
    w = n(333031),
    k = n(610394),
    P = n(380736),
    E = n(987650),
    S = n(981631),
    Z = n(388032),
    z = n(138134);
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
let T = o().throttle(
        () => {
            v.Z.increment(
                {
                    name: u.V.APP_CRASHED,
                    tags: ['reason:'.concat(c.v.UNHANDLED_JS_ERROR), 'level:'.concat(a.c.FATAL)]
                },
                !0
            );
        },
        100,
        { trailing: !1 }
    ),
    D = 10 * x.Z.Millis.SECOND;
function M(e) {
    var t, n;
    let { error: l, onLock: o, onReload: c, onDisable: a, onCrashDisabled: u } = e,
        p = r.useMemo(() => new s.SpringValue(1), []),
        m = r.useRef(null),
        [v, g] = r.useState(!1),
        [x, C] = r.useState(!1),
        j = (0, d.e7)([y.default], () => y.default.getCurrentUser());
    (0, b.ZP)(
        () => (
            (m.current = setTimeout(w, D)),
            f.Z.track(S.rMx.NOTIFICATION_VIEWED, { notif_type: E.n0.OverlayCrashed }),
            () => {
                null != m.current && clearTimeout(m.current);
            }
        )
    );
    let w = r.useCallback(() => {
            p.set(0), null != m.current && clearTimeout(m.current), (m.current = null), null == o || o(), null == u || u();
        }, [p, o, u]),
        N = r.useCallback(
            (e) => {
                x ||
                    (C(!0),
                    null == o || o(),
                    f.Z.track(
                        S.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: E.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == c ? void 0 : c()), 200));
            },
            [o, c, x]
        ),
        T = r.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (g(!0), null != m.current && clearTimeout(m.current)) : g(!1);
            },
            [g]
        ),
        M = r.useCallback(
            (e) => {
                e.stopPropagation(), null == o || o(), null == a || a();
            },
            [a, o]
        ),
        R = (0, d.e7)([k.default], () => k.default.getFocusedRunningGame()),
        L = v
            ? (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(h.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: Z.intl.string(Z.t.mn4eXF)
                      }),
                      (0, i.jsxs)('div', {
                          className: z.stackTraceCode,
                          children: [
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: l.message
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, i.jsx)('code', {
                                      className: z.code,
                                      children: (0, i.jsx)('pre', { children: l.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        A = v ? null : Z.intl.string(Z.t.oEJEFh),
        I = (null != (t = null == j ? void 0 : j.isStaff()) && t) || (null != (n = null == j ? void 0 : j.isStaffPersonal()) && n);
    return (0, i.jsx)(P.Y, {
        title: Z.intl.string(Z.t.U38qZm),
        body: L,
        hint: I ? A : void 0,
        confirmText: Z.intl.string(Z.t.a3HlgI),
        cancelText: null != R ? Z.intl.string(Z.t.qIYnPj) : void 0,
        icon: (0, i.jsx)(O.Z, {
            width: 40,
            height: 40,
            className: z.notificationIcon
        }),
        onNotificationClick: T,
        onConfirmClick: N,
        onCancelClick: null != R ? M : void 0,
        onDismissClick: o,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: S._1z.ACTIVE,
        containerRef: null,
        contentOpacity: p,
        className: z.errorNotificationContainer,
        wrapperClassName: z.errorNotificationWrapper
    });
}
class R extends r.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, j.getPID)();
        f.Z.setOverlayCrashed(i, e), f.Z.setInputLocked(!0, i);
        let r = C.Z.captureCrash(e, { extra: t });
        f.Z.track(S.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            error_level: 'fatal'
        }),
            T(),
            (this.pid = i);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: r } = this.state;
        return null != n
            ? r
                ? (0, i.jsx)(w.Z, {
                      className: z.errorClickNotification,
                      children: (0, i.jsx)(M, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : (0, j.getPID)();
                              f.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = k.default.getFocusedRunningGame();
                              null != e && p.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : (0, j.getPID)();
                              f.Z.updateOverlayState(t, m.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              f.Z.setReloadOverlay((0, j.getPID)()), this.setState({ showError: !1 });
                          }
                      })
                  })
                : null
            : (0, i.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        super(...e),
            N(this, 'state', {
                error: null,
                showError: !0,
                info: null
            }),
            N(this, 'pid', null);
    }
}
let L = R;
