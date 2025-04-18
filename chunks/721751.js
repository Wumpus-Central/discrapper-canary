let r;
n.d(t, { Z: () => I }), n(388685), n(35282);
var i = n(200651),
    s = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    c = n(980591),
    u = n(605782),
    d = n(133853),
    h = n(568154),
    p = n(353926),
    g = n(703656),
    f = n(981631),
    m = n(452802);
let _ = n(575703),
    N = n(2984),
    x = [f.Z5c.LOGIN, f.Z5c.LOGIN_HANDOFF, f.Z5c.REGISTER, f.Z5c.INVITE(''), f.Z5c.GIFT_CODE(''), f.Z5c.GUILD_TEMPLATE_LOGIN(''), f.Z5c.GUILD_TEMPLATE(''), f.Z5c.DISABLE_EMAIL_NOTIFICATIONS, f.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, f.Z5c.BILLING_PREMIUM_SUBSCRIBE, f.Z5c.BILLING_PAYMENT_SOURCES_CREATE, f.Z5c.BILLING_PAYMENTS, f.Z5c.BILLING_PREMIUM_SWITCH_PLAN, f.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, f.Z5c.VERIFY, f.Z5c.VERIFY_HUB_EMAIL, f.Z5c.REJECT_IP, f.Z5c.REJECT_MFA, f.Z5c.AUTHORIZE_IP, f.Z5c.AUTHORIZE_PAYMENT, f.Z5c.RESET, f.Z5c.HANDOFF, f.Z5c.REPORT, f.Z5c.REPORT_SECOND_LOOK, f.Z5c.ACCOUNT_REVERT('')];
function b(e) {
    return x.some((t) => e.startsWith(t));
}
let E = (e) => ((r = e), e);
function v(e) {
    let { children: t } = e;
    switch (
        (function () {
            var e;
            let [t, n] = s.useState(!1),
                [i, l] = s.useState(!0),
                a = (0, o.e7)([p.Z], () => p.Z.hasLoadedExperiments);
            return ((0, c.Z)(() => {}, 300), void 0 !== r) ? r : !i && a ? (t || n(!0), E(((e = 0), 'default'))) : i ? E('default') : 'loading';
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
                        src: N,
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
class j extends s.Component {
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
                component: s.Fragment,
                children: s.Children.map(this.props.children, (e) =>
                    s.cloneElement(e, {
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
                        : (0, i.jsx)(v, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, i.jsx)(u.Z, {
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
        return e || l.tq || l.Em || t ? this.renderMobile() : this.renderDefault();
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
let I = j;
