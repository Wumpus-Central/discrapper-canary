n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(892227),
    o = n(311907),
    c = n(732955),
    d = n(462887),
    u = n(397927),
    _ = n(241524),
    p = n(736653),
    m = n(607470),
    g = n(895944),
    A = n(649032),
    f = n(976860),
    b = n(780964),
    h = n(840065),
    E = n(954571),
    O = n(975571),
    x = n(308541),
    C = n(94264),
    S = n(652215),
    T = n(758836),
    I = n(901123),
    N = n(49370),
    y = n(985018),
    j = n(970466),
    v = n(909340),
    P = n(455482);
let R = O.A.getArticleURL(S.MVz.ORBS_REWARDS_FAQ),
    D = (e) => {
        var t, n;
        let { className: l } = e,
            { passesGeneralUIInvariant: O, programReward: D } = (0, o.cf)([g.A], () => ({
                passesGeneralUIInvariant: g.A.passesGeneralUIInvariant(A.W.NITRO),
                programReward: g.A.getRewardForProgram(A.W.NITRO),
            })),
            L = (0, _.A)("(min-width: ".concat(720, "px)")),
            w = (0, p.DP)(),
            M = i.useMemo(
                () => ({
                    hueRotate: 25,
                    glowAmount: (0, d.M)(w) ? 2 : 8,
                    blurAmount: 20,
                }),
                [w],
            );
        if (!O || null == D) return null;
        let G = (function (e, t) {
            let n = e.program_current_state,
                i =
                    null != e.next_reward_date && "" !== e.next_reward_date
                        ? (0, a.default)(new Date(e.next_reward_date), new Date())
                        : null,
                l = null == e ? void 0 : e.total_rewarded_from_program;
            switch (n) {
                case A.L.ACTIVE:
                    if (null == i || i < 0) return null;
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: !0,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: y.intl.string(N.default.BxjHiu),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => {
                                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "shop_orbs",
                                    program_state: n,
                                }),
                                    (0, f.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS));
                            },
                        }),
                        headerText: y.intl.format(N.default.BxLJQL, {
                            days: Math.max(1, i),
                            orbsCount: e.reward_amount,
                        }),
                        subheaderText: y.intl.format(N.default.tUV1vV, {
                            helpdeskArticle: R,
                        }),
                    };
                case A.L.PAYMENT_PROCESSING:
                    return {
                        displayTotalLifetimeRewards: !1,
                        displayProgressBar: !1,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: y.intl.string(N.default.KVCfnE),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => {
                                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "view_billing",
                                    program_state: n,
                                }),
                                    (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                                        section: S.nc_.BILLING,
                                    });
                            },
                        }),
                        headerText: y.intl.string(N.default.uuZJXR),
                        subheaderText: y.intl.format(N.default.dkeEV7, {
                            helpdeskArticle: R,
                        }),
                    };
                case A.L.PAYMENT_ERROR:
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: !1,
                        actionButton: (0, r.jsx)("span", {
                            className: t ? "theme-dark" : void 0,
                            children: (0, r.jsx)(c.$nd, {
                                text: y.intl.string(N.default.KVCfnE),
                                variant: "critical-secondary",
                                onClick: () => {
                                    E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                        cta_type: "update_billing",
                                        program_state: n,
                                    }),
                                        (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                                            section: S.nc_.BILLING,
                                        });
                                },
                            }),
                        }),
                        headerText: y.intl.string(N.default["+O9Asn"]),
                        subheaderText: y.intl.format(N.default.nWKEBZ, {
                            helpdeskArticle: R,
                        }),
                    };
                case A.L.PROGRAM_ROLLBACK:
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: null != i,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: y.intl.string(N.default["wLAd/+"]),
                            variant: t ? "overlay-primary" : "secondary",
                            onClick: () => {
                                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "shop_orbs",
                                    program_state: n,
                                }),
                                    (0, f.pX)(I.BV.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS));
                            },
                        }),
                        headerText: y.intl.string(N.default.zF0HnJ),
                        subheaderText: y.intl.format(N.default["5tzNTa"], {
                            helpdeskArticle: R,
                        }),
                    };
                case A.L.PREMIUM_CHURNING:
                    return {
                        displayTotalLifetimeRewards: null != l,
                        displayProgressBar: null != i,
                        actionButton: (0, r.jsx)(c.$nd, {
                            text: y.intl.string(N.default.FToh6D),
                            variant: t ? "overlay-primary" : "secondary",
                            icon: c.tvc,
                            onClick: () => {
                                E.default.track(S.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
                                    cta_type: "resubscribe",
                                    program_state: n,
                                }),
                                    (0, h.openUserSettings)(b.X.BILLING_PANEL, {
                                        section: S.nc_.BILLING,
                                    });
                            },
                        }),
                        headerText: y.intl.string(N.default.ISnOet),
                        subheaderText: y.intl.format(N.default["vjaRZ/"], {
                            helpdeskArticle: R,
                        }),
                    };
                default:
                    return null;
            }
        })(D, L);
        if (null == G) return null;
        let {
            displayTotalLifetimeRewards: U,
            displayProgressBar: k,
            actionButton: B,
            headerText: H,
            subheaderText: V,
        } = G;
        return (0, r.jsx)("div", {
            className: s()(j.Hc, l),
            children: (0, r.jsxs)(
                x.A,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        cardType: u.sl2.CUSTOM,
                        cardClassName: j.Nr,
                    },
                    M,
                )),
                (n = n =
                    {
                        children: [
                            (0, r.jsx)(m.A, {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                className: j.Ki,
                                src: v.A,
                            }),
                            (0, r.jsxs)("div", {
                                className: j.zK,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: P.A,
                                        className: j._e,
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                                    (0, r.jsx)("div", {
                                        className: j.mR,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: j.FS,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: j.aZ,
                                        children: (0, r.jsx)(c.Exy, {
                                            type: "beta",
                                            variant: "expressive",
                                        }),
                                    }),
                                    (0, r.jsx)(c.DZT, {
                                        variant: "heading-xl/bold",
                                        className: j.R_,
                                        children: H,
                                    }),
                                    (0, r.jsx)(c.EYj, {
                                        variant: "text-md/medium",
                                        className: j.G3,
                                        children: V,
                                    }),
                                    k &&
                                        (0, r.jsx)(C.A, {
                                            className: j.L$,
                                        }),
                                    U &&
                                        D.total_rewarded_from_program > 0 &&
                                        (0, r.jsxs)("div", {
                                            className: j.fB,
                                            children: [
                                                (0, r.jsx)(c.EYj, {
                                                    variant: "text-md/medium",
                                                    className: j.G3,
                                                    children: y.intl.string(N.default["/1mWUn"]),
                                                }),
                                                (0, r.jsx)(c.Cp8, {
                                                    size: "sm",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(c.EYj, {
                                                    variant: "text-md/medium",
                                                    className: j.G3,
                                                    children: D.total_rewarded_from_program,
                                                }),
                                            ],
                                        }),
                                    (0, r.jsx)("div", {
                                        className: j.WT,
                                        children: (0, r.jsx)(c.e2v, {
                                            children: B,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        });
    };
