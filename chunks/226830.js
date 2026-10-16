t.d(r, { jP: () => eR, Rf: () => eT, oK: () => eA, r6: () => eI, MR: () => ej });
var n,
    i = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(17928),
    c = t(331322),
    d = t(821609),
    u = t(462887),
    m = t(834730),
    x = t(297264),
    p = t(315629),
    h = t(939249),
    g = t(403581),
    f = t(736653),
    j = t(775602),
    T = t(793574),
    E = t(688810),
    A = t(287809),
    I = t(166403),
    N = t(158045),
    v = t(580630),
    R = t(526292),
    _ = t(529412),
    P = t(877624),
    M = t(62010),
    C = t(406810),
    y = t(951305),
    b = t(421108),
    O = t(240248),
    S = t(807098),
    U = t(412260),
    D = t(860300),
    G = t(531536),
    L = t(105292),
    k = t(951321);
function B() {
    let { claimableRewards: e } = (0, y.Pv)(),
        { enabled: r } = D.J.useConfig({ location: "PremiumBrandRefreshGiftPromotionElement" }),
        t = (0, o.bG)([U.A], () => {
            let e = U.A.getMarketingComponentByType(P.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        n = (0, S.T)(t?.avatarAsset),
        l = (0, o.bG)([U.A], () => U.A.getGiftPromotion()),
        a = (0, b.dA)(l?.endDate, r);
    return null == t || null == e || 0 === e.length
        ? null
        : (0, i.jsx)(H, {
              rewardImageUrl: n,
              countdownText: a,
              header: (0, O.uJ)(t.header) ? L.intl.string(L.t.OEtqpm) : t.header,
              body: (0, O.uJ)(t.desktopBody)
                  ? L.intl.formatToPlainString(L.t["2h5M+X"], { availableCount: e.length })
                  : t.desktopBody,
          });
}
function H(e) {
    let { rewardImageUrl: r, countdownText: t, header: n, body: l } = e;
    return (0, i.jsx)("div", {
        className: k.KE,
        "data-panel-banner": "true",
        children: (0, i.jsx)(G.W, {
            image: null != r ? (0, i.jsx)("img", { className: k.L8, alt: "", src: r }) : void 0,
            badge:
                null != t
                    ? (0, i.jsx)(M.E, { type: { text: t.toUpperCase() }, variant: "primary", icon: C.ClockIcon })
                    : void 0,
            textGroupClassName: k.RI,
            title: (0, i.jsx)(m.E, { variant: "text-md/medium", color: "text-default", children: n }),
            body: (0, i.jsx)(m.E, { variant: "text-sm/medium", color: "text-muted", children: l }),
        }),
    });
}
var w = t(724651),
    F = t(732280),
    V = t(989790),
    W = t(35587),
    Y = t(783420),
    z = t(204413),
    K = t(511484),
    q = t(774774),
    J = t(289873),
    Z = t(626584),
    $ = t(97352),
    Q = t(795269),
    X = t(202541),
    ee = t(148155),
    er = t(12260),
    et = t(658859);
let en = new Z.A("PremiumGroupPrice.tsx"),
    ei = (0, i.jsx)(J.y, { type: J.y.Type.PULSING_ELLIPSIS, className: et.xB }),
    el = function (e) {
        let r,
            { isGift: t = !1, discountOffer: n, priceOptions: l, isApplicationHome: a = !1 } = e,
            d = (0, o.bG)([$.A], () => $.A.get(X.gD.PREMIUM_GROUP_MONTH)),
            p = (0, K.N1)(X.gD.PREMIUM_GROUP_MONTH),
            h = (0, u.q)((0, f.Ay)());
        if (null == d) return ei;
        try {
            r = (0, N.sS)(d, l, !1, t, !1);
        } catch {
            return (en.warn(`No price available for plan ${d.id} in currency ${l?.currency ?? "unknown"}`), ei);
        }
        let g = X.WT.MONTH;
        if (null != n && null != p) {
            let e = n.discount.intervalCount;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("hr", { className: s()(er.vI, { [er.oE]: a }) }),
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
                                className: er.Yc,
                                children: [
                                    (0, i.jsx)(x.D, {
                                        variant: a ? "heading-md/semibold" : "heading-sm/semibold",
                                        color: "text-strong",
                                        children: L.intl.format(ee.default.rCpGVA, {
                                            discountedPrice: p,
                                            discountInterval: e,
                                        }),
                                    }),
                                    (0, i.jsx)(m.E, {
                                        variant: a ? "text-sm/medium" : "text-xs/medium",
                                        color: "text-muted",
                                        children: L.intl.format(ee.default["4b2ByP"], { regularPrice: r }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(Q.R, {
                                text: L.intl.formatToPlainString(ee.default.GEwdVw, {
                                    percent: n.discount.amount,
                                    discountOfferAmount: n.discount.amount,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("hr", { className: s()(er.yF, { [er.oE]: a }) }),
                ],
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(m.E, {
                            variant: "heading-xxl/extrabold",
                            color: h ? "text-strong" : "text-overlay-light",
                            tag: "span",
                            children: r,
                        }),
                        (0, i.jsxs)(m.E, {
                            variant: "text-xs/medium",
                            tag: "span",
                            color: "text-muted",
                            children: ["/", (0, N.FJ)(g)],
                        }),
                    ],
                }),
                (0, i.jsx)(x.D, {
                    variant: "heading-md/semibold",
                    color: "text-muted",
                    children: L.intl.string(ee.default["R+dzZw"]),
                }),
                (0, i.jsx)("hr", { className: er.yF }),
            ],
        });
    };
var ea = t(543213),
    es = t(824069),
    eo = t(222719),
    ec = t(88001),
    ed = t(341535),
    eu = t(174788),
    em = t(232266),
    ex = t(243002),
    ep = t(241988);
function eh(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: eu.tierCardStack, children: r })
        : (0, i.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: eu.tierCardStack,
              children: [
                  (0, i.jsx)(c.B, { direction: "vertical", gap: 0, className: eu.tierCardStackContent, children: r }),
                  (0, i.jsx)("div", { className: eu.footer, children: t }),
              ],
          });
}
function eg(e) {
    let r = (0, _.qi)({ location: `PremiumTierCards${e ? "" : "-DISABLED"}` });
    return e && r;
}
function ef() {
    return (0, i.jsx)(m.E, {
        variant: "heading-sm/semibold",
        color: "text-muted",
        tag: "div",
        children: L.intl.string(ed.default.boclBe),
    });
}
function ej(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: n,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: c = !1,
            useShortTitle: d = !1,
        } = e,
        m = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        p = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        h = (0, F.V)(),
        g = h?.subscriptionTrial?.skuId,
        j = m?.hasActiveTrial ? p?.premiumType : null,
        T = (0, q.Lj)(j, g),
        E = null != T,
        N = (0, u.q)((0, f.Ay)()),
        v = eg(l),
        R = d ? L.intl.string(L.t.tUbSDK) : L.intl.string(L.t["t9uG/o"]),
        _ = (0, i.jsxs)(eh, {
            footer: r,
            children: [
                E && (0, i.jsx)(Q.R, { text: T, className: eu.pill }),
                (0, i.jsx)(x.D, {
                    variant: "nitro-md",
                    color: N ? "text-strong" : "text-overlay-light",
                    className: eu.cardTitle,
                    children: R,
                }),
                v && (0, i.jsx)(ef, {}),
                (0, i.jsx)(eo.A, {
                    isGift: l,
                    premiumTier: X.PremiumTypes.TIER_0,
                    offerType: X.Vk.PREMIUM_TRIAL,
                    offerTierMatchesCard: g === X.pe.TIER_0,
                    showYearlyPrice: t && !v,
                    priceOptions: a,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eu.priceHeader,
                }),
                (0, i.jsx)("hr", { className: eu.divider }),
                (0, i.jsx)(ea.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        P = s()(eu.card, eu.tier0, n, { [eu.pillMargin]: !c && E });
    return (0, i.jsx)("div", { className: P, children: _ });
}
var eT =
    (((n = {}).IN_CARD = "inCard"),
    (n.OUTER_CORNER = "outerCorner"),
    (n.INSIDE_CORNER = "insideCorner"),
    (n.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    n);
function eE(e) {
    let { discountOffer: r, priceOptions: t, isGift: n, narrowLayout: a = !1 } = e,
        s = (0, K.N1)(X.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, N.y8)(X.gD.PREMIUM_YEAR_TIER_2, !1, n, t);
                return (0, v.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [n, t]);
    return null == s || null == o
        ? null
        : (0, i.jsxs)("div", {
              className: eu.annualDiscountBanner,
              children: [
                  (0, i.jsxs)("div", {
                      className: eu.annualDiscountBannerText,
                      children: [
                          (0, i.jsx)(m.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: L.intl.format(L.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, i.jsx)(m.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: L.intl.format(L.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(Q.R, { text: L.intl.formatToPlainString(L.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function eA(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: n = ea.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: c = !1,
            priceOptions: d,
            showPromotionalGiftBanner: m = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: j = !0,
            showPill: T = !0,
            narrowLayout: E = !1,
        } = e,
        N = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        v = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        _ = (0, F.V)(),
        P = _?.subscriptionTrial?.skuId,
        M = N?.hasActiveTrial ? v?.premiumType : null,
        C = N?.planIdFromItems === X.gD.PREMIUM_YEAR_TIER_2,
        y = (0, w.O)(),
        b = (0, w.p)(),
        O = (0, R.k5)(),
        S = null != P || null != M ? X.Vk.PREMIUM_TRIAL : null != y || O ? X.Vk.PREMIUM_DISCOUNT : null,
        U = (0, u.q)((0, f.Ay)()),
        D = eg(a),
        G = null != b && !a,
        k = !a && null != y && (0, K.hm)(y),
        H = !a && O && C && S === X.Vk.PREMIUM_DISCOUNT,
        V = (0, q.rm)(O, M, a ? null : y, _, P),
        Y = (0, W.Sq)() && !a && null == S,
        z = null != r || m ? (0, i.jsxs)(i.Fragment, { children: [r, m && (0, i.jsx)(B, {})] }) : null,
        J = c && !a,
        Z = (0, i.jsxs)(eh, {
            footer: z,
            children: [
                j &&
                    !G &&
                    !H &&
                    (0, i.jsx)(function () {
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                !k &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)("img", { src: ex, alt: "", className: s()(eu.bigCloud, eu[h]) }),
                                            (0, i.jsx)("img", {
                                                src: em,
                                                alt: "",
                                                className: s()(eu.smallCloud, eu[h]),
                                            }),
                                        ],
                                    }),
                                (!k || null != r) &&
                                    (0, i.jsx)("img", {
                                        src: ep,
                                        alt: "",
                                        className: s()(eu.wumpus, eu[h], { [eu.withAnnualDiscountBanner]: k }),
                                    }),
                            ],
                        });
                    }, {}),
                T &&
                    !k &&
                    (0, i.jsx)(Q.R, {
                        text:
                            V ??
                            (Y
                                ? L.intl.formatToPlainString(L.t["4SEnCZ"], { months: 1 })
                                : L.intl.string(L.t["6bEcYr"])),
                        className: eu.pill,
                    }),
                (0, i.jsx)(x.D, {
                    variant: "nitro-md",
                    color: U ? "text-strong" : "text-overlay-light",
                    className: eu.cardTitle,
                    children: L.intl.string(L.t.lG6a5x),
                }),
                D && (0, i.jsx)(ef, {}),
                (0, i.jsx)(eo.A, {
                    isGift: a,
                    premiumTier: X.PremiumTypes.TIER_2,
                    offerType: S,
                    offerTierMatchesCard: P === X.pe.TIER_2 || (0, K.U9)(y, X.pe.TIER_2),
                    showYearlyPrice: t && !k && !D,
                    priceOptions: d,
                    enablePremiumBrandRefresh: !0,
                    headingVariant: "text-md/medium",
                    headingColor: "text-strong",
                    headerClassName: eu.priceHeader,
                }),
                k
                    ? (0, i.jsx)(eE, { discountOffer: y, priceOptions: d, isGift: a, narrowLayout: E })
                    : (0, i.jsx)("hr", { className: eu.divider }),
                (0, i.jsx)(ea.ZP, {
                    featureSet: n,
                    isModal: c,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        k || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : eu.firstFeatureItemContainer,
                }),
                J && (0, i.jsx)(es.K, {}),
            ],
        }),
        $ = s()(eu.card, l, { [eu.withGiftBanner]: m });
    return G
        ? (0, i.jsx)("div", { className: $, children: Z })
        : (0, i.jsx)(p.h, { color: "nitro-pink", className: $, children: Z });
}
function eI(e) {
    let { className: r, ctaButton: t, isApplicationHome: n, priceOptions: l } = e,
        a = (0, u.q)((0, f.Ay)()),
        o = (0, w.p)(),
        c = (0, i.jsxs)(eh, {
            footer: t,
            children: [
                (0, i.jsxs)("div", {
                    className: eu.cardHeader,
                    children: [
                        (0, i.jsx)(x.D, {
                            variant: "nitro-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: eu.cardTitle,
                            children: L.intl.string(ee.default.eSKiXk),
                        }),
                        (0, i.jsx)(Q.R, {
                            text: L.intl.string(L.t.oW0eUd),
                            className: eu.betaPill,
                            disableGradient: null != o,
                        }),
                    ],
                }),
                (0, i.jsx)(el, { discountOffer: o, priceOptions: l, isApplicationHome: n }),
                (0, i.jsx)(ea.Lg, { isApplicationHome: n }),
            ],
        });
    return null != o
        ? (0, i.jsx)(p.h, { color: "nitro-pink", className: s()(eu.card, r), children: c })
        : (0, i.jsx)("div", { className: s()(eu.card, eu.borderGradient, r), children: c });
}
function eN(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: n, className: l, narrowLayout: a } = e,
        o = r === X.pe.TIER_2,
        u = (0, w.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, z.$)({
            subscriptionTier: r,
            variantOverride: o && null == u ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, i.jsx)(d.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        f = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: s()(eu.tierCardStack, { [eu.premiumCardHover]: !t }),
            children: (0, i.jsx)(o ? eA : ej, {
                className: s()(eu.applicationHomeCard, { [eu.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...n,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: s()(eu.tierCardStack, l),
        children: p
            ? f
            : (0, i.jsx)(Y.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, i.jsx)(h.D, { onClick: r, className: eu.tierCardStack, children: f });
                  },
              }),
    });
}
function ev(e) {
    let { isReducedMotion: r, className: t } = e,
        n = (0, w.p)(),
        l = null != n,
        a = (0, o.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        u = null != a && (0, N.Nc)(a),
        m = l
            ? L.intl.format(ee.default["7j70dP"], {
                  percent: n.discount?.amount,
                  premiumGroupProductName: (0, ec.DP)(),
              })
            : L.intl.string(L.t["2pG5Ga"]),
        x = (0, i.jsx)(d.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: m,
            variant: null != n ? "expressive" : "secondary",
            disabled: u,
        }),
        p = (0, i.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: s()(eu.tierCardStack, { [eu.premiumCardHover]: !r }),
            children: (0, i.jsx)(eI, {
                className: s()(eu.applicationHomeCard, eu.narrow),
                ctaButton: x,
                isApplicationHome: !0,
            }),
        });
    return (0, i.jsx)(c.B, {
        direction: "vertical",
        gap: 0,
        className: s()(eu.tierCardStack, t),
        children: u
            ? p
            : (0, i.jsx)(Y.A, {
                  subscriptionTier: X.pe.TIER_2,
                  initialPlanId: X.gD.PREMIUM_GROUP_MONTH,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, i.jsx)(h.D, { onClick: r, className: eu.tierCardStack, children: p });
                  },
              }),
    });
}
function eR(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: n } = (0, E.Ay)(T.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, ea.pw)(r),
        a = (0, o.bG)([j.Ay], () => j.Ay.useReducedMotion),
        c = (0, V.PA)();
    return (0, i.jsx)(E.f5, {
        value: n,
        children: (0, i.jsxs)("div", {
            className: s()(eu.premiumCardsContainer, t),
            children: [
                (0, i.jsx)(x.D, {
                    variant: "nitro-md",
                    color: "text-strong",
                    className: eu.premiumCardsHeader,
                    children: L.intl.string(L.t.vLz3Zs),
                }),
                (0, i.jsxs)("div", {
                    ref: l,
                    className: eu.premiumCards,
                    children: [
                        (0, i.jsx)(eN, {
                            subscriptionTier: X.pe.TIER_0,
                            isReducedMotion: a,
                            className: eu.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, i.jsx)(eN, {
                            subscriptionTier: X.pe.TIER_2,
                            isReducedMotion: a,
                            className: eu.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, i.jsx)(ev, { isReducedMotion: a, className: eu.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
