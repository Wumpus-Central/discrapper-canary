"use strict";
n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(517738),
    l = n(258873),
    u = n(622242),
    d = n(731738),
    c = n(311907),
    _ = n(834730),
    f = n(544420),
    E = n(684013),
    h = n(964486),
    p = n(831062),
    m = n(976860),
    g = n(287809),
    A = n(144400),
    I = n(927813),
    T = n(777334),
    S = n(41984),
    y = n(302614),
    N = n(395011),
    O = n(672910),
    R = n(672396),
    v = n(652215),
    C = n(985018),
    b = n(481234);
let D = a().throttle(
        () => {
            p.A.increment(
                { name: d.K.APP_CRASHED, tags: [`reason:${l.J.UNHANDLED_JS_ERROR}`, `level:${u.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    L = 10 * I.A.Millis.SECOND;
function w(e) {
    let { error: t, onLock: n, onReload: s, onDisable: a, onCrashDisabled: l } = e,
        u = i.useMemo(() => new o.SpringValue(1), []),
        d = i.useRef(null),
        [f, p] = i.useState(!1),
        [m, I] = i.useState(!1),
        T = (0, c.bG)([g.default], () => g.default.getCurrentUser());
    (0, h.Ay)(
        () => (
            (d.current = setTimeout(y, L)),
            E.A.track(v.HAw.NOTIFICATION_VIEWED, { notif_type: R.KS.OverlayCrashed }),
            () => {
                null != d.current && clearTimeout(d.current);
            }
        ),
    );
    let S = (T?.isStaff() ?? !1) || (T?.isStaffPersonal() ?? !1),
        y = i.useCallback(() => {
            u.set(0), null != d.current && clearTimeout(d.current), (d.current = null), n?.(), l?.();
        }, [u, n, l]),
        D = i.useCallback(
            (e) => {
                m ||
                    (I(!0),
                    n?.(),
                    E.A.track(
                        v.HAw.NOTIFICATION_CLICKED,
                        { notif_type: R.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => s?.(), 200));
            },
            [n, s, m],
        ),
        w = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (p(!0), null != d.current && clearTimeout(d.current)) : p(!1);
            },
            [p],
        ),
        M = i.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), a?.();
            },
            [a, n],
        ),
        P = (0, c.bG)([N.A], () => N.A.getFocusedRunningGame()),
        U = f
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(_.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: C.intl.string(C.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: b.Xh,
                          children: [
                              (0, r.jsx)(_.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, r.jsx)(_.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, r.jsx)("code", {
                                      className: b.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        k = f ? null : C.intl.string(C.t.oEJEFq);
    return (0, r.jsx)(O.$, {
        title: C.intl.string(C.t.U38qZj),
        body: U,
        hint: S ? k : void 0,
        confirmText: C.intl.string(C.t.a3HlgJ),
        cancelText: null != P ? C.intl.string(C.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(A.A, { width: 40, height: 40, className: b.Lo }),
        onNotificationClick: w,
        onConfirmClick: D,
        onCancelClick: null != P ? M : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: v.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: u,
        className: b.Pl,
        wrapperClassName: b.fl,
    });
}
class M extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, m.JK)().location;
        this.setState({ error: e, info: t });
        let r = N.A.getTargetPID();
        E.A.setOverlayCrashed(r, e), E.A.setInputLocked(!0, r);
        let i = (0, T.St)(e, S.Ue.OutOfProcess, { extra: { info: t, location: n } });
        E.A.track(v.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: "fatal",
        }),
            D(),
            (this.pid = r);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(y.A, {
                      className: b.wz,
                      children: (0, r.jsx)(w, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? N.A.getTargetPID();
                              E.A.setInputLocked(!0, e), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = N.A.getFocusedRunningGame();
                              null != e && f.Ay.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? N.A.getTargetPID();
                              E.A.updateOverlayState(e, S.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              E.A.setReloadOverlay(N.A.getTargetPID()), this.setState({ showError: !1 });
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", { className: t, children: e });
    }
}
let P = M;
