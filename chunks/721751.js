let s;
n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(873546),
    c = n(442837),
    d = n(481060),
    h = n(980591),
    u = n(605782),
    _ = n(133853),
    p = n(568154),
    E = n(353926),
    m = n(703656),
    I = n(981631),
    T = n(692690);
let Z = n(575703),
    f = n(2984),
    g = [I.Z5c.LOGIN, I.Z5c.LOGIN_HANDOFF, I.Z5c.REGISTER, I.Z5c.INVITE(''), I.Z5c.GIFT_CODE(''), I.Z5c.GUILD_TEMPLATE_LOGIN(''), I.Z5c.GUILD_TEMPLATE(''), I.Z5c.DISABLE_EMAIL_NOTIFICATIONS, I.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, I.Z5c.BILLING_PREMIUM_SUBSCRIBE, I.Z5c.BILLING_PAYMENT_SOURCES_CREATE, I.Z5c.BILLING_PAYMENTS, I.Z5c.BILLING_PREMIUM_SWITCH_PLAN, I.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, I.Z5c.VERIFY, I.Z5c.VERIFY_HUB_EMAIL, I.Z5c.REJECT_IP, I.Z5c.REJECT_MFA, I.Z5c.AUTHORIZE_IP, I.Z5c.AUTHORIZE_PAYMENT, I.Z5c.RESET, I.Z5c.HANDOFF, I.Z5c.REPORT, I.Z5c.REPORT_SECOND_LOOK, I.Z5c.ACCOUNT_REVERT('')];
function b(e) {
    return g.some((t) => e.startsWith(t));
}
let L = (e) => ((s = e), e);
function x(e) {
    let { children: t } = e;
    switch (
        (function () {
            var e;
            let [t, n] = l.useState(!1),
                [i, r] = l.useState(!0),
                o = (0, c.e7)([E.Z], () => E.Z.hasLoadedExperiments);
            return ((0, h.Z)(() => {}, 300), void 0 !== s) ? s : !i && o ? (t || n(!0), L(((e = 0), 'default'))) : i ? L('default') : 'loading';
        })()
    ) {
        case 'default':
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('img', {
                        className: T.artwork,
                        src: Z,
                        alt: ''
                    }),
                    (0, i.jsx)('img', {
                        className: T.logoWithText,
                        src: f,
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
class R extends l.Component {
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
            className: T.characterBackground,
            children: (0, i.jsx)(d.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(_.Z, {
                                      show: !0,
                                      className: o()(T.logo)
                                  }),
                                  (0, i.jsx)(p.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, i.jsx)(x, { children: t })
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
let A = R;
