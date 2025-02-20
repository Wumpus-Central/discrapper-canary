n.d(t, { Z: () => D }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(392711),
    a = n.n(i),
    o = n(642128),
    s = n(818405),
    c = n(587158),
    u = n(286379),
    d = n(442837),
    f = n(481060),
    m = n(224706),
    p = n(13245),
    h = n(615287),
    v = n(493773),
    g = n(797614),
    b = n(703656),
    y = n(594174),
    E = n(254761),
    O = n(70956),
    S = n(960048),
    j = n(145597),
    x = n(333031),
    Z = n(610394),
    w = n(380736),
    C = n(987650),
    P = n(981631),
    N = n(388032),
    I = n(99537);
function R(e, t, n) {
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
let _ = a().throttle(
        () => {
            g.Z.increment(
                {
                    name: u.V.APP_CRASHED,
                    tags: ['reason:'.concat(s.v.UNHANDLED_JS_ERROR), 'level:'.concat(c.c.FATAL)]
                },
                !0
            );
        },
        100,
        { trailing: !1 }
    ),
    k = 10 * O.Z.Millis.SECOND;
function A(e) {
    var t, n;
    let { error: i, onLock: a, onReload: s, onDisable: c, onCrashDisabled: u } = e,
        m = l.useMemo(() => new o.SpringValue(1), []),
        h = l.useRef(null),
        [g, b] = l.useState(!1),
        [O, S] = l.useState(!1),
        j = (0, d.e7)([y.default], () => y.default.getCurrentUser());
    (0, v.ZP)(
        () => (
            (h.current = setTimeout(x, k)),
            p.Z.track(P.rMx.NOTIFICATION_VIEWED, { notif_type: C.n0.OverlayCrashed }),
            () => {
                null != h.current && clearTimeout(h.current);
            }
        )
    );
    let x = l.useCallback(() => {
            m.set(0), null != h.current && clearTimeout(h.current), (h.current = null), null == a || a(), null == u || u();
        }, [m, a, u]),
        R = l.useCallback(
            (e) => {
                !O &&
                    (S(!0),
                    null == a || a(),
                    p.Z.track(
                        P.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: C.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == s ? void 0 : s()), 200));
            },
            [a, s, O]
        ),
        _ = l.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (b(!0), null != h.current && clearTimeout(h.current)) : b(!1);
            },
            [b]
        ),
        A = l.useCallback(
            (e) => {
                e.stopPropagation(), null == a || a(), null == c || c();
            },
            [c, a]
        ),
        T = (0, d.e7)([Z.ZP], () => Z.ZP.getFocusedRunningGame()),
        D = g
            ? (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: N.NW.string(N.t.mn4eXF)
                      }),
                      (0, r.jsxs)('div', {
                          className: I.stackTraceCode,
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: i.message
                              }),
                              (0, r.jsx)(f.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, r.jsx)('code', {
                                      className: I.code,
                                      children: (0, r.jsx)('pre', { children: i.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        M = g ? null : N.NW.string(N.t.oEJEFh),
        L = (null !== (t = null == j ? void 0 : j.isStaff()) && void 0 !== t && t) || (null !== (n = null == j ? void 0 : j.isStaffPersonal()) && void 0 !== n && n);
    return (0, r.jsx)(w.Yj, {
        title: N.NW.string(N.t.U38qZm),
        body: D,
        hint: L ? M : void 0,
        confirmText: N.NW.string(N.t.a3HlgI),
        cancelText: null != T ? N.NW.string(N.t.qIYnPj) : void 0,
        icon: (0, r.jsx)(E.Z, {
            width: 40,
            height: 40,
            className: I.notificationIcon
        }),
        onNotificationClick: _,
        onConfirmClick: R,
        onCancelClick: null != T ? A : void 0,
        onDismissClick: a,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: P._1z.ACTIVE,
        containerRef: null,
        contentOpacity: m,
        className: I.errorNotificationContainer,
        wrapperClassName: I.errorNotificationWrapper
    });
}
class T extends l.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, b.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, j.QF)();
        p.Z.setOverlayCrashed(r, e), p.Z.setInputLocked(!0, r);
        let l = S.Z.captureCrash(e, { extra: t });
        p.Z.track(P.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: 'fatal'
        }),
            _(),
            (this.pid = r);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: l } = this.state;
        return null != n
            ? l
                ? (0, r.jsx)(x.Z, {
                      className: I.errorClickNotification,
                      children: (0, r.jsx)(A, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, j.QF)();
                              p.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = Z.ZP.getFocusedRunningGame();
                              null != e && m.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, j.QF)();
                              p.Z.updateOverlayState(t, h.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              p.Z.setReloadOverlay((0, j.QF)()), this.setState({ showError: !1 });
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
            R(this, 'state', {
                error: null,
                showError: !0,
                info: null
            }),
            R(this, 'pid', null);
    }
}
let D = T;
