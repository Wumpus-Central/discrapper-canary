let i;
n.d(t, { A: () => C });
var l = n(477900),
    s = n(582128),
    r = n(806163),
    a = n(607399),
    d = n(17928),
    o = n(707554),
    h = n(220839),
    u = n(897479),
    c = n(942156),
    E = n(574094),
    I = n(736056),
    m = n(976860),
    B = n(540747),
    _ = n(426660),
    p = n(652215),
    A = n(534373);
let V = n(843020),
    L = n(545044),
    T = [
        p.BVt.LOGIN,
        p.BVt.LOGIN_HANDOFF,
        p.BVt.LOGIN_ONE_TIME,
        p.BVt.REGISTER,
        p.BVt.INVITE(""),
        p.BVt.GIFT_CODE(""),
        p.BVt.GUILD_TEMPLATE_LOGIN(""),
        p.BVt.GUILD_TEMPLATE(""),
        p.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        p.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        p.BVt.BILLING_PREMIUM_SUBSCRIBE,
        p.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        p.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        p.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        p.BVt.GIFT_CARD_REDEEM,
        p.BVt.VERIFY,
        p.BVt.VERIFY_HUB_EMAIL,
        p.BVt.REJECT_IP,
        p.BVt.REJECT_MFA,
        p.BVt.AUTHORIZE_IP,
        p.BVt.AUTHORIZE_PAYMENT,
        p.BVt.RESET,
        p.BVt.HANDOFF,
        p.BVt.REPORT,
        p.BVt.REPORT_SECOND_LOOK,
        p.BVt.ACCOUNT_REVERT(""),
    ];
function R(e) {
    return T.some((t) => e.startsWith(t));
}
let f = [p.BVt.VERIFY, p.BVt.VERIFY_HUB_EMAIL],
    N = [p.BVt.GIFT_CARD_REDEEM];
function x(e) {
    let { children: t } = e,
        n = (function () {
            let [e, t] = s.useState(!1),
                [n, l] = s.useState(!0),
                r = (0, d.bG)([I.A], () => I.A.hasLoadedExperiments);
            return ((0, h.A)(() => {}, 300), void 0 !== i)
                ? i
                : !n && r
                  ? (e || t(!0), (i = "default"), "default")
                  : n
                    ? ((i = "default"), "default")
                    : "loading";
        })(),
        a = (0, r.zy)(),
        { hidden: o } = s.useContext(B.F),
        u = N.includes(a.pathname),
        c = f.includes(a.pathname);
    if (u) return t;
    switch (n) {
        case "default":
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    c ? (0, l.jsx)(_.A, {}) : (0, l.jsx)("img", { className: A.xX, src: V, alt: "" }),
                    o ? null : (0, l.jsx)("img", { className: A.F, src: L, alt: "" }),
                    t,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
function F(e) {
    let { hidden: t, setHidden: n, children: i } = e,
        r = s.useMemo(() => ({ hidden: t, setHidden: n }), [t, n]);
    return (0, l.jsx)(B.F.Provider, { value: r, children: i });
}
class w extends s.Component {
    constructor(e) {
        (super(e), (this.state = { isMobileWidth: window.innerWidth <= 485, authLogoHidden: !1 }));
    }
    handleResize = () => {
        this.setState({ isMobileWidth: window.innerWidth <= 485 });
    };
    setAuthLogoHidden = (e) => {
        this.setState({ authLogoHidden: e });
    };
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (R(e)) (0, m.pX)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location.href = null == n ? e : `${e}?${n}`;
        }
    }
    mobileReplaceWith(e) {
        R(e) ? (0, m.bG)(e) : (window.location.href = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            { authLogoHidden: t } = this.state,
            n = (0, l.jsx)(u.A, {
                component: s.Fragment,
                children: s.Children.map(this.props.children, (e) =>
                    s.cloneElement(e, { transitionTo: m.pX, replaceWith: m.bG }),
                ),
            });
        return (0, l.jsx)(F, {
            hidden: t,
            setHidden: this.setAuthLogoHidden,
            children: (0, l.jsx)("div", {
                className: A.WA,
                children: (0, l.jsx)(o.F, {
                    forceLevel: 1,
                    children:
                        null != e
                            ? (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      t ? null : (0, l.jsx)(c.A, { show: !0, className: A.wm }),
                                      (0, l.jsx)(E.A, { splash: e, children: n }),
                                  ],
                              })
                            : (0, l.jsx)(x, { children: n }),
                }),
            }),
        });
    }
    renderMobile() {
        return (0, l.jsx)(u.A, {
            component: s.Fragment,
            children: s.Children.map(this.props.children, (e) =>
                s.cloneElement(e, { transitionTo: this.mobileTransitionTo, replaceWith: this.mobileReplaceWith }),
            ),
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
        return e || a.Fr || a.v1 || t ? this.renderMobile() : this.renderDefault();
    }
}
let C = w;
