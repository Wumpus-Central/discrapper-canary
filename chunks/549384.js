s.d(t, { L: () => V, A: () => Z });
var a = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    n = s(230109),
    d = s(534514),
    o = s(834730),
    c = s(688810),
    u = s(366505),
    m = s(954571),
    h = s(892227),
    x = s(821609),
    C = s(43990),
    _ = s(403581),
    p = s(508770),
    g = s(318254),
    f = s(825484),
    R = s(462887),
    j = s(359778),
    v = s(241524),
    E = s(736653),
    N = s(303136),
    A = s(636592),
    b = s(976860),
    y = s(780964),
    P = s(858897),
    D = s(975571),
    w = s(872725),
    I = s(566119),
    O = s(94264),
    T = s(652215),
    S = s(758836),
    M = s(901123),
    B = s(490285),
    L = s(985018),
    k = s(787413),
    U = s(909340),
    F = s(455482);
let G = D.A.getArticleURL(T.MVz.ORBS_REWARDS_FAQ);
function H(e) {
    (0, I.o8)(e), window.open(G, "_blank");
}
let W = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: s, programReward: l } = (0, u.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        n = (0, v.A)("(min-width: 720px)"),
        c = (0, E.DP)(),
        m = r.useMemo(() => ({ hueRotate: 25, glowAmount: (0, R.M)(c) ? 2 : 8, blurAmount: 10 }), [c]);
    if (!s || null == l) return null;
    let D = (function (e, t) {
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
                        text: L.intl.string(B.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, I.WD)(s), (0, b.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS));
                        },
                    }),
                    headerText: L.intl.format(B.default.BxLJQL, { days: Math.max(1, r), orbsCount: e.reward_amount }),
                    subheaderText: L.intl.format(B.default.tUV1vV, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, a.jsx)(x.$, {
                        text: L.intl.string(B.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, I.CC)(s), (0, P.openUserSettings)(y.X.BILLING_PANEL);
                        },
                    }),
                    headerText: L.intl.string(B.default.uuZJXR),
                    subheaderText: L.intl.format(B.default.dkeEV7, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: !1,
                    actionButton: (0, a.jsx)(C.N, {
                        theme: t ? T.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, a.jsx)("span", {
                                className: e,
                                children: (0, a.jsx)(x.$, {
                                    text: L.intl.string(B.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, I.ue)(s), (0, P.openUserSettings)(y.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: L.intl.string(B.default["+O9Asn"]),
                    subheaderText: L.intl.format(B.default.nWKEBZ, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != r,
                    actionButton: (0, a.jsx)(x.$, {
                        text: L.intl.string(B.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, I.WD)(s), (0, b.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(S.G2.ORBS));
                        },
                    }),
                    headerText: L.intl.string(B.default.zF0HnJ),
                    subheaderText: L.intl.format(B.default["5tzNTa"], { helpdeskArticle: () => H(s) }),
                };
            case A.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != r,
                    actionButton: (0, a.jsx)(x.$, {
                        text: L.intl.string(B.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: _.t,
                        onClick: () => {
                            (0, I.Jv)(s), (0, P.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: L.intl.string(B.default.ISnOet),
                    subheaderText: L.intl.format(B.default["vjaRZ/"], { helpdeskArticle: () => H(s) }),
                };
            default:
                return null;
        }
    })(l, n);
    if (null == D) return null;
    let { displayTotalLifetimeRewards: G, displayProgressBar: W, actionButton: K, headerText: V, subheaderText: Z } = D;
    return (0, a.jsx)("div", {
        className: i()(k.Hc, t),
        children: (0, a.jsxs)(w.A, {
            cardType: j.s.CUSTOM,
            cardClassName: k.Nr,
            glowing: !0,
            ...m,
            children: [
                (0, a.jsx)(N.A, { className: k.Ki, src: U.A }),
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
                            theme: n ? T.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, a.jsx)("div", {
                                    className: i()(e, k.aZ),
                                    children: (0, a.jsx)(p.E, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, a.jsx)(d.D, { variant: "heading-xl/bold", className: k.R_, children: V }),
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
                                        children: L.intl.string(B.default["/1mWUn"]),
                                    }),
                                    (0, a.jsx)(g.C, { size: "sm", color: "currentColor" }),
                                    (0, a.jsx)(o.E, {
                                        variant: "text-md/medium",
                                        className: k.G3,
                                        children: l.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, a.jsx)("div", { className: k.WT, children: (0, a.jsx)(f.e, { children: K }) }),
                    ],
                }),
            ],
        }),
    });
};
var K = s(102338);
let V = "orbs",
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
                              m.default.track(T.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: _?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, a.jsxs)("div", {
                          ref: h,
                          id: V,
                          className: i()(K.uW, K.Uv, K.qr, t),
                          children: [
                              (0, a.jsx)(d.D, {
                                  variant: "display-sm",
                                  className: K.R_,
                                  style: { textAlign: "start" },
                                  children: L.intl.string(B.default.EdGvBM),
                              }),
                              (0, a.jsx)(o.E, {
                                  variant: "text-md/medium",
                                  className: i()(K.VA, K.dO),
                                  children: L.intl.string(B.default["2KoHRF"]),
                              }),
                              (0, a.jsx)(W, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
