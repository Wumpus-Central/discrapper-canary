r.d(t, { A: () => L });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(892227),
    d = r(732955),
    u = r(462887),
    o = r(397927),
    c = r(241524),
    m = r(736653),
    _ = r(607470),
    R = r(649032),
    p = r(320118),
    h = r(976860),
    A = r(780964),
    E = r(840065),
    x = r(975571),
    N = r(872725),
    C = r(566119),
    f = r(570627),
    g = r(94264),
    b = r(652215),
    D = r(758836),
    I = r(901123),
    v = r(49370),
    S = r(985018),
    T = r(970466),
    P = r(909340),
    O = r(455482);
let j = x.A.getArticleURL(b.MVz.ORBS_REWARDS_FAQ);
function y(e) {
    (0, C.o8)(e), window.open(j, "_blank");
}
let L = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: r, programReward: l } = (0, p.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        x = f.m.useConfig({ location: "PremiumTenureRewardsOrbsCard" }).enabled,
        j = (0, c.A)("(min-width: 720px)"),
        L = (0, m.DP)(),
        U = a.useMemo(() => ({ hueRotate: 25, glowAmount: (0, u.M)(L) ? 2 : 8, blurAmount: x ? 10 : 20 }), [L, x]);
    if (!r || null == l) return null;
    let w = (function (e, t) {
        let r = e.program_current_state,
            a =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, i.default)(new Date(e.next_reward_date), new Date())
                    : null,
            l = e?.total_rewarded_from_program;
        switch (r) {
            case R.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: !0,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: S.intl.string(v.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, C.WD)(r), (0, h.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(D.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.format(v.default.BxLJQL, { days: Math.max(1, a), orbsCount: e.reward_amount }),
                    subheaderText: S.intl.format(v.default.tUV1vV, { helpdeskArticle: () => y(r) }),
                };
            case R.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: S.intl.string(v.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, C.CC)(r), (0, E.openUserSettings)(A.X.BILLING_PANEL, { section: b.nc_.BILLING });
                        },
                    }),
                    headerText: S.intl.string(v.default.uuZJXR),
                    subheaderText: S.intl.format(v.default.dkeEV7, { helpdeskArticle: () => y(r) }),
                };
            case R.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.NPJ, {
                        theme: t ? b.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, n.jsx)("span", {
                                className: e,
                                children: (0, n.jsx)(d.$nd, {
                                    text: S.intl.string(v.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, C.ue)(r),
                                            (0, E.openUserSettings)(A.X.BILLING_PANEL, { section: b.nc_.BILLING });
                                    },
                                }),
                            }),
                    }),
                    headerText: S.intl.string(v.default["+O9Asn"]),
                    subheaderText: S.intl.format(v.default.nWKEBZ, { helpdeskArticle: () => y(r) }),
                };
            case R.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: S.intl.string(v.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, C.WD)(r), (0, h.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(D.G2.ORBS));
                        },
                    }),
                    headerText: S.intl.string(v.default.zF0HnJ),
                    subheaderText: S.intl.format(v.default["5tzNTa"], { helpdeskArticle: () => y(r) }),
                };
            case R.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: S.intl.string(v.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, C.Jv)(r),
                                (0, E.openUserSettings)(A.X.SUBSCRIPTIONS_PANEL, { section: b.nc_.SUBSCRIPTIONS });
                        },
                    }),
                    headerText: S.intl.string(v.default.ISnOet),
                    subheaderText: S.intl.format(v.default["vjaRZ/"], { helpdeskArticle: () => y(r) }),
                };
            default:
                return null;
        }
    })(l, j);
    if (null == w) return null;
    let { displayTotalLifetimeRewards: M, displayProgressBar: B, actionButton: k, headerText: G, subheaderText: W } = w;
    return (0, n.jsx)("div", {
        className: s()(T.Hc, t),
        children: (0, n.jsxs)(N.A, {
            cardType: o.sl2.CUSTOM,
            cardClassName: T.Nr,
            ...U,
            children: [
                (0, n.jsx)(_.A, { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, className: T.Ki, src: P.A }),
                (0, n.jsxs)("div", {
                    className: T.zK,
                    children: [
                        (0, n.jsx)("img", { src: O.A, className: T._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: T.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: T.FS,
                    children: [
                        (0, n.jsx)(d.NPJ, {
                            theme: j ? b.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: s()(e, T.aZ),
                                    children: (0, n.jsx)(d.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(d.DZT, { variant: "heading-xl/bold", className: T.R_, children: G }),
                        (0, n.jsx)(d.EYj, { variant: "text-md/medium", className: T.G3, children: W }),
                        B && (0, n.jsx)(g.A, { className: T.L$ }),
                        M &&
                            l.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: T.fB,
                                children: [
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: T.G3,
                                        children: S.intl.string(v.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(d.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: T.G3,
                                        children: l.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: T.WT, children: (0, n.jsx)(d.e2v, { children: k }) }),
                    ],
                }),
            ],
        }),
    });
};
