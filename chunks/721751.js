let r;
n.d(t, { Z: () => j }), n(47120), n(301563);
var o = n(200651),
    i = n(192379),
    c = n(873546),
    l = n(442837),
    s = n(481060),
    a = n(980591),
    u = n(605782),
    d = n(133853),
    h = n(568154),
    p = n(353926),
    f = n(703656),
    b = n(981631),
    m = n(963865);
let _ = n(575703),
    E = n(2984),
    O = [b.Z5c.LOGIN, b.Z5c.LOGIN_HANDOFF, b.Z5c.REGISTER, b.Z5c.INVITE(''), b.Z5c.GIFT_CODE(''), b.Z5c.GUILD_TEMPLATE_LOGIN(''), b.Z5c.GUILD_TEMPLATE(''), b.Z5c.DISABLE_EMAIL_NOTIFICATIONS, b.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, b.Z5c.BILLING_PREMIUM_SUBSCRIBE, b.Z5c.BILLING_PAYMENT_SOURCES_CREATE, b.Z5c.BILLING_PAYMENTS, b.Z5c.BILLING_PREMIUM_SWITCH_PLAN, b.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, b.Z5c.VERIFY, b.Z5c.VERIFY_HUB_EMAIL, b.Z5c.REJECT_IP, b.Z5c.REJECT_MFA, b.Z5c.AUTHORIZE_IP, b.Z5c.AUTHORIZE_PAYMENT, b.Z5c.RESET, b.Z5c.HANDOFF, b.Z5c.REPORT, b.Z5c.REPORT_SECOND_LOOK, b.Z5c.ACCOUNT_REVERT('')];
function g(e) {
    return O.some((t) => e.startsWith(t));
}
let I = (e) => ((r = e), e);
function T(e) {
    let { children: t } = e;
    switch (
        (function () {
            var e;
            let [t, n] = i.useState(!1),
                [o, c] = i.useState(!0),
                s = (0, l.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, a.Z)(() => {}, 300), void 0 !== r) ? r : !o && s ? (t || n(!0), I(((e = 0), 'default'))) : o ? I('default') : 'loading';
        })()
    ) {
        case 'default':
            return (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)('img', {
                        className: m.artwork,
                        src: _,
                        alt: ''
                    }),
                    (0, o.jsx)('img', {
                        className: m.logoWithText,
                        src: E,
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
class Z extends i.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (g(e)) (0, f.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        g(e) ? (0, f.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, o.jsx)(u.Z, {
                component: i.Fragment,
                children: i.Children.map(this.props.children, (e) =>
                    i.cloneElement(e, {
                        transitionTo: f.uL,
                        replaceWith: f.dL
                    })
                )
            });
        return (0, o.jsx)('div', {
            className: m.characterBackground,
            children: (0, o.jsx)(s.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                  (0, o.jsx)(d.Z, {
                                      show: !0,
                                      className: m.logo
                                  }),
                                  (0, o.jsx)(h.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, o.jsx)(T, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, o.jsx)(u.Z, {
            component: i.Fragment,
            children: i.Children.map(this.props.children, (e) =>
                i.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                })
            )
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes('GameLauncher');
        return e || c.tq || c.Em || t ? this.renderMobile() : this.renderDefault();
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
let j = Z;
