let i;
n.d(t, { A: () => f });
var l = n(627968),
    r = n(64700),
    s = n(873263),
    a = n(607399),
    o = n(17928),
    d = n(707554),
    h = n(220839),
    c = n(897479),
    u = n(942156),
    E = n(574094),
    I = n(736056),
    B = n(976860),
    _ = n(426660),
    m = n(652215),
    V = n(476958);
let p = n(843020),
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
        m.BVt.BILLING_PAYMENTS,
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
function L(e) {
    return T.some((t) => e.startsWith(t));
}
let R = (e) => ((i = e), e),
    N = [m.BVt.VERIFY, m.BVt.VERIFY_HUB_EMAIL],
    w = [m.BVt.GIFT_CARD_REDEEM];
function F(e) {
    let { children: t } = e,
        n = (function () {
            let [e, t] = r.useState(!1),
                [n, l] = r.useState(!0),
                s = (0, o.bG)([I.A], () => I.A.hasLoadedExperiments);
            return ((0, h.A)(() => {}, 300), void 0 !== i)
                ? i
                : !n && s
                  ? (e || t(!0), R("default"))
                  : n
                    ? R("default")
                    : "loading";
        })(),
        a = (0, s.zy)(),
        d = w.includes(a.pathname),
        c = N.includes(a.pathname);
    if (d) return t;
    switch (n) {
        case "default":
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    c ? (0, l.jsx)(_.A, {}) : (0, l.jsx)("img", { className: V.xX, src: p, alt: "" }),
                    (0, l.jsx)("img", { className: V.F, src: A, alt: "" }),
                    t,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class M extends r.Component {
    constructor(e) {
        super(e), (this.state = { isMobileWidth: window.innerWidth <= 485 });
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
        if (L(e)) (0, B.pX)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : `${e}?${n}`;
        }
    }
    mobileReplaceWith(e) {
        L(e) ? (0, B.bG)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, l.jsx)(c.A, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, { transitionTo: B.pX, replaceWith: B.bG }),
                ),
            });
        return (0, l.jsx)("div", {
            className: V.WA,
            children: (0, l.jsx)(d.F, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(u.A, { show: !0, className: V.wm }),
                                  (0, l.jsx)(E.A, { splash: e, children: t }),
                              ],
                          })
                        : (0, l.jsx)(F, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, l.jsx)(c.A, {
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
let f = M;
