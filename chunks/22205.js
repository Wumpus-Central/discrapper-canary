n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
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
    _ = n(703656),
    I = n(594174),
    S = n(254761),
    x = n(70956),
    E = n(960048),
    C = n(145597),
    Z = n(333031),
    y = n(610394),
    b = n(380736),
    N = n(987650),
    T = n(981631),
    A = n(388032),
    w = n(806128);
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
let j = r().throttle(
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
    R = 10 * x.Z.Millis.SECOND;
function k(e) {
    var t, n;
    let { error: a, onLock: r, onReload: o, onDisable: c, onCrashDisabled: u } = e,
        f = l.useMemo(() => new s.SpringValue(1), []),
        h = l.useRef(null),
        [v, _] = l.useState(!1),
        [x, E] = l.useState(!1),
        C = (0, d.e7)([I.default], () => I.default.getCurrentUser());
    (0, g.ZP)(
        () => (
            (h.current = setTimeout(Z, R)),
            p.Z.track(T.rMx.NOTIFICATION_VIEWED, { notif_type: N.n0.OverlayCrashed }),
            () => {
                null != h.current && clearTimeout(h.current);
            }
        )
    );
    let Z = l.useCallback(() => {
            f.set(0), null != h.current && clearTimeout(h.current), (h.current = null), null == r || r(), null == u || u();
        }, [f, r, u]),
        P = l.useCallback(
            (e) => {
                !x &&
                    (E(!0),
                    null == r || r(),
                    p.Z.track(
                        T.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: N.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == o ? void 0 : o()), 200));
            },
            [r, o, x]
        ),
        j = l.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (_(!0), null != h.current && clearTimeout(h.current)) : _(!1);
            },
            [_]
        ),
        k = l.useCallback(
            (e) => {
                e.stopPropagation(), null == r || r(), null == c || c();
            },
            [c, r]
        ),
        L = (0, d.e7)([y.ZP], () => y.ZP.getFocusedRunningGame()),
        O = v
            ? (0, i.jsxs)('div', {
                  children: [
                      (0, i.jsx)(m.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: A.intl.string(A.t.mn4eXF)
                      }),
                      (0, i.jsxs)('div', {
                          className: w.stackTraceCode,
                          children: [
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: a.message
                              }),
                              (0, i.jsx)(m.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, i.jsx)('code', {
                                      className: w.code,
                                      children: (0, i.jsx)('pre', { children: a.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        M = v ? null : A.intl.string(A.t.oEJEFh),
        D = (null !== (t = null == C ? void 0 : C.isStaff()) && void 0 !== t && t) || (null !== (n = null == C ? void 0 : C.isStaffPersonal()) && void 0 !== n && n);
    return (0, i.jsx)(b.Yj, {
        title: A.intl.string(A.t.U38qZm),
        body: O,
        hint: D ? M : void 0,
        confirmText: A.intl.string(A.t.a3HlgI),
        cancelText: null != L ? A.intl.string(A.t.qIYnPj) : void 0,
        icon: (0, i.jsx)(S.Z, {
            width: 40,
            height: 40,
            className: w.notificationIcon
        }),
        onNotificationClick: j,
        onConfirmClick: P,
        onCancelClick: null != L ? k : void 0,
        onDismissClick: r,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: T._1z.ACTIVE,
        containerRef: null,
        contentOpacity: f,
        className: w.errorNotificationContainer,
        wrapperClassName: w.errorNotificationWrapper
    });
}
class L extends l.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, _.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let i = (0, C.QF)();
        p.Z.setOverlayCrashed(i, e), p.Z.setInputLocked(!0, i);
        let l = E.Z.captureCrash(e, { extra: t });
        p.Z.track(T.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: 'fatal'
        }),
            j(),
            (this.pid = i);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: l } = this.state;
        return null != n
            ? l
                ? (0, i.jsx)(Z.Z, {
                      className: w.errorClickNotification,
                      children: (0, i.jsx)(k, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, C.QF)();
                              p.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = y.ZP.getFocusedRunningGame();
                              null != e && f.Z.toggleOverlay(e, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, C.QF)();
                              p.Z.updateOverlayState(t, h.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              p.Z.setReloadOverlay((0, C.QF)()), this.setState({ showError: !1 });
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
            P(this, 'state', {
                error: null,
                showError: !0,
                info: null
            }),
            P(this, 'pid', null);
    }
}
let O = L;
