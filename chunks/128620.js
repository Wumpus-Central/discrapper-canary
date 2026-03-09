n.d(t, { A: () => L });
var r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    i = n(892227),
    d = n(732955),
    u = n(462887),
    o = n(397927),
    c = n(241524),
    m = n(736653),
    _ = n(303136),
    R = n(649032),
    h = n(320118),
    p = n(976860),
    x = n(780964),
    A = n(840065),
    E = n(975571),
    f = n(872725),
    N = n(566119),
    C = n(570627),
    g = n(94264),
    b = n(652215),
    D = n(758836),
    I = n(901123),
    v = n(49370),
    S = n(985018),
    T = n(970466),
    O = n(909340),
    P = n(455482);
let j = E.A.getArticleURL(b.MVz.ORBS_REWARDS_FAQ);
function y(e) {
    (0, N.o8)(e), window.open(j, "_blank");
}
let L = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: s } = (0, h.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        E = C.m.useConfig({ location: "PremiumTenureRewardsOrbsCard" }).enabled,
        j = (0, c.A)("(min-width: 720px)"),
        L = (0, m.DP)(),
        M = a.useMemo(() => ({ hueRotate: 25, glowAmount: (0, u.M)(L) ? 2 : 8, blurAmount: E ? 10 : 20 }), [L, E]);
    if (!n || null == s) return null;
    let U = (function (e, t) {
        let n = e.program_current_state,
            a =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, i.default)(new Date(e.next_reward_date), new Date())
                    : null,
            s = e?.total_rewarded_from_program;
        switch (n) {
            case R.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !0,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(v.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, N.WD)(n), (0, p.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(D.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.format(v.default.BxLJQL, { days: Math.max(1, a), orbsCount: e.reward_amount }),
                    subheaderText: S.intl.format(v.default.tUV1vV, { helpdeskArticle: () => y(n) }),
                };
            case R.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(v.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, N.CC)(n), (0, A.openUserSettings)(x.X.BILLING_PANEL, { section: b.nc_.BILLING });
                        },
                    }),
                    headerText: S.intl.string(v.default.uuZJXR),
                    subheaderText: S.intl.format(v.default.dkeEV7, { helpdeskArticle: () => y(n) }),
                };
            case R.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !1,
                    actionButton: (0, r.jsx)(d.NPJ, {
                        theme: t ? b.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, r.jsx)("span", {
                                className: e,
                                children: (0, r.jsx)(d.$nd, {
                                    text: S.intl.string(v.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, N.ue)(n),
                                            (0, A.openUserSettings)(x.X.BILLING_PANEL, { section: b.nc_.BILLING });
                                    },
                                }),
                            }),
                    }),
                    headerText: S.intl.string(v.default["+O9Asn"]),
                    subheaderText: S.intl.format(v.default.nWKEBZ, { helpdeskArticle: () => y(n) }),
                };
            case R.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != a,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(v.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, N.WD)(n), (0, p.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(D.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.string(v.default.zF0HnJ),
                    subheaderText: S.intl.format(v.default["5tzNTa"], { helpdeskArticle: () => y(n) }),
                };
            case R.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != a,
                    actionButton: (0, r.jsx)(d.$nd, {
                        text: S.intl.string(v.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, N.Jv)(n),
                                (0, A.openUserSettings)(x.X.SUBSCRIPTIONS_PANEL, { section: b.nc_.SUBSCRIPTIONS });
                        },
                    }),
                    headerText: S.intl.string(v.default.ISnOet),
                    subheaderText: S.intl.format(v.default["vjaRZ/"], { helpdeskArticle: () => y(n) }),
                };
            default:
                return null;
        }
    })(s, j);
    if (null == U) return null;
    let { displayTotalLifetimeRewards: w, displayProgressBar: B, actionButton: k, headerText: G, subheaderText: W } = U;
    return (0, r.jsx)("div", {
        className: l()(T.Hc, t),
        children: (0, r.jsxs)(f.A, {
            cardType: o.sl2.CUSTOM,
            cardClassName: T.Nr,
            ...M,
            children: [
                (0, r.jsx)(_.A, { className: T.Ki, src: O.A }),
                (0, r.jsxs)("div", {
                    className: T.zK,
                    children: [
                        (0, r.jsx)("img", { src: P.A, className: T._e, alt: "", "aria-hidden": !0 }),
                        (0, r.jsx)("div", { className: T.mR }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: T.FS,
                    children: [
                        (0, r.jsx)(d.NPJ, {
                            theme: j ? b.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, r.jsx)("div", {
                                    className: l()(e, T.aZ),
                                    children: (0, r.jsx)(d.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, r.jsx)(d.DZT, { variant: "heading-xl/bold", className: T.R_, children: G }),
                        (0, r.jsx)(d.EYj, { variant: "text-md/medium", className: T.G3, children: W }),
                        B && (0, r.jsx)(g.A, { className: T.L$ }),
                        w &&
                            s.total_rewarded_from_program > 0 &&
                            (0, r.jsxs)("div", {
                                className: T.fB,
                                children: [
                                    (0, r.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: T.G3,
                                        children: S.intl.string(v.default["/1mWUn"]),
                                    }),
                                    (0, r.jsx)(d.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, r.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: T.G3,
                                        children: s.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, r.jsx)("div", { className: T.WT, children: (0, r.jsx)(d.e2v, { children: k }) }),
                    ],
                }),
            ],
        }),
    });
};
