n.d(t, { Z: () => Z }), n(301563), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(570140),
    c = n(893776),
    u = n(533307),
    d = n(978085),
    p = n(232567),
    g = n(388905),
    h = n(362762),
    f = n(108427),
    m = n(314897),
    _ = n(896797),
    b = n(82142),
    x = n(283595),
    N = n(55563),
    v = n(669079),
    E = n(63063),
    I = n(51144),
    j = n(481153),
    S = n(781428),
    O = n(423527),
    C = n(981631),
    y = n(388032),
    T = n(20493);
function P(e, t, n) {
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
l.ZP.initialize();
class A extends i.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, f.e)('gift_code');
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
        d.b8(), null == e && this.refreshUser();
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
            { error: r } = this.state,
            i = null != r ? r.code : null;
        return i === C.evJ.INVALID_GIFT_SELF_REDEMPTION ? y.NW.string(y.t.wa9h7O) : i === C.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === C.POd.COLLECTIBLES ? y.NW.string(y.t.mdLtb2) : null != t || i === C.evJ.INVALID_GIFT_REDEMPTION_OWNED ? y.NW.format(y.t.PIdmg4, { libraryLink: C.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || i === C.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? y.NW.string(y.t.ilcBeX) : i === C.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? y.NW.string(y.t.ypuSd3) : void 0;
    }
    renderSpinner(e) {
        return (0, r.jsxs)(g.ZP, {
            children: [(0, r.jsx)(g.Dx, { children: e }), (0, r.jsx)(g.Hh, {})]
        });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, {
                    src: n(167969),
                    className: T.marginBottom8
                }),
                (0, r.jsx)(g.Dx, {
                    className: a()(T.marginTop8, T.marginBottom8),
                    children: y.NW.string(y.t.KPowgo)
                }),
                (0, r.jsx)(g.DK, { children: y.NW.string(y.t.j8734e) }),
                (0, r.jsx)(g.zx, {
                    className: a()(T.marginTop40, T.marginBottom8),
                    onClick: () => t(e),
                    children: y.NW.string(y.t.fIv16O)
                }),
                (0, r.jsx)(g.zx, {
                    onClick: () => window.open(E.Z.getArticleURL(C.BhN.GIFTING), '_blank'),
                    look: g.zx.Looks.LINK,
                    color: g.zx.Colors.LINK,
                    children: y.NW.string(y.t['/CjuXF'])
                })
            ]
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Dx, {
                    className: T.marginBottom8,
                    children: y.NW.string(y.t.csrAMD)
                }),
                (0, r.jsx)(g.DK, { children: y.NW.string(y.t['m1+IBg']) }),
                (0, r.jsx)(g.zx, {
                    className: T.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: y.NW.string(y.t['qsI+EB'])
                })
            ]
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Ee, {
                    src: n(892235),
                    className: T.marginBottom8
                }),
                (0, r.jsx)(g.Dx, { children: y.NW.format(y.t.ivLUf3, { username: e.username }) }),
                (0, r.jsx)(g.DK, {
                    className: T.marginTop20,
                    children: y.NW.string(y.t['8Su18/'])
                }),
                (0, r.jsx)(g.zx, {
                    disabled: t,
                    className: T.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? y.NW.string(y.t.CMa9Rk) : y.NW.string(y.t.lm1UKi)
                }),
                (0, r.jsx)(g.zx, {
                    look: g.zx.Looks.LINK,
                    color: g.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: T.marginTop8,
                    children: y.NW.string(y.t.Po9eBQ)
                })
            ]
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(j.Z, { giftCode: e }),
                (0, r.jsx)(g.zx, {
                    disabled: null != n,
                    className: T.marginTop40,
                    onClick: this.handleAccept,
                    children: y.NW.string(y.t.n6I6k5)
                }),
                null != n
                    ? (0, r.jsx)(g.DK, {
                          className: T.marginTop20,
                          children: n
                      })
                    : (0, r.jsx)(g.i_, {
                          className: T.marginTop20,
                          children: y.NW.format(y.t.NYM08v, {
                              userTag: I.ZP.getUserTag(t),
                              onLogoutClick: this.handleLogout
                          })
                      })
            ]
        });
    }
    render() {
        let { nativeAppState: e, sku: t, authenticated: n, giftCode: i, isResolved: o, isAccepting: a, transitionTo: l, location: s } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
        if (e === C.kEZ.OPEN && !u) return this.renderAppOpened();
        if (e === C.kEZ.OPENING) return this.renderSpinner(y.NW.string(y.t['Z+hCVV']));
        if (a) return this.renderSpinner(y.NW.string(y.t.bhJseH));
        if (null == i) return o ? this.renderExpiredInvite() : this.renderSpinner(y.NW.string(y.t.b3lf1d));
        if (o) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(y.NW.string(y.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(i, e);
            }
            return 'login' === this.getMode()
                ? (0, r.jsx)(S.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: l,
                      location: s
                  })
                : (0, r.jsx)(O.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: l,
                      location: s
                  });
        }
        return null;
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }),
            P(this, 'refreshUser', () => {
                this.setState({ fetchingUser: !0 }),
                    p
                        .k({ withAnalyticsToken: !0 })
                        .then((e) =>
                            this.setState({
                                currentUser: e,
                                fetchingUser: !1
                            })
                        )
                        .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            P(this, 'handleLogout', () => {
                let e = this.props.match.params.giftCode;
                c.Z.logout(C.Z5c.GIFT_CODE_LOGIN(e));
            }),
            P(this, 'handleResendVerification', () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            P(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await u.Z.redeemGiftCode({ code: n }), e(C.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            P(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                u.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(C.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let Z = l.ZP.connectStores([b.Z, x.Z, m.default, N.Z, _.Z, h.Z], (e) => {
    let t = e.match.params.giftCode,
        n = b.Z.get(t),
        r = null != n ? N.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: r,
        libraryApplication: null != r && (null == n ? void 0 : n.entitlementBranches) != null ? v.z2(n.entitlementBranches, r, x.Z) : null,
        authenticated: m.default.isAuthenticated(),
        defaultRoute: _.Z.defaultRoute,
        isResolved: b.Z.getIsResolved(t),
        isAccepting: b.Z.getIsAccepting(t),
        libraryApplicationsFetched: x.Z.fetched,
        nativeAppState: h.Z.getState(t)
    };
})(A);
