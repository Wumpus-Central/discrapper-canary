n.d(t, { Z: () => Z }), n(35282), n(388685), n(415506);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    a = n(570140),
    c = n(893776),
    u = n(533307),
    d = n(978085),
    h = n(232567),
    g = n(388905),
    p = n(362762),
    m = n(108427),
    f = n(314897),
    _ = n(896797),
    x = n(82142),
    N = n(283595),
    b = n(55563),
    E = n(669079),
    v = n(63063),
    j = n(51144),
    I = n(481153),
    O = n(781428),
    S = n(423527),
    y = n(981631),
    C = n(388032),
    P = n(20493);
function A(e, t, n) {
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
class T extends i.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, m.e)('gift_code');
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            a.Z.wait(() => {
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
        return i === y.evJ.INVALID_GIFT_SELF_REDEMPTION ? C.NW.string(C.t.wa9h7O) : i === y.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === y.POd.COLLECTIBLES ? C.NW.string(C.t.mdLtb2) : null != t || i === y.evJ.INVALID_GIFT_REDEMPTION_OWNED ? C.NW.format(C.t.PIdmg4, { libraryLink: y.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || i === y.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? C.NW.string(C.t.ilcBeX) : i === y.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? C.NW.string(C.t.ypuSd3) : void 0;
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
                    className: P.marginBottom8
                }),
                (0, r.jsx)(g.Dx, {
                    className: o()(P.marginTop8, P.marginBottom8),
                    children: C.NW.string(C.t.KPowgo)
                }),
                (0, r.jsx)(g.DK, { children: C.NW.string(C.t.j8734e) }),
                (0, r.jsx)(g.zx, {
                    className: o()(P.marginTop40, P.marginBottom8),
                    onClick: () => t(e),
                    children: C.NW.string(C.t.fIv16O)
                }),
                (0, r.jsx)(g.zx, {
                    onClick: () => window.open(v.Z.getArticleURL(y.BhN.GIFTING), '_blank'),
                    look: g.zx.Looks.LINK,
                    color: g.zx.Colors.LINK,
                    children: C.NW.string(C.t['/CjuXF'])
                })
            ]
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(g.Dx, {
                    className: P.marginBottom8,
                    children: C.NW.string(C.t.csrAMD)
                }),
                (0, r.jsx)(g.DK, { children: C.NW.string(C.t['m1+IBg']) }),
                (0, r.jsx)(g.zx, {
                    className: P.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: C.NW.string(C.t['qsI+EB'])
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
                    className: P.marginBottom8
                }),
                (0, r.jsx)(g.Dx, { children: C.NW.format(C.t.ivLUf3, { username: e.username }) }),
                (0, r.jsx)(g.DK, {
                    className: P.marginTop20,
                    children: C.NW.string(C.t['8Su18/'])
                }),
                (0, r.jsx)(g.zx, {
                    disabled: t,
                    className: P.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? C.NW.string(C.t.CMa9Rk) : C.NW.string(C.t.lm1UKi)
                }),
                (0, r.jsx)(g.zx, {
                    look: g.zx.Looks.LINK,
                    color: g.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: P.marginTop8,
                    children: C.NW.string(C.t.Po9eBQ)
                })
            ]
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, r.jsxs)(g.ZP, {
            children: [
                (0, r.jsx)(I.Z, { giftCode: e }),
                (0, r.jsx)(g.zx, {
                    disabled: null != n,
                    className: P.marginTop40,
                    onClick: this.handleAccept,
                    children: C.NW.string(C.t.n6I6k5)
                }),
                null != n
                    ? (0, r.jsx)(g.DK, {
                          className: P.marginTop20,
                          children: n
                      })
                    : (0, r.jsx)(g.i_, {
                          className: P.marginTop20,
                          children: C.NW.format(C.t.NYM08v, {
                              userTag: j.ZP.getUserTag(t),
                              onLogoutClick: this.handleLogout
                          })
                      })
            ]
        });
    }
    render() {
        let { nativeAppState: e, sku: t, authenticated: n, giftCode: i, isResolved: s, isAccepting: o, transitionTo: l, location: a } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
        if (e === y.kEZ.OPEN && !u) return this.renderAppOpened();
        if (e === y.kEZ.OPENING) return this.renderSpinner(C.NW.string(C.t['Z+hCVV']));
        if (o) return this.renderSpinner(C.NW.string(C.t.bhJseH));
        if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(C.NW.string(C.t.b3lf1d));
        if (s) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(C.NW.string(C.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(i, e);
            }
            return 'login' === this.getMode()
                ? (0, r.jsx)(O.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: l,
                      location: a
                  })
                : (0, r.jsx)(S.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: l,
                      location: a
                  });
        }
        return null;
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }),
            A(this, 'refreshUser', () => {
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
            A(this, 'handleLogout', () => {
                let e = this.props.match.params.giftCode;
                c.Z.logout('gift_code', y.Z5c.GIFT_CODE_LOGIN(e));
            }),
            A(this, 'handleResendVerification', () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            A(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await u.Z.redeemGiftCode({ code: n }), e(y.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            A(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                u.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(y.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let Z = l.ZP.connectStores([x.Z, N.Z, f.default, b.Z, _.Z, p.Z], (e) => {
    let t = e.match.params.giftCode,
        n = x.Z.get(t),
        r = null != n ? b.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: r,
        libraryApplication: null != r && (null == n ? void 0 : n.entitlementBranches) != null ? E.z2(n.entitlementBranches, r, N.Z) : null,
        authenticated: f.default.isAuthenticated(),
        defaultRoute: _.Z.defaultRoute,
        isResolved: x.Z.getIsResolved(t),
        isAccepting: x.Z.getIsAccepting(t),
        libraryApplicationsFetched: N.Z.fetched,
        nativeAppState: p.Z.getState(t)
    };
})(T);
