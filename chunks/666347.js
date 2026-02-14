"use strict";
n.d(t, { A: () => M });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(522160),
    l = n(258873),
    u = n(622242),
    c = n(731738),
    d = n(311907),
    _ = n(397927),
    f = n(544420),
    h = n(684013),
    p = n(964486),
    g = n(831062),
    E = n(976860),
    A = n(287809),
    I = n(144400),
    T = n(927813),
    y = n(777334),
    S = n(41984),
    v = n(302614),
    C = n(395011),
    b = n(672910),
    N = n(672396),
    R = n(652215),
    O = n(985018),
    D = n(209943);
let L = s().throttle(
        () => {
            g.A.increment(
                { name: c.K.APP_CRASHED, tags: [`reason:${l.J.UNHANDLED_JS_ERROR}`, `level:${u.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    w = 10 * T.A.Millis.SECOND;
function x(e) {
    let { error: t, onLock: n, onReload: a, onDisable: s, onCrashDisabled: l } = e,
        u = i.useMemo(() => new o.SpringValue(1), []),
        c = i.useRef(null),
        [f, g] = i.useState(!1),
        [E, T] = i.useState(!1),
        y = (0, d.bG)([A.default], () => A.default.getCurrentUser());
    (0, p.Ay)(
        () => (
            (c.current = setTimeout(v, w)),
            h.A.track(R.HAw.NOTIFICATION_VIEWED, { notif_type: N.KS.OverlayCrashed }),
            () => {
                null != c.current && clearTimeout(c.current);
            }
        ),
    );
    let S = (y?.isStaff() ?? !1) || (y?.isStaffPersonal() ?? !1),
        v = i.useCallback(() => {
            u.set(0), null != c.current && clearTimeout(c.current), (c.current = null), n?.(), l?.();
        }, [u, n, l]),
        L = i.useCallback(
            (e) => {
                E ||
                    (T(!0),
                    n?.(),
                    h.A.track(
                        R.HAw.NOTIFICATION_CLICKED,
                        { notif_type: N.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => a?.(), 200));
            },
            [n, a, E],
        ),
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (g(!0), null != c.current && clearTimeout(c.current)) : g(!1);
            },
            [g],
        ),
        P = i.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), s?.();
            },
            [s, n],
        ),
        M = (0, d.bG)([C.A], () => C.A.getFocusedRunningGame()),
        k = f
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(_.Text, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: O.intl.string(O.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: D.Xh,
                          children: [
                              (0, r.jsx)(_.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: t.message,
                              }),
                              (0, r.jsx)(_.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, r.jsx)("code", {
                                      className: D.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        U = f ? null : O.intl.string(O.t.oEJEFq);
    return (0, r.jsx)(b.$, {
        title: O.intl.string(O.t.U38qZj),
        body: k,
        hint: S ? U : void 0,
        confirmText: O.intl.string(O.t.a3HlgJ),
        cancelText: null != M ? O.intl.string(O.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(I.A, { width: 40, height: 40, className: D.Lo }),
        onNotificationClick: x,
        onConfirmClick: L,
        onCancelClick: null != M ? P : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: R.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: u,
        className: D.Pl,
        wrapperClassName: D.fl,
    });
}
class P extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, E.JK)().location;
        this.setState({ error: e, info: t });
        let r = C.A.getTargetPID();
        h.A.setOverlayCrashed(r, e), h.A.setInputLocked(!0, r);
        let i = (0, y.St)(e, S.Ue.OutOfProcess, { extra: { info: t, location: n } });
        h.A.track(R.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: "fatal",
        }),
            L(),
            (this.pid = r);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(v.A, {
                      className: D.wz,
                      children: (0, r.jsx)(x, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? C.A.getTargetPID();
                              h.A.setInputLocked(!0, e), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = C.A.getFocusedRunningGame();
                              null != e && f.A.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? C.A.getTargetPID();
                              h.A.updateOverlayState(e, S.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              h.A.setReloadOverlay(C.A.getTargetPID()), this.setState({ showError: !1 });
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", { className: t, children: e });
    }
}
let M = P;
