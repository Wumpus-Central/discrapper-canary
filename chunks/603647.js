let s;
i.d(e, { A: () => R });
var n = i(627968),
    a = i(64700),
    h = i(873263),
    l = i(607399),
    r = i(311907),
    o = i(397927),
    d = i(220839),
    c = i(897479),
    u = i(942156),
    p = i(25485),
    m = i(49463),
    v = i(976860),
    g = i(426660),
    E = i(652215),
    w = i(339086);
let f = i(843020),
    x = i(545044),
    I = [
        E.BVt.LOGIN,
        E.BVt.LOGIN_HANDOFF,
        E.BVt.LOGIN_ONE_TIME,
        E.BVt.REGISTER,
        E.BVt.INVITE(""),
        E.BVt.GIFT_CODE(""),
        E.BVt.GUILD_TEMPLATE_LOGIN(""),
        E.BVt.GUILD_TEMPLATE(""),
        E.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        E.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        E.BVt.BILLING_PREMIUM_SUBSCRIBE,
        E.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        E.BVt.BILLING_PAYMENTS,
        E.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        E.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        E.BVt.GIFT_CARD_REDEEM,
        E.BVt.VERIFY,
        E.BVt.VERIFY_HUB_EMAIL,
        E.BVt.REJECT_IP,
        E.BVt.REJECT_MFA,
        E.BVt.AUTHORIZE_IP,
        E.BVt.AUTHORIZE_PAYMENT,
        E.BVt.RESET,
        E.BVt.HANDOFF,
        E.BVt.REPORT,
        E.BVt.REPORT_SECOND_LOOK,
        E.BVt.ACCOUNT_REVERT(""),
    ];
function A(t) {
    return I.some((e) => t.startsWith(e));
}
let M = (t) => ((s = t), t),
    _ = [E.BVt.VERIFY, E.BVt.VERIFY_HUB_EMAIL],
    L = [E.BVt.GIFT_CARD_REDEEM];
function T(t) {
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
        o = L.includes(l.pathname),
        c = _.includes(l.pathname);
    if (o) return e;
    switch (i) {
        case "default":
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    c ? (0, n.jsx)(g.A, {}) : (0, n.jsx)("img", { className: w.xX, src: f, alt: "" }),
                    (0, n.jsx)("img", { className: w.F, src: x, alt: "" }),
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
            className: w.WA,
            children: (0, n.jsx)(o.Fmo, {
                forceLevel: 1,
                children:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(u.A, { show: !0, className: w.wm }),
                                  (0, n.jsx)(p.g, { splash: t, children: e }),
                              ],
                          })
                        : (0, n.jsx)(T, { children: e }),
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
let R = S;
