let r;
n.d(t, { Z: () => y }), n(388685), n(35282);
var i = n(951288),
    l = n(647438),
    a = n(873546),
    o = n(442837),
    s = n(481060),
    c = n(980591),
    u = n(605782),
    d = n(133853),
    h = n(568154),
    p = n(353926),
    m = n(703656),
    f = n(981631),
    g = n(816282);
let _ = n(575703),
    x = n(2984),
    b = [
        f.Z5c.LOGIN,
        f.Z5c.LOGIN_HANDOFF,
        f.Z5c.REGISTER,
        f.Z5c.INVITE(""),
        f.Z5c.GIFT_CODE(""),
        f.Z5c.GUILD_TEMPLATE_LOGIN(""),
        f.Z5c.GUILD_TEMPLATE(""),
        f.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
        f.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        f.Z5c.BILLING_PREMIUM_SUBSCRIBE,
        f.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
        f.Z5c.BILLING_PAYMENTS,
        f.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
        f.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        f.Z5c.VERIFY,
        f.Z5c.VERIFY_HUB_EMAIL,
        f.Z5c.REJECT_IP,
        f.Z5c.REJECT_MFA,
        f.Z5c.AUTHORIZE_IP,
        f.Z5c.AUTHORIZE_PAYMENT,
        f.Z5c.RESET,
        f.Z5c.HANDOFF,
        f.Z5c.REPORT,
        f.Z5c.REPORT_SECOND_LOOK,
        f.Z5c.ACCOUNT_REVERT(""),
    ];
function v(e) {
    return b.some((t) => e.startsWith(t));
}
let E = (e) => ((r = e), e);
function j(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = l.useState(!1),
                [n, i] = l.useState(!0),
                a = (0, o.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== r)
                ? r
                : !n && a
                  ? (e || t(!0), E("default"))
                  : n
                    ? E("default")
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
        if (v(e)) (0, m.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : "".concat(e, "?").concat(n);
        }
    }
    mobileReplaceWith(e) {
        v(e) ? (0, m.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(u.Z, {
                component: l.Fragment,
                children: l.Children.map(this.props.children, (e) =>
                    l.cloneElement(e, {
                        transitionTo: m.uL,
                        replaceWith: m.dL,
                    }),
                ),
            });
        return (0, i.jsx)("div", {
            className: g.characterBackground,
            children: (0, i.jsx)(s.y5t, {
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
        return e || a.tq || a.Em || t ? this.renderMobile() : this.renderDefault();
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
let y = I;
