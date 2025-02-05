n.d(t, { Z: () => M }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(642128),
    o = n(818405),
    u = n(587158),
    c = n(286379),
    d = n(442837),
    m = n(481060),
    f = n(224706),
    h = n(13245),
    p = n(615287),
    v = n(493773),
    g = n(797614),
    E = n(703656),
    Z = n(594174),
    x = n(254761),
    S = n(70956),
    C = n(960048),
    b = n(145597),
    I = n(333031),
    _ = n(610394),
    N = n(380736),
    R = n(987650),
    y = n(981631),
    T = n(388032),
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
let A = a().throttle(
        () => {
            g.Z.increment(
                {
                    name: c.V.APP_CRASHED,
                    tags: ['reason:'.concat(o.v.UNHANDLED_JS_ERROR), 'level:'.concat(u.c.FATAL)]
                },
                !0
            );
        },
        100,
        { trailing: !1 }
    ),
    O = 10 * S.Z.Millis.SECOND;
function P(e) {
    var t, n;
    let { error: r, onLock: a, onReload: o, onDisable: u, onCrashDisabled: c } = e,
        f = i.useMemo(() => new s.SpringValue(1), []),
        p = i.useRef(null),
        [g, E] = i.useState(!1),
        [S, C] = i.useState(!1),
        b = (0, d.e7)([Z.default], () => Z.default.getCurrentUser());
    (0, v.ZP)(
        () => (
            (p.current = setTimeout(I, O)),
            h.Z.track(y.rMx.NOTIFICATION_VIEWED, { notif_type: R.n0.OverlayCrashed }),
            () => {
                null != p.current && clearTimeout(p.current);
            }
        )
    );
    let I = i.useCallback(() => {
            f.set(0), null != p.current && clearTimeout(p.current), (p.current = null), null == a || a(), null == c || c();
        }, [f, a, c]),
        w = i.useCallback(
            (e) => {
                !S &&
                    (C(!0),
                    null == a || a(),
                    h.Z.track(
                        y.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: R.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == o ? void 0 : o()), 200));
            },
            [a, o, S]
        ),
        A = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (E(!0), null != p.current && clearTimeout(p.current)) : E(!1);
            },
            [E]
        ),
        P = i.useCallback(
            (e) => {
                e.stopPropagation(), null == a || a(), null == u || u();
            },
            [u, a]
        ),
        k = (0, d.e7)([_.ZP], () => _.ZP.getFocusedRunningGame()),
        M = g
            ? (0, l.jsxs)('div', {
                  children: [
                      (0, l.jsx)(m.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: T.intl.string(T.t.mn4eXF)
                      }),
                      (0, l.jsxs)('div', {
                          className: j.stackTraceCode,
                          children: [
                              (0, l.jsx)(m.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: r.message
                              }),
                              (0, l.jsx)(m.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, l.jsx)('code', {
                                      className: j.code,
                                      children: (0, l.jsx)('pre', { children: r.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        D = g ? null : T.intl.string(T.t.oEJEFh),
        L = (null !== (t = null == b ? void 0 : b.isStaff()) && void 0 !== t && t) || (null !== (n = null == b ? void 0 : b.isStaffPersonal()) && void 0 !== n && n);
    return (0, l.jsx)(N.Yj, {
        title: T.intl.string(T.t.U38qZm),
        body: M,
        hint: L ? D : void 0,
        confirmText: T.intl.string(T.t.a3HlgI),
        cancelText: null != k ? T.intl.string(T.t.qIYnPj) : void 0,
        icon: (0, l.jsx)(x.Z, {
            width: 40,
            height: 40,
            className: j.notificationIcon
        }),
        onNotificationClick: A,
        onConfirmClick: w,
        onCancelClick: null != k ? P : void 0,
        onDismissClick: a,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: y._1z.ACTIVE,
        containerRef: null,
        contentOpacity: f,
        className: j.errorNotificationContainer,
        wrapperClassName: j.errorNotificationWrapper
    });
}
class k extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, E.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let l = (0, b.QF)();
        h.Z.setOverlayCrashed(l, e), h.Z.setInputLocked(!0, l);
        let i = C.Z.captureCrash(e, { extra: t });
        h.Z.track(y.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: 'fatal'
        }),
            A(),
            (this.pid = l);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, l.jsx)(I.Z, {
                      className: j.errorClickNotification,
                      children: (0, l.jsx)(P, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, b.QF)();
                              h.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = _.ZP.getFocusedRunningGame();
                              null != e && f.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null !== (e = this.pid) && void 0 !== e ? e : (0, b.QF)();
                              h.Z.updateOverlayState(t, p.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              h.Z.setReloadOverlay((0, b.QF)()), this.setState({ showError: !1 });
                          }
                      })
                  })
                : null
            : (0, l.jsx)('div', {
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
let M = k;
