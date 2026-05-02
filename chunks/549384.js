s.d(t, { L: () => K, A: () => Z });
var a = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    n = s(269115),
    d = s(534514),
    o = s(834730),
    c = s(688810),
    u = s(366505),
    m = s(174459),
    h = s(892227),
    x = s(821609),
    C = s(43990),
    _ = s(403581),
    p = s(508770),
    g = s(318254),
    R = s(825484),
    f = s(462887),
    E = s(359778),
    j = s(241524),
    N = s(736653),
    v = s(303136),
    A = s(636592),
    P = s(976860),
    b = s(780964),
    D = s(858897),
    I = s(975571),
    y = s(872725),
    w = s(566119),
    O = s(94264),
    S = s(652215),
    T = s(758836),
    M = s(901123),
    L = s(490285),
    B = s(375708),
    k = s(787413),
    U = s(909340),
    F = s(455482);
let G = I.A.getArticleURL(S.MVz.ORBS_REWARDS_FAQ);
function H(e) {
    (0, w.o8)(e), window.open(G, "_blank");
}
let W = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: s, programReward: l } = (0, u.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        n = (0, j.A)("(min-width: 720px)"),
        c = (0, N.DP)(),
        m = r.useMemo(() => ({ hueRotate: 25, glowAmount: (0, f.M)(c) ? 2 : 8, blurAmount: 10 }), [c]);
    if (!s || null == l) return null;
    let I = (function (e, t) {
        let s = e.program_current_state,
            r =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, h.default)(new Date(e.next_reward_date), new Date())
                    : null,
            l = e?.total_rewarded_from_program;
        switch (s) {
            case A.L.ACTIVE:
                if (null == r || r < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: !0,
                    actionButton: (0, a.jsx)(x.$, {
                        text: B.intl.string(L.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, w.WD)(s), (0, P.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS));
                        },
                    }),
                    headerText: B.intl.format(L.default.BxLJQL, { days: Math.max(1, r), orbsCount: e.reward_amount }),
                    subheaderText: B.intl.format(L.default.tUV1vV, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, a.jsx)(x.$, {
                        text: B.intl.string(L.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, w.CC)(s), (0, D.openUserSettings)(b.X.BILLING_PANEL);
                        },
                    }),
                    headerText: B.intl.string(L.default.uuZJXR),
                    subheaderText: B.intl.format(L.default.dkeEV7, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: !1,
                    actionButton: (0, a.jsx)(C.N, {
                        theme: t ? S.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, a.jsx)("span", {
                                className: e,
                                children: (0, a.jsx)(x.$, {
                                    text: B.intl.string(L.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, w.ue)(s), (0, D.openUserSettings)(b.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: B.intl.string(L.default["+O9Asn"]),
                    subheaderText: B.intl.format(L.default.nWKEBZ, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != r,
                    actionButton: (0, a.jsx)(x.$, {
                        text: B.intl.string(L.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, w.WD)(s), (0, P.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS));
                        },
                    }),
                    headerText: B.intl.string(L.default.zF0HnJ),
                    subheaderText: B.intl.format(L.default["5tzNTa"], { helpdeskArticle: () => H(s) }),
                };
            case A.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != r,
                    actionButton: (0, a.jsx)(x.$, {
                        text: B.intl.string(L.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: _.t,
                        onClick: () => {
                            (0, w.Jv)(s), (0, D.openUserSettings)(b.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: B.intl.string(L.default.ISnOet),
                    subheaderText: B.intl.format(L.default["vjaRZ/"], { helpdeskArticle: () => H(s) }),
                };
            default:
                return null;
        }
    })(l, n);
    if (null == I) return null;
    let { displayTotalLifetimeRewards: G, displayProgressBar: W, actionButton: V, headerText: K, subheaderText: Z } = I;
    return (0, a.jsx)("div", {
        className: i()(k.Hc, t),
        children: (0, a.jsxs)(y.A, {
            cardType: E.s.CUSTOM,
            cardClassName: k.Nr,
            glowing: !0,
            ...m,
            children: [
                (0, a.jsx)(v.A, { className: k.Ki, src: U.A }),
                (0, a.jsxs)("div", {
                    className: k.zK,
                    children: [
                        (0, a.jsx)("img", { src: F.A, className: k._e, alt: "", "aria-hidden": !0 }),
                        (0, a.jsx)("div", { className: k.mR }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: k.FS,
                    children: [
                        (0, a.jsx)(C.N, {
                            theme: n ? S.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, a.jsx)("div", {
                                    className: i()(e, k.aZ),
                                    children: (0, a.jsx)(p.E, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, a.jsx)(d.D, { variant: "heading-xl/bold", className: k.R_, children: K }),
                        (0, a.jsx)(o.E, { variant: "text-md/medium", className: k.G3, children: Z }),
                        W && (0, a.jsx)(O.A, { className: k.L$ }),
                        G &&
                            l.total_rewarded_from_program > 0 &&
                            (0, a.jsxs)("div", {
                                className: k.fB,
                                children: [
                                    (0, a.jsx)(o.E, {
                                        variant: "text-md/medium",
                                        className: k.G3,
                                        children: B.intl.string(L.default["/1mWUn"]),
                                    }),
                                    (0, a.jsx)(g.C, { size: "sm", color: "currentColor" }),
                                    (0, a.jsx)(o.E, {
                                        variant: "text-md/medium",
                                        className: k.G3,
                                        children: l.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, a.jsx)("div", { className: k.WT, children: (0, a.jsx)(R.e, { children: V }) }),
                    ],
                }),
            ],
        }),
    });
};
var V = s(102338);
let K = "orbs",
    Z = (e) => {
        let { className: t, location: s } = e,
            { analyticsLocations: l } = (0, c.Ay)(s),
            h = r.useRef(null),
            x = r.useRef(!1),
            { passesGeneralUIInvariant: C, programReward: _ } = (0, u.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return C
            ? (0, a.jsx)(c.f5, {
                  value: l,
                  children: (0, a.jsx)(n.L, {
                      innerRef: h,
                      onChange: (e) => {
                          e &&
                              !x.current &&
                              ((x.current = !0),
                              m.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: _?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, a.jsxs)("div", {
                          ref: h,
                          id: K,
                          className: i()(V.uW, V.Uv, V.qr, t),
                          children: [
                              (0, a.jsx)(d.D, {
                                  variant: "display-sm",
                                  className: V.R_,
                                  style: { textAlign: "start" },
                                  children: B.intl.string(L.default.EdGvBM),
                              }),
                              (0, a.jsx)(o.E, {
                                  variant: "text-md/medium",
                                  className: i()(V.VA, V.dO),
                                  children: B.intl.string(L.default["2KoHRF"]),
                              }),
                              (0, a.jsx)(W, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
