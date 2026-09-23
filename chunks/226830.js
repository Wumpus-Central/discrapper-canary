r.d(t, { jP: () => eE, Rf: () => ep, oK: () => ef, r6: () => eg, MR: () => ex });
var n,
    i = r(477900),
    l = r(582128),
    a = r(503698),
    s = r.n(a),
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
    L = r(375708),
    U = r(951321);
function D() {
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
        : (0, i.jsx)(w, {
              rewardImageUrl: r,
              countdownText: l,
              header: (0, S.uJ)(t.header) ? L.intl.string(L.t.OEtqpm) : t.header,
              body: (0, S.uJ)(t.desktopBody)
                  ? L.intl.formatToPlainString(L.t["2h5M+X"], { availableCount: e.length })
                  : t.desktopBody,
          });
}
function w(e) {
    let { rewardImageUrl: t, countdownText: r, header: n, body: l } = e;
    return (0, i.jsx)("div", {
        className: U.KE,
        "data-panel-banner": "true",
        children: (0, i.jsx)(G.W, {
            image: null != t ? (0, i.jsx)("img", { className: U.L8, alt: "", src: t }) : void 0,
            badge:
                null != r
                    ? (0, i.jsx)(_.E, { type: { text: r.toUpperCase() }, variant: "brand", icon: M.ClockIcon })
                    : void 0,
            title: (0, i.jsx)(x.E, { variant: "text-md/medium", color: "text-default", children: n }),
            body: (0, i.jsx)(x.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        }),
    });
}
var k = r(724651),
    B = r(732280),
    F = r(989790),
    H = r(35587),
    V = r(783420),
    W = r(204413),
    z = r(511484),
    Y = r(774774),
    Z = r(289873),
    q = r(626584),
    K = r(97352),
    J = r(795269),
    $ = r(202541),
    X = r(148155),
    Q = r(12260),
    ee = r(658859);
let et = new q.A("PremiumGroupPrice.tsx"),
    er = (0, i.jsx)(Z.y, { type: Z.y.Type.PULSING_ELLIPSIS, className: ee.xB }),
    en = function (e) {
        let t,
            { isGift: r = !1, discountOffer: n, priceOptions: l, isApplicationHome: a = !1 } = e,
            d = (0, u.bG)([K.A], () => K.A.get($.gD.PREMIUM_GROUP_MONTH)),
            p = (0, z.N1)($.gD.PREMIUM_GROUP_MONTH),
            h = (0, m.q)((0, g.Ay)());
        if (null == d) return er;
        try {
            t = (0, v.sS)(d, l, !1, r, !1);
        } catch {
            return (et.warn(`No price available for plan ${d.id} in currency ${l?.currency ?? "unknown"}`), er);
        }
        let f = $.WT.MONTH;
        if (null != n && null != p) {
            let e = n.discount.intervalCount;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("hr", { className: s()(Q.vI, { [Q.oE]: a }) }),
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
                                className: Q.Yc,
                                children: [
                                    (0, i.jsx)(o.D, {
                                        variant: a ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: L.intl.format(X.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, i.jsx)(x.E, {
                                        variant: a ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: L.intl.format(X.default["4b2ByP"], { regularPrice: t }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(J.R, {
                                text: L.intl.formatToPlainString(X.default.GEwdVw, {
                                    percent: n.discount.amount,
                                    discountOfferAmount: n.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("hr", { className: s()(Q.yF, { [Q.oE]: a }) }),
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
                    children: L.intl.string(X.default["R+dzZw"]),
                }),
                (0, i.jsx)("hr", { className: Q.yF }),
            ],
        });
    };
var ei = r(543213),
    el = r(824069),
    ea = r(222719),
    es = r(88001),
    eo = r(174788),
    eu = r(232266),
    ec = r(243002),
    ed = r(241988);
function em(e) {
    let { children: t, footer: r } = e;
    return null == r
        ? (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: eo.tierCardStack, children: t })
        : (0, i.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: eo.tierCardStack,
              children: [
                  (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: eo.tierCardStackContent, children: t }),
                  (0, i.jsx)("div", { className: eo.footer, children: r }),
              ],
          });
}
function ex(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            className: n,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: c = !1,
            useShortTitle: d = !1,
        } = e,
        x = (0, u.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        p = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        h = (0, B.V)(),
        f = h?.subscriptionTrial?.skuId,
        A = x?.hasActiveTrial ? p?.premiumType : null,
        j = (0, Y.Lj)(A, f),
        E = null != j,
        v = (0, m.q)((0, g.Ay)()),
        R = d ? L.intl.string(L.t.tUbSDK) : L.intl.string(L.t["t9uG/o"]),
        N = (0, i.jsxs)(em, {
            footer: t,
            children: [
                E && (0, i.jsx)(J.R, { text: j, className: eo.pill }),
                (0, i.jsx)(o.D, {
                    variant: "nitro-md",
                    color: v ? "text-strong" : "text-overlay-light",
                    className: eo.cardTitle,
                    children: R,
                }),
                (0, i.jsx)(ea.A, {
                    isGift: l,
                    premiumTier: $.PremiumTypes.TIER_0,
                    offerType: $.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: f === $.pe.TIER_0,
                    showYearlyPrice: r,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eo.priceHeader,
                }),
                (0, i.jsx)("hr", { className: eo.divider }),
                (0, i.jsx)(ei.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        P = s()(eo.card, eo.tier0, n, { [eo.pillMargin]: !c && E });
    return (0, i.jsx)("div", { className: P, children: N });
}
var ep =
    (((n = {}).IN_CARD = "inCard"),
    (n.OUTER_CORNER = "outerCorner"),
    (n.INSIDE_CORNER = "insideCorner"),
    (n.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    n);
function eh(e) {
    let { discountOffer: t, priceOptions: r, isGift: n, narrowLayout: a = !1 } = e,
        s = (0, z.N1)($.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, v.y8)($.gD.PREMIUM_YEAR_TIER_2, !1, n, r);
                return (0, R.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [n, r]);
    return null == s || null == o
        ? null
        : (0, i.jsxs)("div", {
              className: eo.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: eo.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(x.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: L.intl.format(L.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, i.jsx)(x.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: L.intl.format(L.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(J.R, { text: L.intl.formatToPlainString(L.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function ef(e) {
    let {
            ctaButton: t,
            showYearlyPrice: r,
            featureSet: n = ei.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
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
        P = (0, B.V)(),
        _ = P?.subscriptionTrial?.skuId,
        M = v?.hasActiveTrial ? R?.premiumType : null,
        y = v?.planIdFromItems === $.gD.PREMIUM_YEAR_TIER_2,
        C = (0, k.O)(),
        S = (0, k.p)(),
        b = (0, N.k5)(),
        O = null != _ || null != M ? $.Vk.PREMIUM_TRIAL : null != C || b ? $.Vk.PREMIUM_DISCOUNT : null,
        G = (0, m.q)((0, g.Ay)()),
        U = null != S && !a,
        w = !a && null != C && (0, z.hm)(C),
        F = !a && b && y && O === $.Vk.PREMIUM_DISCOUNT,
        V = (0, Y.rm)(b, M, a ? null : C, P, _),
        W = (0, H.Sq)() && !a && null == O,
        Z = null != t || x ? (0, i.jsxs)(i.Fragment, { children: [t, x && (0, i.jsx)(D, {})] }) : null,
        q = c && !a,
        K = (0, i.jsxs)(em, {
            footer: Z,
            children: [
                A &&
                    !U &&
                    !F &&
                    (0, i.jsx)(function () {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                !w &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: ec, alt: "", className: s()(eo.bigCloud, eo[h]) }),
                                            (0, i.jsx)("img", {
                                                src: eu,
                                                alt: "",
                                                className: s()(eo.smallCloud, eo[h]),
                                            }),
                                        ],
                                    }),
                                (!w || null != t) &&
                                    (0, i.jsx)("img", {
                                        src: ed,
                                        alt: "",
                                        className: s()(eo.wumpus, eo[h], { [eo.withAnnualDiscountBanner]: w }),
                                    }),
                            ],
                        });
                    }, {}),
                j &&
                    !w &&
                    (0, i.jsx)(J.R, {
                        text:
                            V ??
                            (W
                                ? L.intl.formatToPlainString(L.t["4SEnCZ"], { months: 1 })
                                : L.intl.string(L.t["6bEcYr"])),
                        className: eo.pill,
                    }),
                (0, i.jsx)(o.D, {
                    variant: "nitro-md",
                    color: G ? "text-strong" : "text-overlay-light",
                    className: eo.cardTitle,
                    children: L.intl.string(L.t.lG6a5x),
                }),
                (0, i.jsx)(ea.A, {
                    isGift: a,
                    premiumTier: $.PremiumTypes.TIER_2,
                    offerType: O,
                    offerTierMatchesCard: _ === $.pe.TIER_2 || (0, z.U9)(C, $.pe.TIER_2),
                    showYearlyPrice: r && !w,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eo.priceHeader,
                }),
                w
                    ? (0, i.jsx)(eh, { discountOffer: C, priceOptions: d, isGift: a, narrowLayout: E })
                    : (0, i.jsx)("hr", { className: eo.divider }),
                (0, i.jsx)(ei.ZP, {
                    featureSet: n,
                    isModal: c,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: f,
                    firstFeatureItemClassName:
                        w || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : eo.firstFeatureItemContainer,
                }),
                q && (0, i.jsx)(el.K, {}),
            ],
        }),
        X = s()(eo.card, l, { [eo.withGiftBanner]: x });
    return U
        ? (0, i.jsx)("div", { className: X, children: K })
        : (0, i.jsx)(p.h, { color: "nitro-pink", className: X, children: K });
}
function eg(e) {
    let { className: t, ctaButton: r, isApplicationHome: n, priceOptions: l } = e,
        a = (0, m.q)((0, g.Ay)()),
        u = (0, k.p)(),
        c = (0, i.jsxs)(em, {
            footer: r,
            children: [
                (0, i.jsxs)("div", {
                    className: eo.cardHeader,
                    children: [
                        (0, i.jsx)(o.D, {
                            variant: "nitro-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: eo.cardTitle,
                            children: L.intl.string(X.default.eSKiXk),
                        }),
                        (0, i.jsx)(J.R, {
                            text: L.intl.string(L.t.oW0eUd),
                            className: eo.betaPill,
                            disableGradient: null != u,
                        }),
                    ],
                }),
                (0, i.jsx)(en, { discountOffer: u, priceOptions: l, isApplicationHome: n }),
                (0, i.jsx)(ei.Lg, { isApplicationHome: n }),
            ],
        });
    return null != u
        ? (0, i.jsx)(p.h, { color: "nitro-pink", className: s()(eo.card, t), children: c })
        : (0, i.jsx)("div", { className: s()(eo.card, eo.borderGradient, t), children: c });
}
function eA(e) {
    let { subscriptionTier: t, isReducedMotion: r, tierCardProps: n, className: l, narrowLayout: a } = e,
        o = t === $.pe.TIER_2,
        u = (0, k.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, W.$)({
            subscriptionTier: t,
            variantOverride: o && null == u ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        f = (0, i.jsx)(d.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        g = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: s()(eo.tierCardStack, { [eo.premiumCardHover]: !r }),
            children: (0, i.jsx)(o ? ef : ex, {
                className: s()(eo.applicationHomeCard, { [eo.narrow]: a }),
                ctaButton: f,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...n,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: s()(eo.tierCardStack, l),
        children: p
            ? g
            : (0, i.jsx)(V.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(h.D, { onClick: t, className: eo.tierCardStack, children: g });
                  },
              }),
    });
}
function ej(e) {
    let { isReducedMotion: t, className: r } = e,
        n = (0, k.p)(),
        l = null != n,
        a = (0, u.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        o = null != a && (0, v.Nc)(a),
        m = l
            ? L.intl.format(X.default["7j70dP"], { percent: n.discount?.amount, premiumGroupProductName: (0, es.DP)() })
            : L.intl.string(L.t["2pG5Ga"]),
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
            className: s()(eo.tierCardStack, { [eo.premiumCardHover]: !t }),
            children: (0, i.jsx)(eg, {
                className: s()(eo.applicationHomeCard, eo.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: s()(eo.tierCardStack, r),
        children: o
            ? p
            : (0, i.jsx)(V.A, {
                  subscriptionTier: $.pe.TIER_2,
                  initialPlanId: $.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(h.D, { onClick: t, className: eo.tierCardStack, children: p });
                  },
              }),
    });
}
function eE(e) {
    let { innerRef: t, className: r } = e,
        { analyticsLocations: n } = (0, E.Ay)(j.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, ei.pw)(t),
        a = (0, u.bG)([A.Ay], () => A.Ay.useReducedMotion),
        c = (0, F.PA)();
    return (0, i.jsx)(E.f5, {
        value: n,
        children: (0, i.jsxs)("div", {
            className: s()(eo.premiumCardsContainer, r),
            children: [
                (0, i.jsx)(o.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: eo.premiumCardsHeader,
                    children: L.intl.string(L.t.vLz3Zs),
                }),
                (0, i.jsxs)("div", {
                    ref: l,
                    className: eo.premiumCards,
                    children: [
                        (0, i.jsx)(eA, {
                            subscriptionTier: $.pe.TIER_0,
                            isReducedMotion: a,
                            className: eo.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, i.jsx)(eA, {
                            subscriptionTier: $.pe.TIER_2,
                            isReducedMotion: a,
                            className: eo.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, i.jsx)(ej, { isReducedMotion: a, className: eo.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
