n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(642128),
    o = n(818405),
    c = n(587158),
    u = n(286379),
    d = n(442837),
    m = n(481060),
    f = n(224706),
    p = n(13245),
    h = n(615287),
    g = n(493773),
    v = n(797614),
    S = n(703656),
    I = n(594174),
    x = n(254761),
    _ = n(70956),
    C = n(960048),
    b = n(145597),
    E = n(333031),
    y = n(610394),
    Z = n(380736),
    T = n(987650),
    N = n(981631),
    A = n(388032),
    j = n(806128);
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
let P = a().throttle(
        () => {
            v.Z.increment(
                {
                    name: u.V.APP_CRASHED,
                    tags: ['reason:'.concat(o.v.UNHANDLED_JS_ERROR), 'level:'.concat(c.c.FATAL)]
                },
                !0
            );
        },
        100,
        { trailing: !1 }
    ),
    R = 10 * _.Z.Millis.SECOND;
function O(e) {
    var t, n;
    let { error: r, onLock: a, onReload: o, onDisable: c, onCrashDisabled: u } = e,
        f = l.useMemo(() => new s.SpringValue(1), []),
        h = l.useRef(null),
        [v, S] = l.useState(!1),
        [_, C] = l.useState(!1),
        b = (0, d.e7)([I.default], () => I.default.getCurrentUser());
    (0, g.Z)(
        () => (
            (h.current = setTimeout(E, R)),
            p.Z.track(N.rMx.NOTIFICATION_VIEWED, { notif_type: T.n0.OverlayCrashed }),
            () => {
                null != h.current && clearTimeout(h.current);
            }
        )
    );
    let E = l.useCallback(() => {
            f.set(0), null != h.current && clearTimeout(h.current), (h.current = null), null == a || a(), null == u || u();
        }, [f, a, u]),
        w = l.useCallback(
            (e) => {
                if (!_)
                    C(!0),
                        null == a || a(),
                        p.Z.track(
                            N.rMx.NOTIFICATION_CLICKED,
                            {
                                notif_type: T.n0.OverlayCrashed,
                                action_type: 'reload'
                            },
                            !0
                        ),
                        e.stopPropagation(),
                        setTimeout(() => (null == o ? void 0 : o()), 200);
            },
            [a, o, _]
        ),
        P = l.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (S(!0), null != h.current && clearTimeout(h.current)) : S(!1);
            },
            [S]
        ),
        O = l.useCallback(
            (e) => {
                e.stopPropagation(), null == a || a(), null == c || c();
            },
            [c, a]
        ),
        k = (0, d.e7)([y.ZP], () => y.ZP.getFocusedRunningGame()),
        M = v
            ? (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(m.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: A.intl.string(A.t.mn4eXF)
                      }),
                      (0, i.jsxs)('div', {
                          className: j.stackTraceCode,
                          children: [
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: r.message
                              }),
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, i.jsx)('code', {
                                      className: j.code,
                                      children: (0, i.jsx)('pre', { children: r.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        L = v ? null : A.intl.string(A.t.oEJEFh),
        D = (null !== (t = null == b ? void 0 : b.isStaff()) && void 0 !== t && t) || (null !== (n = null == b ? void 0 : b.isStaffPersonal()) && void 0 !== n && n);
    return (0, i.jsx)(Z.Yj, {
        title: A.intl.string(A.t.U38qZm),
        body: M,
        hint: D ? L : void 0,
        confirmText: A.intl.string(A.t.a3HlgI),
        cancelText: null != k ? A.intl.string(A.t.qIYnPj) : void 0,
        icon: (0, i.jsx)(x.Z, {
            width: 40,
            height: 40,
            className: j.notificationIcon
        }),
        onNotificationClick: P,
        onConfirmClick: w,
        onCancelClick: null != k ? O : void 0,
        onDismissClick: a,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: N._1z.ACTIVE,
        containerRef: null,
        contentOpacity: f,
        className: j.errorNotificationContainer,
        wrapperClassName: j.errorNotificationWrapper
    });
}
class k extends l.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, S.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, b.QF)();
        p.Z.setOverlayCrashed(i, e), p.Z.setInputLocked(!0, i);
        let l = C.Z.captureCrash(e, { extra: t });
        p.Z.track(N.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: 'fatal'
        }),
            P(),
            (this.pid = i);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: l } = this.state;
        if (null != n)
            return l
                ? (0, i.jsx)(E.Z, {
                      className: j.errorClickNotification,
                      children: (0, i.jsx)(O, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, b.QF)();
                              p.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = y.ZP.getFocusedRunningGame();
                              null != e && f.Z.toggleOverlay(e, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, b.QF)();
                              p.Z.updateOverlayState(t, h.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              p.Z.setReloadOverlay((0, b.QF)()), this.setState({ showError: !1 });
                          }
                      })
                  })
                : null;
        return (0, i.jsx)('div', {
            className: t,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', {
                error: null,
                showError: !0,
                info: null
            }),
            w(this, 'pid', null);
    }
}
t.Z = k;
