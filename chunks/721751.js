let r;
n.d(t, { Z: () => O }), n(388685), n(35282);
var i = n(255367),
    l = n(73800),
    o = n(873546),
    s = n(442837),
    a = n(481060),
    c = n(980591),
    u = n(605782),
    d = n(133853),
    h = n(568154),
    p = n(353926),
    f = n(703656),
    m = n(981631),
    g = n(816282);
let _ = n(575703),
    x = n(2984),
    b = [
        m.Z5c.LOGIN,
        m.Z5c.LOGIN_HANDOFF,
        m.Z5c.REGISTER,
        m.Z5c.INVITE(""),
        m.Z5c.GIFT_CODE(""),
        m.Z5c.GUILD_TEMPLATE_LOGIN(""),
        m.Z5c.GUILD_TEMPLATE(""),
        m.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
        m.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        m.Z5c.BILLING_PREMIUM_SUBSCRIBE,
        m.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
        m.Z5c.BILLING_PAYMENTS,
        m.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
        m.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        m.Z5c.VERIFY,
        m.Z5c.VERIFY_HUB_EMAIL,
        m.Z5c.REJECT_IP,
        m.Z5c.REJECT_MFA,
        m.Z5c.AUTHORIZE_IP,
        m.Z5c.AUTHORIZE_PAYMENT,
        m.Z5c.RESET,
        m.Z5c.HANDOFF,
        m.Z5c.REPORT,
        m.Z5c.REPORT_SECOND_LOOK,
        m.Z5c.ACCOUNT_REVERT(""),
    ];
function E(e) {
    return b.some((t) => e.startsWith(t));
}
let v = (e) => ((r = e), e);
function j(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = l.useState(!1),
                [n, i] = l.useState(!0),
                o = (0, s.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== r)
                ? r
                : !n && o
                  ? (e || t(!0), v("default"))
                  : n
                    ? v("default")
                    : "loading";
        })()
    ) {
        case "default":
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("img", {
                        className: g.artwork,
                        src: _,
                        alt: "",
                    }),
                    (0, i.jsx)("img", {
                        className: g.logoWithText,
                        src: x,
                        alt: "",
                    }),
                    t,
                ],
            });
        case "experimental":
        case "loading":
            return null;
    }
}
class I extends l.Component {
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (E(e)) (0, f.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
        }
    }
    mobileReplaceWith(e) {
        E(e) ? (0, f.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(u.Z, {
                component: l.Fragment,
                children: l.Children.map(this.props.children, (e) =>
                    l.cloneElement(e, {
                        transitionTo: f.uL,
                        replaceWith: f.dL,
                    }),
                ),
            });
        return (0, i.jsx)("div", {
            className: g.characterBackground,
            children: (0, i.jsx)(a.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.Z, {
                                      show: !0,
                                      className: g.logo,
                                  }),
                                  (0, i.jsx)(h.h, {
                                      splash: e,
                                      children: t,
                                  }),
                              ],
                          })
                        : (0, i.jsx)(j, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, i.jsx)(u.Z, {
            component: l.Fragment,
            children: l.Children.map(this.props.children, (e) =>
                l.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith,
                }),
            ),
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes("GameLauncher");
        return e || o.tq || o.Em || t ? this.renderMobile() : this.renderDefault();
    }
    constructor(e) {
        super(e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleResize", () => {
                this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
}
let O = I;
