"use strict";
n.d(t, { A: () => M }), n(142703);
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
    p = n(397927),
    A = n(684013),
    f = n(996308),
    g = n(831062),
    _ = n(471024),
    m = n(976860),
    E = n(144400),
    x = n(927813),
    y = n(9302),
    v = n(777334),
    S = n(41984),
    I = n(941023),
    C = n(855790),
    N = n(672396),
    T = n(652215),
    O = n(985018),
    b = n(748498);
let D = 10 * x.A.Millis.SECOND,
    j = new h.Vy("LegacyOverlayErrorBoundary");
function R() {
    let e = (0, y.getPID)(),
        t = (0, y.getRPCAuthToken)();
    (0, f.tN)({
        type: T.kGV.DISPATCH,
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
        (this.notificationTimer = setTimeout(this.hideNotification, D)),
            A.A.track(T.HAw.NOTIFICATION_VIEWED, { notif_type: N.KS.OverlayCrashed });
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
            A.A.track(T.HAw.NOTIFICATION_CLICKED, { notif_type: N.KS.OverlayCrashed, action_type: "reload" }, !0),
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
                  children: (0, i.jsx)(p.NPJ, {
                      theme: T.NJ8.DARK,
                      children: (s) =>
                          (0, i.jsxs)(p.DUT, {
                              innerRef: this.contentDomRef,
                              className: a()(s, b.kL),
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                  (0, i.jsx)(_.Ay, {
                                      expand: !0,
                                      icon: (0, i.jsx)(E.A, { width: 40, height: 40, className: b.Lo }),
                                      title: O.intl.string(O.t.U38qZj),
                                      confirmText: O.intl.string(O.t.TzAl1a),
                                      onNotificationClick: this.handleNotificationClick,
                                      onConfirmClick: this.handleReload,
                                      onDismissClick: this.hideNotification,
                                      locked: !1,
                                  }),
                                  n && null != e
                                      ? (0, i.jsxs)(C.Ay, {
                                            className: b.a2,
                                            children: [
                                                (0, i.jsx)(C.Ay.Bar, { children: "Error Details" }),
                                                (0, i.jsx)(C.Ay.Content, {
                                                    className: b.Xh,
                                                    children: (0, i.jsx)("code", {
                                                        className: b.aY,
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
let L = o().throttle(
    () => {
        g.A.increment({ name: u.K.APP_CRASHED, tags: [`reason:${d.J.UNHANDLED_JS_ERROR}`, `level:${c.k.FATAL}`] }, !0);
    },
    100,
    { trailing: !1 },
);
class k extends s.PureComponent {
    state = { error: null, info: null };
    componentDidCatch(e, t) {
        let n = (0, m.JK)().location;
        this.setState({ error: e, info: t }),
            j.error(`ErrorBoundary caught error: ${e.message}`, { error: e, info: t });
        let i = (0, y.getPID)(),
            s = (0, y.getRPCAuthToken)();
        (0, f.tN)({
            type: T.kGV.DISPATCH,
            pid: (0, y.getPID)(),
            token: s,
            payloads: [
                { type: "OVERLAY_CRASHED", error: e.message, pid: i },
                { type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: i },
            ],
        }),
            setImmediate(() => window.addEventListener("click", R));
        let l = (0, v.St)(e, S.Ue.Hook, { extra: t });
        A.A.track(T.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: "fatal",
        }),
            L();
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, info: s } = this.state;
        return null != n ? (0, i.jsx)(w, { error: n, info: s }) : (0, i.jsx)("div", { className: t, children: e });
    }
}
let M = k;
