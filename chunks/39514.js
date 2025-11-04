n.d(t, { Z: () => w }), n(35282), n(388685), n(415506);
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
    f = n(164670),
    _ = n(108427),
    x = n(314897),
    E = n(896797),
    v = n(82142),
    j = n(283595),
    b = n(55563),
    I = n(669079),
    y = n(63063),
    O = n(51144),
    S = n(481153),
    N = n(781428),
    C = n(423527),
    A = n(981631),
    T = n(388032),
    Z = n(197571);
function P(e, t, n) {
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
class R extends i.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, _.e)("gift_code");
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
        return i === A.evJ.INVALID_GIFT_SELF_REDEMPTION
            ? T.intl.string(T.t.wa9h7F)
            : i === A.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === A.POd.COLLECTIBLES
              ? T.intl.string(T.t.mdLtb5)
              : null != t || i === A.evJ.INVALID_GIFT_REDEMPTION_OWNED
                ? T.intl.format(T.t.PIdmg3, { libraryLink: A.Z5c.APPLICATION_LIBRARY })
                : e.isClaimed || i === A.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? T.intl.string(T.t.ilcBeX)
                  : i === A.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? T.intl.string(T.t.ypuSd8)
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
                    className: l()(Z.marginTop8, Z.marginBottom8),
                    children: T.intl.string(T.t.KPowgn),
                }),
                (0, r.jsx)(p.DK, { children: T.intl.string(T.t.j8734b) }),
                (0, r.jsx)("div", {
                    className: l()(Z.marginTop40, Z.marginBottom8),
                    children: (0, r.jsx)(o.Button, {
                        text: T.intl.string(T.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
                (0, r.jsx)(o.Avr, {
                    text: T.intl.string(T.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(y.Z.getArticleURL(A.BhN.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, r.jsxs)(p.ZP, {
            children: [
                (0, r.jsx)(p.Dx, {
                    className: Z.marginBottom8,
                    children: T.intl.string(T.t.csrAMJ),
                }),
                (0, r.jsx)(p.DK, { children: T.intl.string(T.t["m1+IBn"]) }),
                (0, r.jsx)("div", {
                    className: Z.marginTop40,
                    children: (0, r.jsx)(o.Button, {
                        text: T.intl.string(T.t["qsI+EH"]),
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
                    className: Z.marginBottom8,
                }),
                (0, r.jsx)(p.Dx, { children: T.intl.format(T.t["ivLUf/"], { username: e.username }) }),
                (0, r.jsx)(p.DK, {
                    className: Z.marginTop20,
                    children: T.intl.string(T.t["8Su18+"]),
                }),
                (0, r.jsx)("div", {
                    className: Z.marginTop40,
                    children: (0, r.jsx)(o.Button, {
                        text: t ? T.intl.string(T.t.CMa9Rv) : T.intl.string(T.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: Z.marginTop8,
                    children: (0, r.jsx)(o.Avr, {
                        text: T.intl.string(T.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: i } = this.props,
            s = this.getErrorMessage(e);
        return (0, r.jsx)(L, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, r.jsxs)(p.ZP, {
                children: [
                    (0, r.jsx)(S.Z, { giftCode: e }),
                    (0, r.jsx)("div", {
                        className: Z.marginTop40,
                        children: (0, r.jsx)(o.Button, {
                            text: T.intl.string(T.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != s,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != s
                        ? (0, r.jsx)(p.DK, {
                              className: Z.marginTop20,
                              children: s,
                          })
                        : (0, r.jsx)(p.i_, {
                              className: Z.marginTop20,
                              children: T.intl.format(T.t.NYM08s, {
                                  userTag: O.ZP.getUserTag(t),
                                  onLogoutClick: this.handleLogout,
                              }),
                          }),
                ],
            }),
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
        if (e === A.kEZ.OPEN && !u) return this.renderAppOpened();
        if (e === A.kEZ.OPENING) return this.renderSpinner(T.intl.string(T.t["Z+hCVU"]));
        if (l) return this.renderSpinner(T.intl.string(T.t.bhJseN));
        if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(T.intl.string(T.t.b3lf1c));
        if (s) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e
                    ? this.renderSpinner(T.intl.string(T.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, r.jsx)(N.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: a,
                      location: o,
                  })
                : (0, r.jsx)(C.Z, {
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
            P(this, "state", {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1,
            }),
            P(this, "refreshUser", () => {
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
            P(this, "handleLogout", () => {
                let e = this.props.match.params.giftCode;
                u.Z.logout("gift_code", A.Z5c.GIFT_CODE_LOGIN(e));
            }),
            P(this, "handleResendVerification", () => {
                u.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            P(this, "handleAccept", async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error("Trying to accept gift before resolve");
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await d.Z.redeemGiftCode({ code: n }), e(A.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            P(this, "resolveGiftCode", () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                d.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(A.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
let w = a.ZP.connectStores([v.Z, j.Z, x.default, b.Z, E.Z, m.Z], (e) => {
        let t = e.match.params.giftCode,
            n = v.Z.get(t),
            r = null != n ? b.Z.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: r,
            libraryApplication:
                null != r && (null == n ? void 0 : n.entitlementBranches) != null
                    ? I.z2(n.entitlementBranches, r, j.Z)
                    : null,
            authenticated: x.default.isAuthenticated(),
            defaultRoute: E.Z.defaultRoute,
            isResolved: v.Z.getIsResolved(t),
            isAccepting: v.Z.getIsAccepting(t),
            libraryApplicationsFetched: j.Z.fetched,
            nativeAppState: m.Z.getState(t),
        };
    })(R),
    L = (e) => {
        let { sku: t, children: n, giftCodeCode: s, transitionTo: l } = e,
            a = (0, f.K$)(t);
        return (i.useEffect(() => {
            null != s && a && l(A.Z5c.APP_WITH_GIFT_CODE(s));
        }, [a, s, l]),
        a)
            ? (0, r.jsxs)(p.ZP, {
                  children: [(0, r.jsx)(p.Dx, { children: T.intl.string(T.t.b3lf1c) }), (0, r.jsx)(p.Hh, {})],
              })
            : n;
    };
