n.d(t, { r6: () => eo, MR: () => ei, oK: () => es, Rf: () => er });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(855986),
    u = n(331322),
    c = n(462887),
    d = n(534514),
    m = n(834730),
    p = n(315629),
    h = n(736653),
    C = n(287809),
    f = n(166403),
    E = n(448645),
    S = n(580630),
    g = n(526292),
    I = n(517352),
    y = n(805251),
    A = n(406810),
    P = n(418200),
    v = n(421108),
    x = n(240248),
    _ = n(807098),
    T = n(412260),
    b = n(860300),
    N = n(531536),
    j = n(792996),
    R = n(951321);
function O() {
    let { claimableRewards: e } = (0, P.Pv)(),
        { enabled: t } = b.J.useConfig({ location: "PremiumBrandRefreshGiftPromotionElement" }),
        n = (0, o.bG)(
            [T.A],
            () => T.A.getMarketingComponentBySurface(I.oW.GIFT_PLAN_SELECTION_CARD_BANNER)?.surface ?? null,
        ),
        l = (0, _.T)(n?.avatarAsset),
        r = (0, o.bG)([T.A], () => T.A.getGiftPromotion()),
        a = (0, v.dA)(r?.endDate, t);
    return null == n || null == e || 0 === e.length
        ? null
        : (0, i.jsx)(L, {
              rewardImageUrl: l,
              countdownText: a,
              header: (0, x.uJ)(n.header) ? j.intl.string(j.t.OEtqpm) : n.header,
              body: (0, x.uJ)(n.desktopBody)
                  ? j.intl.formatToPlainString(j.t["2h5M+X"], { availableCount: e.length })
                  : n.desktopBody,
          });
}
function L(e) {
    let { rewardImageUrl: t, countdownText: n, header: l, body: r } = e;
    return (0, i.jsx)("div", {
        className: R.KE,
        "data-panel-banner": "true",
        children: (0, i.jsx)(N.W, {
            image: null != t ? (0, i.jsx)("img", { className: R.L8, alt: "", src: t }) : void 0,
            badge:
                null != n
                    ? (0, i.jsx)(y.E, { type: { text: n.toUpperCase() }, variant: "primary", icon: A.ClockIcon })
                    : void 0,
            textGroupClassName: R.RI,
            title: (0, i.jsx)(m.E, { variant: "body-md/medium", color: "text-default", children: l }),
            body: (0, i.jsx)(m.E, { variant: "body-sm/medium", color: "text-muted", children: r }),
        }),
    });
}
var M = n(423814),
    k = n(77528),
    w = n(35587),
    D = n(511484),
    U = n(774774),
    G = n(289873),
    F = n(626584),
    B = n(97352),
    H = n(682901),
    W = n(107198),
    V = n(12260),
    Y = n(658859);
let K = new F.A("PremiumGroupPrice.tsx"),
    Z = (0, i.jsx)(G.y, { type: G.y.Type.PULSING_ELLIPSIS, className: Y.xB }),
    q = function (e) {
        let t,
            { isGift: n = !1, priceOptions: l } = e,
            r = (0, o.bG)([B.A], () => B.A.get(H.gD.PREMIUM_GROUP_MONTH)),
            a = (0, c.q)((0, h.Ay)());
        if (null == r) return Z;
        try {
            t = (0, E.sS)(r, l, !1, n, !1);
        } catch {
            return (K.warn(`No price available for plan ${r.id} in currency ${l?.currency ?? "unknown"}`), Z);
        }
        let s = H.WT.MONTH;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(m.E, {
                            variant: "heading-xxl/semibold",
                            color: a ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: t,
                        }),
                        (0, i.jsxs)(m.E, {
                            variant: "body-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, E.FJ)(s)],
                        }),
                    ],
                }),
                (0, i.jsx)(d.D, {
                    variant: "heading-sm/semibold",
                    color: "text-muted",
                    children: j.intl.string(W.default["R+dzZw"]),
                }),
                (0, i.jsx)("hr", { className: V.y }),
            ],
        });
    };
