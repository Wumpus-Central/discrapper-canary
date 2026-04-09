r.d(t, { A: () => O });
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(892227),
    d = r(732955),
    o = r(462887),
    c = r(397927),
    u = r(241524),
    m = r(736653),
    _ = r(303136),
    p = r(649032),
    f = r(320118),
    h = r(976860),
    b = r(780964),
    g = r(858897),
    x = r(975571),
    C = r(872725),
    A = r(566119),
    R = r(94264),
    v = r(652215),
    E = r(758836),
    j = r(901123),
    N = r(49370),
    y = r(985018),
    I = r(327557),
    P = r(909340),
    T = r(455482);
let S = x.A.getArticleURL(v.MVz.ORBS_REWARDS_FAQ);
function w(e) {
    (0, A.o8)(e), window.open(S, "_blank");
}
let O = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: r, programReward: i } = (0, f.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        x = (0, u.A)("(min-width: 720px)"),
        S = (0, m.DP)(),
        O = a.useMemo(() => ({ hueRotate: 25, glowAmount: (0, o.M)(S) ? 2 : 8, blurAmount: 10 }), [S]);
    if (!r || null == i) return null;
    let M = (function (e, t) {
        let r = e.program_current_state,
            a =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, l.default)(new Date(e.next_reward_date), new Date())
                    : null,
            i = e?.total_rewarded_from_program;
        switch (r) {
            case p.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: !0,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: y.intl.string(N.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, A.WD)(r), (0, h.pX)(j.BV.COLLECTIBLES_SHOP_WITH_TAB(E.G2.ORBS));
                        },
                    }),
                    headerText: y.intl.format(N.default.BxLJQL, { days: Math.max(1, a), orbsCount: e.reward_amount }),
                    subheaderText: y.intl.format(N.default.tUV1vV, { helpdeskArticle: () => w(r) }),
                };
            case p.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: y.intl.string(N.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, A.CC)(r), (0, g.openUserSettings)(b.X.BILLING_PANEL);
                        },
                    }),
                    headerText: y.intl.string(N.default.uuZJXR),
                    subheaderText: y.intl.format(N.default.dkeEV7, { helpdeskArticle: () => w(r) }),
                };
            case p.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(d.NPJ, {
                        theme: t ? v.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, n.jsx)("span", {
                                className: e,
                                children: (0, n.jsx)(d.$nd, {
                                    text: y.intl.string(N.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, A.ue)(r), (0, g.openUserSettings)(b.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: y.intl.string(N.default["+O9Asn"]),
                    subheaderText: y.intl.format(N.default.nWKEBZ, { helpdeskArticle: () => w(r) }),
                };
            case p.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: y.intl.string(N.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, A.WD)(r), (0, h.pX)(j.BV.COLLECTIBLES_SHOP_WITH_TAB(E.G2.ORBS));
                        },
                    }),
                    headerText: y.intl.string(N.default.zF0HnJ),
                    subheaderText: y.intl.format(N.default["5tzNTa"], { helpdeskArticle: () => w(r) }),
                };
            case p.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != i,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(d.$nd, {
                        text: y.intl.string(N.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: d.tvc,
                        onClick: () => {
                            (0, A.Jv)(r), (0, g.openUserSettings)(b.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: y.intl.string(N.default.ISnOet),
                    subheaderText: y.intl.format(N.default["vjaRZ/"], { helpdeskArticle: () => w(r) }),
                };
            default:
                return null;
        }
    })(i, x);
    if (null == M) return null;
    let { displayTotalLifetimeRewards: D, displayProgressBar: U, actionButton: L, headerText: B, subheaderText: k } = M;
    return (0, n.jsx)("div", {
        className: s()(I.Hc, t),
        children: (0, n.jsxs)(C.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: I.Nr,
            glowing: !0,
            ...O,
            children: [
                (0, n.jsx)(_.A, { className: I.Ki, src: P.A }),
                (0, n.jsxs)("div", {
                    className: I.zK,
                    children: [
                        (0, n.jsx)("img", { src: T.A, className: I._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: I.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: I.FS,
                    children: [
                        (0, n.jsx)(d.NPJ, {
                            theme: x ? v.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: s()(e, I.aZ),
                                    children: (0, n.jsx)(d.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(d.DZT, { variant: "heading-xl/bold", className: I.R_, children: B }),
                        (0, n.jsx)(d.EYj, { variant: "text-md/medium", className: I.G3, children: k }),
                        U && (0, n.jsx)(R.A, { className: I.L$ }),
                        D &&
                            i.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: I.fB,
                                children: [
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: I.G3,
                                        children: y.intl.string(N.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(d.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(d.EYj, {
                                        variant: "text-md/medium",
                                        className: I.G3,
                                        children: i.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: I.WT, children: (0, n.jsx)(d.e2v, { children: L }) }),
                    ],
                }),
            ],
        }),
    });
};
