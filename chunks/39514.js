n.d(t, { Z: () => R }), n(35282), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    h = n(978085),
    g = n(232567),
    p = n(388905),
    m = n(362762),
    f = n(108427),
    _ = n(314897),
    x = n(896797),
    E = n(82142),
    v = n(283595),
    b = n(55563),
    j = n(669079),
    I = n(63063),
    y = n(51144),
    O = n(481153),
    S = n(781428),
    N = n(423527),
    C = n(981631),
    A = n(388032),
    T = n(197571);
function Z(e, t, n) {
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
a.ZP.initialize();
class P extends i.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, f.e)("gift_code");
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            c.Z.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        h.b8(), null == e && this.refreshUser();
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
        return i === C.evJ.INVALID_GIFT_SELF_REDEMPTION
            ? A.intl.string(A.t.wa9h7F)
            : i === C.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === C.POd.COLLECTIBLES
              ? A.intl.string(A.t.mdLtb5)
              : null != t || i === C.evJ.INVALID_GIFT_REDEMPTION_OWNED
                ? A.intl.format(A.t.PIdmg3, { libraryLink: C.Z5c.APPLICATION_LIBRARY })
                : e.isClaimed || i === C.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? A.intl.string(A.t.ilcBeX)
                  : i === C.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? A.intl.string(A.t.ypuSd8)
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
                    className: T.marginBottom8,
                }),
                (0, r.jsx)(p.Dx, {
                    className: l()(T.marginTop8, T.marginBottom8),
                    children: A.intl.string(A.t.KPowgn),
                }),
                (0, r.jsx)(p.DK, { children: A.intl.string(A.t.j8734b) }),
                (0, r.jsx)("div", {
                    className: l()(T.marginTop40, T.marginBottom8),
                    children: (0, r.jsx)(o.Button, {
                        text: A.intl.string(A.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
                (0, r.jsx)(o.Avr, {
                    text: A.intl.string(A.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(I.Z.getArticleURL(C.BhN.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Dx, {
                    className: T.marginBottom8,
                    children: A.intl.string(A.t.csrAMJ),
                }),
                (0, r.jsx)(p.DK, { children: A.intl.string(A.t["m1+IBn"]) }),
                (0, r.jsx)("div", {
                    className: T.marginTop40,
                    children: (0, r.jsx)(o.Button, {
                        text: A.intl.string(A.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
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
                    className: T.marginBottom8,
                }),
                (0, r.jsx)(p.Dx, { children: A.intl.format(A.t["ivLUf/"], { username: e.username }) }),
                (0, r.jsx)(p.DK, {
                    className: T.marginTop20,
                    children: A.intl.string(A.t["8Su18+"]),
                }),
                (0, r.jsx)("div", {
                    className: T.marginTop40,
                    children: (0, r.jsx)(o.Button, {
                        text: t ? A.intl.string(A.t.CMa9Rv) : A.intl.string(A.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: T.marginTop8,
                    children: (0, r.jsx)(o.Avr, {
                        text: A.intl.string(A.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(O.Z, { giftCode: e }),
                (0, r.jsx)("div", {
                    className: T.marginTop40,
                    children: (0, r.jsx)(o.Button, {
                        text: A.intl.string(A.t.n6I6k4),
                        fullWidth: !0,
                        disabled: null != n,
                        onClick: this.handleAccept,
                    }),
                }),
                null != n
                    ? (0, r.jsx)(p.DK, {
                          className: T.marginTop20,
                          children: n,
                      })
                    : (0, r.jsx)(p.i_, {
                          className: T.marginTop20,
                          children: A.intl.format(A.t.NYM08s, {
                              userTag: y.ZP.getUserTag(t),
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
                isResolved: s,
                isAccepting: l,
                transitionTo: a,
                location: o,
            } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
        if (e === C.kEZ.OPEN && !u) return this.renderAppOpened();
        if (e === C.kEZ.OPENING) return this.renderSpinner(A.intl.string(A.t["Z+hCVU"]));
        if (l) return this.renderSpinner(A.intl.string(A.t.bhJseN));
        if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(A.intl.string(A.t.b3lf1c));
        if (s) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e
                    ? this.renderSpinner(A.intl.string(A.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e);
            }
            return "login" === this.getMode()
                ? (0, r.jsx)(S.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: a,
                      location: o,
                  })
                : (0, r.jsx)(N.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: a,
                      location: o,
                  });
        }
        return null;
    }
    constructor(...e) {
        super(...e),
            Z(this, "state", {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1,
            }),
            Z(this, "refreshUser", () => {
                this.setState({ fetchingUser: !0 }),
                    g
                        .k({ withAnalyticsToken: !0 })
                        .then((e) =>
                            this.setState({
                                currentUser: e,
                                fetchingUser: !1,
                            }),
                        )
                        .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            Z(this, "handleLogout", () => {
                let e = this.props.match.params.giftCode;
                u.Z.logout("gift_code", C.Z5c.GIFT_CODE_LOGIN(e));
            }),
            Z(this, "handleResendVerification", () => {
                u.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            Z(this, "handleAccept", async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error("Trying to accept gift before resolve");
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await d.Z.redeemGiftCode({ code: n }), e(C.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            Z(this, "resolveGiftCode", () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                d.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(C.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let R = a.ZP.connectStores([E.Z, v.Z, _.default, b.Z, x.Z, m.Z], (e) => {
    let t = e.match.params.giftCode,
        n = E.Z.get(t),
        r = null != n ? b.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: r,
        libraryApplication:
            null != r && (null == n ? void 0 : n.entitlementBranches) != null
                ? j.z2(n.entitlementBranches, r, v.Z)
                : null,
        authenticated: _.default.isAuthenticated(),
        defaultRoute: x.Z.defaultRoute,
        isResolved: E.Z.getIsResolved(t),
        isAccepting: E.Z.getIsAccepting(t),
        libraryApplicationsFetched: v.Z.fetched,
        nativeAppState: m.Z.getState(t),
    };
})(P);
