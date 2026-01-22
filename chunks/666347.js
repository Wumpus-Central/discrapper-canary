n.d(t, {
    A: () => j,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(108531),
    l = n(258873),
    c = n(622242),
    u = n(731738),
    d = n(311907),
    f = n(397927),
    p = n(544420),
    _ = n(684013),
    h = n(964486),
    m = n(831062),
    g = n(976860),
    E = n(287809),
    b = n(144400),
    y = n(927813),
    O = n(777334),
    A = n(41984),
    v = n(302614),
    S = n(395011),
    I = n(672910),
    T = n(672396),
    C = n(652215),
    N = n(985018),
    R = n(209943);

function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let P = s().throttle(
        () => {
            m.A.increment(
                {
                    name: u.K.APP_CRASHED,
                    tags: ["reason:".concat(l.J.UNHANDLED_JS_ERROR), "level:".concat(c.k.FATAL)],
                },
                !0,
            );
        },
        100,
        {
            trailing: !1,
        },
    ),
    D = 10 * y.A.Millis.SECOND;

function x(e) {
    var t, n;
    let { error: a, onLock: s, onReload: l, onDisable: c, onCrashDisabled: u } = e,
        p = i.useMemo(() => new o.SpringValue(1), []),
        m = i.useRef(null),
        [g, y] = i.useState(!1),
        [O, A] = i.useState(!1),
        v = (0, d.bG)([E.default], () => E.default.getCurrentUser());
    (0, h.Ay)(
        () => (
            (m.current = setTimeout(w, D)),
            _.A.track(C.HAw.NOTIFICATION_VIEWED, {
                notif_type: T.KS.OverlayCrashed,
            }),
            () => {
                null != m.current && clearTimeout(m.current);
            }
        ),
    );
    let w = i.useCallback(() => {
            p.set(0),
                null != m.current && clearTimeout(m.current),
                (m.current = null),
                null == s || s(),
                null == u || u();
        }, [p, s, u]),
        P = i.useCallback(
            (e) => {
                O ||
                    (A(!0),
                    null == s || s(),
                    _.A.track(
                        C.HAw.NOTIFICATION_CLICKED,
                        {
                            notif_type: T.KS.OverlayCrashed,
                            action_type: "reload",
                        },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == l ? void 0 : l()), 200));
            },
            [s, l, O],
        ),
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (y(!0), null != m.current && clearTimeout(m.current)) : y(!1);
            },
            [y],
        ),
        L = i.useCallback(
            (e) => {
                e.stopPropagation(), null == s || s(), null == c || c();
            },
            [c, s],
        ),
        j = (0, d.bG)([S.A], () => S.A.getFocusedRunningGame()),
        M = g
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: N.intl.string(N.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: R.Xh,
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: a.message,
                              }),
                              (0, r.jsx)(f.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, r.jsx)("code", {
                                      className: R.aY,
                                      children: (0, r.jsx)("pre", {
                                          children: a.stack,
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        k = g ? null : N.intl.string(N.t.oEJEFq),
        U =
            (null != (t = null == v ? void 0 : v.isStaff()) && t) ||
            (null != (n = null == v ? void 0 : v.isStaffPersonal()) && n);
    return (0, r.jsx)(I.$, {
        title: N.intl.string(N.t.U38qZj),
        body: M,
        hint: U ? k : void 0,
        confirmText: N.intl.string(N.t.a3HlgJ),
        cancelText: null != j ? N.intl.string(N.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(b.A, {
            width: 40,
            height: 40,
            className: R.Lo,
        }),
        onNotificationClick: x,
        onConfirmClick: P,
        onCancelClick: null != j ? L : void 0,
        onDismissClick: s,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: C.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: p,
        className: R.Pl,
        wrapperClassName: R.fl,
    });
}
class L extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.JK)().location;
        this.setState({
            error: e,
            info: t,
        });
        let r = S.A.getTargetPID();
        _.A.setOverlayCrashed(r, e), _.A.setInputLocked(!0, r);
        let i = (0, O.St)(e, A.Ue.OutOfProcess, {
            extra: {
                info: t,
                location: n,
            },
        });
        _.A.track(C.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: "fatal",
        }),
            P(),
            (this.pid = r);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(v.A, {
                      className: R.wz,
                      children: (0, r.jsx)(x, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : S.A.getTargetPID();
                              _.A.setInputLocked(!0, t),
                                  this.setState({
                                      showError: !1,
                                  });
                          },
                          onDisable: () => {
                              let e = S.A.getFocusedRunningGame();
                              null != e && p.A.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : S.A.getTargetPID();
                              _.A.updateOverlayState(t, A.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({
                                      showError: !1,
                                  });
                          },
                          onReload: () => {
                              _.A.setReloadOverlay(S.A.getTargetPID()),
                                  this.setState({
                                      showError: !1,
                                  });
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", {
                  className: t,
                  children: e,
              });
    }
    constructor(...e) {
        super(...e),
            w(this, "state", {
                error: null,
                showError: !0,
                info: null,
            }),
            w(this, "pid", null);
    }
}
let j = L;
