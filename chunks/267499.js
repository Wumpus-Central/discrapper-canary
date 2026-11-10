n.d(t, { r6: () => em, MR: () => eo, oK: () => ed, Rf: () => eu });
var l,
    i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(855986),
    u = n(331322),
    c = n(462887),
    d = n(834730),
    m = n(534514),
    p = n(315629),
    C = n(736653),
    h = n(287809),
    f = n(166403),
    E = n(448645),
    S = n(580630),
    g = n(526292),
    I = n(529412),
    y = n(877624),
    A = n(805251),
    P = n(406810),
    v = n(418200),
    x = n(421108),
    _ = n(240248),
    T = n(807098),
    b = n(412260),
    N = n(860300),
    j = n(531536),
    R = n(792996),
    O = n(951321);
function M() {
    let { claimableRewards: e } = (0, v.Pv)(),
        { enabled: t } = N.J.useConfig({ location: "PremiumBrandRefreshGiftPromotionElement" }),
        n = (0, o.bG)([b.A], () => {
            let e = b.A.getMarketingComponentByType(y.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        l = (0, T.T)(n?.avatarAsset),
        r = (0, o.bG)([b.A], () => b.A.getGiftPromotion()),
        a = (0, x.dA)(r?.endDate, t);
    return null == n || null == e || 0 === e.length
        ? null
        : (0, i.jsx)(L, {
              rewardImageUrl: l,
              countdownText: a,
              header: (0, _.uJ)(n.header) ? R.intl.string(R.t.OEtqpm) : n.header,
              body: (0, _.uJ)(n.desktopBody)
                  ? R.intl.formatToPlainString(R.t["2h5M+X"], { availableCount: e.length })
                  : n.desktopBody,
          });
}
function L(e) {
    let { rewardImageUrl: t, countdownText: n, header: l, body: r } = e;
    return (0, i.jsx)("div", {
        className: O.KE,
        "data-panel-banner": "true",
        children: (0, i.jsx)(j.W, {
            image: null != t ? (0, i.jsx)("img", { className: O.L8, alt: "", src: t }) : void 0,
            badge:
                null != n
                    ? (0, i.jsx)(A.E, { type: { text: n.toUpperCase() }, variant: "primary", icon: P.ClockIcon })
                    : void 0,
            textGroupClassName: O.RI,
            title: (0, i.jsx)(d.E, { variant: "body-md/medium", color: "text-default", children: l }),
            body: (0, i.jsx)(d.E, { variant: "body-sm/medium", color: "text-muted", children: r }),
        }),
    });
}
var k = n(423814),
    w = n(77528),
    D = n(35587),
    U = n(511484),
    G = n(774774),
    F = n(289873),
    B = n(626584),
    H = n(97352),
    W = n(682901),
    V = n(107198),
    Y = n(12260),
    K = n(658859);
let Z = new B.A("PremiumGroupPrice.tsx"),
    q = (0, i.jsx)(F.y, { type: F.y.Type.PULSING_ELLIPSIS, className: K.xB }),
    z = function (e) {
        let t,
            { isGift: n = !1, priceOptions: l } = e,
            r = (0, o.bG)([H.A], () => H.A.get(W.gD.PREMIUM_GROUP_MONTH)),
            a = (0, c.q)((0, C.Ay)());
        if (null == r) return q;
        try {
            t = (0, E.sS)(r, l, !1, n, !1);
        } catch {
            return (Z.warn(`No price available for plan ${r.id} in currency ${l?.currency ?? "unknown"}`), q);
        }
        let s = W.WT.MONTH;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.E, {
                            variant: "heading-xxl/semibold",
                            color: a ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: t,
                        }),
                        (0, i.jsxs)(d.E, {
                            variant: "body-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, E.FJ)(s)],
                        }),
                    ],
                }),
                (0, i.jsx)(m.D, {
                    variant: "heading-sm/semibold",
                    color: "text-muted",
                    children: R.intl.string(V.default["R+dzZw"]),
                }),
                (0, i.jsx)("hr", { className: Y.y }),
            ],
        });
    };
var $ = n(795269),
    Q = n(543213),
    J = n(824069),
    X = n(222719),
    ee = n(50302),
    et = n(174788),
    en = n(232266),
    el = n(243002),
    ei = n(241988);
