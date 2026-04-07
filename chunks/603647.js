"use strict";
let i;
n.d(t, { A: () => y });
var s = n(627968),
    r = n(64700),
    l = n(873263),
    a = n(607399),
    o = n(311907),
    d = n(397927),
    c = n(220839),
    u = n(897479),
    h = n(942156),
    _ = n(574094),
    p = n(49463),
    g = n(976860),
    m = n(426660),
    A = n(652215),
    f = n(339086);
let E = n(843020),
    x = n(545044),
    I = [
        A.BVt.LOGIN,
        A.BVt.LOGIN_HANDOFF,
        A.BVt.LOGIN_ONE_TIME,
        A.BVt.REGISTER,
        A.BVt.INVITE(""),
        A.BVt.GIFT_CODE(""),
        A.BVt.GUILD_TEMPLATE_LOGIN(""),
        A.BVt.GUILD_TEMPLATE(""),
        A.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        A.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        A.BVt.BILLING_PREMIUM_SUBSCRIBE,
        A.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        A.BVt.BILLING_PAYMENTS,
        A.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        A.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        A.BVt.GIFT_CARD_REDEEM,
        A.BVt.VERIFY,
        A.BVt.VERIFY_HUB_EMAIL,
        A.BVt.REJECT_IP,
        A.BVt.REJECT_MFA,
        A.BVt.AUTHORIZE_IP,
        A.BVt.AUTHORIZE_PAYMENT,
        A.BVt.RESET,
        A.BVt.HANDOFF,
        A.BVt.REPORT,
        A.BVt.REPORT_SECOND_LOOK,
        A.BVt.ACCOUNT_REVERT(""),
    ];
function N(e) {
    return I.some((t) => e.startsWith(t));
}
let v = (e) => ((i = e), e),
    T = [A.BVt.VERIFY, A.BVt.VERIFY_HUB_EMAIL],
    C = [A.BVt.GIFT_CARD_REDEEM];
function j(e) {
    let { children: t } = e,
        n = (function () {
            let [e, t] = r.useState(!1),
                [n, s] = r.useState(!0),
                l = (0, o.bG)([p.A], () => p.A.hasLoadedExperiments);
            return ((0, c.A)(() => {}, 300), void 0 !== i)
                ? i
                : !n && l
                  ? (e || t(!0), v("default"))
                  : n
                    ? v("default")
                    : "loading";
        })(),
        a = (0, l.zy)(),
        d = C.includes(a.pathname),
        u = T.includes(a.pathname);
    if (d) return t;
    switch (n) {
        case "default":
            return (0, s.jsxs)(s.Fragment, {
                children: [
                    u ? (0, s.jsx)(m.A, {}) : (0, s.jsx)("img", { className: f.xX, src: E, alt: "" }),
                    (0, s.jsx)("img", { className: f.F, src: x, alt: "" }),
                    t,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class S extends r.Component {
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
        if (N(e)) (0, g.pX)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : `${e}?${n}`;
        }
    }
    mobileReplaceWith(e) {
        N(e) ? (0, g.bG)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, s.jsx)(u.A, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (e) =>
                    r.cloneElement(e, { transitionTo: g.pX, replaceWith: g.bG }),
                ),
            });
        return (0, s.jsx)("div", {
            className: f.WA,
            children: (0, s.jsx)(d.Fmo, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(h.A, { show: !0, className: f.wm }),
                                  (0, s.jsx)(_.A, { splash: e, children: t }),
                              ],
                          })
                        : (0, s.jsx)(j, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, s.jsx)(u.A, {
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
let y = S;
