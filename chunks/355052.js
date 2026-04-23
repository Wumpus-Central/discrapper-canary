"use strict";
n.d(t, { A: () => P }), n(142703);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(258873),
    c = n(622242),
    u = n(731738),
    h = n(118356),
    p = n(43990),
    A = n(939249),
    f = n(684013),
    _ = n(996308),
    g = n(831062),
    m = n(471024),
    E = n(976860),
    x = n(144400),
    y = n(927813),
    v = n(9302),
    S = n(777334),
    C = n(41984),
    I = n(941023),
    N = n(855790),
    T = n(672396),
    b = n(652215),
    O = n(985018),
    D = n(744315);
let j = 10 * y.A.Millis.SECOND,
    L = new h.Vy("LegacyOverlayErrorBoundary");
function R() {
    let e = (0, v.getPID)(),
        t = (0, v.getRPCAuthToken)();
    (0, _.tN)({
        type: b.kGV.DISPATCH,
        pid: e,
        token: t,
        payloads: [{ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e }],
    });
}
class w extends s.PureComponent {
    state = { showTrace: !1, busy: !1 };
    notificationTimer;
    contentDomRef = s.createRef();
    componentDidMount() {
        (this.notificationTimer = setTimeout(this.hideNotification, j)),
            f.A.track(b.HAw.NOTIFICATION_VIEWED, { notif_type: T.KS.OverlayCrashed });
    }
    componentWillUnmount() {
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e);
    }
    hideNotification = () => {
        R();
        let { notificationTimer: e } = this;
        null != e && clearTimeout(e), (this.notificationTimer = null);
    };
    handleReload = (e) => {
        this.setState({ busy: !0 }),
            R(),
            f.A.track(b.HAw.NOTIFICATION_CLICKED, { notif_type: T.KS.OverlayCrashed, action_type: "reload" }, !0),
            e.stopPropagation(),
            setTimeout(() => location.reload(!0), 200);
    };
    handleNotificationClick = (e) => {
        e.stopPropagation();
        let { notificationTimer: t } = this;
        null != t && clearTimeout(t), e.shiftKey && this.setState({ showTrace: !0 });
    };
    render() {
        let { info: e, error: t } = this.props,
            { showTrace: n } = this.state,
            { notificationTimer: s } = this;
        return null == s
            ? null
            : (0, i.jsx)(I.A, {
                  contentDomRef: this.contentDomRef,
                  observe: !1,
                  children: (0, i.jsx)(p.N, {
                      theme: b.NJ8.DARK,
                      children: (s) =>
                          (0, i.jsxs)(A.D, {
                              innerRef: this.contentDomRef,
                              className: a()(s, D.kL),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(m.Ay, {
                                      expand: !0,
                                      icon: (0, i.jsx)(x.A, { width: 40, height: 40, className: D.Lo }),
                                      title: O.intl.string(O.t.U38qZj),
                                      confirmText: O.intl.string(O.t.TzAl1a),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(N.Ay, {
                                            className: D.a2,
                                            children: [
                                                (0, i.jsx)(N.Ay.Bar, { children: "Error Details" }),
                                                (0, i.jsx)(N.Ay.Content, {
                                                    className: D.Xh,
                                                    children: (0, i.jsx)("code", {
                                                        className: D.aY,
                                                        children: (0, i.jsx)("pre", { children: t.stack }),
                                                    }),
                                                }),
                                            ],
                                        })
                                      : null,
                              ],
                          }),
                  }),
              });
    }
}
let k = o().throttle(
    () => {
        g.A.increment({ name: u.K.APP_CRASHED, tags: [`reason:${d.J.UNHANDLED_JS_ERROR}`, `level:${c.k.FATAL}`] }, !0);
    },
    100,
    { trailing: !1 },
);
class M extends s.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let n = (0, E.JK)().location;
        this.setState({ error: e, info: t }),
            L.error(`ErrorBoundary caught error: ${e.message}`, { error: e, info: t });
        let i = (0, v.getPID)(),
            s = (0, v.getRPCAuthToken)();
        (0, _.tN)({
            type: b.kGV.DISPATCH,
            pid: (0, v.getPID)(),
            token: s,
            payloads: [
                { type: "OVERLAY_CRASHED", error: e.message, pid: i },
                { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
        }),
            setImmediate(() => window.addEventListener("click", R));
        let l = (0, S.St)(e, C.Ue.Hook, { extra: t });
        f.A.track(b.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: "fatal",
        }),
            k();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: s } = this.state;
        return null != n ? (0, i.jsx)(w, { error: n, info: s }) : (0, i.jsx)("div", { className: t, children: e });
    }
}
let P = M;
