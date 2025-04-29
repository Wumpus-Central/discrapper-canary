n.d(t, { Z: () => L }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(392711),
    l = n.n(o),
    s = n(481752),
    c = n(818405),
    a = n(587158),
    u = n(286379),
    d = n(442837),
    h = n(481060),
    p = n(224706),
    m = n(13245),
    b = n(615287),
    f = n(493773),
    v = n(797614),
    g = n(703656),
    y = n(594174),
    O = n(254761),
    x = n(70956),
    C = n(960048),
    j = n(145597),
    w = n(333031),
    P = n(610394),
    k = n(380736),
    E = n(987650),
    Z = n(981631),
    S = n(388032),
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
let T = l().throttle(
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
    let { error: o, onLock: l, onReload: c, onDisable: a, onCrashDisabled: u } = e,
        p = r.useMemo(() => new s.SpringValue(1), []),
        b = r.useRef(null),
        [v, g] = r.useState(!1),
        [x, C] = r.useState(!1),
        j = (0, d.e7)([y.default], () => y.default.getCurrentUser());
    (0, f.ZP)(
        () => (
            (b.current = setTimeout(w, D)),
            m.Z.track(Z.rMx.NOTIFICATION_VIEWED, { notif_type: E.n0.OverlayCrashed }),
            () => {
                null != b.current && clearTimeout(b.current);
            }
        )
    );
    let w = r.useCallback(() => {
            p.set(0), null != b.current && clearTimeout(b.current), (b.current = null), null == l || l(), null == u || u();
        }, [p, l, u]),
        N = r.useCallback(
            (e) => {
                x ||
                    (C(!0),
                    null == l || l(),
                    m.Z.track(
                        Z.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: E.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == c ? void 0 : c()), 200));
            },
            [l, c, x]
        ),
        T = r.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (g(!0), null != b.current && clearTimeout(b.current)) : g(!1);
            },
            [g]
        ),
        M = r.useCallback(
            (e) => {
                e.stopPropagation(), null == l || l(), null == a || a();
            },
            [a, l]
        ),
        R = (0, d.e7)([P.ZP], () => P.ZP.getFocusedRunningGame()),
        L = v
            ? (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(h.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: S.intl.string(S.t.mn4eXF)
                      }),
                      (0, i.jsxs)('div', {
                          className: z.stackTraceCode,
                          children: [
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: o.message
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, i.jsx)('code', {
                                      className: z.code,
                                      children: (0, i.jsx)('pre', { children: o.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        A = v ? null : S.intl.string(S.t.oEJEFh),
        I = (null != (t = null == j ? void 0 : j.isStaff()) && t) || (null != (n = null == j ? void 0 : j.isStaffPersonal()) && n);
    return (0, i.jsx)(k.Y, {
        title: S.intl.string(S.t.U38qZm),
        body: L,
        hint: I ? A : void 0,
        confirmText: S.intl.string(S.t.a3HlgI),
        cancelText: null != R ? S.intl.string(S.t.qIYnPj) : void 0,
        icon: (0, i.jsx)(O.Z, {
            width: 40,
            height: 40,
            className: z.notificationIcon
        }),
        onNotificationClick: T,
        onConfirmClick: N,
        onCancelClick: null != R ? M : void 0,
        onDismissClick: l,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: Z._1z.ACTIVE,
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
        m.Z.setOverlayCrashed(i, e), m.Z.setInputLocked(!0, i);
        let r = C.Z.captureCrash(e, { extra: t });
        m.Z.track(Z.rMx.APP_CRASHED, {
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
                              m.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = P.ZP.getFocusedRunningGame();
                              null != e && p.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : (0, j.getPID)();
                              m.Z.updateOverlayState(t, b.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              m.Z.setReloadOverlay((0, j.getPID)()), this.setState({ showError: !1 });
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
