n.d(t, { Z: () => M }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(790519),
    l = n(818405),
    c = n(587158),
    u = n(286379),
    d = n(442837),
    f = n(481060),
    _ = n(224706),
    p = n(13245),
    h = n(493773),
    m = n(797614),
    g = n(703656),
    E = n(594174),
    b = n(254761),
    y = n(70956),
    O = n(41534),
    v = n(837268),
    I = n(333031),
    T = n(610394),
    S = n(380736),
    A = n(987650),
    C = n(981631),
    N = n(388032),
    R = n(534887);
function P(e, t, n) {
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
            m.Z.increment(
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
function L(e) {
    var t, n;
    let { error: a, onLock: o, onReload: l, onDisable: c, onCrashDisabled: u } = e,
        _ = i.useMemo(() => new s.SpringValue(1), []),
        m = i.useRef(null),
        [g, y] = i.useState(!1),
        [O, v] = i.useState(!1),
        I = (0, d.e7)([E.default], () => E.default.getCurrentUser());
    (0, h.ZP)(
        () => (
            (m.current = setTimeout(P, w)),
            p.Z.track(C.rMx.NOTIFICATION_VIEWED, { notif_type: A.n0.OverlayCrashed }),
            () => {
                null != m.current && clearTimeout(m.current);
            }
        ),
    );
    let P = i.useCallback(() => {
            _.set(0),
                null != m.current && clearTimeout(m.current),
                (m.current = null),
                null == o || o(),
                null == u || u();
        }, [_, o, u]),
        D = i.useCallback(
            (e) => {
                O ||
                    (v(!0),
                    null == o || o(),
                    p.Z.track(
                        C.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: A.n0.OverlayCrashed,
                            action_type: "reload",
                        },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == l ? void 0 : l()), 200));
            },
            [o, l, O],
        ),
        L = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (y(!0), null != m.current && clearTimeout(m.current)) : y(!1);
            },
            [y],
        ),
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), null == o || o(), null == c || c();
            },
            [c, o],
        ),
        M = (0, d.e7)([T.Z], () => T.Z.getFocusedRunningGame()),
        k = g
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: "text-md/semibold",
                          color: "text-primary",
                          children: N.intl.string(N.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: R.stackTraceCode,
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-secondary",
                                  children: a.message,
                              }),
                              (0, r.jsx)(f.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-secondary",
                                  children: (0, r.jsx)("code", {
                                      className: R.code,
                                      children: (0, r.jsx)("pre", { children: a.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        j = g ? null : N.intl.string(N.t.oEJEFq),
        U =
            (null != (t = null == I ? void 0 : I.isStaff()) && t) ||
            (null != (n = null == I ? void 0 : I.isStaffPersonal()) && n);
    return (0, r.jsx)(S.Y, {
        title: N.intl.string(N.t.U38qZj),
        body: k,
        hint: U ? j : void 0,
        confirmText: N.intl.string(N.t.a3HlgJ),
        cancelText: null != M ? N.intl.string(N.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(b.Z, {
            width: 40,
            height: 40,
            className: R.notificationIcon,
        }),
        onNotificationClick: L,
        onConfirmClick: D,
        onCancelClick: null != M ? x : void 0,
        onDismissClick: o,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: C._1z.ACTIVE,
        containerRef: null,
        contentOpacity: _,
        className: R.errorNotificationContainer,
        wrapperClassName: R.errorNotificationWrapper,
    });
}
class x extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t,
        });
        let r = T.Z.getTargetPID();
        p.Z.setOverlayCrashed(r, e), p.Z.setInputLocked(!0, r);
        let i = (0, O.V6)(e, v.gl.OutOfProcess, {
            extra: {
                info: t,
                location: n,
            },
        });
        p.Z.track(C.rMx.APP_CRASHED, {
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
                ? (0, r.jsx)(I.Z, {
                      className: R.errorClickNotification,
                      children: (0, r.jsx)(L, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : T.Z.getTargetPID();
                              p.Z.setInputLocked(!0, t), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = T.Z.getFocusedRunningGame();
                              null != e && _.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : T.Z.getTargetPID();
                              p.Z.updateOverlayState(t, v.mM.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              p.Z.setReloadOverlay(T.Z.getTargetPID()), this.setState({ showError: !1 });
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
            P(this, "state", {
                error: null,
                showError: !0,
                info: null,
            }),
            P(this, "pid", null);
    }
}
let M = x;
