let r;
n.d(t, { Z: () => j }), n(388685), n(35282);
var i = n(200651),
    o = n(192379),
    a = n(873546),
    l = n(442837),
    s = n(481060),
    c = n(980591),
    u = n(605782),
    d = n(133853),
    p = n(568154),
    h = n(353926),
    g = n(703656),
    m = n(981631),
    f = n(963865);
let _ = n(575703),
    b = n(2984),
    x = [m.Z5c.LOGIN, m.Z5c.LOGIN_HANDOFF, m.Z5c.REGISTER, m.Z5c.INVITE(''), m.Z5c.GIFT_CODE(''), m.Z5c.GUILD_TEMPLATE_LOGIN(''), m.Z5c.GUILD_TEMPLATE(''), m.Z5c.DISABLE_EMAIL_NOTIFICATIONS, m.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, m.Z5c.BILLING_PREMIUM_SUBSCRIBE, m.Z5c.BILLING_PAYMENT_SOURCES_CREATE, m.Z5c.BILLING_PAYMENTS, m.Z5c.BILLING_PREMIUM_SWITCH_PLAN, m.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, m.Z5c.VERIFY, m.Z5c.VERIFY_HUB_EMAIL, m.Z5c.REJECT_IP, m.Z5c.REJECT_MFA, m.Z5c.AUTHORIZE_IP, m.Z5c.AUTHORIZE_PAYMENT, m.Z5c.RESET, m.Z5c.HANDOFF, m.Z5c.REPORT, m.Z5c.REPORT_SECOND_LOOK, m.Z5c.ACCOUNT_REVERT('')];
function N(e) {
    return x.some((t) => e.startsWith(t));
}
let v = (e) => ((r = e), e);
function E(e) {
    let { children: t } = e;
    switch (
        (function () {
            var e;
            let [t, n] = o.useState(!1),
                [i, a] = o.useState(!0),
                s = (0, l.e7)([h.Z], () => h.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== r) ? r : !i && s ? (t || n(!0), v(((e = 0), 'default'))) : i ? v('default') : 'loading';
        })()
    ) {
        case 'default':
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('img', {
                        className: f.artwork,
                        src: _,
                        alt: ''
                    }),
                    (0, i.jsx)('img', {
                        className: f.logoWithText,
                        src: b,
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
class I extends o.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (N(e)) (0, g.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        N(e) ? (0, g.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(u.Z, {
                component: o.Fragment,
                children: o.Children.map(this.props.children, (e) =>
                    o.cloneElement(e, {
                        transitionTo: g.uL,
                        replaceWith: g.dL
                    })
                )
            });
        return (0, i.jsx)('div', {
            className: f.characterBackground,
            children: (0, i.jsx)(s.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.Z, {
                                      show: !0,
                                      className: f.logo
                                  }),
                                  (0, i.jsx)(p.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, i.jsx)(E, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, i.jsx)(u.Z, {
            component: o.Fragment,
            children: o.Children.map(this.props.children, (e) =>
                o.cloneElement(e, {
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
        var t, n;
        super(e),
            (t = 'handleResize'),
            (n = () => {
                this.setState({ isMobileWidth: window.innerWidth <= 485 });
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n),
            (this.state = { isMobileWidth: window.innerWidth <= 485 });
    }
}
let j = I;
