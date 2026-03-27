"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(880013),
    l = n(258873),
    u = n(622242),
    c = n(731738),
    d = n(311907),
    _ = n(397927),
    f = n(544420),
    p = n(684013),
    h = n(964486),
    m = n(831062),
    E = n(976860),
    g = n(287809),
    A = n(144400),
    I = n(927813),
    T = n(777334),
    S = n(41984),
    y = n(302614),
    v = n(395011),
    N = n(672910),
    C = n(672396),
    R = n(652215),
    O = n(985018),
    b = n(67621);
let D = a().throttle(
        () => {
            m.A.increment(
                { name: c.K.APP_CRASHED, tags: [`reason:${l.J.UNHANDLED_JS_ERROR}`, `level:${u.k.FATAL}`] },
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
        c = i.useRef(null),
        [f, m] = i.useState(!1),
        [E, I] = i.useState(!1),
        T = (0, d.bG)([g.default], () => g.default.getCurrentUser());
    (0, h.Ay)(
        () => (
            (c.current = setTimeout(y, L)),
            p.A.track(R.HAw.NOTIFICATION_VIEWED, { notif_type: C.KS.OverlayCrashed }),
            () => {
                null != c.current && clearTimeout(c.current);
            }
        ),
    );
    let S = (T?.isStaff() ?? !1) || (T?.isStaffPersonal() ?? !1),
        y = i.useCallback(() => {
            u.set(0), null != c.current && clearTimeout(c.current), (c.current = null), n?.(), l?.();
        }, [u, n, l]),
        D = i.useCallback(
            (e) => {
                E ||
                    (I(!0),
                    n?.(),
                    p.A.track(
                        R.HAw.NOTIFICATION_CLICKED,
                        { notif_type: C.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => s?.(), 200));
            },
            [n, s, E],
        ),
        w = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (m(!0), null != c.current && clearTimeout(c.current)) : m(!1);
            },
            [m],
        ),
        M = i.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), a?.();
            },
            [a, n],
        ),
        x = (0, d.bG)([v.A], () => v.A.getFocusedRunningGame()),
        P = f
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(_.Text, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: O.intl.string(O.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: b.Xh,
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
                                      className: b.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        k = f ? null : O.intl.string(O.t.oEJEFq);
    return (0, r.jsx)(N.$, {
        title: O.intl.string(O.t.U38qZj),
        body: P,
        hint: S ? k : void 0,
        confirmText: O.intl.string(O.t.a3HlgJ),
        cancelText: null != x ? O.intl.string(O.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(A.A, { width: 40, height: 40, className: b.Lo }),
        onNotificationClick: w,
        onConfirmClick: D,
        onCancelClick: null != x ? M : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: R.yFH.ACTIVE,
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
        let n = (0, E.JK)().location;
        this.setState({ error: e, info: t });
        let r = v.A.getTargetPID();
        p.A.setOverlayCrashed(r, e), p.A.setInputLocked(!0, r);
        let i = (0, T.St)(e, S.Ue.OutOfProcess, { extra: { info: t, location: n } });
        p.A.track(R.HAw.APP_CRASHED, {
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
                              let e = this.pid ?? v.A.getTargetPID();
                              p.A.setInputLocked(!0, e), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = v.A.getFocusedRunningGame();
                              null != e && f.A.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? v.A.getTargetPID();
                              p.A.updateOverlayState(e, S.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              p.A.setReloadOverlay(v.A.getTargetPID()), this.setState({ showError: !1 });
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", { className: t, children: e });
    }
}
let x = M;
