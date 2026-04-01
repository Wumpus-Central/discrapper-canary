r.d(t, { A: () => O });
var a = r(627968),
    n = r(64700),
    s = r(503698),
    i = r.n(s),
    l = r(892227),
    o = r(732955),
    d = r(462887),
    c = r(397927),
    u = r(241524),
    m = r(736653),
    _ = r(303136),
    p = r(649032),
    f = r(320118),
    h = r(976860),
    b = r(780964),
    x = r(840065),
    g = r(975571),
    C = r(872725),
    A = r(566119),
    R = r(94264),
    v = r(652215),
    E = r(758836),
    N = r(901123),
    j = r(49370),
    I = r(985018),
    y = r(327557),
    P = r(909340),
    S = r(455482);
let T = g.A.getArticleURL(v.MVz.ORBS_REWARDS_FAQ);
function w(e) {
    (0, A.o8)(e), window.open(T, "_blank");
}
let O = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: r, programReward: s } = (0, f.F)({ location: "PremiumTenureRewardsOrbsCard" }),
        g = (0, u.A)("(min-width: 720px)"),
        T = (0, m.DP)(),
        O = n.useMemo(() => ({ hueRotate: 25, glowAmount: (0, d.M)(T) ? 2 : 8, blurAmount: 10 }), [T]);
    if (!r || null == s) return null;
    let D = (function (e, t) {
        let r = e.program_current_state,
            n =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, l.default)(new Date(e.next_reward_date), new Date())
                    : null,
            s = e?.total_rewarded_from_program;
        switch (r) {
            case p.L.ACTIVE:
                if (null == n || n < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !0,
                    actionButton: (0, a.jsx)(o.$nd, {
                        text: I.intl.string(j.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, A.WD)(r), (0, h.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(E.G2.ORBS));
                        },
                    }),
                    headerText: I.intl.format(j.default.BxLJQL, { days: Math.max(1, n), orbsCount: e.reward_amount }),
                    subheaderText: I.intl.format(j.default.tUV1vV, { helpdeskArticle: () => w(r) }),
                };
            case p.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, a.jsx)(o.$nd, {
                        text: I.intl.string(j.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, A.CC)(r), (0, x.openUserSettings)(b.X.BILLING_PANEL);
                        },
                    }),
                    headerText: I.intl.string(j.default.uuZJXR),
                    subheaderText: I.intl.format(j.default.dkeEV7, { helpdeskArticle: () => w(r) }),
                };
            case p.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: !1,
                    actionButton: (0, a.jsx)(o.NPJ, {
                        theme: t ? v.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, a.jsx)("span", {
                                className: e,
                                children: (0, a.jsx)(o.$nd, {
                                    text: I.intl.string(j.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, A.ue)(r), (0, x.openUserSettings)(b.X.BILLING_PANEL);
                                    },
                                }),
                            }),
                    }),
                    headerText: I.intl.string(j.default["+O9Asn"]),
                    subheaderText: I.intl.format(j.default.nWKEBZ, { helpdeskArticle: () => w(r) }),
                };
            case p.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != n,
                    actionButton: (0, a.jsx)(o.$nd, {
                        text: I.intl.string(j.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, A.WD)(r), (0, h.pX)(N.BV.COLLECTIBLES_SHOP_WITH_TAB(E.G2.ORBS));
                        },
                    }),
                    headerText: I.intl.string(j.default.zF0HnJ),
                    subheaderText: I.intl.format(j.default["5tzNTa"], { helpdeskArticle: () => w(r) }),
                };
            case p.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != s,
                    displayProgressBar: null != n,
                    actionButton: (0, a.jsx)(o.$nd, {
                        text: I.intl.string(j.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: o.tvc,
                        onClick: () => {
                            (0, A.Jv)(r), (0, x.openUserSettings)(b.X.SUBSCRIPTIONS_PANEL);
                        },
                    }),
                    headerText: I.intl.string(j.default.ISnOet),
                    subheaderText: I.intl.format(j.default["vjaRZ/"], { helpdeskArticle: () => w(r) }),
                };
            default:
                return null;
        }
    })(s, g);
    if (null == D) return null;
    let { displayTotalLifetimeRewards: M, displayProgressBar: U, actionButton: L, headerText: B, subheaderText: k } = D;
    return (0, a.jsx)("div", {
        className: i()(y.Hc, t),
        children: (0, a.jsxs)(C.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: y.Nr,
            glowing: !0,
            ...O,
            children: [
                (0, a.jsx)(_.A, { className: y.Ki, src: P.A }),
                (0, a.jsxs)("div", {
                    className: y.zK,
                    children: [
                        (0, a.jsx)("img", { src: S.A, className: y._e, alt: "", "aria-hidden": !0 }),
                        (0, a.jsx)("div", { className: y.mR }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: y.FS,
                    children: [
                        (0, a.jsx)(o.NPJ, {
                            theme: g ? v.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, a.jsx)("div", {
                                    className: i()(e, y.aZ),
                                    children: (0, a.jsx)(o.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, a.jsx)(o.DZT, { variant: "heading-xl/bold", className: y.R_, children: B }),
                        (0, a.jsx)(o.EYj, { variant: "text-md/medium", className: y.G3, children: k }),
                        U && (0, a.jsx)(R.A, { className: y.L$ }),
                        M &&
                            s.total_rewarded_from_program > 0 &&
                            (0, a.jsxs)("div", {
                                className: y.fB,
                                children: [
                                    (0, a.jsx)(o.EYj, {
                                        variant: "text-md/medium",
                                        className: y.G3,
                                        children: I.intl.string(j.default["/1mWUn"]),
                                    }),
                                    (0, a.jsx)(o.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, a.jsx)(o.EYj, {
                                        variant: "text-md/medium",
                                        className: y.G3,
                                        children: s.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, a.jsx)("div", { className: y.WT, children: (0, a.jsx)(o.e2v, { children: L }) }),
                    ],
                }),
            ],
        }),
    });
};
