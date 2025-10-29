let n;
r.d(t, { Z: () => B }), r(388685), r(35282);
var i = r(951288),
    l = r(647438),
    s = r(843611),
    o = r(873546),
    c = r(442837),
    a = r(481060),
    u = r(980591),
    d = r(605782),
    h = r(133853),
    f = r(568154),
    p = r(353926),
    x = r(703656),
    g = r(546247),
    j = r(981631),
    E = r(816282);
let I = r(575703),
    O = r(2984),
    m = [
        j.Z5c.LOGIN,
        j.Z5c.LOGIN_HANDOFF,
        j.Z5c.LOGIN_ONE_TIME,
        j.Z5c.REGISTER,
        j.Z5c.INVITE(""),
        j.Z5c.GIFT_CODE(""),
        j.Z5c.GUILD_TEMPLATE_LOGIN(""),
        j.Z5c.GUILD_TEMPLATE(""),
        j.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
        j.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
        j.Z5c.BILLING_PREMIUM_SUBSCRIBE,
        j.Z5c.BILLING_PAYMENT_SOURCES_CREATE,
        j.Z5c.BILLING_PAYMENTS,
        j.Z5c.BILLING_PREMIUM_SWITCH_PLAN,
        j.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE,
        j.Z5c.VERIFY,
        j.Z5c.VERIFY_HUB_EMAIL,
        j.Z5c.REJECT_IP,
        j.Z5c.REJECT_MFA,
        j.Z5c.AUTHORIZE_IP,
        j.Z5c.AUTHORIZE_PAYMENT,
        j.Z5c.RESET,
        j.Z5c.HANDOFF,
        j.Z5c.REPORT,
        j.Z5c.REPORT_SECOND_LOOK,
        j.Z5c.ACCOUNT_REVERT(""),
    ];
function b(e) {
    return m.some((t) => e.startsWith(t));
}
let _ = (e) => ((n = e), e),
    Z = [j.Z5c.VERIFY, j.Z5c.VERIFY_HUB_EMAIL];
function w(e) {
    let { children: t } = e,
        r = (function () {
            let [e, t] = l.useState(!1),
                [r, i] = l.useState(!0),
                s = (0, c.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, u.Z)(() => {}, 300), void 0 !== n)
                ? n
                : !r && s
                  ? (e || t(!0), _("default"))
                  : r
                    ? _("default")
                    : "loading";
        })(),
        o = (0, s.TH)(),
        a = Z.includes(o.pathname);
    switch (r) {
        case "default":
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    a
                        ? (0, i.jsx)(g.Z, {})
                        : (0, i.jsx)("img", {
                              className: E.artwork,
                              src: I,
                              alt: "",
                          }),
                    (0, i.jsx)("img", {
                        className: E.logoWithText,
                        src: O,
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
class y extends l.Component {
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (b(e)) (0, x.uL)(e, t);
        else {
            let r = null != t && null != t.search ? t.search : null;
            window.location = null == r ? e : "".concat(e, "?").concat(r);
        }
    }
    mobileReplaceWith(e) {
        b(e) ? (0, x.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(d.Z, {
                component: l.Fragment,
                children: l.Children.map(this.props.children, (e) =>
                    l.cloneElement(e, {
                        transitionTo: x.uL,
                        replaceWith: x.dL,
                    }),
                ),
            });
        return (0, i.jsx)("div", {
            className: E.characterBackground,
            children: (0, i.jsx)(a.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(h.Z, {
                                      show: !0,
                                      className: E.logo,
                                  }),
                                  (0, i.jsx)(f.h, {
                                      splash: e,
                                      children: t,
                                  }),
                              ],
                          })
                        : (0, i.jsx)(w, { children: t }),
            }),
        });
    }
    renderMobile() {
        return (0, i.jsx)(d.Z, {
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
            (function (e, t, r) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = r);
            })(this, "handleResize", () => {
                this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
}
let B = y;
