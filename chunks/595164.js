t.d(n, { As: () => er }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    o = t.n(a),
    c = t(311907),
    u = t(827734),
    d = t(990078),
    p = t(408278),
    m = t(834040),
    _ = t(499373),
    f = t(834730),
    h = t(403581),
    g = t(663803),
    S = t(320448),
    x = t(534514),
    b = t(104510),
    I = t(695366),
    E = t(289873),
    A = t(726656),
    y = t(793574),
    P = t(688810),
    N = t(531260),
    v = t(94420),
    C = t(404374),
    T = t(543767),
    j = t(881489),
    M = t(477421),
    L = t(234419),
    R = t(163538),
    D = t(363476),
    U = t(156962),
    w = t(72140),
    k = t(773669),
    O = t(287809),
    G = t(97352),
    B = t(473145),
    F = t(975571),
    W = t(252424),
    V = t(927578),
    Y = t(580630),
    H = t(599669),
    z = t(652215);
t(26279);
var K = t(788868),
    q = t(818348),
    J = t(985018),
    $ = t(406263),
    Q = t(7921);
function X(e) {
    return "" === e || "-" === e;
}
function Z(e) {
    let { value: n, onChange: t, minValue: r = 1, maxValue: s = 30, ariaLabel: a } = e,
        [o, c] = l.useState(n);
    l.useEffect(() => {
        c(n);
    }, [n]);
    let u = "number" == typeof o,
        d = (e) => {
            c(e), X(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: $.U$,
        children: [
            (0, i.jsx)(p.K, {
                variant: "secondary",
                size: "md",
                icon: m.Q,
                onClick: () => {
                    u && !(o <= r) && d(o - 1);
                },
                "aria-label": J.intl.string(J.t["k+ohJm"]),
                disabled: !u || o <= r,
            }),
            (0, i.jsx)("div", {
                className: $.WJ,
                children: (0, i.jsx)("input", {
                    className: $.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${o}`,
                    onChange: (e) =>
                        ((e) => {
                            if (X(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= r) return void d(r);
                                if (n >= s) return void d(s);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        X(o) && c(n);
                    },
                }),
            }),
            (0, i.jsx)(p.K, {
                variant: "secondary",
                size: "md",
                icon: _.T,
                onClick: () => {
                    u && !(o >= s) && d(o + 1);
                },
                "aria-label": J.intl.string(J.t.w8Sc4B),
                disabled: !u || o >= s,
            }),
        ],
    });
}
function ee(e) {
    let { message: n } = e;
    return (0, i.jsx)(f.E, { variant: "text-xs/normal", color: "text-muted", className: $.jH, children: n });
}
function en(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: $.Vk,
        children: [
            (0, i.jsx)("div", {
                className: $.D0,
                children: (0, i.jsx)(h.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: $.ue,
                    color: C.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: $.yP, children: n }),
        ],
    });
}
function et(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        planLabel: a,
        planPriceContent: o,
        subtotalContent: c,
        refreshSubtotalContent: u,
        legacyDescriptionContent: d,
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: _,
        discountCallout: f,
        refreshDiscountCallout: h,
        legacyPricingNotes: S,
        refreshPricingNotes: x,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            m,
            d,
            _,
            (0, i.jsxs)("div", {
                className: Q.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: Q.E6,
                        children: [
                            (0, i.jsx)(g.l, {
                                value: t,
                                onChange: (e) => r(e),
                                className: Q.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: Q.$0, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: s()(Q.QK, { [Q.S]: n }), children: o }),
                ],
            }),
            (0, i.jsx)("div", { className: Q.J3 }),
            (0, i.jsxs)("div", {
                className: Q.mP,
                children: [
                    (0, i.jsx)("div", { className: Q.xp, children: J.intl.string(J.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: s()(Q.__invalid_planSelectorSubtotalPrice, { [Q.S]: n }),
                        children: c,
                    }),
                ],
            }),
            S.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            f,
        ],
    });
}
function ei(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        refreshNextStepLabel: a,
        planLabel: o,
        planPriceContent: c,
        subtotalContent: u,
        refreshSubtotalContent: d,
        legacyDescriptionContent: p,
        refreshDescriptionContent: m,
        fractionalBanner: _,
        existingSlotNotice: h,
        discountCallout: g,
        refreshDiscountCallout: b,
        legacyPricingNotes: I,
        refreshPricingNotes: E,
    } = e;
    return (0, i.jsxs)("div", {
        className: $.xY,
        children: [
            _,
            (0, i.jsxs)("div", {
                className: $.K3,
                children: [
                    (0, i.jsx)(f.E, {
                        variant: "text-md/medium",
                        className: $.bk,
                        children: J.intl.string(J.t["r+SebU"]),
                    }),
                    (0, i.jsx)(S._, { className: $.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(f.E, { variant: "text-md/medium", className: $.kX, children: a }),
                ],
            }),
            m,
            h,
            (0, i.jsxs)("div", {
                className: $.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: $.fX,
                        children: [
                            (0, i.jsx)(Z, { value: t, onChange: (e) => r(e), ariaLabel: o, minValue: 1, maxValue: 30 }),
                            (0, i.jsx)(f.E, { variant: "text-md/medium", className: $.ny, children: o }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: s()($.El, { [Q.S]: n }), children: c }),
                ],
            }),
            b,
            (0, i.jsxs)("div", {
                className: $.fh,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-lg/semibold",
                        className: $.O3,
                        children: J.intl.string(J.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: s()($.BU, { [Q.S]: n }), children: d }),
                ],
            }),
            E.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function el(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: Q.Mv,
        children: [
            (0, i.jsx)(b._, { className: Q.T5, color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    J.intl.format(J.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(d.m, {
                              text: J.intl.formatToPlainString(J.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(I.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: Q.Y5,
                                  color: u.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function er(e) {
    let {
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: d,
            existingAvailableSlots: p = [],
            priceOptions: m,
            isRefreshEnabled: _ = !1,
            refreshNextStepLabel: f = J.intl.string(J.t.QBnNHq),
        } = e,
        h = (function (e) {
            let n,
                {
                    premiumSubscriptionPlan: t,
                    numGuildBoosts: r,
                    setForceDisableSubmitButton: a,
                    premiumSubscription: u,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: p,
                    priceOptions: m,
                } = e,
                _ = (0, R.A)(),
                f = t.interval,
                h = t.intervalCount,
                g = (0, c.bG)([G.A], () => G.A.getForSkuAndInterval((0, V.mH)(K.pe.GUILD), f, h)),
                S = (0, c.bG)([O.default], () => O.default.getCurrentUser()),
                x = (0, N.A)({ forceFetch: !1 });
            o()(null != g, "Missing guildBoostingSubscriptionPlan");
            let b = [{ planId: g.id, quantity: 1 }],
                I = u?.items.find(
                    (e) => e.planId === K.gD.PREMIUM_MONTH_TIER_2 || e.planId === K.gD.PREMIUM_YEAR_TIER_2,
                );
            null != I && b.push(I);
            let X = u?.items.find((e) => e.planId === K.gD.PREMIUM_MONTH_GUILD || e.planId === K.gD.PREMIUM_YEAR_GUILD),
                Z = null == _ || !K.uJ.has(_) || null == X,
                { analyticsLocations: et } = (0, P.Ay)(),
                [ei, er] = (0, T.Kq)({
                    subscriptionId: u?.id,
                    items: b,
                    renewal: !0,
                    paymentSourceId: u?.paymentSourceId,
                    currency: m.currency,
                    preventFetch: Z,
                    analyticsLocations: et,
                    analyticsLocation: y.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, v.F0)(ei);
            let es = !Z && null == ei && null == er;
            l.useLayoutEffect(() => {
                a(es);
            }, [es, a]);
            let ea = (0, L.V)()?.subscription_trial?.sku_id === K.pe.TIER_2,
                eo = V.Ay.hasBoostDiscount(S),
                ec = eo && null != u && V.Ay.isPremiumAtLeast(V.Ay.getPremiumType(u.planId), K.PremiumTypes.TIER_1),
                eu = ei?.findInvoiceItemByPlanId(g.id),
                ed =
                    null != eu
                        ? { amount: eu.amount, tax: 0, taxInclusive: !0, currency: ei.currency }
                        : V.Ay.getPrice(g.id, eo, !1, m),
                ep = r * ed.amount,
                em = (0, j.ds)() && eo && null != u,
                e_ = (function (e) {
                    let n,
                        {
                            existingAvailableSlotsCount: t,
                            fractionalPremiumState: i,
                            isReverseTrial: l,
                            hasDiscountUpsell: r,
                            withTrialOfferCopyVariant: s,
                        } = e;
                    return (
                        (n = l ? "reverse_trial" : r ? "discount" : s ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: t > 0,
                            showFractionalPremiumBanner: i === K.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: p.length,
                    fractionalPremiumState: x.fractionalState,
                    isReverseTrial: em,
                    hasDiscountUpsell: ec,
                    withTrialOfferCopyVariant: ea,
                });
            "discount" === e_.upsellVariant
                ? (o()(null != u, "Missing premiumSubscription for discount upsell variant"),
                  (n = J.intl.format(J.t.hf6YOY, { planName: V.Ay.getTierDisplayNameByPlanId(u.planId) })))
                : (n = J.intl.format("upsell_trial" === e_.upsellVariant ? J.t.ba1L74 : J.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, W.l9)(k.default.locale, K.oX / 100),
                      freeSubscriptionCount: K.M4,
                  }));
            let ef = p.filter((e) => (0, B.I5)(e)).length,
                eh = (0, V.J$)(m.paymentSourceId),
                { ipCountryCode: eg } = (0, M.A)(),
                eS = "HR" === eg && ed.currency === q.Yr.EUR,
                ex =
                    em && null != u
                        ? (0, i.jsx)(H.Ak, { text: (0, H.zT)(u.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: s()(Q.hA, Q.G3), children: J.intl.string(J.t.jNY1FO) }),
                eb =
                    em && null != u
                        ? (0, i.jsx)(H.Ak, { text: (0, H.zT)(u.currentPeriodEnd), className: Q.jk })
                        : (0, i.jsx)("div", { className: $._X, children: J.intl.string(J.t.jNY1FO) }),
                eI = e_.showExistingSlotNotice
                    ? (0, i.jsx)(el, { existingAvailableSlots: p, canceledCount: ef, premiumSubscription: u })
                    : null,
                eE = e_.showFractionalPremiumBanner ? (0, i.jsx)(U.vi, { fractionalPremiumInfo: x }) : null,
                eA = eh
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === K.WT.YEAR
                              ? J.intl.string(J.t.YDpAzZ)
                              : n === K.WT.MONTH && 1 === t
                                ? J.intl.string(J.t["6ZR3By"])
                                : null;
                      })({ intervalType: f, intervalCount: h }) ?? J.intl.string(J.t.K9Bmze))
                    : J.intl.string(J.t.K9Bmze),
                ey = es
                    ? (0, i.jsx)(E.y, {})
                    : eh
                      ? (0, Y.$g)(ed.amount, ed.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                r = (0, Y.$g)(n, t);
                            return i === K.WT.YEAR
                                ? J.intl.formatToPlainString(J.t["8M04YJ"], { price: r })
                                : i === K.WT.MONTH && 1 === l
                                  ? J.intl.formatToPlainString(J.t.VStWCR, { price: r })
                                  : i === K.WT.MONTH && l > 1
                                    ? J.intl.formatToPlainString(J.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: f, intervalCount: h, amount: ed.amount, currency: ed.currency }),
                eP = es
                    ? (0, i.jsx)(E.y, {})
                    : (0, i.jsx)(D.A, {
                          price: ep,
                          currency: ed.currency,
                          intervalType: f,
                          intervalCount: h,
                          isPrepaidPaymentSource: eh,
                      }),
                eN = es ? (0, i.jsx)(E.y, {}) : (0, Y.$g)(ep, ed.currency),
                ev = [],
                eC = [];
            if (eS) {
                let e = (0, i.jsx)(
                    A.A,
                    {
                        message: J.intl.formatToPlainString(J.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, Y.$g)(7.5345 * ep, q.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ev.push(e), eC.push(e);
            }
            let eT = J.intl.format(J.t.Om31w8, { documentationLink: F.A.getArticleURL(z.MVz.LOCALIZED_PRICING) });
            return (
                ev.push((0, i.jsx)(A.A, { message: eT }, "localized-pricing")),
                eC.push((0, i.jsx)(ee, { message: eT }, "localized-pricing")),
                {
                    isLoading: es,
                    planLabel: eA,
                    planPriceContent: ey,
                    subtotalContent: eP,
                    refreshSubtotalContent: eN,
                    legacyDescriptionContent: ex,
                    refreshDescriptionContent: eb,
                    existingSlotNotice: eI,
                    fractionalBanner: eE,
                    legacyPricingNotes: ev,
                    refreshPricingNotes: eC,
                    discountCallout:
                        "reverse_trial" === e_.upsellVariant
                            ? (0, i.jsx)(w.G, {})
                            : (0, i.jsx)(w.A, { text: n, color: C.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === e_.upsellVariant ? (0, i.jsx)(w.G, {}) : (0, i.jsx)(en, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setForceDisableSubmitButton: a,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: d,
            existingAvailableSlots: p,
            priceOptions: m,
        });
    return (0, i.jsx)(_ ? ei : et, {
        isLoading: h.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        planLabel: h.planLabel,
        planPriceContent: h.planPriceContent,
        subtotalContent: h.subtotalContent,
        refreshSubtotalContent: h.refreshSubtotalContent,
        legacyDescriptionContent: h.legacyDescriptionContent,
        refreshDescriptionContent: h.refreshDescriptionContent,
        fractionalBanner: h.fractionalBanner,
        existingSlotNotice: h.existingSlotNotice,
        discountCallout: h.discountCallout,
        refreshDiscountCallout: h.refreshDiscountCallout,
        legacyPricingNotes: h.legacyPricingNotes,
        refreshPricingNotes: h.refreshPricingNotes,
        refreshNextStepLabel: f,
    });
}
