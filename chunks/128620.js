r.d(t, { A: () => w });
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(892227),
    d = r(311907),
    o = r(732955),
    u = r(462887),
    c = r(397927),
    m = r(241524),
    h = r(736653),
    p = r(607470),
    x = r(895944),
    g = r(649032),
    _ = r(976860),
    f = r(780964),
    b = r(840065),
    v = r(975571),
    N = r(872725),
    R = r(566119),
    A = r(570627),
    E = r(94264),
    C = r(652215),
    j = r(758836),
    T = r(901123),
    I = r(49370),
    y = r(985018),
    P = r(970466),
    S = r(909340),
    O = r(455482);
let L = v.A.getArticleURL(C.MVz.ORBS_REWARDS_FAQ);
function U(e) {
    (0, R.o8)(e), window.open(L, "_blank");
}
let w = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: r, programReward: s } = (0, d.cf)([x.A], () => ({
            passesGeneralUIInvariant: x.A.passesGeneralUIInvariant(g.W.NITRO),
            programReward: x.A.getRewardForProgram(g.W.NITRO),
        })),
        v = A.m.useConfig({ location: "PremiumTenureRewardsOrbsCard" }).enabled,
        L = (0, m.A)("(min-width: 720px)"),
        w = (0, h.DP)(),
        D = a.useMemo(() => ({ hueRotate: 25, glowAmount: (0, u.M)(w) ? 2 : 8, blurAmount: v ? 10 : 20 }), [w, v]);
    if (!r || null == s) return null;
    let B = (function (e, t) {
        let r = e.program_current_state,
            a =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, i.default)(new Date(e.next_reward_date), new Date())
                    : null,
            s = e?.total_rewarded_from_program;
        switch (r) {
            case g.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !0,
                    actionButton: (0, n.jsx)(o.$nd, {
                        text: y.intl.string(I.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(r), (0, _.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(j.G2.ORBS));
                        },
                    }),
                    headerText: y.intl.format(I.default.BxLJQL, { days: Math.max(1, a), orbsCount: e.reward_amount }),
                    subheaderText: y.intl.format(I.default.tUV1vV, { helpdeskArticle: () => U(r) }),
                };
            case g.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(o.$nd, {
                        text: y.intl.string(I.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.CC)(r), (0, b.openUserSettings)(f.X.BILLING_PANEL, { section: C.nc_.BILLING });
                        },
                    }),
                    headerText: y.intl.string(I.default.uuZJXR),
                    subheaderText: y.intl.format(I.default.dkeEV7, { helpdeskArticle: () => U(r) }),
                };
            case g.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(o.NPJ, {
                        theme: t ? C.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, n.jsx)("span", {
                                className: e,
                                children: (0, n.jsx)(o.$nd, {
                                    text: y.intl.string(I.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, R.ue)(r),
                                            (0, b.openUserSettings)(f.X.BILLING_PANEL, { section: C.nc_.BILLING });
                                    },
                                }),
                            }),
                    }),
                    headerText: y.intl.string(I.default["+O9Asn"]),
                    subheaderText: y.intl.format(I.default.nWKEBZ, { helpdeskArticle: () => U(r) }),
                };
            case g.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(o.$nd, {
                        text: y.intl.string(I.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, R.WD)(r), (0, _.pX)(T.BV.COLLECTIBLES_SHOP_WITH_TAB(j.G2.ORBS));
                        },
                    }),
                    headerText: y.intl.string(I.default.zF0HnJ),
                    subheaderText: y.intl.format(I.default["5tzNTa"], { helpdeskArticle: () => U(r) }),
                };
            case g.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(o.$nd, {
                        text: y.intl.string(I.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: o.tvc,
                        onClick: () => {
                            (0, R.Jv)(r),
                                (0, b.openUserSettings)(f.X.SUBSCRIPTIONS_PANEL, { section: C.nc_.SUBSCRIPTIONS });
                        },
                    }),
                    headerText: y.intl.string(I.default.ISnOet),
                    subheaderText: y.intl.format(I.default["vjaRZ/"], { helpdeskArticle: () => U(r) }),
                };
            default:
                return null;
        }
    })(s, L);
    if (null == B) return null;
    let { displayTotalLifetimeRewards: M, displayProgressBar: k, actionButton: G, headerText: W, subheaderText: H } = B;
    return (0, n.jsx)("div", {
        className: l()(P.Hc, t),
        children: (0, n.jsxs)(N.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: P.Nr,
            ...D,
            children: [
                (0, n.jsx)(p.A, { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, className: P.Ki, src: S.A }),
                (0, n.jsxs)("div", {
                    className: P.zK,
                    children: [
                        (0, n.jsx)("img", { src: O.A, className: P._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: P.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: P.FS,
                    children: [
                        (0, n.jsx)(o.NPJ, {
                            theme: L ? C.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: l()(e, P.aZ),
                                    children: (0, n.jsx)(o.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(o.DZT, { variant: "heading-xl/bold", className: P.R_, children: W }),
                        (0, n.jsx)(o.EYj, { variant: "text-md/medium", className: P.G3, children: H }),
                        k && (0, n.jsx)(E.A, { className: P.L$ }),
                        M &&
                            s.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: P.fB,
                                children: [
                                    (0, n.jsx)(o.EYj, {
                                        variant: "text-md/medium",
                                        className: P.G3,
                                        children: y.intl.string(I.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(o.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(o.EYj, {
                                        variant: "text-md/medium",
                                        className: P.G3,
                                        children: s.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: P.WT, children: (0, n.jsx)(o.e2v, { children: G }) }),
                    ],
                }),
            ],
        }),
    });
};
