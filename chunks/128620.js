a.d(t, { A: () => O });
var r = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(892227),
    d = a(732955),
    o = a(462887),
    c = a(397927),
    u = a(241524),
    _ = a(736653),
    m = a(303136),
    p = a(649032),
    b = a(320118),
    f = a(976860),
    g = a(780964),
    h = a(840065),
    A = a(975571),
    x = a(872725),
    R = a(566119),
    C = a(94264),
    v = a(652215),
    E = a(758836),
    N = a(901123),
    I = a(723468),
    S = a(985018),
    y = a(102600),
    T = a(909340),
    P = a(455482);
let D = A.A.getArticleURL(v.MVz.ORBS_REWARDS_FAQ);
function j(e) {
    (0, R.o8)(e), window.open(D, "_blank");
}
let O = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: a, programReward: i } = (0, b.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        A = (0, u.A)("(min-width: 720px)"),
        D = (0, _.DP)(),
        O = n.useMemo(() => ({ hueRotate: 25, glowAmount: (0, o.M)(D) ? 2 : 8, blurAmount: 10 }), [D]);
    if (!a || null == i) return null;
    let U = (function (e, t) {
        let a = e.program_current_state,
            n =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, l.default)(new Date(e.next_reward_date), new Date())
                    : null,
            i = e?.total_rewarded_from_program;
        switch (a) {
            case p.L.ACTIVE:
                if (null == n || n < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: !0,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(I.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(a), (0, f.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(E.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.format(I.default.BxLJQL, { days: Math.max(1, n), orbsCount: e.reward_amount }),
                    subheaderText: S.intl.format(I.default.tUV1vV, { helpdeskArticle: () => j(a) }),
                };
            case p.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(I.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.CC)(a), (0, h.openUserSettings)(g.X.BILLING_PANEL);
                        },
                    }),
                    headerText: S.intl.string(I.default.uuZJXR),
                    subheaderText: S.intl.format(I.default.dkeEV7, { helpdeskArticle: () => j(a) }),
                };
            case p.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: !1,
                    actionButton: (0, r.jsx)(d.NPJ, {
                        theme: t ? v.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, r.jsx)("span", {
                                className: e,
                                children: (0, r.jsx)(d.$nd, {
                                    text: S.intl.string(I.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, R.ue)(a), (0, h.openUserSettings)(g.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: S.intl.string(I.default["+O9Asn"]),
                    subheaderText: S.intl.format(I.default.nWKEBZ, { helpdeskArticle: () => j(a) }),
                };
            case p.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: null != n,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(I.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(a), (0, f.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(E.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.string(I.default.zF0HnJ),
                    subheaderText: S.intl.format(I.default["5tzNTa"], { helpdeskArticle: () => j(a) }),
                };
            case p.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: null != n,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(I.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, R.Jv)(a), (0, h.openUserSettings)(g.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: S.intl.string(I.default.ISnOet),
                    subheaderText: S.intl.format(I.default["vjaRZ/"], { helpdeskArticle: () => j(a) }),
                };
            default:
                return null;
        }
    })(i, A);
    if (null == U) return null;
    let { displayTotalLifetimeRewards: M, displayProgressBar: L, actionButton: w, headerText: B, subheaderText: k } = U;
    return (0, r.jsx)("div", {
        className: s()(y.Hc, t),
        children: (0, r.jsxs)(x.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: y.Nr,
            glowing: !0,
            ...O,
            children: [
                (0, r.jsx)(m.A, { className: y.Ki, src: T.A }),
                (0, r.jsxs)("div", {
                    className: y.zK,
                    children: [
                        (0, r.jsx)("img", { src: P.A, className: y._e, alt: "", "aria-hidden": !0 }),
                        (0, r.jsx)("div", { className: y.mR }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: y.FS,
                    children: [
                        (0, r.jsx)(d.NPJ, {
                            theme: A ? v.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: s()(e, y.aZ),
                                    children: (0, r.jsx)(d.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, r.jsx)(d.DZT, { variant: "heading-xl/bold", className: y.R_, children: B }),
                        (0, r.jsx)(d.EYj, { variant: "text-md/medium", className: y.G3, children: k }),
                        L && (0, r.jsx)(C.A, { className: y.L$ }),
                        M &&
                            i.total_rewarded_from_program > 0 &&
                            (0, r.jsxs)("div", {
                                className: y.fB,
                                children: [
                                    (0, r.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: y.G3,
                                        children: S.intl.string(I.default["/1mWUn"]),
                                    }),
                                    (0, r.jsx)(d.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, r.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: y.G3,
                                        children: i.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, r.jsx)("div", { className: y.WT, children: (0, r.jsx)(d.e2v, { children: w }) }),
                    ],
                }),
            ],
        }),
    });
};
