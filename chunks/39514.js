n.d(t, { Z: () => O }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(570140),
    c = n(893776),
    d = n(533307),
    u = n(978085),
    _ = n(232567),
    h = n(388905),
    g = n(362762),
    p = n(108427),
    m = n(314897),
    f = n(896797),
    E = n(82142),
    I = n(283595),
    x = n(55563),
    C = n(669079),
    N = n(63063),
    v = n(51144),
    T = n(481153),
    S = n(781428),
    A = n(423527),
    b = n(981631),
    Z = n(388032),
    R = n(232186);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
o.ZP.initialize();
class j extends r.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, p.e)('gift_code');
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            s.Z.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        u.b8(), null == e && this.refreshUser();
    }
    get requiresVerification() {
        let { currentUser: e } = this.state;
        return null != e && !e.verified;
    }
    getCode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.match.params.giftCode;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? 'login' : 'register';
    }
    getErrorMessage(e) {
        let { libraryApplication: t, sku: n } = this.props,
            { error: i } = this.state,
            r = null != i ? i.code : null;
        return r === b.evJ.INVALID_GIFT_SELF_REDEMPTION ? Z.intl.string(Z.t.wa9h7O) : r === b.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === b.POd.COLLECTIBLES ? Z.intl.string(Z.t.mdLtb2) : null != t || r === b.evJ.INVALID_GIFT_REDEMPTION_OWNED ? Z.intl.format(Z.t.PIdmg4, { libraryLink: b.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || r === b.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? Z.intl.string(Z.t.ilcBeX) : r === b.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? Z.intl.string(Z.t.ypuSd3) : void 0;
    }
    renderSpinner(e) {
        return (0, i.jsxs)(h.ZP, {
            children: [(0, i.jsx)(h.Dx, { children: e }), (0, i.jsx)(h.Hh, {})]
        });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(h.ZP, {
            children: [
                (0, i.jsx)(h.Ee, {
                    src: n(167969),
                    className: R.marginBottom8
                }),
                (0, i.jsx)(h.Dx, {
                    className: a()(R.marginTop8, R.marginBottom8),
                    children: Z.intl.string(Z.t.KPowgo)
                }),
                (0, i.jsx)(h.DK, { children: Z.intl.string(Z.t.j8734e) }),
                (0, i.jsx)(h.zx, {
                    className: a()(R.marginTop40, R.marginBottom8),
                    onClick: () => t(e),
                    children: Z.intl.string(Z.t.fIv16O)
                }),
                (0, i.jsx)(h.zx, {
                    onClick: () => window.open(N.Z.getArticleURL(b.BhN.GIFTING), '_blank'),
                    look: h.zx.Looks.LINK,
                    color: h.zx.Colors.LINK,
                    children: Z.intl.string(Z.t['/CjuXF'])
                })
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(h.ZP, {
            children: [
                (0, i.jsx)(h.Dx, {
                    className: R.marginBottom8,
                    children: Z.intl.string(Z.t.csrAMD)
                }),
                (0, i.jsx)(h.DK, { children: Z.intl.string(Z.t['m1+IBg']) }),
                (0, i.jsx)(h.zx, {
                    className: R.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: Z.intl.string(Z.t['qsI+EB'])
                })
            ]
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, i.jsxs)(h.ZP, {
            children: [
                (0, i.jsx)(h.Ee, {
                    src: n(892235),
                    className: R.marginBottom8
                }),
                (0, i.jsx)(h.Dx, { children: Z.intl.format(Z.t.ivLUf3, { username: e.username }) }),
                (0, i.jsx)(h.DK, {
                    className: R.marginTop20,
                    children: Z.intl.string(Z.t['8Su18/'])
                }),
                (0, i.jsx)(h.zx, {
                    disabled: t,
                    className: R.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? Z.intl.string(Z.t.CMa9Rk) : Z.intl.string(Z.t.lm1UKi)
                }),
                (0, i.jsx)(h.zx, {
                    look: h.zx.Looks.LINK,
                    color: h.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: R.marginTop8,
                    children: Z.intl.string(Z.t.Po9eBQ)
                })
            ]
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, i.jsxs)(h.ZP, {
            children: [
                (0, i.jsx)(T.Z, { giftCode: e }),
                (0, i.jsx)(h.zx, {
                    disabled: null != n,
                    className: R.marginTop40,
                    onClick: this.handleAccept,
                    children: Z.intl.string(Z.t.n6I6k5)
                }),
                null != n
                    ? (0, i.jsx)(h.DK, {
                          className: R.marginTop20,
                          children: n
                      })
                    : (0, i.jsx)(h.i_, {
                          className: R.marginTop20,
                          children: Z.intl.format(Z.t.NYM08v, {
                              userTag: v.ZP.getUserTag(t),
                              onLogoutClick: this.handleLogout
                          })
                      })
            ]
        });
    }
    render() {
        let { nativeAppState: e, sku: t, authenticated: n, giftCode: r, isResolved: l, isAccepting: a, transitionTo: o, location: s } = this.props,
            { fetchingUser: c, continueOnWeb: d } = this.state;
        if (e === b.kEZ.OPEN && !d) return this.renderAppOpened();
        if (e === b.kEZ.OPENING) return this.renderSpinner(Z.intl.string(Z.t['Z+hCVV']));
        if (a) return this.renderSpinner(Z.intl.string(Z.t.bhJseH));
        if (null == r) return l ? this.renderExpiredInvite() : this.renderSpinner(Z.intl.string(Z.t.b3lf1d));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(Z.intl.string(Z.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(r, e);
            }
            return 'login' === this.getMode()
                ? (0, i.jsx)(S.Z, {
                      giftCodeSKU: t,
                      giftCode: r,
                      transitionTo: o,
                      location: s
                  })
                : (0, i.jsx)(A.Z, {
                      giftCodeSKU: t,
                      giftCode: r,
                      transitionTo: o,
                      location: s
                  });
        }
        return null;
    }
    constructor(...e) {
        super(...e),
            L(this, 'state', {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }),
            L(this, 'refreshUser', () => {
                this.setState({ fetchingUser: !0 }),
                    _.k({ withAnalyticsToken: !0 })
                        .then((e) =>
                            this.setState({
                                currentUser: e,
                                fetchingUser: !1
                            })
                        )
                        .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            L(this, 'handleLogout', () => {
                let e = this.props.match.params.giftCode;
                c.Z.logout(b.Z5c.GIFT_CODE_LOGIN(e));
            }),
            L(this, 'handleResendVerification', () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            L(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await d.Z.redeemGiftCode({ code: n }), e(b.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            L(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                d.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(b.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let O = o.ZP.connectStores([E.Z, I.Z, m.default, x.Z, f.Z, g.Z], (e) => {
    let t = e.match.params.giftCode,
        n = E.Z.get(t),
        i = null != n ? x.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && (null == n ? void 0 : n.entitlementBranches) != null ? C.z2(n.entitlementBranches, i, I.Z) : null,
        authenticated: m.default.isAuthenticated(),
        defaultRoute: f.Z.defaultRoute,
        isResolved: E.Z.getIsResolved(t),
        isAccepting: E.Z.getIsAccepting(t),
        libraryApplicationsFetched: I.Z.fetched,
        nativeAppState: g.Z.getState(t)
    };
})(j);
