let r;
n.d(t, { Z: () => N }), n(388685), n(35282);
var i = n(255367),
    l = n(73800),
    a = n(873546),
    o = n(442837),
    s = n(481060),
    c = n(980591),
    u = n(605782),
    d = n(133853),
    h = n(568154),
    p = n(353926),
    m = n(703656),
    g = n(981631),
    f = n(963865);
let _ = n(575703),
    x = n(2984),
    E = [g.Z5c.LOGIN, g.Z5c.LOGIN_HANDOFF, g.Z5c.REGISTER, g.Z5c.INVITE(''), g.Z5c.GIFT_CODE(''), g.Z5c.GUILD_TEMPLATE_LOGIN(''), g.Z5c.GUILD_TEMPLATE(''), g.Z5c.DISABLE_EMAIL_NOTIFICATIONS, g.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, g.Z5c.BILLING_PREMIUM_SUBSCRIBE, g.Z5c.BILLING_PAYMENT_SOURCES_CREATE, g.Z5c.BILLING_PAYMENTS, g.Z5c.BILLING_PREMIUM_SWITCH_PLAN, g.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, g.Z5c.VERIFY, g.Z5c.VERIFY_HUB_EMAIL, g.Z5c.REJECT_IP, g.Z5c.REJECT_MFA, g.Z5c.AUTHORIZE_IP, g.Z5c.AUTHORIZE_PAYMENT, g.Z5c.RESET, g.Z5c.HANDOFF, g.Z5c.REPORT, g.Z5c.REPORT_SECOND_LOOK, g.Z5c.ACCOUNT_REVERT('')];
function b(e) {
    return E.some((t) => e.startsWith(t));
}
let I = (e) => ((r = e), e);
function v(e) {
    let { children: t } = e;
    switch (
        (function () {
            var e;
            let [t, n] = l.useState(!1),
                [i, a] = l.useState(!0),
                s = (0, o.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== r) ? r : !i && s ? (t || n(!0), I(((e = 0), 'default'))) : i ? I('default') : 'loading';
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
class O extends l.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (b(e)) (0, m.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        b(e) ? (0, m.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, i.jsx)(u.Z, {
                component: l.Fragment,
                children: l.Children.map(this.props.children, (e) =>
                    l.cloneElement(e, {
                        transitionTo: m.uL,
                        replaceWith: m.dL
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
                                  (0, i.jsx)(h.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, i.jsx)(v, { children: t })
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
let N = O;
