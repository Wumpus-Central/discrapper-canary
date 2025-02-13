n.d(t, { Z: () => L }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(570140),
    c = n(893776),
    d = n(533307),
    u = n(978085),
    h = n(232567),
    _ = n(388905),
    m = n(362762),
    g = n(108427),
    p = n(314897),
    f = n(896797),
    E = n(82142),
    x = n(283595),
    I = n(55563),
    C = n(669079),
    v = n(63063),
    N = n(51144),
    S = n(481153),
    T = n(781428),
    A = n(423527),
    b = n(981631),
    R = n(388032),
    Z = n(483938);
function O(e, t, n) {
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
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, g.e)('gift_code');
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
        return r === b.evJ.INVALID_GIFT_SELF_REDEMPTION ? R.intl.string(R.t.wa9h7O) : r === b.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === b.POd.COLLECTIBLES ? R.intl.string(R.t.mdLtb2) : null != t || r === b.evJ.INVALID_GIFT_REDEMPTION_OWNED ? R.intl.format(R.t.PIdmg4, { libraryLink: b.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || r === b.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? R.intl.string(R.t.ilcBeX) : r === b.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? R.intl.string(R.t.ypuSd3) : void 0;
    }
    renderSpinner(e) {
        return (0, i.jsxs)(_.ZP, {
            children: [(0, i.jsx)(_.Dx, { children: e }), (0, i.jsx)(_.Hh, {})]
        });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(_.Ee, {
                    src: n(167969),
                    className: Z.marginBottom8
                }),
                (0, i.jsx)(_.Dx, {
                    className: a()(Z.marginTop8, Z.marginBottom8),
                    children: R.intl.string(R.t.KPowgo)
                }),
                (0, i.jsx)(_.DK, { children: R.intl.string(R.t.j8734e) }),
                (0, i.jsx)(_.zx, {
                    className: a()(Z.marginTop40, Z.marginBottom8),
                    onClick: () => t(e),
                    children: R.intl.string(R.t.fIv16O)
                }),
                (0, i.jsx)(_.zx, {
                    onClick: () => window.open(v.Z.getArticleURL(b.BhN.GIFTING), '_blank'),
                    look: _.zx.Looks.LINK,
                    color: _.zx.Colors.LINK,
                    children: R.intl.string(R.t['/CjuXF'])
                })
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(_.Dx, {
                    className: Z.marginBottom8,
                    children: R.intl.string(R.t.csrAMD)
                }),
                (0, i.jsx)(_.DK, { children: R.intl.string(R.t['m1+IBg']) }),
                (0, i.jsx)(_.zx, {
                    className: Z.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: R.intl.string(R.t['qsI+EB'])
                })
            ]
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(_.Ee, {
                    src: n(892235),
                    className: Z.marginBottom8
                }),
                (0, i.jsx)(_.Dx, { children: R.intl.format(R.t.ivLUf3, { username: e.username }) }),
                (0, i.jsx)(_.DK, {
                    className: Z.marginTop20,
                    children: R.intl.string(R.t['8Su18/'])
                }),
                (0, i.jsx)(_.zx, {
                    disabled: t,
                    className: Z.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? R.intl.string(R.t.CMa9Rk) : R.intl.string(R.t.lm1UKi)
                }),
                (0, i.jsx)(_.zx, {
                    look: _.zx.Looks.LINK,
                    color: _.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: Z.marginTop8,
                    children: R.intl.string(R.t.Po9eBQ)
                })
            ]
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(S.Z, { giftCode: e }),
                (0, i.jsx)(_.zx, {
                    disabled: null != n,
                    className: Z.marginTop40,
                    onClick: this.handleAccept,
                    children: R.intl.string(R.t.n6I6k5)
                }),
                null != n
                    ? (0, i.jsx)(_.DK, {
                          className: Z.marginTop20,
                          children: n
                      })
                    : (0, i.jsx)(_.i_, {
                          className: Z.marginTop20,
                          children: R.intl.format(R.t.NYM08v, {
                              userTag: N.ZP.getUserTag(t),
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
        if (e === b.kEZ.OPENING) return this.renderSpinner(R.intl.string(R.t['Z+hCVV']));
        if (a) return this.renderSpinner(R.intl.string(R.t.bhJseH));
        if (null == r) return l ? this.renderExpiredInvite() : this.renderSpinner(R.intl.string(R.t.b3lf1d));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(R.intl.string(R.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(r, e);
            }
            return 'login' === this.getMode()
                ? (0, i.jsx)(T.Z, {
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
            O(this, 'state', {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }),
            O(this, 'refreshUser', () => {
                this.setState({ fetchingUser: !0 }),
                    h
                        .k({ withAnalyticsToken: !0 })
                        .then((e) =>
                            this.setState({
                                currentUser: e,
                                fetchingUser: !1
                            })
                        )
                        .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            O(this, 'handleLogout', () => {
                let e = this.props.match.params.giftCode;
                c.Z.logout(b.Z5c.GIFT_CODE_LOGIN(e));
            }),
            O(this, 'handleResendVerification', () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            O(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await d.Z.redeemGiftCode({ code: n }), e(b.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            O(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                d.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(b.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let L = o.ZP.connectStores([E.Z, x.Z, p.default, I.Z, f.Z, m.Z], (e) => {
    let t = e.match.params.giftCode,
        n = E.Z.get(t),
        i = null != n ? I.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && (null == n ? void 0 : n.entitlementBranches) != null ? C.z2(n.entitlementBranches, i, x.Z) : null,
        authenticated: p.default.isAuthenticated(),
        defaultRoute: f.Z.defaultRoute,
        isResolved: E.Z.getIsResolved(t),
        isAccepting: E.Z.getIsAccepting(t),
        libraryApplicationsFetched: x.Z.fetched,
        nativeAppState: m.Z.getState(t)
    };
})(j);
