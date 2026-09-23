r.d(t, { jP: () => eT, Rf: () => eh, oK: () => eg, r6: () => eA, MR: () => ep });
var n,
    i = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    o = r(297264),
    u = r(17928),
    c = r(331322),
    d = r(821609),
    m = r(462887),
    x = r(834730),
    p = r(315629),
    h = r(939249),
    f = r(403581),
    g = r(736653),
    A = r(775602),
    j = r(793574),
    E = r(688810),
    T = r(287809),
    I = r(166403),
    v = r(158045),
    R = r(580630),
    N = r(526292),
    P = r(877624),
    _ = r(508770),
    M = r(406810),
    y = r(951305),
    C = r(421108),
    S = r(240248),
    b = r(807098),
    O = r(412260),
    G = r(531536),
    L = r(805161),
    U = r(375708),
    D = r(951321);
function w() {
    let { claimableRewards: e } = (0, y.Pv)(),
        t = (0, u.bG)([O.A], () => {
            let e = O.A.getMarketingComponentByType(P.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, b.T)(t?.avatarAsset),
        n = (0, u.bG)([O.A], () => O.A.getGiftPromotion()),
        l = (0, C.dA)(n?.endDate);
    return null == t || null == e || 0 === e.length
        ? null
        : (0, i.jsx)(k, {
              rewardImageUrl: r,
              countdownText: l,
              header: (0, S.uJ)(t.header) ? U.intl.string(U.t.Ve9Ge6) : t.header,
              body: (0, S.uJ)(t.desktopBody) ? U.intl.string(L.default.zVGHbw) : t.desktopBody,
          });
}
function k(e) {
    let { rewardImageUrl: t, countdownText: r, header: n, body: l } = e;
    return (0, i.jsx)("div", {
        className: D.KE,
        "data-panel-banner": "true",
        children: (0, i.jsx)(G.W, {
            image: null != t ? (0, i.jsx)("img", { className: D.L8, alt: "", src: t }) : void 0,
            badge:
                null != r
                    ? (0, i.jsx)(_.E, { type: { text: r.toUpperCase() }, variant: "brand", icon: M.ClockIcon })
                    : void 0,
            title: (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: n }),
            body: (0, i.jsx)(x.E, { variant: "text-sm/medium", color: "text-strong", children: l }),
        }),
    });
}
var B = r(724651),
    F = r(732280),
    H = r(989790),
    V = r(35587),
    W = r(783420),
    z = r(204413),
    Y = r(511484),
    Z = r(774774),
    K = r(289873),
    q = r(626584),
    J = r(97352),
    $ = r(795269),
    X = r(202541),
    Q = r(259589),
    ee = r(12260),
    et = r(658859);
let er = new q.A("PremiumGroupPrice.tsx"),
    en = (0, i.jsx)(K.y, { type: K.y.Type.PULSING_ELLIPSIS, className: et.xB }),
    ei = function (e) {
        let t,
            { isGift: r = !1, discountOffer: n, priceOptions: l, isApplicationHome: s = !1 } = e,
            d = (0, u.bG)([J.A], () => J.A.get(X.gD.PREMIUM_GROUP_MONTH)),
            p = (0, Y.N1)(X.gD.PREMIUM_GROUP_MONTH),
            h = (0, m.q)((0, g.Ay)());
        if (null == d) return en;
        try {
            t = (0, v.sS)(d, l, !1, r, !1);
        } catch {
            return (er.warn(`No price available for plan ${d.id} in currency ${l?.currency ?? "unknown"}`), en);
        }
        let f = X.WT.MONTH;
        if (null != n && null != p) {
            let e = n.discount.intervalCount;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("hr", { className: a()(ee.vI, { [ee.oE]: s }) }),
                    (0, i.jsxs)(c.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, i.jsxs)(c.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: ee.Yc,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: U.intl.format(Q.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, i.jsx)(x.E, {
                                        variant: s ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: U.intl.format(Q.default["4b2ByP"], { regularPrice: t }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)($.R, {
                                text: U.intl.formatToPlainString(Q.default.GEwdVw, {
                                    percent: n.discount.amount,
                                    discountOfferAmount: n.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("hr", { className: a()(ee.yF, { [ee.oE]: s }) }),
                ],
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(x.E, {
                            variant: "heading-xxl/extrabold",
                            color: h ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: t,
                        }),
                        (0, i.jsxs)(x.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, v.FJ)(f)],
                        }),
                    ],
                }),
                (0, i.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: U.intl.string(Q.default["R+dzZw"]),
                }),
                (0, i.jsx)("hr", { className: ee.yF }),
            ],
        });
    };
var el = r(543213),
    es = r(824069),
    ea = r(222719),
    eo = r(88001),
    eu = r(174788),
    ec = r(232266),
    ed = r(243002),
    em = r(241988);
