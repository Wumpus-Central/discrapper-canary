"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(821609),
    c = n(123292),
    d = n(73153),
    u = n(830215),
    _ = n(869038),
    h = n(110782),
    m = n(803306),
    g = n(854378),
    p = n(10088),
    A = n(871123),
    f = n(210714),
    E = n(961350),
    x = n(650048),
    I = n(30793),
    v = n(189081),
    N = n(67480),
    j = n(45938),
    C = n(975571),
    T = n(427262),
    y = n(161928),
    b = n(129851),
    S = n(229),
    R = n(652215),
    O = n(985018),
    L = n(818050);
a.Ay.initialize();
class w extends s.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, f.d)("gift_code");
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            d.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        h.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            m
                .rQ({ withAnalyticsToken: !0 })
                .then((e) => this.setState({ currentUser: e, fetchingUser: !1 }))
                .catch(() => this.setState({ fetchingUser: !1 }));
    };
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
            { error: i } = this.state,
            s = null != i ? i.code : null;
        return s === R.t02.INVALID_GIFT_SELF_REDEMPTION
            ? O.intl.string(O.t.wa9h7F)
            : s === R.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === R.EZt.COLLECTIBLES
              ? O.intl.string(O.t.mdLtb5)
              : null != t || s === R.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? O.intl.format(O.t.PIdmg3, { libraryLink: R.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || s === R.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? O.intl.string(O.t.ilcBeX)
                  : s === R.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? O.intl.string(O.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        u.A.logout("gift_code", R.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        u.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await _.A.redeemGiftCode({ code: n }), e(R.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        _.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(R.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, i.jsxs)(g.Ay, { children: [(0, i.jsx)(g.hE, { children: e }), (0, i.jsx)(g.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(g.Ay, {
            children: [
                (0, i.jsx)(g.hE, { className: l()(L.Ot, L.QB), children: O.intl.string(O.t.KPowgn) }),
                (0, i.jsx)(g.tK, { children: O.intl.string(O.t.j8734b) }),
                (0, i.jsx)("div", {
                    className: l()(L.eT, L.QB),
                    children: (0, i.jsx)(o.$, { text: O.intl.string(O.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, i.jsx)(c.Q, {
                    text: O.intl.string(O.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(C.A.getArticleURL(R.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(g.Ay, {
            children: [
                (0, i.jsx)(g.hE, { className: L.QB, children: O.intl.string(O.t.csrAMJ) }),
                (0, i.jsx)(g.tK, { children: O.intl.string(O.t["m1+IBn"]) }),
                (0, i.jsx)("div", {
                    className: L.eT,
                    children: (0, i.jsx)(o.$, {
                        text: O.intl.string(O.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, i.jsxs)(g.Ay, {
            children: [
                (0, i.jsx)(g._V, { src: n(792525), className: L.QB }),
                (0, i.jsx)(g.hE, { children: O.intl.format(O.t["ivLUf/"], { username: e.username }) }),
                (0, i.jsx)(g.tK, { className: L.QX, children: O.intl.string(O.t["8Su18+"]) }),
                (0, i.jsx)("div", {
                    className: L.eT,
                    children: (0, i.jsx)(o.$, {
                        text: t ? O.intl.string(O.t.CMa9Rv) : O.intl.string(O.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: L.Ot,
                    children: (0, i.jsx)(c.Q, {
                        text: O.intl.string(O.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: s } = this.props,
            r = this.getErrorMessage(e);
        return (0, i.jsx)(G, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: s,
            children: (0, i.jsxs)(g.Ay, {
                children: [
                    (0, i.jsx)(y.A, { giftCode: e }),
                    (0, i.jsx)("div", {
                        className: L.eT,
                        children: (0, i.jsx)(o.$, {
                            text: O.intl.string(O.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != r,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != r
                        ? (0, i.jsx)(g.tK, { className: L.QX, children: r })
                        : (0, i.jsx)(g.ME, {
                              className: L.QX,
                              children: O.intl.format(O.t.NYM08s, {
                                  userTag: T.Ay.getUserTag(t),
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
                giftCode: s,
                isResolved: r,
                isAccepting: l,
                transitionTo: a,
                location: o,
            } = this.props,
            { fetchingUser: c, continueOnWeb: d } = this.state;
        if (e === R.fAW.OPEN && !d) return this.renderAppOpened();
        if (e === R.fAW.OPENING) return this.renderSpinner(O.intl.string(O.t["Z+hCVU"]));
        if (l) return this.renderSpinner(O.intl.string(O.t.bhJseN));
        if (null == s) return r ? this.renderExpiredInvite() : this.renderSpinner(O.intl.string(O.t.b3lf1c));
        if (r) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e
                    ? this.renderSpinner(O.intl.string(O.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(s, e, t);
            }
            return "login" === this.getMode()
                ? (0, i.jsx)(b.A, { giftCodeSKU: t, giftCode: s, transitionTo: a, location: o })
                : (0, i.jsx)(S.A, { giftCodeSKU: t, giftCode: s, transitionTo: a, location: o });
        }
        return null;
    }
}
let k = a.Ay.connectStores([I.A, v.A, E.default, N.A, x.A, p.A], (e) => {
        let t = e.match.params.giftCode,
            n = I.A.get(t),
            i = null != n ? N.A.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: i,
            libraryApplication:
                null != i && n?.entitlementBranches != null ? j.YI(n.entitlementBranches, i, v.A) : null,
            authenticated: E.default.isAuthenticated(),
            defaultRoute: x.A.defaultRoute,
            isResolved: I.A.getIsResolved(t),
            isAccepting: I.A.getIsAccepting(t),
            libraryApplicationsFetched: v.A.fetched,
            nativeAppState: p.A.getState(t),
        };
    })(w),
    G = (e) => {
        let { sku: t, children: n, giftCodeCode: r, transitionTo: l } = e,
            a = (0, A.bF)(t);
        return (s.useEffect(() => {
            null != r && a && l(R.BVt.APP_WITH_GIFT_CODE(r));
        }, [a, r, l]),
        a)
            ? (0, i.jsxs)(g.Ay, {
                  children: [(0, i.jsx)(g.hE, { children: O.intl.string(O.t.b3lf1c) }), (0, i.jsx)(g.CK, {})],
              })
            : n;
    };
