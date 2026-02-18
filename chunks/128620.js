r.d(t, { A: () => w });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(892227),
    d = r(311907),
    u = r(732955),
    o = r(462887),
    c = r(397927),
    m = r(241524),
    p = r(736653),
    h = r(607470),
    g = r(895944),
    x = r(649032),
    b = r(976860),
    f = r(780964),
    _ = r(840065),
    R = r(975571),
    v = r(872725),
    N = r(566119),
    A = r(94264),
    E = r(652215),
    C = r(758836),
    I = r(901123),
    T = r(49370),
    y = r(985018),
    j = r(970466),
    P = r(909340),
    S = r(455482);
let O = R.A.getArticleURL(E.MVz.ORBS_REWARDS_FAQ);
function L(e) {
    (0, N.o8)(e), window.open(O, "_blank");
}
let w = (e) => {
    let { className: t } = e,
        { passesGeneralUIInvariant: r, programReward: l } = (0, d.cf)([g.A], () => ({
            passesGeneralUIInvariant: g.A.passesGeneralUIInvariant(x.W.NITRO),
            programReward: g.A.getRewardForProgram(x.W.NITRO),
        })),
        R = (0, m.A)("(min-width: 720px)"),
        O = (0, p.DP)(),
        w = a.useMemo(() => ({ hueRotate: 25, glowAmount: (0, o.M)(O) ? 2 : 8, blurAmount: 20 }), [O]);
    if (!r || null == l) return null;
    let U = (function (e, t) {
        let r = e.program_current_state,
            a =
                null != e.next_reward_date && "" !== e.next_reward_date
                    ? (0, i.default)(new Date(e.next_reward_date), new Date())
                    : null,
            l = e?.total_rewarded_from_program;
        switch (r) {
            case x.L.ACTIVE:
                if (null == a || a < 0) return null;
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: !0,
                    actionButton: (0, n.jsx)(u.$nd, {
                        text: y.intl.string(T.default.BxjHiu),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, N.WD)(r), (0, b.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS));
                        },
                    }),
                    headerText: y.intl.format(T.default.BxLJQL, { days: Math.max(1, a), orbsCount: e.reward_amount }),
                    subheaderText: y.intl.format(T.default.tUV1vV, { helpdeskArticle: () => L(r) }),
                };
            case x.L.PAYMENT_PROCESSING:
                return {
                    displayTotalLifetimeRewards: !1,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(u.$nd, {
                        text: y.intl.string(T.default.KVCfnE),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, N.CC)(r), (0, _.openUserSettings)(f.X.BILLING_PANEL, { section: E.nc_.BILLING });
                        },
                    }),
                    headerText: y.intl.string(T.default.uuZJXR),
                    subheaderText: y.intl.format(T.default.dkeEV7, { helpdeskArticle: () => L(r) }),
                };
            case x.L.PAYMENT_ERROR:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: !1,
                    actionButton: (0, n.jsx)(u.NPJ, {
                        theme: t ? E.NJ8.DARKER : void 0,
                        children: (e) =>
                            (0, n.jsx)("span", {
                                className: e,
                                children: (0, n.jsx)(u.$nd, {
                                    text: y.intl.string(T.default.KVCfnE),
                                    variant: "critical-secondary",
                                    onClick: () => {
                                        (0, N.ue)(r),
                                            (0, _.openUserSettings)(f.X.BILLING_PANEL, { section: E.nc_.BILLING });
                                    },
                                }),
                            }),
                    }),
                    headerText: y.intl.string(T.default["+O9Asn"]),
                    subheaderText: y.intl.format(T.default.nWKEBZ, { helpdeskArticle: () => L(r) }),
                };
            case x.L.PROGRAM_ROLLBACK:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(u.$nd, {
                        text: y.intl.string(T.default["wLAd/+"]),
                        variant: t ? "overlay-primary" : "secondary",
                        onClick: () => {
                            (0, N.WD)(r), (0, b.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(C.G2.ORBS));
                        },
                    }),
                    headerText: y.intl.string(T.default.zF0HnJ),
                    subheaderText: y.intl.format(T.default["5tzNTa"], { helpdeskArticle: () => L(r) }),
                };
            case x.L.PREMIUM_CHURNING:
                return {
                    displayTotalLifetimeRewards: null != l,
                    displayProgressBar: null != a,
                    actionButton: (0, n.jsx)(u.$nd, {
                        text: y.intl.string(T.default.FToh6D),
                        variant: t ? "overlay-primary" : "secondary",
                        icon: u.tvc,
                        onClick: () => {
                            (0, N.Jv)(r),
                                (0, _.openUserSettings)(f.X.SUBSCRIPTIONS_PANEL, { section: E.nc_.SUBSCRIPTIONS });
                        },
                    }),
                    headerText: y.intl.string(T.default.ISnOet),
                    subheaderText: y.intl.format(T.default["vjaRZ/"], { helpdeskArticle: () => L(r) }),
                };
            default:
                return null;
        }
    })(l, R);
    if (null == U) return null;
    let { displayTotalLifetimeRewards: D, displayProgressBar: B, actionButton: M, headerText: k, subheaderText: G } = U;
    return (0, n.jsx)("div", {
        className: s()(j.Hc, t),
        children: (0, n.jsxs)(v.A, {
            cardType: c.sl2.CUSTOM,
            cardClassName: j.Nr,
            ...w,
            children: [
                (0, n.jsx)(h.A, { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, className: j.Ki, src: P.A }),
                (0, n.jsxs)("div", {
                    className: j.zK,
                    children: [
                        (0, n.jsx)("img", { src: S.A, className: j._e, alt: "", "aria-hidden": !0 }),
                        (0, n.jsx)("div", { className: j.mR }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: j.FS,
                    children: [
                        (0, n.jsx)(u.NPJ, {
                            theme: R ? E.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, n.jsx)("div", {
                                    className: s()(e, j.aZ),
                                    children: (0, n.jsx)(u.Exy, { type: "beta", variant: "expressive" }),
                                }),
                        }),
                        (0, n.jsx)(u.DZT, { variant: "heading-xl/bold", className: j.R_, children: k }),
                        (0, n.jsx)(u.EYj, { variant: "text-md/medium", className: j.G3, children: G }),
                        B && (0, n.jsx)(A.A, { className: j.L$ }),
                        D &&
                            l.total_rewarded_from_program > 0 &&
                            (0, n.jsxs)("div", {
                                className: j.fB,
                                children: [
                                    (0, n.jsx)(u.EYj, {
                                        variant: "text-md/medium",
                                        className: j.G3,
                                        children: y.intl.string(T.default["/1mWUn"]),
                                    }),
                                    (0, n.jsx)(u.Cp8, { size: "sm", color: "currentColor" }),
                                    (0, n.jsx)(u.EYj, {
                                        variant: "text-md/medium",
                                        className: j.G3,
                                        children: l.total_rewarded_from_program,
                                    }),
                                ],
                            }),
                        (0, n.jsx)("div", { className: j.WT, children: (0, n.jsx)(u.e2v, { children: M }) }),
                    ],
                }),
            ],
        }),
    });
};
