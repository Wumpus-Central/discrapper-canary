let s;
i.d(e, {
    A: () => P,
}),
    i(896048),
    i(747238);
var n = i(627968),
    r = i(64700),
    a = i(960488),
    h = i(607399),
    l = i(311907),
    o = i(397927),
    c = i(220839),
    d = i(897479),
    u = i(942156),
    p = i(25485),
    f = i(49463),
    m = i(976860),
    g = i(426660),
    v = i(652215),
    w = i(811431);
let b = i(843020),
    y = i(545044),
    x = [
        v.BVt.LOGIN,
        v.BVt.LOGIN_HANDOFF,
        v.BVt.LOGIN_ONE_TIME,
        v.BVt.REGISTER,
        v.BVt.INVITE(""),
        v.BVt.GIFT_CODE(""),
        v.BVt.GUILD_TEMPLATE_LOGIN(""),
        v.BVt.GUILD_TEMPLATE(""),
        v.BVt.DISABLE_EMAIL_NOTIFICATIONS,
        v.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        v.BVt.BILLING_PREMIUM_SUBSCRIBE,
        v.BVt.BILLING_PAYMENT_SOURCES_CREATE,
        v.BVt.BILLING_PAYMENTS,
        v.BVt.BILLING_PREMIUM_SWITCH_PLAN,
        v.BVt.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        v.BVt.VERIFY,
        v.BVt.VERIFY_HUB_EMAIL,
        v.BVt.REJECT_IP,
        v.BVt.REJECT_MFA,
        v.BVt.AUTHORIZE_IP,
        v.BVt.AUTHORIZE_PAYMENT,
        v.BVt.RESET,
        v.BVt.HANDOFF,
        v.BVt.REPORT,
        v.BVt.REPORT_SECOND_LOOK,
        v.BVt.ACCOUNT_REVERT(""),
    ];

function E(t) {
    return x.some((e) => t.startsWith(e));
}
let O = (t) => ((s = t), t),
    j = [v.BVt.VERIFY, v.BVt.VERIFY_HUB_EMAIL];

function I(t) {
    let { children: e } = t,
        i = (function () {
            let [t, e] = r.useState(!1),
                [i, n] = r.useState(!0),
                a = (0, l.bG)([f.A], () => f.A.hasLoadedExperiments);
            return ((0, c.A)(() => {}, 300), void 0 !== s)
                ? s
                : !i && a
                  ? (t || e(!0), O("default"))
                  : i
                    ? O("default")
                    : "loading";
        })(),
        h = (0, a.zy)(),
        o = j.includes(h.pathname);
    switch (i) {
        case "default":
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    o
                        ? (0, n.jsx)(g.A, {})
                        : (0, n.jsx)("img", {
                              className: w.xX,
                              src: b,
                              alt: "",
                          }),
                    (0, n.jsx)("img", {
                        className: w.F,
                        src: y,
                        alt: "",
                    }),
                    e,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class A extends r.Component {
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    mobileTransitionTo(t, e) {
        if (E(t)) (0, m.pX)(t, e);
        else {
            let i = null != e && null != e.search ? e.search : null;
            window.location = null == i ? t : "".concat(t, "?").concat(i);
        }
    }
    mobileReplaceWith(t) {
        E(t) ? (0, m.bG)(t) : (window.location = t);
    }
    renderDefault() {
        let { splash: t } = this.props,
            e = (0, n.jsx)(d.A, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (t) =>
                    r.cloneElement(t, {
                        transitionTo: m.pX,
                        replaceWith: m.bG,
                    }),
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
                                  (0, n.jsx)(u.A, {
                                      show: !0,
                                      className: w.wm,
                                  }),
                                  (0, n.jsx)(p.g, {
                                      splash: t,
                                      children: e,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(I, {
                              children: e,
                          }),
            }),
        });
    }
    renderMobile() {
        return (0, n.jsx)(d.A, {
            component: r.Fragment,
            children: r.Children.map(this.props.children, (t) =>
                r.cloneElement(t, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith,
                }),
            ),
        });
    }
    render() {
        let { isMobileWidth: t } = this.state,
            e = navigator.userAgent.includes("GameLauncher");
        return t || h.Fr || h.v1 || e ? this.renderMobile() : this.renderDefault();
    }
    constructor(t) {
        super(t),
            (function (t, e, i) {
                e in t
                    ? Object.defineProperty(t, e, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (t[e] = i);
            })(this, "handleResize", () => {
                this.setState({
                    isMobileWidth: window.innerWidth <= 485,
                });
            }),
            (this.state = {
                isMobileWidth: window.innerWidth <= 485,
            });
    }
}
let P = A;
