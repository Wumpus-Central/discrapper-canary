r.d(t, { jP: () => ev, Rf: () => eh, oK: () => eg, r6: () => ej, MR: () => ep });
var i,
    n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    o = r(297264),
    c = r(17928),
    d = r(331322),
    u = r(821609),
    m = r(462887),
    x = r(834730),
    p = r(315629),
    h = r(939249),
    f = r(403581),
    g = r(736653),
    j = r(775602),
    A = r(793574),
    N = r(688810),
    v = r(287809),
    E = r(166403),
    C = r(158045),
    R = r(580630),
    T = r(526292),
    P = r(877624),
    y = r(508770),
    I = r(406810),
    b = r(951305),
    _ = r(421108),
    M = r(240248),
    S = r(807098),
    w = r(412260),
    O = r(531536),
    G = r(341535),
    L = r(375708),
    k = r(951321);
function D() {
    let { claimableRewards: e } = (0, b.Pv)(),
        t = (0, c.bG)([w.A], () => {
            let e = w.A.getMarketingComponentByType(P.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, S.T)(t?.avatarAsset),
        i = (0, c.bG)([w.A], () => w.A.getGiftPromotion()),
        l = (0, _.dA)(i?.endDate);
    return null == t || null == e || 0 === e.length
        ? null
        : (0, n.jsx)(B, {
              rewardImageUrl: r,
              countdownText: l,
              header: (0, M.uJ)(t.header) ? L.intl.string(L.t.Ve9Ge6) : t.header,
              body: (0, M.uJ)(t.desktopBody) ? L.intl.string(G.default.zVGHbw) : t.desktopBody,
          });
}
function B(e) {
    let { rewardImageUrl: t, countdownText: r, header: i, body: l } = e;
    return (0, n.jsx)("div", {
        className: k.KE,
        "data-panel-banner": "true",
        children: (0, n.jsx)(O.W, {
            image: null != t ? (0, n.jsx)("img", { className: k.L8, alt: "", src: t }) : void 0,
            badge:
                null != r
                    ? (0, n.jsx)(y.E, { type: { text: r.toUpperCase() }, variant: "brand", icon: I.ClockIcon })
                    : void 0,
            title: (0, n.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: i }),
            body: (0, n.jsx)(x.E, { variant: "text-sm/medium", color: "text-strong", children: l }),
        }),
    });
}
var U = r(724651),
    F = r(732280),
    H = r(989790),
    z = r(35587),
    V = r(783420),
    Z = r(204413),
    K = r(511484),
    W = r(774774),
    Y = r(289873),
    q = r(626584),
    $ = r(97352),
    J = r(795269),
    X = r(202541),
    Q = r(148155),
    ee = r(12260),
    et = r(658859);
let er = new q.A("PremiumGroupPrice.tsx"),
    ei = (0, n.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS, className: et.xB }),
    en = function (e) {
        let t,
            { isGift: r = !1, discountOffer: i, priceOptions: l, isApplicationHome: s = !1 } = e,
            u = (0, c.bG)([$.A], () => $.A.get(X.gD.PREMIUM_GROUP_MONTH)),
            p = (0, K.N1)(X.gD.PREMIUM_GROUP_MONTH),
            h = (0, m.q)((0, g.Ay)());
        if (null == u) return ei;
        try {
            t = (0, C.sS)(u, l, !1, r, !1);
        } catch {
            return (er.warn(`No price available for plan ${u.id} in currency ${l?.currency ?? "unknown"}`), ei);
        }
        let f = X.WT.MONTH;
        if (null != i && null != p) {
            let e = i.discount.intervalCount;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("hr", { className: a()(ee.vI, { [ee.oE]: s }) }),
                    (0, n.jsxs)(d.B, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        gap: 12,
                        fullWidth: !1,
                        children: [
                            (0, n.jsxs)(d.B, {
                                direction: "vertical",
                                gap: 4,
                                fullWidth: !1,
                                className: ee.Yc,
                                children: [
                                    (0, n.jsx)(o.D, {
                                        variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: L.intl.format(Q.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, n.jsx)(x.E, {
                                        variant: s ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: L.intl.format(Q.default["4b2ByP"], { regularPrice: t }),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(J.R, {
                                text: L.intl.formatToPlainString(Q.default.GEwdVw, {
                                    percent: i.discount.amount,
                                    discountOfferAmount: i.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("hr", { className: a()(ee.yF, { [ee.oE]: s }) }),
                ],
            });
        }
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(x.E, {
                            variant: "heading-xxl/extrabold",
                            color: h ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: t,
                        }),
                        (0, n.jsxs)(x.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, C.FJ)(f)],
                        }),
                    ],
                }),
                (0, n.jsx)(o.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: L.intl.string(Q.default["R+dzZw"]),
                }),
                (0, n.jsx)("hr", { className: ee.yF }),
            ],
        });
    };
var el = r(297346),
    es = r(824069),
    ea = r(222719),
    eo = r(88001),
    ec = r(174788),
    ed = r(232266),
    eu = r(243002),
    em = r(241988);
