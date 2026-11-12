let l;
var i = n(477900),
    r = n(582128),
    s = n(806163),
    a = n(607399),
    o = n(855986),
    d = n(707554),
    u = n(220839),
    h = n(897479),
    c = n(942156),
    E = n(574094),
    I = n(343446),
    p = n(976860),
    B = n(426660),
    m = n(652215),
    _ = n(534373);
let V = n(843020),
    A = n(545044),
    T = [
        m.BVt.LOGIN,
        m.BVt.LOGIN_HANDOFF,
        m.BVt.LOGIN_ONE_TIME,
        m.BVt.REGISTER,
        m.BVt.INVITE(""),
        m.BVt.GIFT_CODE(""),
        m.BVt.GUILD_TEMPLATE_LOGIN(""),
        m.BVt.GUILD_TEMPLATE(""),
        m.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        m.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        m.BVt.BILLING_PREMIUM_SUBSCRIBE,
        m.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        m.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        m.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        m.BVt.GIFT_CARD_REDEEM,
        m.BVt.VERIFY,
        m.BVt.VERIFY_HUB_EMAIL,
        m.BVt.REJECT_IP,
        m.BVt.REJECT_MFA,
        m.BVt.AUTHORIZE_IP,
        m.BVt.AUTHORIZE_PAYMENT,
        m.BVt.RESET,
        m.BVt.HANDOFF,
        m.BVt.REPORT,
        m.BVt.REPORT_SECOND_LOOK,
        m.BVt.ACCOUNT_REVERT(""),
    ];
function R(e) {
    return T.some((t) => e.startsWith(t));
}
let L = [m.BVt.VERIFY, m.BVt.VERIFY_HUB_EMAIL],
    f = [m.BVt.GIFT_CARD_REDEEM];
function N(e) {
    let { children: t } = e,
        n = (function () {
            let [e, t] = r.useState(!1),
                [n, i] = r.useState(!0),
                s = (0, o.bG)([I.A], () => I.A.hasLoadedExperiments);
            return ((0, u.A)(() => {}, 300), void 0 !== l)
                ? l
                : !n && s
                  ? (e || t(!0), (l = "default"), "default")
                  : n
                    ? ((l = "default"), "default")
                    : "loading";
        })(),
        a = (0, s.zy)(),
        d = f.includes(a.pathname),
        h = L.includes(a.pathname);
    if (d) return t;
    switch (n) {
        case "default":
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    h ? (0, i.jsx)(B.A, {}) : (0, i.jsx)("img", { className: _.xX, src: V, alt: "" }),
                    (0, i.jsx)("img", { className: _.F, src: A, alt: "" }),
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
        if (R(e)) (0, p.pX)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location.href = null == n ? e : `${e}?${n}`;
        }
    }
    mobileReplaceWith(e) {
        R(e) ? (0, p.bG)(e) : (window.location.href = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(h.A, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, { transitionTo: p.pX, replaceWith: p.bG }),
                ),
            });
        return (0, i.jsx)("div", {
            className: _.WA,
            children: (0, i.jsx)(d.F, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(c.A, { show: !0, className: _.wm }),
                                  (0, i.jsx)(E.A, { splash: e, children: t }),
                              ],
                          })
                        : (0, i.jsx)(N, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, i.jsx)(h.A, {
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
