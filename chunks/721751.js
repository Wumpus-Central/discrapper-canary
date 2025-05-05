let r;
n.d(t, { Z: () => O }), n(388685), n(35282);
var i = n(255367),
    l = n(73800),
    s = n(873546),
    o = n(442837),
    a = n(481060),
    c = n(980591),
    u = n(605782),
    d = n(133853),
    h = n(568154),
    p = n(353926),
    g = n(703656),
    f = n(981631),
    m = n(963865);
let _ = n(575703),
    x = n(2984),
    E = [f.Z5c.LOGIN, f.Z5c.LOGIN_HANDOFF, f.Z5c.REGISTER, f.Z5c.INVITE(''), f.Z5c.GIFT_CODE(''), f.Z5c.GUILD_TEMPLATE_LOGIN(''), f.Z5c.GUILD_TEMPLATE(''), f.Z5c.DISABLE_EMAIL_NOTIFICATIONS, f.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, f.Z5c.BILLING_PREMIUM_SUBSCRIBE, f.Z5c.BILLING_PAYMENT_SOURCES_CREATE, f.Z5c.BILLING_PAYMENTS, f.Z5c.BILLING_PREMIUM_SWITCH_PLAN, f.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, f.Z5c.VERIFY, f.Z5c.VERIFY_HUB_EMAIL, f.Z5c.REJECT_IP, f.Z5c.REJECT_MFA, f.Z5c.AUTHORIZE_IP, f.Z5c.AUTHORIZE_PAYMENT, f.Z5c.RESET, f.Z5c.HANDOFF, f.Z5c.REPORT, f.Z5c.REPORT_SECOND_LOOK, f.Z5c.ACCOUNT_REVERT('')];
function b(e) {
    return E.some((t) => e.startsWith(t));
}
let v = (e) => ((r = e), e);
function j(e) {
    let { children: t } = e;
    switch (
        (function () {
            var e;
            let [t, n] = l.useState(!1),
                [i, s] = l.useState(!0),
                a = (0, o.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== r) ? r : !i && a ? (t || n(!0), v(((e = 0), 'default'))) : i ? v('default') : 'loading';
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
                        src: x,
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
class I extends l.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (b(e)) (0, g.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        b(e) ? (0, g.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(u.Z, {
                component: l.Fragment,
                children: l.Children.map(this.props.children, (e) =>
                    l.cloneElement(e, {
                        transitionTo: g.uL,
                        replaceWith: g.dL
                    })
                )
            });
        return (0, i.jsx)('div', {
            className: m.characterBackground,
            children: (0, i.jsx)(a.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(d.Z, {
                                      show: !0,
                                      className: m.logo
                                  }),
                                  (0, i.jsx)(h.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, i.jsx)(j, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, i.jsx)(u.Z, {
            component: l.Fragment,
            children: l.Children.map(this.props.children, (e) =>
                l.cloneElement(e, {
                    transitionTo: this.mobileTransitionTo,
                    replaceWith: this.mobileReplaceWith
                })
            )
        });
    }
    render() {
        let { isMobileWidth: e } = this.state,
            t = navigator.userAgent.includes('GameLauncher');
        return e || s.tq || s.Em || t ? this.renderMobile() : this.renderDefault();
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
let O = I;