function ex(e) {
    let { children: t, footer: r } = e;
    return null == r
        ? (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: ec.tierCardStack, children: t })
        : (0, n.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: ec.tierCardStack,
              children: [
                  (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: ec.tierCardStackContent, children: t }),
                  (0, n.jsx)("div", { className: ec.footer, children: r }),
              ],
          });
}
function ep(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: i,
            isGift: l = !1,
            priceOptions: s,
            isApplicationHome: d = !1,
            useShortTitle: u = !1,
        } = e,
        x = (0, c.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        p = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        h = (0, F.V)(),
        f = h?.subscriptionTrial?.skuId,
        j = x?.hasActiveTrial ? p?.premiumType : null,
        A = (0, W.Lj)(j, f),
        N = null != A,
        C = (0, m.q)((0, g.Ay)()),
        R = u ? L.intl.string(L.t.tUbSDK) : L.intl.string(L.t["t9uG/o"]),
        T = (0, n.jsxs)(ex, {
            footer: t,
            children: [
                N && (0, n.jsx)(J.R, { text: A, className: ec.pill }),
                (0, n.jsx)(o.D, {
                    variant: "nitro-md",
                    color: C ? "text-strong" : "text-overlay-light",
                    className: ec.cardTitle,
                    children: R,
                }),
                (0, n.jsx)(ea.A, {
                    isGift: l,
                    premiumTier: X.PremiumTypes.TIER_0,
                    offerType: X.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === X.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: s,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ec.priceHeader,
                }),
                (0, n.jsx)("hr", { className: ec.divider }),
                (0, n.jsx)(el.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        P = a()(ec.card, ec.tier0, i, { [ec.pillMargin]: !d && N });
    return (0, n.jsx)("div", { className: P, children: T });
}
var eh =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function ef(e) {
    let { discountOffer: t, priceOptions: r, isGift: i, narrowLayout: s = !1 } = e,
        a = (0, K.N1)(X.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, C.y8)(X.gD.PREMIUM_YEAR_TIER_2, !1, i, r);
                return (0, R.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, r]);
    return null == a || null == o
        ? null
        : (0, n.jsxs)("div", {
              className: ec.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: ec.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(x.E, {
                              variant: s ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: L.intl.format(L.t["TCFNZ/"], { discountedPrice: a }),
                          }),
                          (0, n.jsx)(x.E, {
                              variant: s ? "text-xs/normal" : "text-sm/normal",
                              children: L.intl.format(L.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(J.R, { text: L.intl.formatToPlainString(L.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function eg(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: i = el.Nz.DEFAULT,
            className: l,
            isGift: s = !1,
            isModal: d = !1,
            priceOptions: u,
            showPromotionalGiftBanner: x = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: f = !1,
            showWumpus: j = !0,
            showPill: A = !0,
            narrowLayout: N = !1,
        } = e,
        C = (0, c.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        R = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        P = (0, F.V)(),
        y = P?.subscriptionTrial?.skuId,
        I = C?.hasActiveTrial ? R?.premiumType : null,
        b = C?.planIdFromItems === X.gD.PREMIUM_YEAR_TIER_2,
        _ = (0, U.O)(),
        M = (0, U.p)(),
        S = (0, T.k5)(),
        w = null != y || null != I ? X.Vk.PREMIUM_TRIAL : null != _ || S ? X.Vk.PREMIUM_DISCOUNT : null,
        O = (0, m.q)((0, g.Ay)()),
        G = null != M && !s,
        k = !s && null != _ && (0, K.hm)(_),
        B = !s && S && b && w === X.Vk.PREMIUM_DISCOUNT,
        H = (0, W.rm)(S, I, s ? null : _, P, y),
        V = (0, z.Sq)() && !s && null == w,
        Z = null != t || x ? (0, n.jsxs)(n.Fragment, { children: [t, x && (0, n.jsx)(D, {})] }) : null,
        Y = d && !s,
        q = (0, n.jsxs)(ex, {
            footer: Z,
            children: [
                j &&
                    !G &&
                    !B &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !k &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: eu, alt: "", className: a()(ec.bigCloud, ec[h]) }),
                                            (0, n.jsx)("img", {
                                                src: ed,
                                                alt: "",
                                                className: a()(ec.smallCloud, ec[h]),
                                            }),
                                        ],
                                    }),
                                (!k || null != t) &&
                                    (0, n.jsx)("img", {
                                        src: em,
                                        alt: "",
                                        className: a()(ec.wumpus, ec[h], { [ec.withAnnualDiscountBanner]: k }),
                                    }),
                            ],
                        });
                    }, {}),
                A &&
                    !k &&
                    (0, n.jsx)(J.R, {
                        text:
                            H ??
                            (V
                                ? L.intl.formatToPlainString(L.t["4SEnCZ"], { months: 1 })
                                : L.intl.string(L.t["6bEcYr"])),
                        className: ec.pill,
                    }),
                (0, n.jsx)(o.D, {
                    variant: "nitro-md",
                    color: O ? "text-strong" : "text-overlay-light",
                    className: ec.cardTitle,
                    children: L.intl.string(L.t.lG6a5x),
                }),
                (0, n.jsx)(ea.A, {
                    isGift: s,
                    premiumTier: X.PremiumTypes.TIER_2,
                    offerType: w,
                    offerTierMatchesCard: y === X.pe.TIER_2 || (0, K.U9)(_, X.pe.TIER_2),
                    showYearlyPrice: r && !k,
                    priceOptions: u,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: ec.priceHeader,
                }),
                k
                    ? (0, n.jsx)(ef, { discountOffer: _, priceOptions: u, isGift: s, narrowLayout: N })
                    : (0, n.jsx)("hr", { className: ec.divider }),
                (0, n.jsx)(el.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: s,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: f,
                    firstFeatureItemClassName:
                        k || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : ec.firstFeatureItemContainer,
                }),
                Y && (0, n.jsx)(es.K, {}),
            ],
        }),
        $ = a()(ec.card, l, { [ec.withGiftBanner]: x });
    return G
        ? (0, n.jsx)("div", { className: $, children: q })
        : (0, n.jsx)(p.h, { color: "nitro-pink", className: $, children: q });
}
function ej(e) {
    let { className: t, ctaButton: r, isApplicationHome: i, priceOptions: l } = e,
        s = (0, m.q)((0, g.Ay)()),
        c = (0, U.p)(),
        d = (0, n.jsxs)(ex, {
            footer: r,
            children: [
                (0, n.jsxs)("div", {
                    className: ec.cardHeader,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "nitro-md",
                            color: s ? "text-strong" : "text-overlay-light",
                            className: ec.cardTitle,
                            children: L.intl.string(Q.default.eSKiXk),
                        }),
                        (0, n.jsx)(J.R, {
                            text: L.intl.string(L.t.oW0eUd),
                            className: ec.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, n.jsx)(en, { discountOffer: c, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(el.Lg, { isApplicationHome: i }),
            ],
        });
    return null != c
        ? (0, n.jsx)(p.h, { color: "nitro-pink", className: a()(ec.card, t), children: d })
        : (0, n.jsx)("div", { className: a()(ec.card, ec.borderGradient, t), children: d });
}
function eA(e) {
    let { subscriptionTier: t, isReducedMotion: r, tierCardProps: i, className: l, narrowLayout: s } = e,
        o = t === X.pe.TIER_2,
        c = (0, U.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, Z.$)({
            subscriptionTier: t,
            variantOverride: o && null == c ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        f = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        g = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: a()(ec.tierCardStack, { [ec.premiumCardHover]: !r }),
            children: (0, n.jsx)(o ? eg : ep, {
                className: a()(ec.applicationHomeCard, { [ec.narrow]: s }),
                ctaButton: f,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: a()(ec.tierCardStack, l),
        children: p
            ? g
            : (0, n.jsx)(V.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(h.D, { onClick: t, className: ec.tierCardStack, children: g });
                  },
              }),
    });
}
function eN(e) {
    let { isReducedMotion: t, className: r } = e,
        i = (0, U.p)(),
        l = null != i,
        s = (0, c.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        o = null != s && (0, C.Nc)(s),
        m = l
            ? L.intl.format(Q.default["7j70dP"], { percent: i.discount?.amount, premiumGroupProductName: (0, eo.DP)() })
            : L.intl.string(L.t["2pG5Ga"]),
        x = (0, n.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: f.t,
            text: m,
            variant: null != i ? "expressive" : "secondary",
            disabled: o,
        }),
        p = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: a()(ec.tierCardStack, { [ec.premiumCardHover]: !t }),
            children: (0, n.jsx)(ej, {
                className: a()(ec.applicationHomeCard, ec.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: a()(ec.tierCardStack, r),
        children: o
            ? p
            : (0, n.jsx)(V.A, {
                  subscriptionTier: X.pe.TIER_2,
                  initialPlanId: X.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, n.jsx)(h.D, { onClick: t, className: ec.tierCardStack, children: p });
                  },
              }),
    });
}
function ev(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: i } = (0, N.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, el.pw)(t),
        s = (0, c.bG)([j.Ay], () => j.Ay.useReducedMotion),
        d = (0, H.PA)();
    return (0, n.jsx)(N.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: a()(ec.premiumCardsContainer, r),
            children: [
                (0, n.jsx)(o.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: ec.premiumCardsHeader,
                    children: L.intl.string(L.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: ec.premiumCards,
                    children: [
                        (0, n.jsx)(eA, {
                            subscriptionTier: X.pe.TIER_0,
                            isReducedMotion: s,
                            className: ec.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(eA, {
                            subscriptionTier: X.pe.TIER_2,
                            isReducedMotion: s,
                            className: ec.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(eN, { isReducedMotion: s, className: ec.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
