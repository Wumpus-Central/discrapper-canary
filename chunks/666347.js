"use strict";
n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(92674),
    l = n(258873),
    u = n(622242),
    c = n(731738),
    d = n(311907),
    _ = n(397927),
    f = n(544420),
    p = n(684013),
    h = n(964486),
    m = n(831062),
    g = n(976860),
    E = n(287809),
    A = n(144400),
    I = n(927813),
    T = n(777334),
    y = n(41984),
    S = n(302614),
    v = n(395011),
    C = n(672910),
    b = n(672396),
    N = n(652215),
    R = n(985018),
    O = n(209943);
let D = s().throttle(
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
    let { error: t, onLock: n, onReload: a, onDisable: s, onCrashDisabled: l } = e,
        u = i.useMemo(() => new o.SpringValue(1), []),
        c = i.useRef(null),
        [f, m] = i.useState(!1),
        [g, I] = i.useState(!1),
        T = (0, d.bG)([E.default], () => E.default.getCurrentUser());
    (0, h.Ay)(
        () => (
            (c.current = setTimeout(S, L)),
            p.A.track(N.HAw.NOTIFICATION_VIEWED, { notif_type: b.KS.OverlayCrashed }),
            () => {
                null != c.current && clearTimeout(c.current);
            }
        ),
    );
    let y = (T?.isStaff() ?? !1) || (T?.isStaffPersonal() ?? !1),
        S = i.useCallback(() => {
            u.set(0), null != c.current && clearTimeout(c.current), (c.current = null), n?.(), l?.();
        }, [u, n, l]),
        D = i.useCallback(
            (e) => {
                g ||
                    (I(!0),
                    n?.(),
                    p.A.track(
                        N.HAw.NOTIFICATION_CLICKED,
                        { notif_type: b.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => a?.(), 200));
            },
            [n, a, g],
        ),
        w = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (m(!0), null != c.current && clearTimeout(c.current)) : m(!1);
            },
            [m],
        ),
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), s?.();
            },
            [s, n],
        ),
        P = (0, d.bG)([v.A], () => v.A.getFocusedRunningGame()),
        M = f
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(_.Text, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: R.intl.string(R.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: O.Xh,
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
                                      className: O.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        k = f ? null : R.intl.string(R.t.oEJEFq);
    return (0, r.jsx)(C.$, {
        title: R.intl.string(R.t.U38qZj),
        body: M,
        hint: y ? k : void 0,
        confirmText: R.intl.string(R.t.a3HlgJ),
        cancelText: null != P ? R.intl.string(R.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(A.A, { width: 40, height: 40, className: O.Lo }),
        onNotificationClick: w,
        onConfirmClick: D,
        onCancelClick: null != P ? x : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: N.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: u,
        className: O.Pl,
        wrapperClassName: O.fl,
    });
}
class x extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, g.JK)().location;
        this.setState({ error: e, info: t });
        let r = v.A.getTargetPID();
        p.A.setOverlayCrashed(r, e), p.A.setInputLocked(!0, r);
        let i = (0, T.St)(e, y.Ue.OutOfProcess, { extra: { info: t, location: n } });
        p.A.track(N.HAw.APP_CRASHED, {
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
                ? (0, r.jsx)(S.A, {
                      className: O.wz,
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
                              p.A.updateOverlayState(e, y.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
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
let P = x;
