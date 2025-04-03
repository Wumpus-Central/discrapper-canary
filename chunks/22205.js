n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(392711),
    l = n.n(o),
    s = n(642128),
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
    N = n(981631),
    S = n(388032),
    Z = n(138134);
function z(e, t, n) {
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
    W = 10 * x.Z.Millis.SECOND;
function D(e) {
    var t, n;
    let { error: o, onLock: l, onReload: c, onDisable: a, onCrashDisabled: u } = e,
        p = i.useMemo(() => new s.SpringValue(1), []),
        b = i.useRef(null),
        [v, g] = i.useState(!1),
        [x, C] = i.useState(!1),
        j = (0, d.e7)([y.default], () => y.default.getCurrentUser());
    (0, f.ZP)(
        () => (
            (b.current = setTimeout(w, W)),
            m.Z.track(N.rMx.NOTIFICATION_VIEWED, { notif_type: E.n0.OverlayCrashed }),
            () => {
                null != b.current && clearTimeout(b.current);
            }
        )
    );
    let w = i.useCallback(() => {
            p.set(0), null != b.current && clearTimeout(b.current), (b.current = null), null == l || l(), null == u || u();
        }, [p, l, u]),
        z = i.useCallback(
            (e) => {
                x ||
                    (C(!0),
                    null == l || l(),
                    m.Z.track(
                        N.rMx.NOTIFICATION_CLICKED,
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
        T = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (g(!0), null != b.current && clearTimeout(b.current)) : g(!1);
            },
            [g]
        ),
        D = i.useCallback(
            (e) => {
                e.stopPropagation(), null == l || l(), null == a || a();
            },
            [a, l]
        ),
        M = (0, d.e7)([P.ZP], () => P.ZP.getFocusedRunningGame()),
        R = v
            ? (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)(h.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: S.NW.string(S.t.mn4eXF)
                      }),
                      (0, r.jsxs)('div', {
                          className: Z.stackTraceCode,
                          children: [
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: o.message
                              }),
                              (0, r.jsx)(h.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, r.jsx)('code', {
                                      className: Z.code,
                                      children: (0, r.jsx)('pre', { children: o.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        L = v ? null : S.NW.string(S.t.oEJEFh),
        A = (null != (t = null == j ? void 0 : j.isStaff()) && t) || (null != (n = null == j ? void 0 : j.isStaffPersonal()) && n);
    return (0, r.jsx)(k.Y, {
        title: S.NW.string(S.t.U38qZm),
        body: R,
        hint: A ? L : void 0,
        confirmText: S.NW.string(S.t.a3HlgI),
        cancelText: null != M ? S.NW.string(S.t.qIYnPj) : void 0,
        icon: (0, r.jsx)(O.Z, {
            width: 40,
            height: 40,
            className: Z.notificationIcon
        }),
        onNotificationClick: T,
        onConfirmClick: z,
        onCancelClick: null != M ? D : void 0,
        onDismissClick: l,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: N._1z.ACTIVE,
        containerRef: null,
        contentOpacity: p,
        className: Z.errorNotificationContainer,
        wrapperClassName: Z.errorNotificationWrapper
    });
}
class M extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, j.getPID)();
        m.Z.setOverlayCrashed(r, e), m.Z.setInputLocked(!0, r);
        let i = C.Z.captureCrash(e, { extra: t });
        m.Z.track(N.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: 'fatal'
        }),
            T(),
            (this.pid = r);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(w.Z, {
                      className: Z.errorClickNotification,
                      children: (0, r.jsx)(D, {
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
            : (0, r.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        super(...e),
            z(this, 'state', {
                error: null,
                showError: !0,
                info: null
            }),
            z(this, 'pid', null);
    }
}
let R = M;
