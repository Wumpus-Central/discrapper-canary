let r;
n.d(t, { Z: () => L }), n(47120), n(301563);
var o = n(200651),
    i = n(192379),
    c = n(120356),
    l = n.n(c),
    s = n(873546),
    a = n(442837),
    u = n(481060),
    d = n(980591),
    h = n(605782),
    p = n(133853),
    f = n(568154),
    b = n(353926),
    m = n(703656),
    _ = n(981631),
    E = n(856167);
let O = n(575703),
    g = n(2984),
    I = [_.Z5c.LOGIN, _.Z5c.LOGIN_HANDOFF, _.Z5c.REGISTER, _.Z5c.INVITE(''), _.Z5c.GIFT_CODE(''), _.Z5c.GUILD_TEMPLATE_LOGIN(''), _.Z5c.GUILD_TEMPLATE(''), _.Z5c.DISABLE_EMAIL_NOTIFICATIONS, _.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Z5c.BILLING_PREMIUM_SUBSCRIBE, _.Z5c.BILLING_PAYMENT_SOURCES_CREATE, _.Z5c.BILLING_PAYMENTS, _.Z5c.BILLING_PREMIUM_SWITCH_PLAN, _.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Z5c.VERIFY, _.Z5c.VERIFY_HUB_EMAIL, _.Z5c.REJECT_IP, _.Z5c.REJECT_MFA, _.Z5c.AUTHORIZE_IP, _.Z5c.AUTHORIZE_PAYMENT, _.Z5c.RESET, _.Z5c.HANDOFF, _.Z5c.REPORT, _.Z5c.REPORT_SECOND_LOOK, _.Z5c.ACCOUNT_REVERT('')];
function T(e) {
    return I.some((t) => e.startsWith(t));
}
let Z = (e) => ((r = e), e);
function j(e) {
    let { children: t } = e;
    switch (
        (function () {
            var e;
            let [t, n] = i.useState(!1),
                [o, c] = i.useState(!0),
                l = (0, a.e7)([b.Z], () => b.Z.hasLoadedExperiments);
            return ((0, d.Z)(() => {}, 300), void 0 !== r) ? r : !o && l ? (t || n(!0), Z(((e = 0), 'default'))) : o ? Z('default') : 'loading';
        })()
    ) {
        case 'default':
            return (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)('img', {
                        className: E.artwork,
                        src: O,
                        alt: ''
                    }),
                    (0, o.jsx)('img', {
                        className: E.logoWithText,
                        src: g,
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
class x extends i.Component {
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    mobileTransitionTo(e, t) {
        if (T(e)) (0, m.uL)(e, t);
        else {
            let n = null != t && null != t.search ? t.search : null;
            window.location = null == n ? e : ''.concat(e, '?').concat(n);
        }
    }
    mobileReplaceWith(e) {
        T(e) ? (0, m.dL)(e) : (window.location = e);
    }
    renderDefault() {
        let { splash: e } = this.props,
            t = (0, o.jsx)(h.Z, {
                component: i.Fragment,
                children: i.Children.map(this.props.children, (e) =>
                    i.cloneElement(e, {
                        transitionTo: m.uL,
                        replaceWith: m.dL
                    })
                )
            });
        return (0, o.jsx)('div', {
            className: E.characterBackground,
            children: (0, o.jsx)(u.y5t, {
                forceLevel: 1,
                children:
                    null != e
                        ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                  (0, o.jsx)(p.Z, {
                                      show: !0,
                                      className: l()(E.logo)
                                  }),
                                  (0, o.jsx)(f.h, {
                                      splash: e,
                                      children: t
                                  })
                              ]
                          })
                        : (0, o.jsx)(j, { children: t })
            })
        });
    }
    renderMobile() {
        return (0, o.jsx)(h.Z, {
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
let L = x;
