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
    g = n(353926),
    h = n(703656),
    f = n(981631),
    m = n(963865);
let _ = n(575703),
    b = n(2984),
    x = [f.Z5c.LOGIN, f.Z5c.LOGIN_HANDOFF, f.Z5c.REGISTER, f.Z5c.INVITE(''), f.Z5c.GIFT_CODE(''), f.Z5c.GUILD_TEMPLATE_LOGIN(''), f.Z5c.GUILD_TEMPLATE(''), f.Z5c.DISABLE_EMAIL_NOTIFICATIONS, f.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, f.Z5c.BILLING_PREMIUM_SUBSCRIBE, f.Z5c.BILLING_PAYMENT_SOURCES_CREATE, f.Z5c.BILLING_PAYMENTS, f.Z5c.BILLING_PREMIUM_SWITCH_PLAN, f.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, f.Z5c.VERIFY, f.Z5c.VERIFY_HUB_EMAIL, f.Z5c.REJECT_IP, f.Z5c.REJECT_MFA, f.Z5c.AUTHORIZE_IP, f.Z5c.AUTHORIZE_PAYMENT, f.Z5c.RESET, f.Z5c.HANDOFF, f.Z5c.REPORT, f.Z5c.REPORT_SECOND_LOOK, f.Z5c.ACCOUNT_REVERT('')];
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
                s = (0, l.e7)([g.Z], () => g.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== r) ? r : !i && s ? (t || n(!0), v(((e = 0), 'default'))) : i ? v('default') : 'loading';
        })()
    ) {
        case 'default':
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('img', {
                        className: m.artwork,
                        src: _,
                        alt: ''
                    }),
                    (0, i.jsx)('img', {
                        className: m.logoWithText,
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
        if (N(e)) (0, h.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        N(e) ? (0, h.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(u.Z, {
                component: o.Fragment,
                children: o.Children.map(this.props.children, (e) =>
                    o.cloneElement(e, {
                        transitionTo: h.uL,
                        replaceWith: h.dL
                    })
                )
            });
        return (0, i.jsx)('div', {
            className: m.characterBackground,
            children: (0, i.jsx)(s.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.Z, {
                                      show: !0,
                                      className: m.logo
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
