t.d(r, { jP: () => eN, Rf: () => ep, oK: () => eg, r6: () => ej, MR: () => ex });
var i,
    n = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(297264),
    d = t(17928),
    c = t(331322),
    u = t(821609),
    m = t(462887),
    x = t(834730),
    p = t(315629),
    h = t(939249),
    g = t(403581),
    j = t(736653),
    f = t(775602),
    v = t(793574),
    N = t(688810),
    C = t(287809),
    T = t(166403),
    E = t(158045),
    R = t(580630),
    A = t(526292),
    y = t(877624),
    _ = t(978656),
    b = t(508770),
    P = t(406810),
    I = t(951305),
    M = t(421108),
    S = t(807098),
    k = t(412260),
    G = t(753261),
    B = t(380619),
    D = t(80435);
function O(e) {
    let { title: r, body: t, image: i, badge: l, className: a } = e;
    return (0, n.jsxs)("div", {
        className: s()(D.kL, a),
        children: [
            null != i && (0, n.jsx)("div", { className: D.Sl, children: i }),
            (0, n.jsxs)("div", {
                className: D.Qs,
                children: [null != l && (0, n.jsx)("div", { className: D.oL, children: l }), r, t],
            }),
        ],
    });
}
var U = t(375708),
    w = t(197350);
