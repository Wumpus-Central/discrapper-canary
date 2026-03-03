"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(830215),
    u = n(869038),
    h = n(110782),
    _ = n(803306),
    p = n(854378),
    g = n(10088),
    m = n(871123),
    f = n(210714),
    A = n(961350),
    x = n(650048),
    E = n(30793),
    I = n(189081),
    v = n(67480),
    N = n(45938),
    j = n(975571),
    S = n(427262),
    C = n(161928),
    T = n(129851),
    y = n(229),
    b = n(652215),
    R = n(985018),
    O = n(473169);
a.Ay.initialize();
class L extends s.PureComponent {
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
            _.rQ({ withAnalyticsToken: !0 })
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
        return s === b.t02.INVALID_GIFT_SELF_REDEMPTION
            ? R.intl.string(R.t.wa9h7F)
            : s === b.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === b.EZt.COLLECTIBLES
              ? R.intl.string(R.t.mdLtb5)
              : null != t || s === b.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? R.intl.format(R.t.PIdmg3, { libraryLink: b.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || s === b.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? R.intl.string(R.t.ilcBeX)
                  : s === b.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? R.intl.string(R.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        c.A.logout("gift_code", b.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        c.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await u.A.redeemGiftCode({ code: n }), e(b.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        u.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(b.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, i.jsxs)(p.Ay, { children: [(0, i.jsx)(p.hE, { children: e }), (0, i.jsx)(p.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(p.Ay, {
            children: [
                (0, i.jsx)(p.hE, { className: l()(O.Ot, O.QB), children: R.intl.string(R.t.KPowgn) }),
                (0, i.jsx)(p.tK, { children: R.intl.string(R.t.j8734b) }),
                (0, i.jsx)("div", {
                    className: l()(O.eT, O.QB),
                    children: (0, i.jsx)(o.Button, {
                        text: R.intl.string(R.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
                (0, i.jsx)(o.QWc, {
                    text: R.intl.string(R.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(j.A.getArticleURL(b.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, i.jsxs)(p.Ay, {
            children: [
                (0, i.jsx)(p.hE, { className: O.QB, children: R.intl.string(R.t.csrAMJ) }),
                (0, i.jsx)(p.tK, { children: R.intl.string(R.t["m1+IBn"]) }),
                (0, i.jsx)("div", {
                    className: O.eT,
                    children: (0, i.jsx)(o.Button, {
                        text: R.intl.string(R.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, i.jsxs)(p.Ay, {
            children: [
                (0, i.jsx)(p._V, { src: n(792525), className: O.QB }),
                (0, i.jsx)(p.hE, { children: R.intl.format(R.t["ivLUf/"], { username: e.username }) }),
                (0, i.jsx)(p.tK, { className: O.QX, children: R.intl.string(R.t["8Su18+"]) }),
                (0, i.jsx)("div", {
                    className: O.eT,
                    children: (0, i.jsx)(o.Button, {
                        text: t ? R.intl.string(R.t.CMa9Rv) : R.intl.string(R.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: O.Ot,
                    children: (0, i.jsx)(o.QWc, {
                        text: R.intl.string(R.t.Po9eBQ),
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
        return (0, i.jsx)(k, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: s,
            children: (0, i.jsxs)(p.Ay, {
                children: [
                    (0, i.jsx)(C.A, { giftCode: e }),
                    (0, i.jsx)("div", {
                        className: O.eT,
                        children: (0, i.jsx)(o.Button, {
                            text: R.intl.string(R.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != r,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != r
                        ? (0, i.jsx)(p.tK, { className: O.QX, children: r })
                        : (0, i.jsx)(p.ME, {
                              className: O.QX,
                              children: R.intl.format(R.t.NYM08s, {
                                  userTag: S.Ay.getUserTag(t),
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
            { fetchingUser: d, continueOnWeb: c } = this.state;
        if (e === b.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === b.fAW.OPENING) return this.renderSpinner(R.intl.string(R.t["Z+hCVU"]));
        if (l) return this.renderSpinner(R.intl.string(R.t.bhJseN));
        if (null == s) return r ? this.renderExpiredInvite() : this.renderSpinner(R.intl.string(R.t.b3lf1c));
        if (r) {
            if (n) {
                let e = this.state.currentUser;
                return d || null == e
                    ? this.renderSpinner(R.intl.string(R.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(s, e, t);
            }
            return "login" === this.getMode()
                ? (0, i.jsx)(T.A, { giftCodeSKU: t, giftCode: s, transitionTo: a, location: o })
                : (0, i.jsx)(y.A, { giftCodeSKU: t, giftCode: s, transitionTo: a, location: o });
        }
        return null;
    }
}
let w = a.Ay.connectStores([E.A, I.A, A.default, v.A, x.A, g.A], (e) => {
        let t = e.match.params.giftCode,
            n = E.A.get(t),
            i = null != n ? v.A.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: i,
            libraryApplication:
                null != i && n?.entitlementBranches != null ? N.YI(n.entitlementBranches, i, I.A) : null,
            authenticated: A.default.isAuthenticated(),
            defaultRoute: x.A.defaultRoute,
            isResolved: E.A.getIsResolved(t),
            isAccepting: E.A.getIsAccepting(t),
            libraryApplicationsFetched: I.A.fetched,
            nativeAppState: g.A.getState(t),
        };
    })(L),
    k = (e) => {
        let { sku: t, children: n, giftCodeCode: r, transitionTo: l } = e,
            a = (0, m.bF)(t);
        return (s.useEffect(() => {
            null != r && a && l(b.BVt.APP_WITH_GIFT_CODE(r));
        }, [a, r, l]),
        a)
            ? (0, i.jsxs)(p.Ay, {
                  children: [(0, i.jsx)(p.hE, { children: R.intl.string(R.t.b3lf1c) }), (0, i.jsx)(p.CK, {})],
              })
            : n;
    };
