n.d(t, { Z: () => L }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(570140),
    c = n(893776),
    d = n(533307),
    u = n(978085),
    h = n(232567),
    _ = n(388905),
    m = n(362762),
    g = n(108427),
    p = n(314897),
    f = n(896797),
    x = n(82142),
    E = n(283595),
    I = n(55563),
    v = n(669079),
    C = n(63063),
    N = n(51144),
    b = n(481153),
    S = n(781428),
    T = n(423527),
    A = n(981631),
    R = n(388032),
    Z = n(483938);
function j(e, t, n) {
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
s.ZP.initialize();
class O extends r.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, g.e)('gift_code');
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            o.Z.wait(() => {
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
        return r === A.evJ.INVALID_GIFT_SELF_REDEMPTION ? R.intl.string(R.t.wa9h7O) : r === A.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === A.POd.COLLECTIBLES ? R.intl.string(R.t.mdLtb2) : null != t || r === A.evJ.INVALID_GIFT_REDEMPTION_OWNED ? R.intl.format(R.t.PIdmg4, { libraryLink: A.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || r === A.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? R.intl.string(R.t.ilcBeX) : r === A.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? R.intl.string(R.t.ypuSd3) : void 0;
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
                    className: l()(Z.marginTop8, Z.marginBottom8),
                    children: R.intl.string(R.t.KPowgo)
                }),
                (0, i.jsx)(_.DK, { children: R.intl.string(R.t.j8734e) }),
                (0, i.jsx)(_.zx, {
                    className: l()(Z.marginTop40, Z.marginBottom8),
                    onClick: () => t(e),
                    children: R.intl.string(R.t.fIv16O)
                }),
                (0, i.jsx)(_.zx, {
                    onClick: () => window.open(C.Z.getArticleURL(A.BhN.GIFTING), '_blank'),
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
                (0, i.jsx)(b.Z, { giftCode: e }),
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
        let { nativeAppState: e, sku: t, authenticated: n, giftCode: r, isResolved: a, isAccepting: l, transitionTo: s, location: o } = this.props,
            { fetchingUser: c, continueOnWeb: d } = this.state;
        if (e === A.kEZ.OPEN && !d) return this.renderAppOpened();
        if (e === A.kEZ.OPENING) return this.renderSpinner(R.intl.string(R.t['Z+hCVV']));
        if (l) return this.renderSpinner(R.intl.string(R.t.bhJseH));
        if (null == r) return a ? this.renderExpiredInvite() : this.renderSpinner(R.intl.string(R.t.b3lf1d));
        if (a) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(R.intl.string(R.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(r, e);
            }
            return 'login' === this.getMode()
                ? (0, i.jsx)(S.Z, {
                      giftCodeSKU: t,
                      giftCode: r,
                      transitionTo: s,
                      location: o
                  })
                : (0, i.jsx)(T.Z, {
                      giftCodeSKU: t,
                      giftCode: r,
                      transitionTo: s,
                      location: o
                  });
        }
        return null;
    }
    constructor(...e) {
        super(...e),
            j(this, 'state', {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }),
            j(this, 'refreshUser', () => {
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
            j(this, 'handleLogout', () => {
                let e = this.props.match.params.giftCode;
                c.Z.logout(A.Z5c.GIFT_CODE_LOGIN(e));
            }),
            j(this, 'handleResendVerification', () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            j(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await d.Z.redeemGiftCode({ code: n }), e(A.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            j(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                d.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(A.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let L = s.ZP.connectStores([x.Z, E.Z, p.default, I.Z, f.Z, m.Z], (e) => {
    let t = e.match.params.giftCode,
        n = x.Z.get(t),
        i = null != n ? I.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && (null == n ? void 0 : n.entitlementBranches) != null ? v.z2(n.entitlementBranches, i, E.Z) : null,
        authenticated: p.default.isAuthenticated(),
        defaultRoute: f.Z.defaultRoute,
        isResolved: x.Z.getIsResolved(t),
        isAccepting: x.Z.getIsAccepting(t),
        libraryApplicationsFetched: E.Z.fetched,
        nativeAppState: m.Z.getState(t)
    };
})(O);
