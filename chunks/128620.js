a.d(t, { A: () => O });
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
    E = a(94264),
    v = a(652215),
    C = a(758836),
    N = a(901123),
    I = a(49370),
    S = a(985018),
    T = a(970466),
    P = a(909340),
    y = a(455482);
let D = g.A.getArticleURL(v.MVz.ORBS_REWARDS_FAQ);
function j(e) {
    (0, x.o8)(e), window.open(D, "_blank");
}
let O = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: a, programReward: s } = (0, b.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        g = (0, u.A)("(min-width: 720px)"),
        D = (0, m.DP)(),
        O = r.useMemo(() => ({ hueRotate: 25, glowAmount: (0, o.M)(D) ? 2 : 8, blurAmount: 10 }), [D]);
    if (!a || null == s) return null;
    let U = (function (e, t) {
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
                        text: S.intl.string(I.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, x.WD)(a), (0, A.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.format(I.default.BxLJQL, { days: Math.max(1, r), orbsCount: e.reward_amount }),
                    subheaderText: S.intl.format(I.default.tUV1vV, { helpdeskArticle: () => j(a) }),
                };
            case f.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: S.intl.string(I.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, x.CC)(a), (0, _.openUserSettings)(h.X.BILLING_PANEL);
                        },
                    }),
                    headerText: S.intl.string(I.default.uuZJXR),
                    subheaderText: S.intl.format(I.default.dkeEV7, { helpdeskArticle: () => j(a) }),
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
                                    text: S.intl.string(I.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, x.ue)(a), (0, _.openUserSettings)(h.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: S.intl.string(I.default["+O9Asn"]),
                    subheaderText: S.intl.format(I.default.nWKEBZ, { helpdeskArticle: () => j(a) }),
                };
            case f.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != r,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: S.intl.string(I.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, x.WD)(a), (0, A.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.string(I.default.zF0HnJ),
                    subheaderText: S.intl.format(I.default["5tzNTa"], { helpdeskArticle: () => j(a) }),
                };
            case f.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != r,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: S.intl.string(I.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, x.Jv)(a), (0, _.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: S.intl.string(I.default.ISnOet),
                    subheaderText: S.intl.format(I.default["vjaRZ/"], { helpdeskArticle: () => j(a) }),
                };
            default:
                return null;
        }
    })(s, g);
    if (null == U) return null;
    let { displayTotalLifetimeRewards: M, displayProgressBar: L, actionButton: w, headerText: B, subheaderText: k } = U;
    return (0, n.jsx)("div", {
        className: l()(T.Hc, t),
        children: (0, n.jsxs)(R.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: T.Nr,
            glowing: !0,
            ...O,
            children: [
                (0, n.jsx)(p.A, { className: T.Ki, src: P.A }),
                (0, n.jsxs)("div", {
                    className: T.zK,
                    children: [
                        (0, n.jsx)("img", { src: y.A, className: T._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: T.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: T.FS,
                    children: [
                        (0, n.jsx)(d.NPJ, {
                            theme: g ? v.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: l()(e, T.aZ),
                                    children: (0, n.jsx)(d.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(d.DZT, { variant: "heading-xl/bold", className: T.R_, children: B }),
                        (0, n.jsx)(d.EYj, { variant: "text-md/medium", className: T.G3, children: k }),
                        L && (0, n.jsx)(E.A, { className: T.L$ }),
                        M &&
                            s.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: T.fB,
                                children: [
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: T.G3,
                                        children: S.intl.string(I.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(d.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: T.G3,
                                        children: s.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: T.WT, children: (0, n.jsx)(d.e2v, { children: w }) }),
                    ],
                }),
            ],
        }),
    });
};
