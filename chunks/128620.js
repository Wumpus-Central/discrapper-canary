n.d(t, { A: () => D });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(892227),
    o = n(311907),
    c = n(732955),
    d = n(462887),
    u = n(397927),
    _ = n(241524),
    m = n(736653),
    A = n(607470),
    g = n(895944),
    h = n(649032),
    x = n(976860),
    p = n(780964),
    E = n(840065),
    C = n(975571),
    T = n(872725),
    S = n(566119),
    I = n(94264),
    f = n(652215),
    N = n(758836),
    b = n(901123),
    j = n(723468),
    v = n(985018),
    O = n(306776),
    R = n(909340),
    y = n(455482);
let P = C.A.getArticleURL(f.MVz.ORBS_REWARDS_FAQ);
function L(e) {
    (0, S.o8)(e), window.open(P, "_blank");
}
let D = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: n, programReward: a } = (0, o.cf)([g.A], () => ({
            passesGeneralUIInvariant: g.A.passesGeneralUIInvariant(h.W.NITRO),
            programReward: g.A.getRewardForProgram(h.W.NITRO),
        })),
        C = (0, _.A)("(min-width: 720px)"),
        P = (0, m.DP)(),
        D = s.useMemo(() => ({ hueRotate: 25, glowAmount: (0, d.M)(P) ? 2 : 8, blurAmount: 20 }), [P]);
    if (!n || null == a) return null;
    let M = (function (e, t) {
        let n = e.program_current_state,
            s =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, r.default)(new Date(e.next_reward_date), new Date())
                    : null,
            a = e?.total_rewarded_from_program;
        switch (n) {
            case h.L.ACTIVE:
                if (null == s || s < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != a,
                    displayProgressBar: !0,
                    actionButton: (0, i.jsx)(c.$nd, {
                        text: v.intl.string(j.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, S.WD)(n), (0, x.pX)(b.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS));
                        },
                    }),
                    headerText: v.intl.format(j.default.BxLJQL, { days: Math.max(1, s), orbsCount: e.reward_amount }),
                    subheaderText: v.intl.format(j.default.tUV1vV, { helpdeskArticle: () => L(n) }),
                };
            case h.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, i.jsx)(c.$nd, {
                        text: v.intl.string(j.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, S.CC)(n), (0, E.openUserSettings)(p.X.BILLING_PANEL, { section: f.nc_.BILLING });
                        },
                    }),
                    headerText: v.intl.string(j.default.uuZJXR),
                    subheaderText: v.intl.format(j.default.dkeEV7, { helpdeskArticle: () => L(n) }),
                };
            case h.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != a,
                    displayProgressBar: !1,
                    actionButton: (0, i.jsx)(c.NPJ, {
                        theme: t ? f.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, i.jsx)("span", {
                                className: e,
                                children: (0, i.jsx)(c.$nd, {
                                    text: v.intl.string(j.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, S.ue)(n),
                                            (0, E.openUserSettings)(p.X.BILLING_PANEL, { section: f.nc_.BILLING });
                                    },
                                }),
                            }),
                    }),
                    headerText: v.intl.string(j.default["+O9Asn"]),
                    subheaderText: v.intl.format(j.default.nWKEBZ, { helpdeskArticle: () => L(n) }),
                };
            case h.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != a,
                    displayProgressBar: null != s,
                    actionButton: (0, i.jsx)(c.$nd, {
                        text: v.intl.string(j.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, S.WD)(n), (0, x.pX)(b.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS));
                        },
                    }),
                    headerText: v.intl.string(j.default.zF0HnJ),
                    subheaderText: v.intl.format(j.default["5tzNTa"], { helpdeskArticle: () => L(n) }),
                };
            case h.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != a,
                    displayProgressBar: null != s,
                    actionButton: (0, i.jsx)(c.$nd, {
                        text: v.intl.string(j.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: c.tvc,
                        onClick: () => {
                            (0, S.Jv)(n), (0, E.openUserSettings)(p.X.BILLING_PANEL, { section: f.nc_.BILLING });
                        },
                    }),
                    headerText: v.intl.string(j.default.ISnOet),
                    subheaderText: v.intl.format(j.default["vjaRZ/"], { helpdeskArticle: () => L(n) }),
                };
            default:
                return null;
        }
    })(a, C);
    if (null == M) return null;
    let { displayTotalLifetimeRewards: G, displayProgressBar: U, actionButton: k, headerText: V, subheaderText: H } = M;
    return (0, i.jsx)("div", {
        className: l()(O.Hc, t),
        children: (0, i.jsxs)(T.A, {
            cardType: u.sl2.CUSTOM,
            cardClassName: O.Nr,
            ...D,
            children: [
                (0, i.jsx)(A.A, { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, className: O.Ki, src: R.A }),
                (0, i.jsxs)("div", {
                    className: O.zK,
                    children: [
                        (0, i.jsx)("img", { src: y.A, className: O._e, alt: "", "aria-hidden": !0 }),
                        (0, i.jsx)("div", { className: O.mR }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: O.FS,
                    children: [
                        (0, i.jsx)(c.NPJ, {
                            theme: C ? f.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, i.jsx)("div", {
                                    className: l()(e, O.aZ),
                                    children: (0, i.jsx)(c.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, i.jsx)(c.DZT, { variant: "heading-xl/bold", className: O.R_, children: V }),
                        (0, i.jsx)(c.EYj, { variant: "text-md/medium", className: O.G3, children: H }),
                        U && (0, i.jsx)(I.A, { className: O.L$ }),
                        G &&
                            a.total_rewarded_from_program > 0 &&
                            (0, i.jsxs)("div", {
                                className: O.fB,
                                children: [
                                    (0, i.jsx)(c.EYj, {
                                        variant: "text-md/medium",
                                        className: O.G3,
                                        children: v.intl.string(j.default["/1mWUn"]),
                                    }),
                                    (0, i.jsx)(c.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, i.jsx)(c.EYj, {
                                        variant: "text-md/medium",
                                        className: O.G3,
                                        children: a.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, i.jsx)("div", { className: O.WT, children: (0, i.jsx)(c.e2v, { children: k }) }),
                    ],
                }),
            ],
        }),
    });
};
