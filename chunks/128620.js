a.d(t, { A: () => U });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(892227),
    d = a(732955),
    o = a(462887),
    c = a(397927),
    u = a(241524),
    m = a(736653),
    p = a(303136),
    f = a(649032),
    b = a(320118),
    A = a(976860),
    h = a(780964),
    _ = a(840065),
    g = a(975571),
    R = a(872725),
    x = a(566119),
    E = a(570627),
    C = a(94264),
    v = a(652215),
    N = a(758836),
    I = a(901123),
    S = a(723468),
    T = a(985018),
    P = a(306776),
    y = a(909340),
    D = a(455482);
let O = g.A.getArticleURL(v.MVz.ORBS_REWARDS_FAQ);
function j(e) {
    (0, x.o8)(e), window.open(O, "_blank");
}
let U = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: a, programReward: s } = (0, b.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        g = E.m.useConfig({ location: "PremiumTenureRewardsOrbsCard" }).enabled,
        O = (0, u.A)("(min-width: 720px)"),
        U = (0, m.DP)(),
        M = r.useMemo(() => ({ hueRotate: 25, glowAmount: (0, o.M)(U) ? 2 : 8, blurAmount: g ? 10 : 20 }), [U, g]);
    if (!a || null == s) return null;
    let w = (function (e, t) {
        let a = e.program_current_state,
            r =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, i.default)(new Date(e.next_reward_date), new Date())
                    : null,
            s = e?.total_rewarded_from_program;
        switch (a) {
            case f.L.ACTIVE:
                if (null == r || r < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !0,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: T.intl.string(S.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, x.WD)(a), (0, A.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS));
                        },
                    }),
                    headerText: T.intl.format(S.default.BxLJQL, { days: Math.max(1, r), orbsCount: e.reward_amount }),
                    subheaderText: T.intl.format(S.default.tUV1vV, { helpdeskArticle: () => j(a) }),
                };
            case f.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: T.intl.string(S.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, x.CC)(a), (0, _.openUserSettings)(h.X.BILLING_PANEL);
                        },
                    }),
                    headerText: T.intl.string(S.default.uuZJXR),
                    subheaderText: T.intl.format(S.default.dkeEV7, { helpdeskArticle: () => j(a) }),
                };
            case f.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.NPJ, {
                        theme: t ? v.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, n.jsx)("span", {
                                className: e,
                                children: (0, n.jsx)(d.$nd, {
                                    text: T.intl.string(S.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, x.ue)(a), (0, _.openUserSettings)(h.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: T.intl.string(S.default["+O9Asn"]),
                    subheaderText: T.intl.format(S.default.nWKEBZ, { helpdeskArticle: () => j(a) }),
                };
            case f.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != r,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: T.intl.string(S.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, x.WD)(a), (0, A.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS));
                        },
                    }),
                    headerText: T.intl.string(S.default.zF0HnJ),
                    subheaderText: T.intl.format(S.default["5tzNTa"], { helpdeskArticle: () => j(a) }),
                };
            case f.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != r,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: T.intl.string(S.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, x.Jv)(a), (0, _.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: T.intl.string(S.default.ISnOet),
                    subheaderText: T.intl.format(S.default["vjaRZ/"], { helpdeskArticle: () => j(a) }),
                };
            default:
                return null;
        }
    })(s, O);
    if (null == w) return null;
    let { displayTotalLifetimeRewards: L, displayProgressBar: B, actionButton: k, headerText: G, subheaderText: V } = w;
    return (0, n.jsx)("div", {
        className: l()(P.Hc, t),
        children: (0, n.jsxs)(R.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: P.Nr,
            glowing: !0,
            ...M,
            children: [
                (0, n.jsx)(p.A, { className: P.Ki, src: y.A }),
                (0, n.jsxs)("div", {
                    className: P.zK,
                    children: [
                        (0, n.jsx)("img", { src: D.A, className: P._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: P.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: P.FS,
                    children: [
                        (0, n.jsx)(d.NPJ, {
                            theme: O ? v.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: l()(e, P.aZ),
                                    children: (0, n.jsx)(d.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(d.DZT, { variant: "heading-xl/bold", className: P.R_, children: G }),
                        (0, n.jsx)(d.EYj, { variant: "text-md/medium", className: P.G3, children: V }),
                        B && (0, n.jsx)(C.A, { className: P.L$ }),
                        L &&
                            s.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: P.fB,
                                children: [
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: P.G3,
                                        children: T.intl.string(S.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(d.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: P.G3,
                                        children: s.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: P.WT, children: (0, n.jsx)(d.e2v, { children: k }) }),
                    ],
                }),
            ],
        }),
    });
};