function er(e) {
    let { children: t, footer: n } = e;
    return null == n
        ? (0, i.jsx)(u.B, { direction: "vertical", gap: 0, className: et.tierCardStack, children: t })
        : (0, i.jsxs)(u.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: et.tierCardStack,
              children: [
                  (0, i.jsx)(u.B, { direction: "vertical", gap: 0, className: et.tierCardStackContent, children: t }),
                  (0, i.jsx)("div", { className: et.footer, children: n }),
              ],
          });
}
function ea(e) {
    let t = (0, I.qi)({ location: `PremiumTierCards${e ? "" : "-DISABLED"}` });
    return e && t;
}
function es() {
    return (0, i.jsx)(d.E, {
        variant: "heading-xs/semibold",
        color: "text-muted",
        tag: "div",
        children: R.intl.string(ee.default.boclBe),
    });
}
function eo(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            className: l,
            isGift: r = !1,
            priceOptions: a,
            isApplicationHome: u = !1,
            useShortTitle: d = !1,
        } = e,
        p = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        E = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        S = (0, w.V)(),
        g = S?.subscriptionTrial?.skuId,
        I = p?.hasActiveTrial ? E?.premiumType : null,
        y = (0, G.Lj)(I, g),
        A = null != y,
        P = (0, c.q)((0, C.Ay)()),
        v = ea(r),
        x = d ? R.intl.string(R.t.tUbSDK) : R.intl.string(R.t["t9uG/o"]),
        _ = (0, i.jsxs)(er, {
            footer: t,
            children: [
                A && (0, i.jsx)($.R, { text: y, className: et.pill }),
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: P ? "text-strong" : "text-overlay-light",
                    className: et.cardTitle,
                    children: x,
                }),
                v && (0, i.jsx)(es, {}),
                (0, i.jsx)(X.A, {
                    isGift: r,
                    premiumTier: W.PremiumTypes.TIER_0,
                    offerType: W.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === W.pe.TIER_0,
                    showYearlyPrice: n && !v,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "body-md/medium",
                    headingColor: "text-strong",
                    headerClassName: et.priceHeader,
                }),
                (0, i.jsx)("hr", { className: et.divider }),
                (0, i.jsx)(Q.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: u }),
            ],
        }),
        T = s()(et.card, et.tier0, l, { [et.pillMargin]: !u && A });
    return (0, i.jsx)("div", { className: T, children: _ });
}
var eu =
    (((l = {}).IN_CARD = "inCard"),
    (l.OUTER_CORNER = "outerCorner"),
    (l.INSIDE_CORNER = "insideCorner"),
    (l.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    l);
function ec(e) {
    let { discountOffer: t, priceOptions: n, isGift: l, narrowLayout: a = !1 } = e,
        s = (0, U.N1)(W.gD.PREMIUM_YEAR_TIER_2),
        o = r.useMemo(() => {
            try {
                let e = (0, E.y8)(W.gD.PREMIUM_YEAR_TIER_2, !1, l, n);
                return (0, S.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [l, n]);
    return null == s || null == o
        ? null
        : (0, i.jsxs)("div", {
              className: et.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: et.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: a ? "body-sm/semibold" : "body-md/semibold",
                              color: "text-overlay-light",
                              children: R.intl.format(R.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, i.jsx)(d.E, {
                              variant: a ? "body-xs/normal" : "body-sm/normal",
                              children: R.intl.format(R.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, i.jsx)($.R, { text: R.intl.formatToPlainString(R.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function ed(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            featureSet: l = Q.Nz.DEFAULT,
            className: r,
            isGift: a = !1,
            isModal: u = !1,
            priceOptions: d,
            showPromotionalGiftBanner: E = !1,
            wumpusPosition: S = "inCard",
            isApplicationHome: I = !1,
            showWumpus: y = !0,
            showPill: A = !0,
            narrowLayout: P = !1,
        } = e,
        v = (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
        x = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        _ = (0, w.V)(),
        T = _?.subscriptionTrial?.skuId,
        b = v?.hasActiveTrial ? x?.premiumType : null,
        N = v?.planIdFromItems === W.gD.PREMIUM_YEAR_TIER_2,
        j = (0, k.O)(),
        O = (0, g.k5)(),
        L = null != T || null != b ? W.Vk.PREMIUM_TRIAL : null != j || O ? W.Vk.PREMIUM_DISCOUNT : null,
        F = (0, c.q)((0, C.Ay)()),
        B = ea(a),
        H = !a && null != j && (0, U.hm)(j),
        V = !a && O && N && L === W.Vk.PREMIUM_DISCOUNT,
        Y = (0, G.rm)(O, b, a ? null : j, _, T),
        K = (0, D.Sq)() && !a && null == L,
        Z = null != t || E ? (0, i.jsxs)(i.Fragment, { children: [t, E && (0, i.jsx)(M, {})] }) : null,
        q = u && !a,
        z = (0, i.jsxs)(er, {
            footer: Z,
            children: [
                y &&
                    !V &&
                    (0, i.jsx)(function () {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                !H &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: el, alt: "", className: s()(et.bigCloud, et[S]) }),
                                            (0, i.jsx)("img", {
                                                src: en,
                                                alt: "",
                                                className: s()(et.smallCloud, et[S]),
                                            }),
                                        ],
                                    }),
                                (!H || null != t) &&
                                    (0, i.jsx)("img", {
                                        src: ei,
                                        alt: "",
                                        className: s()(et.wumpus, et[S], { [et.withAnnualDiscountBanner]: H }),
                                    }),
                            ],
                        });
                    }, {}),
                A &&
                    !H &&
                    (0, i.jsx)($.R, {
                        text:
                            Y ??
                            (K
                                ? R.intl.formatToPlainString(R.t["4SEnCZ"], { months: 1 })
                                : R.intl.string(R.t["6bEcYr"])),
                        className: et.pill,
                    }),
                (0, i.jsx)(m.D, {
                    variant: "nitro-md",
                    color: F ? "text-strong" : "text-overlay-light",
                    className: et.cardTitle,
                    children: R.intl.string(R.t.lG6a5x),
                }),
                B && (0, i.jsx)(es, {}),
                (0, i.jsx)(X.A, {
                    isGift: a,
                    premiumTier: W.PremiumTypes.TIER_2,
                    offerType: L,
                    offerTierMatchesCard: T === W.pe.TIER_2 || (0, U.U9)(j, W.pe.TIER_2),
                    showYearlyPrice: n && !H && !B,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "body-md/medium",
                    headingColor: "text-strong",
                    headerClassName: et.priceHeader,
                }),
                H
                    ? (0, i.jsx)(ec, { discountOffer: j, priceOptions: d, isGift: a, narrowLayout: P })
                    : (0, i.jsx)("hr", { className: et.divider }),
                (0, i.jsx)(Q.ZP, {
                    featureSet: l,
                    isModal: u,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: I,
                    firstFeatureItemClassName:
                        H || ("inCard" !== S && "giftSelectionModal" !== S) ? void 0 : et.firstFeatureItemContainer,
                }),
                q && (0, i.jsx)(J.K, {}),
            ],
        }),
        ee = s()(et.card, r, { [et.withGiftBanner]: E });
    return (0, i.jsx)(p.h, { color: "nitro-pink", className: ee, children: z });
}
function em(e) {
    let { className: t, ctaButton: n, isApplicationHome: l, priceOptions: r } = e,
        a = (0, c.q)((0, C.Ay)()),
        o = (0, i.jsxs)(er, {
            footer: n,
            children: [
                (0, i.jsxs)("div", {
                    className: et.cardHeader,
                    children: [
                        (0, i.jsx)(m.D, {
                            variant: "nitro-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: et.cardTitle,
                            children: R.intl.string(V.default.eSKiXk),
                        }),
                        (0, i.jsx)($.R, { text: R.intl.string(R.t.oW0eUd), className: et.betaPill }),
                    ],
                }),
                (0, i.jsx)(z, { priceOptions: r }),
                (0, i.jsx)(Q.Lg, { isApplicationHome: l }),
            ],
        });
    return (0, i.jsx)("div", { className: s()(et.card, et.borderGradient, t), children: o });
}
