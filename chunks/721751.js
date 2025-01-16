let i;
n(47120);
var r = n(200651),
    s = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(980591),
    h = n(605782),
    g = n(133853),
    m = n(568154),
    f = n(353926),
    p = n(703656),
    x = n(981631),
    _ = n(687000);
let E = n(575703),
    I = n(2984),
    N = [x.Z5c.LOGIN, x.Z5c.LOGIN_HANDOFF, x.Z5c.REGISTER, x.Z5c.INVITE(''), x.Z5c.GIFT_CODE(''), x.Z5c.GUILD_TEMPLATE_LOGIN(''), x.Z5c.GUILD_TEMPLATE(''), x.Z5c.DISABLE_EMAIL_NOTIFICATIONS, x.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, x.Z5c.BILLING_PREMIUM_SUBSCRIBE, x.Z5c.BILLING_PAYMENT_SOURCES_CREATE, x.Z5c.BILLING_PAYMENTS, x.Z5c.BILLING_PREMIUM_SWITCH_PLAN, x.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, x.Z5c.VERIFY, x.Z5c.VERIFY_HUB_EMAIL, x.Z5c.REJECT_IP, x.Z5c.REJECT_MFA, x.Z5c.AUTHORIZE_IP, x.Z5c.AUTHORIZE_PAYMENT, x.Z5c.RESET, x.Z5c.HANDOFF, x.Z5c.REPORT, x.Z5c.REPORT_SECOND_LOOK, x.Z5c.ACCOUNT_REVERT('')];
function v(e) {
    return N.some((t) => e.startsWith(t));
}
let C = (e) => ((i = e), e);
function b(e) {
    let { children: t } = e;
    switch (
        (function () {
            let [e, t] = s.useState(!1),
                [n, r] = s.useState(true),
                l = (function () {
                    return null;
                })(),
                o = (0, c.e7)([f.Z], () => f.Z.hasLoadedExperiments);
            return ((0, u.Z)(() => {}, 300), void 0 !== i)
                ? i
                : !n && o
                  ? (!e && t(!0),
                    C(
                        (function (e) {
                            return 'default';
                        })(l)
                    ))
                  : n
                    ? C('default')
                    : 'loading';
        })()
    ) {
        case 'default':
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('img', {
                        className: _.artwork,
                        src: E,
                        alt: ''
                    }),
                    (0, r.jsx)('img', {
                        className: _.logoWithText,
                        src: I,
                        alt: ''
                    }),
                    t
                ]
            });
        case 'experimental':
        case 'loading':
            return null;
    }
}
class Z extends s.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (v(e)) (0, p.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        v(e) ? (0, p.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, r.jsx)(h.Z, {
                component: s.Fragment,
                children: s.Children.map(this.props.children, (e) =>
                    s.cloneElement(e, {
                        transitionTo: p.uL,
                        replaceWith: p.dL
                    })
                )
            });
        return (0, r.jsx)('div', {
            className: _.characterBackground,
            children: (0, r.jsx)(d.HeadingLevel, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(g.Z, {
                                      show: !0,
                                      className: o()(_.logo)
                                  }),
                                  (0, r.jsx)(m.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, r.jsx)(b, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, r.jsx)(h.Z, {
            component: s.Fragment,
            children: s.Children.map(this.props.children, (e) =>
                s.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                })
            )
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes('GameLauncher');
        return e || a.tq || a.Em || t ? this.renderMobile() : this.renderDefault();
    }
    constructor(e) {
        var t, n, i;
        super(e),
            (t = this),
            (n = 'handleResize'),
            (i = () => {
                this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
}
t.Z = Z;
