let s;
i.d(e, { Z: () => P }), i(388685), i(35282);
var n = i(54381),
    r = i(473749),
    a = i(828700),
    h = i(873546),
    l = i(442837),
    o = i(481060),
    c = i(980591),
    d = i(605782),
    u = i(133853),
    p = i(568154),
    f = i(353926),
    m = i(703656),
    g = i(546247),
    v = i(981631),
    w = i(195124);
let b = i(575703),
    y = i(2984),
    x = [
        v.Z5c.LOGIN,
        v.Z5c.LOGIN_HANDOFF,
        v.Z5c.LOGIN_ONE_TIME,
        v.Z5c.REGISTER,
        v.Z5c.INVITE(""),
        v.Z5c.GIFT_CODE(""),
        v.Z5c.GUILD_TEMPLATE_LOGIN(""),
        v.Z5c.GUILD_TEMPLATE(""),
        v.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
        v.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        v.Z5c.BILLING_PREMIUM_SUBSCRIBE,
        v.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
        v.Z5c.BILLING_PAYMENTS,
        v.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
        v.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        v.Z5c.VERIFY,
        v.Z5c.VERIFY_HUB_EMAIL,
        v.Z5c.REJECT_IP,
        v.Z5c.REJECT_MFA,
        v.Z5c.AUTHORIZE_IP,
        v.Z5c.AUTHORIZE_PAYMENT,
        v.Z5c.RESET,
        v.Z5c.HANDOFF,
        v.Z5c.REPORT,
        v.Z5c.REPORT_SECOND_LOOK,
        v.Z5c.ACCOUNT_REVERT(""),
    ];
function E(t) {
    return x.some((e) => t.startsWith(e));
}
let O = (t) => ((s = t), t),
    j = [v.Z5c.VERIFY, v.Z5c.VERIFY_HUB_EMAIL];
function I(t) {
    let { children: e } = t,
        i = (function () {
            let [t, e] = r.useState(!1),
                [i, n] = r.useState(!0),
                a = (0, l.e7)([f.Z], () => f.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== s)
                ? s
                : !i && a
                  ? (t || e(!0), O("default"))
                  : i
                    ? O("default")
                    : "loading";
        })(),
        h = (0, a.TH)(),
        o = j.includes(h.pathname);
    switch (i) {
        case "default":
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    o
                        ? (0, n.jsx)(g.Z, {})
                        : (0, n.jsx)("img", {
                              className: w.artwork,
                              src: b,
                              alt: "",
                          }),
                    (0, n.jsx)("img", {
                        className: w.logoWithText,
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
class S extends r.Component {
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    mobileTransitionTo(t, e) {
        if (E(t)) (0, m.uL)(t, e);
        else {
            let i = null != e && null != e.search ? e.search : null;
            window.location = null == i ? t : "".concat(t, "?").concat(i);
        }
    }
    mobileReplaceWith(t) {
        E(t) ? (0, m.dL)(t) : (window.location = t);
    }
    renderDefault() {
        let { splash: t } = this.props,
            e = (0, n.jsx)(d.Z, {
                component: r.Fragment,
                children: r.Children.map(this.props.children, (t) =>
                    r.cloneElement(t, {
                        transitionTo: m.uL,
                        replaceWith: m.dL,
                    }),
                ),
            });
        return (0, n.jsx)("div", {
            className: w.characterBackground,
            children: (0, n.jsx)(o.y5t, {
                forceLevel: 1,
                children:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(u.Z, {
                                      show: !0,
                                      className: w.logo,
                                  }),
                                  (0, n.jsx)(p.h, {
                                      splash: t,
                                      children: e,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(I, { children: e }),
            }),
        });
    }
    renderMobile() {
        return (0, n.jsx)(d.Z, {
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
        return t || h.tq || h.Em || e ? this.renderMobile() : this.renderDefault();
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
                this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
}
let P = S;
