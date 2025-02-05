n.d(t, { Z: () => y }), n(47120), n(411104);
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
    g = n(362762),
    p = n(108427),
    m = n(314897),
    f = n(896797),
    x = n(82142),
    E = n(283595),
    I = n(55563),
    v = n(669079),
    N = n(63063),
    b = n(51144),
    C = n(481153),
    T = n(781428),
    S = n(423527),
    A = n(981631),
    Z = n(388032),
    j = n(232186);
function R(e, t, n) {
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
class L extends r.PureComponent {
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
        return r === A.evJ.INVALID_GIFT_SELF_REDEMPTION ? Z.intl.string(Z.t.wa9h7O) : r === A.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === A.POd.COLLECTIBLES ? Z.intl.string(Z.t.mdLtb2) : null != t || r === A.evJ.INVALID_GIFT_REDEMPTION_OWNED ? Z.intl.format(Z.t.PIdmg4, { libraryLink: A.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || r === A.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? Z.intl.string(Z.t.ilcBeX) : r === A.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? Z.intl.string(Z.t.ypuSd3) : void 0;
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
                    className: j.marginBottom8
                }),
                (0, i.jsx)(_.Dx, {
                    className: a()(j.marginTop8, j.marginBottom8),
                    children: Z.intl.string(Z.t.KPowgo)
                }),
                (0, i.jsx)(_.DK, { children: Z.intl.string(Z.t.j8734e) }),
                (0, i.jsx)(_.zx, {
                    className: a()(j.marginTop40, j.marginBottom8),
                    onClick: () => t(e),
                    children: Z.intl.string(Z.t.fIv16O)
                }),
                (0, i.jsx)(_.zx, {
                    onClick: () => window.open(N.Z.getArticleURL(A.BhN.GIFTING), '_blank'),
                    look: _.zx.Looks.LINK,
                    color: _.zx.Colors.LINK,
                    children: Z.intl.string(Z.t['/CjuXF'])
                })
            ]
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(_.Dx, {
                    className: j.marginBottom8,
                    children: Z.intl.string(Z.t.csrAMD)
                }),
                (0, i.jsx)(_.DK, { children: Z.intl.string(Z.t['m1+IBg']) }),
                (0, i.jsx)(_.zx, {
                    className: j.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: Z.intl.string(Z.t['qsI+EB'])
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
                    className: j.marginBottom8
                }),
                (0, i.jsx)(_.Dx, { children: Z.intl.format(Z.t.ivLUf3, { username: e.username }) }),
                (0, i.jsx)(_.DK, {
                    className: j.marginTop20,
                    children: Z.intl.string(Z.t['8Su18/'])
                }),
                (0, i.jsx)(_.zx, {
                    disabled: t,
                    className: j.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? Z.intl.string(Z.t.CMa9Rk) : Z.intl.string(Z.t.lm1UKi)
                }),
                (0, i.jsx)(_.zx, {
                    look: _.zx.Looks.LINK,
                    color: _.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: j.marginTop8,
                    children: Z.intl.string(Z.t.Po9eBQ)
                })
            ]
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, i.jsxs)(_.ZP, {
            children: [
                (0, i.jsx)(C.Z, { giftCode: e }),
                (0, i.jsx)(_.zx, {
                    disabled: null != n,
                    className: j.marginTop40,
                    onClick: this.handleAccept,
                    children: Z.intl.string(Z.t.n6I6k5)
                }),
                null != n
                    ? (0, i.jsx)(_.DK, {
                          className: j.marginTop20,
                          children: n
                      })
                    : (0, i.jsx)(_.i_, {
                          className: j.marginTop20,
                          children: Z.intl.format(Z.t.NYM08v, {
                              userTag: b.ZP.getUserTag(t),
                              onLogoutClick: this.handleLogout
                          })
                      })
            ]
        });
    }
    render() {
        let { nativeAppState: e, sku: t, authenticated: n, giftCode: r, isResolved: l, isAccepting: a, transitionTo: o, location: s } = this.props,
            { fetchingUser: c, continueOnWeb: d } = this.state;
        if (e === A.kEZ.OPEN && !d) return this.renderAppOpened();
        if (e === A.kEZ.OPENING) return this.renderSpinner(Z.intl.string(Z.t['Z+hCVV']));
        if (a) return this.renderSpinner(Z.intl.string(Z.t.bhJseH));
        if (null == r) return l ? this.renderExpiredInvite() : this.renderSpinner(Z.intl.string(Z.t.b3lf1d));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(Z.intl.string(Z.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(r, e);
            }
            return 'login' === this.getMode()
                ? (0, i.jsx)(T.Z, {
                      giftCodeSKU: t,
                      giftCode: r,
                      transitionTo: o,
                      location: s
                  })
                : (0, i.jsx)(S.Z, {
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
            R(this, 'state', {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }),
            R(this, 'refreshUser', () => {
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
            R(this, 'handleLogout', () => {
                let e = this.props.match.params.giftCode;
                c.Z.logout(A.Z5c.GIFT_CODE_LOGIN(e));
            }),
            R(this, 'handleResendVerification', () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            R(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await d.Z.redeemGiftCode({ code: n }), e(A.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            R(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                d.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(A.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let y = o.ZP.connectStores([x.Z, E.Z, m.default, I.Z, f.Z, g.Z], (e) => {
    let t = e.match.params.giftCode,
        n = x.Z.get(t),
        i = null != n ? I.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && (null == n ? void 0 : n.entitlementBranches) != null ? v.z2(n.entitlementBranches, i, E.Z) : null,
        authenticated: m.default.isAuthenticated(),
        defaultRoute: f.Z.defaultRoute,
        isResolved: x.Z.getIsResolved(t),
        isAccepting: x.Z.getIsAccepting(t),
        libraryApplicationsFetched: E.Z.fetched,
        nativeAppState: g.Z.getState(t)
    };
})(L);
