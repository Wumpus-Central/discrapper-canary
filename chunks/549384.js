s.d(t, { L: () => K, A: () => Z });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(230109),
    d = s(534514),
    o = s(834730),
    c = s(688810),
    u = s(320118),
    m = s(954571),
    h = s(892227),
    x = s(821609),
    C = s(43990),
    p = s(403581),
    _ = s(508770),
    g = s(318254),
    f = s(825484),
    b = s(462887),
    R = s(359778),
    v = s(241524),
    j = s(736653),
    E = s(303136),
    A = s(636592),
    N = s(976860),
    P = s(780964),
    I = s(858897),
    y = s(975571),
    D = s(872725),
    S = s(566119),
    w = s(94264),
    O = s(652215),
    T = s(758836),
    M = s(901123),
    L = s(490285),
    k = s(985018),
    B = s(787413),
    U = s(909340),
    F = s(455482);
let G = y.A.getArticleURL(O.MVz.ORBS_REWARDS_FAQ);
function H(e) {
    (0, S.o8)(e), window.open(G, "_blank");
}
let W = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: s, programReward: r } = (0, u.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        i = (0, v.A)("(min-width: 720px)"),
        c = (0, j.DP)(),
        m = a.useMemo(() => ({ hueRotate: 25, glowAmount: (0, b.M)(c) ? 2 : 8, blurAmount: 10 }), [c]);
    if (!s || null == r) return null;
    let y = (function (e, t) {
        let s = e.program_current_state,
            a =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, h.default)(new Date(e.next_reward_date), new Date())
                    : null,
            r = e?.total_rewarded_from_program;
        switch (s) {
            case A.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: !0,
                    actionButton: (0, n.jsx)(x.$, {
                        text: k.intl.string(L.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, S.WD)(s), (0, N.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS));
                        },
                    }),
                    headerText: k.intl.format(L.default.BxLJQL, { days: Math.max(1, a), orbsCount: e.reward_amount }),
                    subheaderText: k.intl.format(L.default.tUV1vV, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(x.$, {
                        text: k.intl.string(L.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, S.CC)(s), (0, I.openUserSettings)(P.X.BILLING_PANEL);
                        },
                    }),
                    headerText: k.intl.string(L.default.uuZJXR),
                    subheaderText: k.intl.format(L.default.dkeEV7, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(C.N, {
                        theme: t ? O.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, n.jsx)("span", {
                                className: e,
                                children: (0, n.jsx)(x.$, {
                                    text: k.intl.string(L.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, S.ue)(s), (0, I.openUserSettings)(P.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: k.intl.string(L.default["+O9Asn"]),
                    subheaderText: k.intl.format(L.default.nWKEBZ, { helpdeskArticle: () => H(s) }),
                };
            case A.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(x.$, {
                        text: k.intl.string(L.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, S.WD)(s), (0, N.pX)(M.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS));
                        },
                    }),
                    headerText: k.intl.string(L.default.zF0HnJ),
                    subheaderText: k.intl.format(L.default["5tzNTa"], { helpdeskArticle: () => H(s) }),
                };
            case A.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != r,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(x.$, {
                        text: k.intl.string(L.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: p.t,
                        onClick: () => {
                            (0, S.Jv)(s), (0, I.openUserSettings)(P.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: k.intl.string(L.default.ISnOet),
                    subheaderText: k.intl.format(L.default["vjaRZ/"], { helpdeskArticle: () => H(s) }),
                };
            default:
                return null;
        }
    })(r, i);
    if (null == y) return null;
    let { displayTotalLifetimeRewards: G, displayProgressBar: W, actionButton: V, headerText: K, subheaderText: Z } = y;
    return (0, n.jsx)("div", {
        className: l()(B.Hc, t),
        children: (0, n.jsxs)(D.A, {
            cardType: R.s.CUSTOM,
            cardClassName: B.Nr,
            glowing: !0,
            ...m,
            children: [
                (0, n.jsx)(E.A, { className: B.Ki, src: U.A }),
                (0, n.jsxs)("div", {
                    className: B.zK,
                    children: [
                        (0, n.jsx)("img", { src: F.A, className: B._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: B.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: B.FS,
                    children: [
                        (0, n.jsx)(C.N, {
                            theme: i ? O.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: l()(e, B.aZ),
                                    children: (0, n.jsx)(_.E, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(d.D, { variant: "heading-xl/bold", className: B.R_, children: K }),
                        (0, n.jsx)(o.E, { variant: "text-md/medium", className: B.G3, children: Z }),
                        W && (0, n.jsx)(w.A, { className: B.L$ }),
                        G &&
                            r.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: B.fB,
                                children: [
                                    (0, n.jsx)(o.E, {
                                        variant: "text-md/medium",
                                        className: B.G3,
                                        children: k.intl.string(L.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(g.C, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(o.E, {
                                        variant: "text-md/medium",
                                        className: B.G3,
                                        children: r.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: B.WT, children: (0, n.jsx)(f.e, { children: V }) }),
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
            { analyticsLocations: r } = (0, c.Ay)(s),
            h = a.useRef(null),
            x = a.useRef(!1),
            { passesGeneralUIInvariant: C, programReward: p } = (0, u.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return C
            ? (0, n.jsx)(c.f5, {
                  value: r,
                  children: (0, n.jsx)(i.L, {
                      innerRef: h,
                      onChange: (e) => {
                          e &&
                              !x.current &&
                              ((x.current = !0),
                              m.default.track(O.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: p?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: h,
                          id: K,
                          className: l()(V.uW, V.Uv, V.qr, t),
                          children: [
                              (0, n.jsx)(d.D, {
                                  variant: "display-sm",
                                  className: V.R_,
                                  style: { textAlign: "start" },
                                  children: k.intl.string(L.default.EdGvBM),
                              }),
                              (0, n.jsx)(o.E, {
                                  variant: "text-md/medium",
                                  className: l()(V.VA, V.dO),
                                  children: k.intl.string(L.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(W, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
