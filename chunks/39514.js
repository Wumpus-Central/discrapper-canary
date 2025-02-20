n.d(t, { Z: () => P }), n(301563), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(570140),
    c = n(893776),
    u = n(533307),
    d = n(978085),
    h = n(232567),
    p = n(388905),
    _ = n(362762),
    g = n(108427),
    f = n(314897),
    m = n(896797),
    b = n(82142),
    N = n(283595),
    x = n(55563),
    v = n(669079),
    E = n(63063),
    I = n(51144),
    O = n(481153),
    C = n(781428),
    S = n(423527),
    j = n(981631),
    y = n(388032),
    T = n(455812);
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
class R extends i.PureComponent {
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
        return i === j.evJ.INVALID_GIFT_SELF_REDEMPTION ? y.NW.string(y.t.wa9h7O) : i === j.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === j.POd.COLLECTIBLES ? y.NW.string(y.t.mdLtb2) : null != t || i === j.evJ.INVALID_GIFT_REDEMPTION_OWNED ? y.NW.format(y.t.PIdmg4, { libraryLink: j.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || i === j.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? y.NW.string(y.t.ilcBeX) : i === j.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? y.NW.string(y.t.ypuSd3) : void 0;
    }
    renderSpinner(e) {
        return (0, r.jsxs)(p.ZP, {
            children: [(0, r.jsx)(p.Dx, { children: e }), (0, r.jsx)(p.Hh, {})]
        });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, {
                    src: n(167969),
                    className: T.marginBottom8
                }),
                (0, r.jsx)(p.Dx, {
                    className: a()(T.marginTop8, T.marginBottom8),
                    children: y.NW.string(y.t.KPowgo)
                }),
                (0, r.jsx)(p.DK, { children: y.NW.string(y.t.j8734e) }),
                (0, r.jsx)(p.zx, {
                    className: a()(T.marginTop40, T.marginBottom8),
                    onClick: () => t(e),
                    children: y.NW.string(y.t.fIv16O)
                }),
                (0, r.jsx)(p.zx, {
                    onClick: () => window.open(E.Z.getArticleURL(j.BhN.GIFTING), '_blank'),
                    look: p.zx.Looks.LINK,
                    color: p.zx.Colors.LINK,
                    children: y.NW.string(y.t['/CjuXF'])
                })
            ]
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Dx, {
                    className: T.marginBottom8,
                    children: y.NW.string(y.t.csrAMD)
                }),
                (0, r.jsx)(p.DK, { children: y.NW.string(y.t['m1+IBg']) }),
                (0, r.jsx)(p.zx, {
                    className: T.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: y.NW.string(y.t['qsI+EB'])
                })
            ]
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, {
                    src: n(892235),
                    className: T.marginBottom8
                }),
                (0, r.jsx)(p.Dx, { children: y.NW.format(y.t.ivLUf3, { username: e.username }) }),
                (0, r.jsx)(p.DK, {
                    className: T.marginTop20,
                    children: y.NW.string(y.t['8Su18/'])
                }),
                (0, r.jsx)(p.zx, {
                    disabled: t,
                    className: T.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? y.NW.string(y.t.CMa9Rk) : y.NW.string(y.t.lm1UKi)
                }),
                (0, r.jsx)(p.zx, {
                    look: p.zx.Looks.LINK,
                    color: p.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: T.marginTop8,
                    children: y.NW.string(y.t.Po9eBQ)
                })
            ]
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(O.Z, { giftCode: e }),
                (0, r.jsx)(p.zx, {
                    disabled: null != n,
                    className: T.marginTop40,
                    onClick: this.handleAccept,
                    children: y.NW.string(y.t.n6I6k5)
                }),
                null != n
                    ? (0, r.jsx)(p.DK, {
                          className: T.marginTop20,
                          children: n
                      })
                    : (0, r.jsx)(p.i_, {
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
        if (e === j.kEZ.OPEN && !u) return this.renderAppOpened();
        if (e === j.kEZ.OPENING) return this.renderSpinner(y.NW.string(y.t['Z+hCVV']));
        if (a) return this.renderSpinner(y.NW.string(y.t.bhJseH));
        if (null == i) return o ? this.renderExpiredInvite() : this.renderSpinner(y.NW.string(y.t.b3lf1d));
        if (o) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(y.NW.string(y.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(i, e);
            }
            return 'login' === this.getMode()
                ? (0, r.jsx)(C.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: l,
                      location: s
                  })
                : (0, r.jsx)(S.Z, {
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
                c.Z.logout(j.Z5c.GIFT_CODE_LOGIN(e));
            }),
            A(this, 'handleResendVerification', () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            A(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await u.Z.redeemGiftCode({ code: n }), e(j.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            A(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                u.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(j.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let P = l.ZP.connectStores([b.Z, N.Z, f.default, x.Z, m.Z, _.Z], (e) => {
    let t = e.match.params.giftCode,
        n = b.Z.get(t),
        r = null != n ? x.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: r,
        libraryApplication: null != r && (null == n ? void 0 : n.entitlementBranches) != null ? v.z2(n.entitlementBranches, r, N.Z) : null,
        authenticated: f.default.isAuthenticated(),
        defaultRoute: m.Z.defaultRoute,
        isResolved: b.Z.getIsResolved(t),
        isAccepting: b.Z.getIsAccepting(t),
        libraryApplicationsFetched: N.Z.fetched,
        nativeAppState: _.Z.getState(t)
    };
})(R);
