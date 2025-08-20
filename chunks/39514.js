n.d(t, { Z: () => P }), n(35282), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(570140),
    c = n(893776),
    u = n(533307),
    d = n(978085),
    h = n(232567),
    p = n(388905),
    m = n(362762),
    g = n(108427),
    f = n(314897),
    _ = n(896797),
    x = n(82142),
    E = n(283595),
    v = n(55563),
    j = n(669079),
    b = n(63063),
    I = n(51144),
    O = n(481153),
    N = n(781428),
    y = n(423527),
    S = n(981631),
    C = n(388032),
    Z = n(197571);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
o.ZP.initialize();
class T extends i.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, g.e)("gift_code");
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
        return e.login ? "login" : "register";
    }
    getErrorMessage(e) {
        let { libraryApplication: t, sku: n } = this.props,
            { error: r } = this.state,
            i = null != r ? r.code : null;
        return i === S.evJ.INVALID_GIFT_SELF_REDEMPTION
            ? C.intl.string(C.t.wa9h7O)
            : i === S.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === S.POd.COLLECTIBLES
              ? C.intl.string(C.t.mdLtb2)
              : null != t || i === S.evJ.INVALID_GIFT_REDEMPTION_OWNED
                ? C.intl.format(C.t.PIdmg4, { libraryLink: S.Z5c.APPLICATION_LIBRARY })
                : e.isClaimed || i === S.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? C.intl.string(C.t.ilcBeX)
                  : i === S.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? C.intl.string(C.t.ypuSd3)
                    : void 0;
    }
    renderSpinner(e) {
        return (0, r.jsxs)(p.ZP, {
            children: [(0, r.jsx)(p.Dx, { children: e }), (0, r.jsx)(p.Hh, {})],
        });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, {
                    src: n(167969),
                    className: Z.marginBottom8,
                }),
                (0, r.jsx)(p.Dx, {
                    className: s()(Z.marginTop8, Z.marginBottom8),
                    children: C.intl.string(C.t.KPowgo),
                }),
                (0, r.jsx)(p.DK, { children: C.intl.string(C.t.j8734e) }),
                (0, r.jsx)(p.zx, {
                    className: s()(Z.marginTop40, Z.marginBottom8),
                    onClick: () => t(e),
                    children: C.intl.string(C.t.fIv16O),
                }),
                (0, r.jsx)(p.zx, {
                    onClick: () => window.open(b.Z.getArticleURL(S.BhN.GIFTING), "_blank"),
                    look: p.zx.Looks.LINK,
                    color: p.zx.Colors.LINK,
                    children: C.intl.string(C.t["/CjuXF"]),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Dx, {
                    className: Z.marginBottom8,
                    children: C.intl.string(C.t.csrAMD),
                }),
                (0, r.jsx)(p.DK, { children: C.intl.string(C.t["m1+IBg"]) }),
                (0, r.jsx)(p.zx, {
                    className: Z.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: C.intl.string(C.t["qsI+EB"]),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Ee, {
                    src: n(892235),
                    className: Z.marginBottom8,
                }),
                (0, r.jsx)(p.Dx, { children: C.intl.format(C.t.ivLUf3, { username: e.username }) }),
                (0, r.jsx)(p.DK, {
                    className: Z.marginTop20,
                    children: C.intl.string(C.t["8Su18/"]),
                }),
                (0, r.jsx)(p.zx, {
                    disabled: t,
                    className: Z.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? C.intl.string(C.t.CMa9Rk) : C.intl.string(C.t.lm1UKi),
                }),
                (0, r.jsx)(p.zx, {
                    look: p.zx.Looks.LINK,
                    color: p.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: Z.marginTop8,
                    children: C.intl.string(C.t.Po9eBQ),
                }),
            ],
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(O.Z, { giftCode: e }),
                (0, r.jsx)(p.zx, {
                    disabled: null != n,
                    className: Z.marginTop40,
                    onClick: this.handleAccept,
                    children: C.intl.string(C.t.n6I6k5),
                }),
                null != n
                    ? (0, r.jsx)(p.DK, {
                          className: Z.marginTop20,
                          children: n,
                      })
                    : (0, r.jsx)(p.i_, {
                          className: Z.marginTop20,
                          children: C.intl.format(C.t.NYM08v, {
                              userTag: I.ZP.getUserTag(t),
                              onLogoutClick: this.handleLogout,
                          }),
                      }),
            ],
        });
    }
    render() {
        let {
                nativeAppState: e,
                sku: t,
                authenticated: n,
                giftCode: i,
                isResolved: l,
                isAccepting: s,
                transitionTo: o,
                location: a,
            } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
        if (e === S.kEZ.OPEN && !u) return this.renderAppOpened();
        if (e === S.kEZ.OPENING) return this.renderSpinner(C.intl.string(C.t["Z+hCVV"]));
        if (s) return this.renderSpinner(C.intl.string(C.t.bhJseH));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(C.intl.string(C.t.b3lf1d));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e
                    ? this.renderSpinner(C.intl.string(C.t.bYb2nZ))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e);
            }
            return "login" === this.getMode()
                ? (0, r.jsx)(N.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: o,
                      location: a,
                  })
                : (0, r.jsx)(y.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: o,
                      location: a,
                  });
        }
        return null;
    }
    constructor(...e) {
        super(...e),
            A(this, "state", {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1,
            }),
            A(this, "refreshUser", () => {
                this.setState({ fetchingUser: !0 }),
                    h
                        .k({ withAnalyticsToken: !0 })
                        .then((e) =>
                            this.setState({
                                currentUser: e,
                                fetchingUser: !1,
                            }),
                        )
                        .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            A(this, "handleLogout", () => {
                let e = this.props.match.params.giftCode;
                c.Z.logout("gift_code", S.Z5c.GIFT_CODE_LOGIN(e));
            }),
            A(this, "handleResendVerification", () => {
                c.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            A(this, "handleAccept", async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error("Trying to accept gift before resolve");
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await u.Z.redeemGiftCode({ code: n }), e(S.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            A(this, "resolveGiftCode", () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                u.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(S.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let P = o.ZP.connectStores([x.Z, E.Z, f.default, v.Z, _.Z, m.Z], (e) => {
    let t = e.match.params.giftCode,
        n = x.Z.get(t),
        r = null != n ? v.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: r,
        libraryApplication:
            null != r && (null == n ? void 0 : n.entitlementBranches) != null
                ? j.z2(n.entitlementBranches, r, E.Z)
                : null,
        authenticated: f.default.isAuthenticated(),
        defaultRoute: _.Z.defaultRoute,
        isResolved: x.Z.getIsResolved(t),
        isAccepting: x.Z.getIsAccepting(t),
        libraryApplicationsFetched: E.Z.fetched,
        nativeAppState: m.Z.getState(t),
    };
})(T);
