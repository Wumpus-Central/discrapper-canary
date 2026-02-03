n.d(t, {
    A: () => M,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    o = n.n(a),
    s = n(92674),
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
    y = n(144400),
    b = n(927813),
    O = n(777334),
    v = n(41984),
    A = n(302614),
    I = n(395011),
    S = n(672910),
    T = n(672396),
    C = n(652215),
    N = n(985018),
    w = n(209943);

function R(e, t, n) {
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
let P = o().throttle(
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
    D = 10 * b.A.Millis.SECOND;

function L(e) {
    var t, n;
    let { error: a, onLock: o, onReload: l, onDisable: c, onCrashDisabled: u } = e,
        p = i.useMemo(() => new s.SpringValue(1), []),
        m = i.useRef(null),
        [g, b] = i.useState(!1),
        [O, v] = i.useState(!1),
        A = (0, d.bG)([E.default], () => E.default.getCurrentUser());
    (0, h.Ay)(
        () => (
            (m.current = setTimeout(P, D)),
            _.A.track(C.HAw.NOTIFICATION_VIEWED, {
                notif_type: T.KS.OverlayCrashed,
            }),
            () => {
                null != m.current && clearTimeout(m.current);
            }
        ),
    );
    let R =
            (null != (t = null == A ? void 0 : A.isStaff()) && t) ||
            (null != (n = null == A ? void 0 : A.isStaffPersonal()) && n),
        P = i.useCallback(() => {
            p.set(0),
                null != m.current && clearTimeout(m.current),
                (m.current = null),
                null == o || o(),
                null == u || u();
        }, [p, o, u]),
        L = i.useCallback(
            (e) => {
                O ||
                    (v(!0),
                    null == o || o(),
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
            [o, l, O],
        ),
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (b(!0), null != m.current && clearTimeout(m.current)) : b(!1);
            },
            [b],
        ),
        M = i.useCallback(
            (e) => {
                e.stopPropagation(), null == o || o(), null == c || c();
            },
            [c, o],
        ),
        j = (0, d.bG)([I.A], () => I.A.getFocusedRunningGame()),
        k = g
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: N.intl.string(N.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: w.Xh,
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
                                      className: w.aY,
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
        U = g ? null : N.intl.string(N.t.oEJEFq);
    return (0, r.jsx)(S.$, {
        title: N.intl.string(N.t.U38qZj),
        body: k,
        hint: R ? U : void 0,
        confirmText: N.intl.string(N.t.a3HlgJ),
        cancelText: null != j ? N.intl.string(N.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(y.A, {
            width: 40,
            height: 40,
            className: w.Lo,
        }),
        onNotificationClick: x,
        onConfirmClick: L,
        onCancelClick: null != j ? M : void 0,
        onDismissClick: o,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: C.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: p,
        className: w.Pl,
        wrapperClassName: w.fl,
    });
}
class x extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.JK)().location;
        this.setState({
            error: e,
            info: t,
        });
        let r = I.A.getTargetPID();
        _.A.setOverlayCrashed(r, e), _.A.setInputLocked(!0, r);
        let i = (0, O.St)(e, v.Ue.OutOfProcess, {
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
                ? (0, r.jsx)(A.A, {
                      className: w.wz,
                      children: (0, r.jsx)(L, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : I.A.getTargetPID();
                              _.A.setInputLocked(!0, t),
                                  this.setState({
                                      showError: !1,
                                  });
                          },
                          onDisable: () => {
                              let e = I.A.getFocusedRunningGame();
                              null != e && p.A.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : I.A.getTargetPID();
                              _.A.updateOverlayState(t, v.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({
                                      showError: !1,
                                  });
                          },
                          onReload: () => {
                              _.A.setReloadOverlay(I.A.getTargetPID()),
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
            R(this, "state", {
                error: null,
                showError: !0,
                info: null,
            }),
            R(this, "pid", null);
    }
}
let M = x;
