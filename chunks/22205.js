n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(467721),
    l = n(818405),
    c = n(587158),
    u = n(286379),
    d = n(442837),
    f = n(481060),
    p = n(224706),
    _ = n(13245),
    m = n(493773),
    h = n(797614),
    g = n(703656),
    E = n(594174),
    b = n(254761),
    y = n(70956),
    O = n(338388),
    v = n(837268),
    S = n(333031),
    I = n(610394),
    T = n(380736),
    C = n(987650),
    A = n(981631),
    N = n(388032),
    P = n(534887);
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
let D = o().throttle(
        () => {
            h.Z.increment(
                {
                    name: u.V.APP_CRASHED,
                    tags: ["reason:".concat(l.v.UNHANDLED_JS_ERROR), "level:".concat(c.c.FATAL)],
                },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    w = 10 * y.Z.Millis.SECOND;
function x(e) {
    var t, n;
    let { error: a, onLock: o, onReload: l, onDisable: c, onCrashDisabled: u } = e,
        p = i.useMemo(() => new s.SpringValue(1), []),
        h = i.useRef(null),
        [g, y] = i.useState(!1),
        [O, v] = i.useState(!1),
        S = (0, d.e7)([E.default], () => E.default.getCurrentUser());
    (0, m.ZP)(
        () => (
            (h.current = setTimeout(R, w)),
            _.Z.track(A.rMx.NOTIFICATION_VIEWED, { notif_type: C.n0.OverlayCrashed }),
            () => {
                null != h.current && clearTimeout(h.current);
            }
        ),
    );
    let R = i.useCallback(() => {
            p.set(0),
                null != h.current && clearTimeout(h.current),
                (h.current = null),
                null == o || o(),
                null == u || u();
        }, [p, o, u]),
        D = i.useCallback(
            (e) => {
                O ||
                    (v(!0),
                    null == o || o(),
                    _.Z.track(
                        A.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: C.n0.OverlayCrashed,
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
                e.stopPropagation(), e.shiftKey ? (y(!0), null != h.current && clearTimeout(h.current)) : y(!1);
            },
            [y],
        ),
        L = i.useCallback(
            (e) => {
                e.stopPropagation(), null == o || o(), null == c || c();
            },
            [c, o],
        ),
        j = (0, d.e7)([I.Z], () => I.Z.getFocusedRunningGame()),
        M = g
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: N.intl.string(N.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: P.stackTraceCode,
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
                                      className: P.code,
                                      children: (0, r.jsx)("pre", { children: a.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        k = g ? null : N.intl.string(N.t.oEJEFq),
        U =
            (null != (t = null == S ? void 0 : S.isStaff()) && t) ||
            (null != (n = null == S ? void 0 : S.isStaffPersonal()) && n);
    return (0, r.jsx)(T.Y, {
        title: N.intl.string(N.t.U38qZj),
        body: M,
        hint: U ? k : void 0,
        confirmText: N.intl.string(N.t.a3HlgJ),
        cancelText: null != j ? N.intl.string(N.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(b.Z, {
            width: 40,
            height: 40,
            className: P.notificationIcon,
        }),
        onNotificationClick: x,
        onConfirmClick: D,
        onCancelClick: null != j ? L : void 0,
        onDismissClick: o,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: A._1z.ACTIVE,
        containerRef: null,
        contentOpacity: p,
        className: P.errorNotificationContainer,
        wrapperClassName: P.errorNotificationWrapper,
    });
}
class L extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t,
        });
        let r = I.Z.getTargetPID();
        _.Z.setOverlayCrashed(r, e), _.Z.setInputLocked(!0, r);
        let i = (0, O.V6)(e, v.gl.OutOfProcess, {
            extra: {
                info: t,
                location: n,
            },
        });
        _.Z.track(A.rMx.APP_CRASHED, {
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
                ? (0, r.jsx)(S.Z, {
                      className: P.errorClickNotification,
                      children: (0, r.jsx)(x, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : I.Z.getTargetPID();
                              _.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = I.Z.getFocusedRunningGame();
                              null != e && p.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : I.Z.getTargetPID();
                              _.Z.updateOverlayState(t, v.mM.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              _.Z.setReloadOverlay(I.Z.getTargetPID()), this.setState({ showError: !1 });
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
let j = L;
