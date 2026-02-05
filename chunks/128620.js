n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(892227),
    o = n(311907),
    c = n(732955),
    d = n(462887),
    u = n(397927),
    _ = n(241524),
    m = n(736653),
    A = n(607470),
    g = n(895944),
    E = n(649032),
    h = n(976860),
    p = n(780964),
    C = n(840065),
    x = n(954571),
    T = n(975571),
    I = n(308541),
    S = n(94264),
    f = n(652215),
    N = n(758836),
    b = n(901123),
    R = n(49370),
    v = n(985018),
    O = n(970466),
    j = n(909340),
    P = n(455482);
let y = T.A.getArticleURL(f.MVz.ORBS_REWARDS_FAQ),
    L = (e) => {
        let { className: t } = e,
            { passesGeneralUIInvariant: n, programReward: r } = (0, o.cf)([g.A], () => ({
                passesGeneralUIInvariant: g.A.passesGeneralUIInvariant(E.W.NITRO),
                programReward: g.A.getRewardForProgram(E.W.NITRO),
            })),
            T = (0, _.A)("(min-width: 720px)"),
            L = (0, m.DP)(),
            D = s.useMemo(() => ({ hueRotate: 25, glowAmount: (0, d.M)(L) ? 2 : 8, blurAmount: 20 }), [L]);
        if (!n || null == r) return null;
        let M = (function (e, t) {
            let n = e.program_current_state,
                s =
                    null != e.next_reward_date && "" !== e.next_reward_date
                        ? (0, l.default)(new Date(e.next_reward_date), new Date())
                        : null,
                r = e?.total_rewarded_from_program;
            switch (n) {
                case E.L.ACTIVE:
                    if (null == s || s < 0) return null;
                    return {
                        displayTotalLifetimeRewards: null != r,
                        displayProgressBar: !0,
                        actionButton: (0, i.jsx)(c.$nd, {
                            text: v.intl.string(R.default.BxjHiu),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => {
                                x.default.track(f.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "shop_orbs",
                                    program_state: n,
                                }),
                                    (0, h.pX)(b.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS));
                            },
                        }),
                        headerText: v.intl.format(R.default.BxLJQL, {
                            days: Math.max(1, s),
                            orbsCount: e.reward_amount,
                        }),
                        subheaderText: v.intl.format(R.default.tUV1vV, { helpdeskArticle: y }),
                    };
                case E.L.PAYMENT_PROCESSING:
                    return {
                        displayTotalLifetimeRewards: !1,
                        displayProgressBar: !1,
                        actionButton: (0, i.jsx)(c.$nd, {
                            text: v.intl.string(R.default.KVCfnE),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => {
                                x.default.track(f.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "view_billing",
                                    program_state: n,
                                }),
                                    (0, C.openUserSettings)(p.X.BILLING_PANEL, { section: f.nc_.BILLING });
                            },
                        }),
                        headerText: v.intl.string(R.default.uuZJXR),
                        subheaderText: v.intl.format(R.default.dkeEV7, { helpdeskArticle: y }),
                    };
                case E.L.PAYMENT_ERROR:
                    return {
                        displayTotalLifetimeRewards: null != r,
                        displayProgressBar: !1,
                        actionButton: (0, i.jsx)(c.NPJ, {
                            theme: t ? f.NJ8.DARKER : void 0,
                            children: (e) =>
                                (0, i.jsx)("span", {
                                    className: e,
                                    children: (0, i.jsx)(c.$nd, {
                                        text: v.intl.string(R.default.KVCfnE),
                                        variant: "critical-secondary",
                                        onClick: () => {
                                            x.default.track(f.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                                cta_type: "update_billing",
                                                program_state: n,
                                            }),
                                                (0, C.openUserSettings)(p.X.BILLING_PANEL, { section: f.nc_.BILLING });
                                        },
                                    }),
                                }),
                        }),
                        headerText: v.intl.string(R.default["+O9Asn"]),
                        subheaderText: v.intl.format(R.default.nWKEBZ, { helpdeskArticle: y }),
                    };
                case E.L.PROGRAM_ROLLBACK:
                    return {
                        displayTotalLifetimeRewards: null != r,
                        displayProgressBar: null != s,
                        actionButton: (0, i.jsx)(c.$nd, {
                            text: v.intl.string(R.default["wLAd/+"]),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => {
                                x.default.track(f.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "shop_orbs",
                                    program_state: n,
                                }),
                                    (0, h.pX)(b.BV.COLLECTIBLES_SHOP_WITH_TAB(N.G2.ORBS));
                            },
                        }),
                        headerText: v.intl.string(R.default.zF0HnJ),
                        subheaderText: v.intl.format(R.default["5tzNTa"], { helpdeskArticle: y }),
                    };
                case E.L.PREMIUM_CHURNING:
                    return {
                        displayTotalLifetimeRewards: null != r,
                        displayProgressBar: null != s,
                        actionButton: (0, i.jsx)(c.$nd, {
                            text: v.intl.string(R.default.FToh6D),
                            variant: t ? "overlay-primary" : "secondary",
                            icon: c.tvc,
                            onClick: () => {
                                x.default.track(f.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "resubscribe",
                                    program_state: n,
                                }),
                                    (0, C.openUserSettings)(p.X.BILLING_PANEL, { section: f.nc_.BILLING });
                            },
                        }),
                        headerText: v.intl.string(R.default.ISnOet),
                        subheaderText: v.intl.format(R.default["vjaRZ/"], { helpdeskArticle: y }),
                    };
                default:
                    return null;
            }
        })(r, T);
        if (null == M) return null;
        let {
            displayTotalLifetimeRewards: G,
            displayProgressBar: U,
            actionButton: k,
            headerText: B,
            subheaderText: w,
        } = M;
        return (0, i.jsx)("div", {
            className: a()(O.Hc, t),
            children: (0, i.jsxs)(I.A, {
                cardType: u.sl2.CUSTOM,
                cardClassName: O.Nr,
                ...D,
                children: [
                    (0, i.jsx)(A.A, { muted: !0, autoPlay: !0, playsInline: !0, loop: !0, className: O.Ki, src: j.A }),
                    (0, i.jsxs)("div", {
                        className: O.zK,
                        children: [
                            (0, i.jsx)("img", { src: P.A, className: O._e, alt: "", "aria-hidden": !0 }),
                            (0, i.jsx)("div", { className: O.mR }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: O.FS,
                        children: [
                            (0, i.jsx)(c.NPJ, {
                                theme: T ? f.NJ8.DARKER : void 0,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: a()(e, O.aZ),
                                        children: (0, i.jsx)(c.Exy, { type: "beta", variant: "expressive" }),
                                    }),
                            }),
                            (0, i.jsx)(c.DZT, { variant: "heading-xl/bold", className: O.R_, children: B }),
                            (0, i.jsx)(c.EYj, { variant: "text-md/medium", className: O.G3, children: w }),
                            U && (0, i.jsx)(S.A, { className: O.L$ }),
                            G &&
                                r.total_rewarded_from_program > 0 &&
                                (0, i.jsxs)("div", {
                                    className: O.fB,
                                    children: [
                                        (0, i.jsx)(c.EYj, {
                                            variant: "text-md/medium",
                                            className: O.G3,
                                            children: v.intl.string(R.default["/1mWUn"]),
                                        }),
                                        (0, i.jsx)(c.Cp8, { size: "sm", color: "currentColor" }),
                                        (0, i.jsx)(c.EYj, {
                                            variant: "text-md/medium",
                                            className: O.G3,
                                            children: r.total_rewarded_from_program,
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
