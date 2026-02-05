let s;
i.d(e, { A: () => T });
var n = i(627968),
    a = i(64700),
    h = i(960488),
    l = i(607399),
    r = i(311907),
    o = i(397927),
    d = i(220839),
    c = i(897479),
    p = i(942156),
    u = i(25485),
    m = i(49463),
    v = i(976860),
    g = i(426660),
    w = i(652215),
    E = i(811431);
let f = i(843020),
    x = i(545044),
    I = [
        w.BVt.LOGIN,
        w.BVt.LOGIN_HANDOFF,
        w.BVt.LOGIN_ONE_TIME,
        w.BVt.REGISTER,
        w.BVt.INVITE(""),
        w.BVt.GIFT_CODE(""),
        w.BVt.GUILD_TEMPLATE_LOGIN(""),
        w.BVt.GUILD_TEMPLATE(""),
        w.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        w.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        w.BVt.BILLING_PREMIUM_SUBSCRIBE,
        w.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        w.BVt.BILLING_PAYMENTS,
        w.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        w.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        w.BVt.VERIFY,
        w.BVt.VERIFY_HUB_EMAIL,
        w.BVt.REJECT_IP,
        w.BVt.REJECT_MFA,
        w.BVt.AUTHORIZE_IP,
        w.BVt.AUTHORIZE_PAYMENT,
        w.BVt.RESET,
        w.BVt.HANDOFF,
        w.BVt.REPORT,
        w.BVt.REPORT_SECOND_LOOK,
        w.BVt.ACCOUNT_REVERT(""),
    ];
function A(t) {
    return I.some((e) => t.startsWith(e));
}
let M = (t) => ((s = t), t),
    _ = [w.BVt.VERIFY, w.BVt.VERIFY_HUB_EMAIL];
function L(t) {
    let { children: e } = t,
        i = (function () {
            let [t, e] = a.useState(!1),
                [i, n] = a.useState(!0),
                h = (0, r.bG)([m.A], () => m.A.hasLoadedExperiments);
            return ((0, d.A)(() => {}, 300), void 0 !== s)
                ? s
                : !i && h
                  ? (t || e(!0), M("default"))
                  : i
                    ? M("default")
                    : "loading";
        })(),
        l = (0, h.zy)(),
        o = _.includes(l.pathname);
    switch (i) {
        case "default":
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    o ? (0, n.jsx)(g.A, {}) : (0, n.jsx)("img", { className: E.xX, src: f, alt: "" }),
                    (0, n.jsx)("img", { className: E.F, src: x, alt: "" }),
                    e,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class S extends a.Component {
    constructor(t) {
        super(t), (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
    handleResize = () => {
        this.setState({ isMobileWidth: window.innerWidth <= 485 });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    mobileTransitionTo(t, e) {
        if (A(t)) (0, v.pX)(t, e);
        else {
            let i = null != e && null != e.search ? e.search : null;
            window.location = null == i ? t : `${t}?${i}`;
        }
    }
    mobileReplaceWith(t) {
        A(t) ? (0, v.bG)(t) : (window.location = t);
    }
    renderDefault() {
        let { splash: t } = this.props,
            e = (0, n.jsx)(c.A, {
                component: a.Fragment,
                children: a.Children.map(this.props.children, (t) =>
                    a.cloneElement(t, { transitionTo: v.pX, replaceWith: v.bG }),
                ),
            });
        return (0, n.jsx)("div", {
            className: E.WA,
            children: (0, n.jsx)(o.Fmo, {
                forceLevel: 1,
                children:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(p.A, { show: !0, className: E.wm }),
                                  (0, n.jsx)(u.g, { splash: t, children: e }),
                              ],
                          })
                        : (0, n.jsx)(L, { children: e }),
            }),
        });
    }
    renderMobile() {
        return (0, n.jsx)(c.A, {
            component: a.Fragment,
            children: a.Children.map(this.props.children, (t) =>
                a.cloneElement(t, { transitionTo: this.mobileTransitionTo, replaceWith: this.mobileReplaceWith }),
            ),
        });
    }
    render() {
        let { isMobileWidth: t } = this.state,
            e = navigator.userAgent.includes("GameLauncher");
        return t || l.Fr || l.v1 || e ? this.renderMobile() : this.renderDefault();
    }
}
let T = S;
