n.d(t, { A: () => x });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(892227),
    o = n(311907),
    l = n(827734),
    c = n(732955),
    u = n(397927),
    d = n(241524),
    f = n(607470),
    p = n(895944),
    _ = n(649032),
    h = n(976860),
    m = n(780964),
    g = n(840065),
    E = n(975571),
    b = n(84483),
    y = n(749082),
    O = n(385243),
    A = n(652215),
    v = n(758836),
    S = n(901123),
    I = n(49370),
    T = n(985018),
    C = n(785619),
    N = n(909340),
    R = n(455482);
let w = E.A.getArticleURL(A.MVz.ORBS_REWARDS_FAQ),
    P = 720;
function D(e, t, n) {
    let i = e.program_current_state,
        a =
            null != e.next_reward_date && "" !== e.next_reward_date
                ? (0, s.default)(new Date(e.next_reward_date), new Date())
                : null,
        o = null == e ? void 0 : e.total_rewarded_from_program;
    switch (i) {
        case _.L.ACTIVE:
            if (null == a || a < 0) return null;
            return {
                displayTotalLifetimeRewards: null != o,
                displayProgressBar: !0,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: T.intl.string(I.default.BxjHiu),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, h.pX)(S.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS)),
                }),
                headerText: T.intl.format(I.default.cfE8Oh, { days: Math.max(1, a) }),
                subheaderText: T.intl.format(I.default.JCLEQp, {
                    orbsCount: n,
                    helpdeskArticle: w,
                }),
            };
        case _.L.PAYMENT_PROCESSING:
            return {
                displayTotalLifetimeRewards: !1,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: T.intl.string(I.default.KVCfnE),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, g.openUserSettings)(m.X.BILLING_PANEL, { section: A.nc_.BILLING }),
                }),
                headerText: T.intl.string(I.default.uuZJXR),
                subheaderText: T.intl.format(I.default.dkeEV7, { helpdeskArticle: w }),
            };
        case _.L.PAYMENT_ERROR:
            return {
                displayTotalLifetimeRewards: null != o,
                displayProgressBar: !1,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: T.intl.string(I.default.KVCfnE),
                    variant: "critical-secondary",
                    onClick: () => (0, g.openUserSettings)(m.X.BILLING_PANEL, { section: A.nc_.BILLING }),
                }),
                headerText: T.intl.string(I.default["+O9Asn"]),
                subheaderText: T.intl.format(I.default.nWKEBZ, { helpdeskArticle: w }),
            };
        case _.L.PROGRAM_ROLLBACK:
            return {
                displayTotalLifetimeRewards: null != o,
                displayProgressBar: null != a,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: T.intl.string(I.default["wLAd/+"]),
                    variant: t ? "overlay-primary" : "secondary",
                    onClick: () => (0, h.pX)(S.BV.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS)),
                }),
                headerText: T.intl.string(I.default.zF0HnJ),
                subheaderText: T.intl.format(I.default["5tzNTa"], { helpdeskArticle: w }),
            };
        case _.L.PREMIUM_CHURNING:
            return {
                displayTotalLifetimeRewards: null != o,
                displayProgressBar: null != a,
                actionButton: (0, r.jsx)(c.$nd, {
                    text: T.intl.string(I.default.FToh6D),
                    variant: t ? "overlay-primary" : "secondary",
                    icon: c.tvc,
                    onClick: () => (0, g.openUserSettings)(m.X.BILLING_PANEL, { section: A.nc_.BILLING }),
                }),
                headerText: T.intl.string(I.default.ISnOet),
                subheaderText: T.intl.format(I.default.agletO, {
                    orbsCount: n,
                    helpdeskArticle: w,
                }),
            };
        default:
            return null;
    }
}
let x = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: i } = (0, o.cf)([p.A], () => ({
            passesGeneralUIInvariant: p.A.passesGeneralUIInvariant(_.W.NITRO),
            programReward: p.A.getRewardForProgram(_.W.NITRO),
        })),
        s = (0, d.A)("(min-width: ".concat(P, "px)")),
        { orbsRewardAmount: h } = (0, b.uX)("PremiumTenureRewardsOrbsCard");
    if (!n || null == i) return null;
    let m = D(i, s, h);
    if (null == m) return null;
    let { displayTotalLifetimeRewards: g, displayProgressBar: E, actionButton: A, headerText: v, subheaderText: S } = m;
    return (0, r.jsxs)("div", {
        className: a()(C.Hc, t),
        children: [
            (0, r.jsx)("div", {
                className: C.aZ,
                children: (0, r.jsx)(c.Exy, {
                    type: "beta",
                    variant: "expressive",
                }),
            }),
            (0, r.jsxs)(y.A, {
                cardType: u.sl2.CUSTOM,
                cardClassName: C.Nr,
                children: [
                    (0, r.jsx)(f.A, {
                        muted: !0,
                        autoPlay: !0,
                        playsInline: !0,
                        loop: !0,
                        className: C.Ki,
                        src: N.A,
                    }),
                    (0, r.jsxs)("div", {
                        className: C.zK,
                        children: [
                            (0, r.jsx)("img", {
                                src: R.A,
                                className: C._e,
                                alt: "",
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)("div", { className: C.mR }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.FS,
                        children: [
                            (0, r.jsx)(c.DZT, {
                                variant: "heading-xxl/bold",
                                className: C.R_,
                                children: v,
                            }),
                            (0, r.jsx)(c.EYj, {
                                variant: "text-md/medium",
                                className: C.G3,
                                children: S,
                            }),
                            E && (0, r.jsx)(O.A, { className: C.L$ }),
                            g &&
                                (0, r.jsxs)("div", {
                                    className: C.fB,
                                    children: [
                                        (0, r.jsx)(c.EYj, {
                                            variant: "text-md/medium",
                                            className: C.G3,
                                            children: T.intl.string(I.default["/1mWUn"]),
                                        }),
                                        (0, r.jsx)(c.Cp8, {
                                            size: "sm",
                                            color: l.A.colors.TEXT_DEFAULT.css,
                                        }),
                                        (0, r.jsx)(c.EYj, {
                                            variant: "text-md/medium",
                                            className: C.G3,
                                            children: i.total_rewarded_from_program,
                                        }),
                                    ],
                                }),
                            (0, r.jsx)("div", {
                                className: C.WT,
                                children: (0, r.jsx)(c.e2v, { children: A }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