function L() {
    let { claimableRewards: e } = (0, I.Pv)(),
        r = (0, d.bG)([k.A], () => {
            let e = k.A.getMarketingComponentByType(y.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, S.T)(r?.bannerAsset),
        i = (0, S.T)(r?.avatarAsset),
        l = r?.assetVariant === _.Y.LARGE_TILTED,
        a = (0, d.bG)([k.A], () => k.A.getGiftPromotion()),
        o = (0, M.dA)(a?.endDate),
        { enabled: c } = G.E.useConfig({ location: "PremiumBrandRefreshGiftPromotionElement" });
    if (null == r || null == e || 0 === e.length) return null;
    if (c) return (0, n.jsx)(H, { rewardImageUrl: i, countdownText: o, header: r.header, desktopBody: r.desktopBody });
    let u = (0, B.gc)(t),
        m = r?.gradient,
        p =
            null != m && null != m.colors && m.colors.length >= 2
                ? (0, B.K5)({ gradient: m.colors, angle: m.angle ?? void 0 })
                : void 0,
        h = (0, B.x)(u, p);
    return (0, n.jsxs)("div", {
        className: w.kL,
        style: h,
        children: [
            (0, n.jsxs)("div", {
                className: w.V_,
                children: [
                    (0, n.jsx)(x.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: U.intl.string(U.t.OEtqpm),
                    }),
                    (0, n.jsx)(x.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: U.intl.formatToPlainString(U.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)("div", {
                    className: w.R3,
                    children: (0, n.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(w.my, { [w.R_]: l }),
                    }),
                }),
        ],
    });
}
function H(e) {
    let { rewardImageUrl: r, countdownText: t, header: i, desktopBody: l } = e;
    return (0, n.jsx)("div", {
        className: w.KE,
        "data-panel-banner": "true",
        children: (0, n.jsx)(O, {
            image: null != r ? (0, n.jsx)("img", { className: w.L8, alt: "", src: r }) : void 0,
            badge:
                null != t ? (0, n.jsx)(b.E, { type: { text: t.toUpperCase() }, variant: "brand", icon: P.O }) : void 0,
            title: (0, n.jsx)(x.E, { variant: "text-md/medium", color: "text-default", children: i }),
            body: (0, n.jsx)(x.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        }),
    });
}
var F = t(724651),
    V = t(732280),
    K = t(862990),
    Y = t(35587),
    z = t(783420),
    W = t(204413),
    q = t(511484),
    $ = t(774774),
    Z = t(289873),
    X = t(97352),
    Q = t(795269),
    J = t(202541),
    ee = t(466919),
    er = t(184659),
    et = t(268514);
let ei = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i, isApplicationHome: l = !1 } = e,
        a = (0, d.bG)([X.A], () => X.A.get(J.gD.PREMIUM_GROUP_MONTH)),
        u = (0, q.N1)(J.gD.PREMIUM_GROUP_MONTH),
        p = (0, m.q)((0, j.Ay)());
    if (null == a) return (0, n.jsx)(Z.y, { type: Z.y.Type.PULSING_ELLIPSIS, className: et.xB });
    let h = (0, E.sS)(a, i, !1, r),
        g = J.WT.MONTH;
    if (null != t && null != u) {
        let e = t.discount.intervalCount;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("hr", { className: s()(er.vI, { [er.oE]: l }) }),
                (0, n.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, n.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: er.Yc,
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: l ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: U.intl.format(ee.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, n.jsx)(x.E, {
                                    variant: l ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: U.intl.format(ee.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(Q.R, {
                            text: U.intl.formatToPlainString(ee.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("hr", { className: s()(er.yF, { [er.oE]: l }) }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(x.E, {
                        variant: "heading-xxl/extrabold",
                        color: p ? "text-strong" : "text-overlay-light",
                        tag: "span",
                        children: h,
                    }),
                    (0, n.jsxs)(x.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, E.FJ)(g)],
                    }),
                ],
            }),
            (0, n.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: U.intl.string(ee.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: er.yF }),
        ],
    });
};
var en = t(860839),
    el = t(824069),
    ea = t(222719),
    es = t(88001),
    eo = t(984295),
    ed = t(232266),
    ec = t(243002),
    eu = t(241988);
function em(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, n.jsx)(c.B, { direction: "vertical", gap: 0, className: eo.tierCardStack, children: r })
        : (0, n.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: eo.tierCardStack,
              children: [
                  (0, n.jsx)(c.B, { direction: "vertical", gap: 0, className: eo.tierCardStackContent, children: r }),
                  (0, n.jsx)("div", { className: eo.footer, children: t }),
              ],
          });
}
function ex(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: c = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, d.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        p = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        h = (0, V.V)(),
        g = h?.subscription_trial?.sku_id,
        f = x?.hasActiveTrial ? p?.premiumType : null,
        v = (0, $.Lj)(f, g),
        N = null != v,
        E = (0, m.q)((0, j.Ay)()),
        R = u ? U.intl.string(U.t.tUbSDK) : U.intl.string(U.t["t9uG/o"]),
        A = (0, n.jsxs)(em, {
            footer: r,
            children: [
                N && (0, n.jsx)(Q.R, { text: v, className: eo.pill }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: E ? "text-strong" : "text-overlay-light",
                    className: eo.cardTitle,
                    children: R,
                }),
                (0, n.jsx)(ea.A, {
                    isGift: l,
                    premiumTier: J.PremiumTypes.TIER_0,
                    offerType: J.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === J.pe.TIER_0,
                    showYearlyPrice: t,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eo.priceHeader,
                }),
                (0, n.jsx)("hr", { className: eo.divider }),
                (0, n.jsx)(en.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        y = s()(eo.card, eo.tier0, i, { [eo.pillMargin]: !c && N });
    return (0, n.jsx)("div", { className: y, children: A });
}
var ep =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function eh(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, q.N1)(J.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, E.y8)(J.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, R.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == o
        ? null
        : (0, n.jsxs)("div", {
              className: eo.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: eo.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: U.intl.format(U.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(x.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: U.intl.format(U.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(Q.R, { text: U.intl.formatToPlainString(U.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function eg(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = en.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: c = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: v = !0,
            narrowLayout: N = !1,
        } = e,
        E = (0, d.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        R = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        y = (0, V.V)(),
        _ = y?.subscription_trial?.sku_id,
        b = E?.hasActiveTrial ? R?.premiumType : null,
        P = E?.planIdFromItems === J.gD.PREMIUM_YEAR_TIER_2,
        I = (0, F.O)(),
        M = (0, F.p)(),
        S = (0, A.k5)(),
        k = null != _ || null != b ? J.Vk.PREMIUM_TRIAL : null != I || S ? J.Vk.PREMIUM_DISCOUNT : null,
        G = (0, m.q)((0, j.Ay)()),
        B = null != M && !a,
        D = !a && null != I && (0, q.hm)(I),
        O = !a && S && P && k === J.Vk.PREMIUM_DISCOUNT,
        w = (0, $.rm)(S, b, a ? null : I, y, _),
        H = (0, Y.Sq)() && !a && null == k,
        K = null != r || x ? (0, n.jsxs)(n.Fragment, { children: [r, x && (0, n.jsx)(L, {})] }) : null,
        z = c && !a,
        W = (0, n.jsxs)(em, {
            footer: K,
            children: [
                f &&
                    !B &&
                    !O &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !D &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: ec, alt: "", className: s()(eo.bigCloud, eo[h]) }),
                                            (0, n.jsx)("img", {
                                                src: ed,
                                                alt: "",
                                                className: s()(eo.smallCloud, eo[h]),
                                            }),
                                        ],
                                    }),
                                (!D || null != r) &&
                                    (0, n.jsx)("img", {
                                        src: eu,
                                        alt: "",
                                        className: s()(eo.wumpus, eo[h], { [eo.withAnnualDiscountBanner]: D }),
                                    }),
                            ],
                        });
                    }, {}),
                v &&
                    !D &&
                    (0, n.jsx)(Q.R, {
                        text:
                            w ??
                            (H
                                ? U.intl.formatToPlainString(U.t["4SEnCZ"], { months: 1 })
                                : U.intl.string(U.t["6bEcYr"])),
                        className: eo.pill,
                    }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: G ? "text-strong" : "text-overlay-light",
                    className: eo.cardTitle,
                    children: U.intl.string(U.t.lG6a5x),
                }),
                (0, n.jsx)(ea.A, {
                    isGift: a,
                    premiumTier: J.PremiumTypes.TIER_2,
                    offerType: k,
                    offerTierMatchesCard: _ === J.pe.TIER_2 || (0, q.U9)(I, J.pe.TIER_2),
                    showYearlyPrice: t && !D,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eo.priceHeader,
                }),
                D
                    ? (0, n.jsx)(eh, { discountOffer: I, priceOptions: u, isGift: a, narrowLayout: N })
                    : (0, n.jsx)("hr", { className: eo.divider }),
                (0, n.jsx)(en.ZP, {
                    featureSet: i,
                    isModal: c,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        D || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : eo.firstFeatureItemContainer,
                }),
                z && (0, n.jsx)(el.K, {}),
            ],
        }),
        Z = s()(eo.card, l, { [eo.withGiftBanner]: x });
    return B
        ? (0, n.jsx)("div", { className: Z, children: W })
        : (0, n.jsx)(p.h, { color: "nitro-pink", className: Z, children: W });
}
function ej(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, j.Ay)()),
        d = (0, F.p)(),
        c = (0, n.jsxs)(em, {
            footer: t,
            children: [
                (0, n.jsxs)("div", {
                    className: eo.cardHeader,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: eo.cardTitle,
                            children: U.intl.string(ee.default.eSKiXk),
                        }),
                        (0, n.jsx)(Q.R, {
                            text: U.intl.string(U.t.oW0eUd),
                            className: eo.betaPill,
                            disableGradient: null != d,
                        }),
                    ],
                }),
                (0, n.jsx)(ei, { discountOffer: d, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(en.Lg, { isApplicationHome: i }),
            ],
        });
    return null != d
        ? (0, n.jsx)(p.h, { color: "nitro-pink", className: s()(eo.card, r), children: c })
        : (0, n.jsx)("div", { className: s()(eo.card, eo.borderGradient, r), children: c });
}
function ef(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: l, narrowLayout: a } = e,
        o = r === J.pe.TIER_2,
        d = (0, F.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, W.$)({
            subscriptionTier: r,
            variantOverride: o && null == d ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, n.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: s()(eo.tierCardStack, { [eo.premiumCardHover]: !t }),
            children: (0, n.jsx)(o ? eg : ex, {
                className: s()(eo.applicationHomeCard, { [eo.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: s()(eo.tierCardStack, l),
        children: p
            ? j
            : (0, n.jsx)(z.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: eo.tierCardStack, children: j });
                  },
              }),
    });
}
function ev(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, F.p)(),
        l =
            null != i
                ? U.intl.format(ee.default["7j70dP"], {
                      percent: i.discount?.amount,
                      premiumGroupProductName: (0, es.DP)(),
                  })
                : U.intl.string(U.t["2pG5Ga"]),
        a = (0, n.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: l,
            variant: null != i ? "expressive" : "secondary",
        }),
        o = (0, n.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: s()(eo.tierCardStack, { [eo.premiumCardHover]: !r }),
            children: (0, n.jsx)(ej, {
                className: s()(eo.applicationHomeCard, eo.narrow),
                ctaButton: a,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(z.A, {
        subscriptionTier: J.pe.TIER_2,
        initialPlanId: J.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, n.jsx)(c.B, {
                direction: "vertical",
                gap: 0,
                className: s()(eo.tierCardStack, t),
                children: (0, n.jsx)(h.D, { onClick: r, className: eo.tierCardStack, children: o }),
            });
        },
    });
}
function eN(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, N.Ay)(v.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, en.pw)(r),
        a = (0, d.bG)([f.Ay], () => f.Ay.useReducedMotion),
        c = (0, K.PA)();
    return (0, n.jsx)(N.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(eo.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: eo.premiumCardsHeader,
                    children: U.intl.string(U.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: eo.premiumCards,
                    children: [
                        (0, n.jsx)(ef, {
                            subscriptionTier: J.pe.TIER_0,
                            isReducedMotion: a,
                            className: eo.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, n.jsx)(ef, {
                            subscriptionTier: J.pe.TIER_2,
                            isReducedMotion: a,
                            className: eo.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, n.jsx)(ev, { isReducedMotion: a, className: eo.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