function ex(e) {
    let { children: t, footer: r } = e;
    return null == r
        ? (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: eu.tierCardStack, children: t })
        : (0, i.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: eu.tierCardStack,
              children: [
                  (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: eu.tierCardStackContent, children: t }),
                  (0, i.jsx)("div", { className: eu.footer, children: r }),
              ],
          });
}
function ep(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: n,
            isGift: l = !1,
            priceOptions: s,
            isApplicationHome: c = !1,
            useShortTitle: d = !1,
        } = e,
        x = (0, u.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        p = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        h = (0, F.V)(),
        f = h?.subscriptionTrial?.skuId,
        A = x?.hasActiveTrial ? p?.premiumType : null,
        j = (0, Z.Lj)(A, f),
        E = null != j,
        v = (0, m.q)((0, g.Ay)()),
        R = d ? U.intl.string(U.t.tUbSDK) : U.intl.string(U.t["t9uG/o"]),
        N = (0, i.jsxs)(ex, {
            footer: t,
            children: [
                E && (0, i.jsx)($.R, { text: j, className: eu.pill }),
                (0, i.jsx)(o.D, {
                    variant: "nitro-md",
                    color: v ? "text-strong" : "text-overlay-light",
                    className: eu.cardTitle,
                    children: R,
                }),
                (0, i.jsx)(ea.A, {
                    isGift: l,
                    premiumTier: X.PremiumTypes.TIER_0,
                    offerType: X.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === X.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: s,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eu.priceHeader,
                }),
                (0, i.jsx)("hr", { className: eu.divider }),
                (0, i.jsx)(el.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        P = a()(eu.card, eu.tier0, n, { [eu.pillMargin]: !c && E });
    return (0, i.jsx)("div", { className: P, children: N });
}
var eh =
    (((n = {}).IN_CARD = "inCard"),
    (n.OUTER_CORNER = "outerCorner"),
    (n.INSIDE_CORNER = "insideCorner"),
    (n.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    n);
function ef(e) {
    let { discountOffer: t, priceOptions: r, isGift: n, narrowLayout: s = !1 } = e,
        a = (0, Y.N1)(X.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, v.y8)(X.gD.PREMIUM_YEAR_TIER_2, !1, n, r);
                return (0, R.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [n, r]);
    return null == a || null == o
        ? null
        : (0, i.jsxs)("div", {
              className: eu.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: eu.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: s ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: U.intl.format(U.t["TCFNZ/"], { discountedPrice: a }),
                          }),
                          (0, i.jsx)(x.E, {
                              variant: s ? "text-xs/normal" : "text-sm/normal",
                              children: U.intl.format(U.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, i.jsx)($.R, { text: U.intl.formatToPlainString(U.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function eg(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: n = el.Nz.DEFAULT,
            className: l,
            isGift: s = !1,
            isModal: c = !1,
            priceOptions: d,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: f = !1,
            showWumpus: A = !0,
            showPill: j = !0,
            narrowLayout: E = !1,
        } = e,
        v = (0, u.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        R = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        P = (0, F.V)(),
        _ = P?.subscriptionTrial?.skuId,
        M = v?.hasActiveTrial ? R?.premiumType : null,
        y = v?.planIdFromItems === X.gD.PREMIUM_YEAR_TIER_2,
        C = (0, B.O)(),
        S = (0, B.p)(),
        b = (0, N.k5)(),
        O = null != _ || null != M ? X.Vk.PREMIUM_TRIAL : null != C || b ? X.Vk.PREMIUM_DISCOUNT : null,
        G = (0, m.q)((0, g.Ay)()),
        L = null != S && !s,
        D = !s && null != C && (0, Y.hm)(C),
        k = !s && b && y && O === X.Vk.PREMIUM_DISCOUNT,
        H = (0, Z.rm)(b, M, s ? null : C, P, _),
        W = (0, V.Sq)() && !s && null == O,
        z = null != t || x ? (0, i.jsxs)(i.Fragment, { children: [t, x && (0, i.jsx)(w, {})] }) : null,
        K = c && !s,
        q = (0, i.jsxs)(ex, {
            footer: z,
            children: [
                A &&
                    !L &&
                    !k &&
                    (0, i.jsx)(function () {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                !D &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: ed, alt: "", className: a()(eu.bigCloud, eu[h]) }),
                                            (0, i.jsx)("img", {
                                                src: ec,
                                                alt: "",
                                                className: a()(eu.smallCloud, eu[h]),
                                            }),
                                        ],
                                    }),
                                (!D || null != t) &&
                                    (0, i.jsx)("img", {
                                        src: em,
                                        alt: "",
                                        className: a()(eu.wumpus, eu[h], { [eu.withAnnualDiscountBanner]: D }),
                                    }),
                            ],
                        });
                    }, {}),
                j &&
                    !D &&
                    (0, i.jsx)($.R, {
                        text:
                            H ??
                            (W
                                ? U.intl.formatToPlainString(U.t["4SEnCZ"], { months: 1 })
                                : U.intl.string(U.t["6bEcYr"])),
                        className: eu.pill,
                    }),
                (0, i.jsx)(o.D, {
                    variant: "nitro-md",
                    color: G ? "text-strong" : "text-overlay-light",
                    className: eu.cardTitle,
                    children: U.intl.string(U.t.lG6a5x),
                }),
                (0, i.jsx)(ea.A, {
                    isGift: s,
                    premiumTier: X.PremiumTypes.TIER_2,
                    offerType: O,
                    offerTierMatchesCard: _ === X.pe.TIER_2 || (0, Y.U9)(C, X.pe.TIER_2),
                    showYearlyPrice: r && !D,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eu.priceHeader,
                }),
                D
                    ? (0, i.jsx)(ef, { discountOffer: C, priceOptions: d, isGift: s, narrowLayout: E })
                    : (0, i.jsx)("hr", { className: eu.divider }),
                (0, i.jsx)(el.ZP, {
                    featureSet: n,
                    isModal: c,
                    isGift: s,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: f,
                    firstFeatureItemClassName:
                        D || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : eu.firstFeatureItemContainer,
                }),
                K && (0, i.jsx)(es.K, {}),
            ],
        }),
        J = a()(eu.card, l, { [eu.withGiftBanner]: x });
    return L
        ? (0, i.jsx)("div", { className: J, children: q })
        : (0, i.jsx)(p.h, { color: "nitro-pink", className: J, children: q });
}
function eA(e) {
    let { className: t, ctaButton: r, isApplicationHome: n, priceOptions: l } = e,
        s = (0, m.q)((0, g.Ay)()),
        u = (0, B.p)(),
        c = (0, i.jsxs)(ex, {
            footer: r,
            children: [
                (0, i.jsxs)("div", {
                    className: eu.cardHeader,
                    children: [
                        (0, i.jsx)(o.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: eu.cardTitle,
                            children: U.intl.string(Q.default.eSKiXk),
                        }),
                        (0, i.jsx)($.R, {
                            text: U.intl.string(U.t.oW0eUd),
                            className: eu.betaPill,
                            disableGradient: null != u,
                        }),
                    ],
                }),
                (0, i.jsx)(ei, { discountOffer: u, priceOptions: l, isApplicationHome: n }),
                (0, i.jsx)(el.Lg, { isApplicationHome: n }),
            ],
        });
    return null != u
        ? (0, i.jsx)(p.h, { color: "nitro-pink", className: a()(eu.card, t), children: c })
        : (0, i.jsx)("div", { className: a()(eu.card, eu.borderGradient, t), children: c });
}
function ej(e) {
    let { subscriptionTier: t, isReducedMotion: r, tierCardProps: n, className: l, narrowLayout: s } = e,
        o = t === X.pe.TIER_2,
        u = (0, B.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, z.$)({
            subscriptionTier: t,
            variantOverride: o && null == u ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        f = (0, i.jsx)(d.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        g = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: a()(eu.tierCardStack, { [eu.premiumCardHover]: !r }),
            children: (0, i.jsx)(o ? eg : ep, {
                className: a()(eu.applicationHomeCard, { [eu.narrow]: s }),
                ctaButton: f,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...n,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: a()(eu.tierCardStack, l),
        children: p
            ? g
            : (0, i.jsx)(W.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(h.D, { onClick: t, className: eu.tierCardStack, children: g });
                  },
              }),
    });
}
function eE(e) {
    let { isReducedMotion: t, className: r } = e,
        n = (0, B.p)(),
        l = null != n,
        s = (0, u.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        o = null != s && (0, v.Nc)(s),
        m = l
            ? U.intl.format(Q.default["7j70dP"], { percent: n.discount?.amount, premiumGroupProductName: (0, eo.DP)() })
            : U.intl.string(U.t["2pG5Ga"]),
        x = (0, i.jsx)(d.$, {
            size: "md",
            fullWidth: !0,
            icon: f.t,
            text: m,
            variant: null != n ? "expressive" : "secondary",
            disabled: o,
        }),
        p = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: a()(eu.tierCardStack, { [eu.premiumCardHover]: !t }),
            children: (0, i.jsx)(eA, {
                className: a()(eu.applicationHomeCard, eu.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: a()(eu.tierCardStack, r),
        children: o
            ? p
            : (0, i.jsx)(W.A, {
                  subscriptionTier: X.pe.TIER_2,
                  initialPlanId: X.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(h.D, { onClick: t, className: eu.tierCardStack, children: p });
                  },
              }),
    });
}
function eT(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: n } = (0, E.Ay)(j.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, el.pw)(t),
        s = (0, u.bG)([A.Ay], () => A.Ay.useReducedMotion),
        c = (0, H.PA)();
    return (0, i.jsx)(E.f5, {
        value: n,
        children: (0, i.jsxs)("div", {
            className: a()(eu.premiumCardsContainer, r),
            children: [
                (0, i.jsx)(o.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: eu.premiumCardsHeader,
                    children: U.intl.string(U.t.vLz3Zs),
                }),
                (0, i.jsxs)("div", {
                    ref: l,
                    className: eu.premiumCards,
                    children: [
                        (0, i.jsx)(ej, {
                            subscriptionTier: X.pe.TIER_0,
                            isReducedMotion: s,
                            className: eu.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, i.jsx)(ej, {
                            subscriptionTier: X.pe.TIER_2,
                            isReducedMotion: s,
                            className: eu.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, i.jsx)(eE, { isReducedMotion: s, className: eu.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