var z = n(795269),
    $ = n(926239),
    Q = n(824069),
    J = n(222719),
    X = n(174788),
    ee = n(232266),
    et = n(243002),
    en = n(241988);
function el(e) {
    let { children: t, footer: n } = e;
    return null == n
        ? (0, i.jsx)(u.B, { direction: "vertical", gap: 0, className: X.tierCardStack, children: t })
        : (0, i.jsxs)(u.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: X.tierCardStack,
              children: [
                  (0, i.jsx)(u.B, { direction: "vertical", gap: 0, className: X.tierCardStackContent, children: t }),
                  (0, i.jsx)("div", { className: X.footer, children: n }),
              ],
          });
}
function ei(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            className: l,
            isGift: r = !1,
            priceOptions: a,
            isApplicationHome: u = !1,
            useShortTitle: m = !1,
        } = e,
        p = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        E = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        S = (0, k.V)(),
        g = S?.subscriptionTrial?.skuId,
        I = p?.hasActiveTrial ? E?.premiumType : null,
        y = (0, U.Lj)(I, g),
        A = null != y,
        P = (0, c.q)((0, h.Ay)()),
        v = m ? j.intl.string(j.t.tUbSDK) : j.intl.string(j.t["t9uG/o"]),
        x = (0, i.jsxs)(el, {
            footer: t,
            children: [
                A && (0, i.jsx)(z.R, { text: y, className: X.pill }),
                (0, i.jsx)(d.D, {
                    variant: "nitro-md",
                    color: P ? "text-strong" : "text-overlay-light",
                    className: X.cardTitle,
                    children: v,
                }),
                (0, i.jsx)(J.A, {
                    isGift: r,
                    premiumTier: H.PremiumTypes.TIER_0,
                    offerType: H.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === H.pe.TIER_0,
                    showYearlyPrice: n,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "body-md/medium",
                    headingColor: "text-strong",
                    headerClassName: X.priceHeader,
                }),
                (0, i.jsx)("hr", { className: X.divider }),
                (0, i.jsx)($.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: u }),
            ],
        }),
        _ = s()(X.card, X.tier0, l, { [X.pillMargin]: !u && A });
    return (0, i.jsx)("div", { className: _, children: x });
}
var er =
    (((l = {}).IN_CARD = "inCard"),
    (l.OUTER_CORNER = "outerCorner"),
    (l.INSIDE_CORNER = "insideCorner"),
    (l.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    l);
function ea(e) {
    let { discountOffer: t, priceOptions: n, isGift: l, narrowLayout: a = !1 } = e,
        s = (0, D.N1)(H.gD.PREMIUM_YEAR_TIER_2),
        o = r.useMemo(() => {
            try {
                let e = (0, E.y8)(H.gD.PREMIUM_YEAR_TIER_2, !1, l, n);
                return (0, S.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [l, n]);
    return null == s || null == o
        ? null
        : (0, i.jsxs)("div", {
              className: X.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: X.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(m.E, {
                              variant: a ? "body-sm/semibold" : "body-md/semibold",
                              color: "text-overlay-light",
                              children: j.intl.format(j.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, i.jsx)(m.E, {
                              variant: a ? "body-xs/normal" : "body-sm/normal",
                              children: j.intl.format(j.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(z.R, { text: j.intl.formatToPlainString(j.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function es(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            featureSet: l = $.Nz.DEFAULT,
            className: r,
            isGift: a = !1,
            isModal: u = !1,
            priceOptions: m,
            showPromotionalGiftBanner: E = !1,
            wumpusPosition: S = "inCard",
            isApplicationHome: I = !1,
            showWumpus: y = !0,
            showPill: A = !0,
            narrowLayout: P = !1,
        } = e,
        v = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        x = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        _ = (0, k.V)(),
        T = _?.subscriptionTrial?.skuId,
        b = v?.hasActiveTrial ? x?.premiumType : null,
        N = v?.planIdFromItems === H.gD.PREMIUM_YEAR_TIER_2,
        R = (0, M.O)(),
        L = (0, g.k5)(),
        G = null != T || null != b ? H.Vk.PREMIUM_TRIAL : null != R || L ? H.Vk.PREMIUM_DISCOUNT : null,
        F = (0, c.q)((0, h.Ay)()),
        B = !a && null != R && (0, D.hm)(R),
        W = !a && L && N && G === H.Vk.PREMIUM_DISCOUNT,
        V = (0, U.rm)(L, b, a ? null : R, _, T),
        Y = (0, w.Sq)() && !a && null == G,
        K = null != t || E ? (0, i.jsxs)(i.Fragment, { children: [t, E && (0, i.jsx)(O, {})] }) : null,
        Z = u && !a,
        q = (0, i.jsxs)(el, {
            footer: K,
            children: [
                y &&
                    !W &&
                    (0, i.jsx)(function () {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                !B &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: et, alt: "", className: s()(X.bigCloud, X[S]) }),
                                            (0, i.jsx)("img", { src: ee, alt: "", className: s()(X.smallCloud, X[S]) }),
                                        ],
                                    }),
                                (!B || null != t) &&
                                    (0, i.jsx)("img", {
                                        src: en,
                                        alt: "",
                                        className: s()(X.wumpus, X[S], { [X.withAnnualDiscountBanner]: B }),
                                    }),
                            ],
                        });
                    }, {}),
                A &&
                    !B &&
                    (0, i.jsx)(z.R, {
                        text:
                            V ??
                            (Y
                                ? j.intl.formatToPlainString(j.t["4SEnCZ"], { months: 1 })
                                : j.intl.string(j.t["6bEcYr"])),
                        className: X.pill,
                    }),
                (0, i.jsx)(d.D, {
                    variant: "nitro-md",
                    color: F ? "text-strong" : "text-overlay-light",
                    className: X.cardTitle,
                    children: j.intl.string(j.t.lG6a5x),
                }),
                (0, i.jsx)(J.A, {
                    isGift: a,
                    premiumTier: H.PremiumTypes.TIER_2,
                    offerType: G,
                    offerTierMatchesCard: T === H.pe.TIER_2 || (0, D.U9)(R, H.pe.TIER_2),
                    showYearlyPrice: n && !B,
                    priceOptions: m,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "body-md/medium",
                    headingColor: "text-strong",
                    headerClassName: X.priceHeader,
                }),
                B
                    ? (0, i.jsx)(ea, { discountOffer: R, priceOptions: m, isGift: a, narrowLayout: P })
                    : (0, i.jsx)("hr", { className: X.divider }),
                (0, i.jsx)($.ZP, {
                    featureSet: l,
                    isModal: u,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: I,
                    firstFeatureItemClassName:
                        B || ("inCard" !== S && "giftSelectionModal" !== S) ? void 0 : X.firstFeatureItemContainer,
                }),
                Z && (0, i.jsx)(Q.K, {}),
            ],
        }),
        ei = s()(X.card, r, { [X.withGiftBanner]: E });
    return (0, i.jsx)(p.h, { color: "nitro-pink", className: ei, children: q });
}
function eo(e) {
    let { className: t, ctaButton: n, isApplicationHome: l, priceOptions: r } = e,
        a = (0, c.q)((0, h.Ay)()),
        o = (0, i.jsxs)(el, {
            footer: n,
            children: [
                (0, i.jsxs)("div", {
                    className: X.cardHeader,
                    children: [
                        (0, i.jsx)(d.D, {
                            variant: "nitro-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: X.cardTitle,
                            children: j.intl.string(W.default.eSKiXk),
                        }),
                        (0, i.jsx)(z.R, { text: j.intl.string(j.t.oW0eUd), className: X.betaPill }),
                    ],
                }),
                (0, i.jsx)(q, { priceOptions: r }),
                (0, i.jsx)($.Lg, { isApplicationHome: l }),
            ],
        });
    return (0, i.jsx)("div", { className: s()(X.card, X.borderGradient, t), children: o });
}
