let i;
var l = n(477900),
    r = n(582128),
    s = n(806163),
    a = n(607399),
    o = n(855986),
    d = n(707554),
    h = n(220839),
    u = n(897479),
    c = n(942156),
    E = n(574094),
    I = n(343446),
    B = n(976860),
    m = n(426660),
    _ = n(652215),
    p = n(534373);
let V = n(843020),
    A = n(545044),
    T = [
        _.BVt.LOGIN,
        _.BVt.LOGIN_HANDOFF,
        _.BVt.LOGIN_ONE_TIME,
        _.BVt.REGISTER,
        _.BVt.INVITE(""),
        _.BVt.GIFT_CODE(""),
        _.BVt.GUILD_TEMPLATE_LOGIN(""),
        _.BVt.GUILD_TEMPLATE(""),
        _.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        _.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        _.BVt.BILLING_PREMIUM_SUBSCRIBE,
        _.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        _.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        _.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        _.BVt.GIFT_CARD_REDEEM,
        _.BVt.VERIFY,
        _.BVt.VERIFY_HUB_EMAIL,
        _.BVt.REJECT_IP,
        _.BVt.REJECT_MFA,
        _.BVt.AUTHORIZE_IP,
        _.BVt.AUTHORIZE_PAYMENT,
        _.BVt.RESET,
        _.BVt.HANDOFF,
        _.BVt.REPORT,
        _.BVt.REPORT_SECOND_LOOK,
        _.BVt.ACCOUNT_REVERT(""),
    ];
function R(e) {
    return T.some((t) => e.startsWith(t));
}
let L = [_.BVt.VERIFY, _.BVt.VERIFY_HUB_EMAIL],
    N = [_.BVt.GIFT_CARD_REDEEM];
function f(e) {
    let { children: t } = e,
        n = (function () {
            let [e, t] = r.useState(!1),
                [n, l] = r.useState(!0),
                s = (0, o.bG)([I.A], () => I.A.hasLoadedExperiments);
            return ((0, h.A)(() => {}, 300), void 0 !== i)
                ? i
                : !n && s
                  ? (e || t(!0), (i = "default"), "default")
                  : n
                    ? ((i = "default"), "default")
                    : "loading";
        })(),
        a = (0, s.zy)(),
        d = N.includes(a.pathname),
        u = L.includes(a.pathname);
    if (d) return t;
    switch (n) {
        case "default":
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    u ? (0, l.jsx)(m.A, {}) : (0, l.jsx)("img", { className: p.xX, src: V, alt: "" }),
                    (0, l.jsx)("img", { className: p.F, src: A, alt: "" }),
                    t,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class w extends r.Component {
    constructor(e) {
        (super(e), (this.state = { isMobileWidth: window.innerWidth <= 485 }));
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
    mobileTransitionTo(e, t) {
        if (R(e)) (0, B.pX)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location.href = null == n ? e : `${e}?${n}`;
        }
    }
    mobileReplaceWith(e) {
        R(e) ? (0, B.bG)(e) : (window.location.href = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, l.jsx)(u.A, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, { transitionTo: B.pX, replaceWith: B.bG }),
                ),
            });
        return (0, l.jsx)("div", {
            className: p.WA,
            children: (0, l.jsx)(d.F, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(c.A, { show: !0, className: p.wm }),
                                  (0, l.jsx)(E.A, { splash: e, children: t }),
                              ],
                          })
                        : (0, l.jsx)(f, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, l.jsx)(u.A, {
            component: r.Fragment,
            children: r.Children.map(this.props.children, (e) =>
                r.cloneElement(e, { transitionTo: this.mobileTransitionTo, replaceWith: this.mobileReplaceWith }),
            ),
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
        return e || a.Fr || a.v1 || t ? this.renderMobile() : this.renderDefault();
    }
}
n.d(t, {}, { A: w });
