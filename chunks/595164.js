t.d(n, { As: () => J }), t(321073);
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(284009),
    o = t.n(a),
    c = t(311907),
    u = t(827734),
    d = t(990078),
    p = t(397927),
    m = t(726656),
    _ = t(793574),
    x = t(688810),
    f = t(531260),
    h = t(404374),
    S = t(413748),
    g = t(543767),
    b = t(881489),
    I = t(477421),
    P = t(234419),
    y = t(163538),
    A = t(363476),
    E = t(156962),
    v = t(72140),
    C = t(773669),
    N = t(287809),
    j = t(97352),
    T = t(473145),
    M = t(975571),
    L = t(252424),
    R = t(927578),
    D = t(580630),
    U = t(599669),
    w = t(652215);
t(26279);
var k = t(788868),
    O = t(818348),
    G = t(985018),
    B = t(472743),
    W = t(877985);
function F(e) {
    return "" === e || "-" === e;
}
function Y(e) {
    let { value: n, onChange: t, minValue: r = 1, maxValue: s = 30, ariaLabel: a } = e,
        [o, c] = l.useState(n);
    l.useEffect(() => {
        c(n);
    }, [n]);
    let u = "number" == typeof o,
        d = (e) => {
            c(e), F(e) || t(e);
        };
    return (0, i.jsxs)("div", {
        className: B.U$,
        children: [
            (0, i.jsx)(p.K0, {
                variant: "secondary",
                size: "md",
                icon: p.QGg,
                onClick: () => {
                    u && !(o <= r) && d(o - 1);
                },
                "aria-label": G.intl.string(G.t["k+ohJm"]),
                disabled: !u || o <= r,
            }),
            (0, i.jsx)("div", {
                className: B.WJ,
                children: (0, i.jsx)("input", {
                    className: B.Zh,
                    "aria-label": a,
                    inputMode: "numeric",
                    value: `${o}`,
                    onChange: (e) =>
                        ((e) => {
                            if (F(e)) return void d(e);
                            let n = parseInt(e, 10);
                            if (!isNaN(n)) {
                                if (n <= r) return void d(r);
                                if (n >= s) return void d(s);
                                d(n);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        F(o) && c(n);
                    },
                }),
            }),
            (0, i.jsx)(p.K0, {
                variant: "secondary",
                size: "md",
                icon: p.TIR,
                onClick: () => {
                    u && !(o >= s) && d(o + 1);
                },
                "aria-label": G.intl.string(G.t.w8Sc4B),
                disabled: !u || o >= s,
            }),
        ],
    });
}
function V(e) {
    let { message: n } = e;
    return (0, i.jsx)(p.Text, { variant: "text-xs/normal", color: "text-muted", className: B.jH, children: n });
}
function H(e) {
    let { text: n } = e;
    return (0, i.jsxs)("div", {
        className: B.Vk,
        children: [
            (0, i.jsx)("div", {
                className: B.D0,
                children: (0, i.jsx)(p.tvc, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: B.ue,
                    color: h.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: B.yP, children: n }),
        ],
    });
}
function K(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        planLabel: a,
        planPriceContent: o,
        subtotalContent: c,
        refreshSubtotalContent: u,
        legacyDescriptionContent: d,
        refreshDescriptionContent: m,
        fractionalBanner: _,
        existingSlotNotice: x,
        discountCallout: f,
        refreshDiscountCallout: h,
        legacyPricingNotes: S,
        refreshPricingNotes: g,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            _,
            d,
            x,
            (0, i.jsxs)("div", {
                className: W.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: W.E6,
                        children: [
                            (0, i.jsx)(p.lw3, {
                                value: t,
                                onChange: (e) => r(e),
                                className: W.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: W.$0, children: a }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: s()(W.QK, { [W.S]: n }), children: o }),
                ],
            }),
            (0, i.jsx)("div", { className: W.J3 }),
            (0, i.jsxs)("div", {
                className: W.mP,
                children: [
                    (0, i.jsx)("div", { className: W.xp, children: G.intl.string(G.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: s()(W.__invalid_planSelectorSubtotalPrice, { [W.S]: n }),
                        children: c,
                    }),
                ],
            }),
            S.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
            f,
        ],
    });
}
function z(e) {
    let {
        isLoading: n,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        refreshNextStepLabel: a,
        planLabel: o,
        planPriceContent: c,
        subtotalContent: u,
        refreshSubtotalContent: d,
        legacyDescriptionContent: m,
        refreshDescriptionContent: _,
        fractionalBanner: x,
        existingSlotNotice: f,
        discountCallout: h,
        refreshDiscountCallout: S,
        legacyPricingNotes: g,
        refreshPricingNotes: b,
    } = e;
    return (0, i.jsxs)("div", {
        className: B.xY,
        children: [
            x,
            (0, i.jsxs)("div", {
                className: B.K3,
                children: [
                    (0, i.jsx)(p.Text, {
                        variant: "text-md/medium",
                        className: B.bk,
                        children: G.intl.string(G.t["r+SebU"]),
                    }),
                    (0, i.jsx)(p._BQ, { className: B.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(p.Text, { variant: "text-md/medium", className: B.kX, children: a }),
                ],
            }),
            _,
            f,
            (0, i.jsxs)("div", {
                className: B.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: B.fX,
                        children: [
                            (0, i.jsx)(Y, { value: t, onChange: (e) => r(e), ariaLabel: o, minValue: 1, maxValue: 30 }),
                            (0, i.jsx)(p.Text, { variant: "text-md/medium", className: B.ny, children: o }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: s()(B.El, { [W.S]: n }), children: c }),
                ],
            }),
            S,
            (0, i.jsxs)("div", {
                className: B.fh,
                children: [
                    (0, i.jsx)(p.Heading, {
                        variant: "heading-lg/semibold",
                        className: B.O3,
                        children: G.intl.string(G.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: s()(B.BU, { [W.S]: n }), children: d }),
                ],
            }),
            b.map((e, n) => (0, i.jsx)(l.Fragment, { children: e }, n)),
        ],
    });
}
function q(e) {
    let { existingAvailableSlots: n, canceledCount: t, premiumSubscription: l } = e;
    return (0, i.jsxs)("div", {
        className: W.Mv,
        children: [
            (0, i.jsx)(p._Jp, { className: W.T5, color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    G.intl.format(G.t.F8xlhr, { slotCount: n.length }),
                    t > 0 && null != l
                        ? (0, i.jsx)(d.m, {
                              text: G.intl.formatToPlainString(G.t.SFpsCH, {
                                  canceledCount: t,
                                  date: l.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(p.EpV, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: W.Y5,
                                  color: u.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function J(e) {
    let {
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setNumGuildBoosts: r,
            setForceDisableSubmitButton: a,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: d,
            existingAvailableSlots: F = [],
            priceOptions: Y,
            isRefreshEnabled: J = !1,
            refreshNextStepLabel: $ = G.intl.string(G.t.QBnNHq),
        } = e,
        Q = (function (e) {
            let n,
                {
                    premiumSubscriptionPlan: t,
                    numGuildBoosts: r,
                    setForceDisableSubmitButton: a,
                    premiumSubscription: u,
                    onClickPremiumSubscriptionLink: d,
                    existingAvailableSlots: F,
                    priceOptions: Y,
                } = e,
                K = (0, y.A)(),
                z = t.interval,
                J = t.intervalCount,
                $ = (0, c.bG)([j.A], () => j.A.getForSkuAndInterval((0, R.mH)(k.pe.GUILD), z, J)),
                Q = (0, c.bG)([N.default], () => N.default.getCurrentUser()),
                X = (0, f.A)({ forceFetch: !1 });
            o()(null != $, "Missing guildBoostingSubscriptionPlan");
            let Z = [{ planId: $.id, quantity: 1 }],
                ee = u?.items.find(
                    (e) => e.planId === k.gD.PREMIUM_MONTH_TIER_2 || e.planId === k.gD.PREMIUM_YEAR_TIER_2,
                );
            null != ee && Z.push(ee);
            let en = u?.items.find(
                    (e) => e.planId === k.gD.PREMIUM_MONTH_GUILD || e.planId === k.gD.PREMIUM_YEAR_GUILD,
                ),
                et = null == K || !k.uJ.has(K) || null == en,
                { analyticsLocations: ei } = (0, x.Ay)(),
                [el, er] = (0, g.Kq)({
                    subscriptionId: u?.id,
                    items: Z,
                    renewal: !0,
                    paymentSourceId: u?.paymentSourceId,
                    currency: Y.currency,
                    preventFetch: et,
                    analyticsLocations: ei,
                    analyticsLocation: _.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, S.F0)(el);
            let es = !et && null == el && null == er;
            l.useLayoutEffect(() => {
                a(es);
            }, [es, a]);
            let ea = (0, P.V)()?.subscription_trial?.sku_id === k.pe.TIER_2,
                eo = R.Ay.hasBoostDiscount(Q),
                ec = eo && null != u && R.Ay.isPremiumAtLeast(R.Ay.getPremiumType(u.planId), k.PremiumTypes.TIER_1),
                eu = el?.findInvoiceItemByPlanId($.id),
                ed =
                    null != eu
                        ? { amount: eu.amount, tax: 0, taxInclusive: !0, currency: el.currency }
                        : R.Ay.getPrice($.id, eo, !1, Y),
                ep = r * ed.amount,
                em = (0, b.ds)() && eo && null != u,
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
                            showFractionalPremiumBanner: i === k.xc.FP_SUB_PAUSED,
                            upsellVariant: n,
                        }
                    );
                })({
                    existingAvailableSlotsCount: F.length,
                    fractionalPremiumState: X.fractionalState,
                    isReverseTrial: em,
                    hasDiscountUpsell: ec,
                    withTrialOfferCopyVariant: ea,
                });
            "discount" === e_.upsellVariant
                ? (o()(null != u, "Missing premiumSubscription for discount upsell variant"),
                  (n = G.intl.format(G.t.hf6YOY, { planName: R.Ay.getTierDisplayNameByPlanId(u.planId) })))
                : (n = G.intl.format("upsell_trial" === e_.upsellVariant ? G.t.ba1L74 : G.t.fkffDT, {
                      onPremiumSubscriptionClick: d,
                      discountPercentage: (0, L.l9)(C.default.locale, k.oX / 100),
                      freeSubscriptionCount: k.M4,
                  }));
            let ex = F.filter((e) => (0, T.I5)(e)).length,
                ef = (0, R.J$)(Y.paymentSourceId),
                { ipCountryCode: eh } = (0, I.A)(),
                eS = "HR" === eh && ed.currency === O.Yr.EUR,
                eg =
                    em && null != u
                        ? (0, i.jsx)(U.Ak, { text: (0, U.zT)(u.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: s()(W.hA, W.G3), children: G.intl.string(G.t.jNY1FO) }),
                eb =
                    em && null != u
                        ? (0, i.jsx)(U.Ak, { text: (0, U.zT)(u.currentPeriodEnd), className: W.jk })
                        : (0, i.jsx)("div", { className: B._X, children: G.intl.string(G.t.jNY1FO) }),
                eI = e_.showExistingSlotNotice
                    ? (0, i.jsx)(q, { existingAvailableSlots: F, canceledCount: ex, premiumSubscription: u })
                    : null,
                eP = e_.showFractionalPremiumBanner ? (0, i.jsx)(E.vi, { fractionalPremiumInfo: X }) : null,
                ey = ef
                    ? ((function (e) {
                          let { intervalType: n, intervalCount: t = 1 } = e;
                          return n === k.WT.YEAR
                              ? G.intl.string(G.t.YDpAzZ)
                              : n === k.WT.MONTH && 1 === t
                                ? G.intl.string(G.t["6ZR3By"])
                                : null;
                      })({ intervalType: z, intervalCount: J }) ?? G.intl.string(G.t.K9Bmze))
                    : G.intl.string(G.t.K9Bmze),
                eA = es
                    ? (0, i.jsx)(p.y$y, {})
                    : ef
                      ? (0, D.$g)(ed.amount, ed.currency)
                      : (function (e) {
                            let { amount: n, currency: t, intervalType: i, intervalCount: l = 1 } = e,
                                r = (0, D.$g)(n, t);
                            return i === k.WT.YEAR
                                ? G.intl.formatToPlainString(G.t["8M04YJ"], { price: r })
                                : i === k.WT.MONTH && 1 === l
                                  ? G.intl.formatToPlainString(G.t.VStWCR, { price: r })
                                  : i === k.WT.MONTH && l > 1
                                    ? G.intl.formatToPlainString(G.t.xJvAFU, { price: r })
                                    : null;
                        })({ intervalType: z, intervalCount: J, amount: ed.amount, currency: ed.currency }),
                eE = es
                    ? (0, i.jsx)(p.y$y, {})
                    : (0, i.jsx)(A.A, {
                          price: ep,
                          currency: ed.currency,
                          intervalType: z,
                          intervalCount: J,
                          isPrepaidPaymentSource: ef,
                      }),
                ev = es ? (0, i.jsx)(p.y$y, {}) : (0, D.$g)(ep, ed.currency),
                eC = [],
                eN = [];
            if (eS) {
                let e = (0, i.jsx)(
                    m.A,
                    {
                        message: G.intl.formatToPlainString(G.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, D.$g)(7.5345 * ep, O.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                eC.push(e), eN.push(e);
            }
            let ej = G.intl.format(G.t.Om31w8, { documentationLink: M.A.getArticleURL(w.MVz.LOCALIZED_PRICING) });
            return (
                eC.push((0, i.jsx)(m.A, { message: ej }, "localized-pricing")),
                eN.push((0, i.jsx)(V, { message: ej }, "localized-pricing")),
                {
                    isLoading: es,
                    planLabel: ey,
                    planPriceContent: eA,
                    subtotalContent: eE,
                    refreshSubtotalContent: ev,
                    legacyDescriptionContent: eg,
                    refreshDescriptionContent: eb,
                    existingSlotNotice: eI,
                    fractionalBanner: eP,
                    legacyPricingNotes: eC,
                    refreshPricingNotes: eN,
                    discountCallout:
                        "reverse_trial" === e_.upsellVariant
                            ? (0, i.jsx)(v.G, {})
                            : (0, i.jsx)(v.A, { text: n, color: h.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === e_.upsellVariant ? (0, i.jsx)(v.G, {}) : (0, i.jsx)(H, { text: n }),
                }
            );
        })({
            premiumSubscriptionPlan: n,
            numGuildBoosts: t,
            setForceDisableSubmitButton: a,
            premiumSubscription: u,
            onClickPremiumSubscriptionLink: d,
            existingAvailableSlots: F,
            priceOptions: Y,
        });
    return (0, i.jsx)(J ? z : K, {
        isLoading: Q.isLoading,
        numGuildBoosts: t,
        setNumGuildBoosts: r,
        planLabel: Q.planLabel,
        planPriceContent: Q.planPriceContent,
        subtotalContent: Q.subtotalContent,
        refreshSubtotalContent: Q.refreshSubtotalContent,
        legacyDescriptionContent: Q.legacyDescriptionContent,
        refreshDescriptionContent: Q.refreshDescriptionContent,
        fractionalBanner: Q.fractionalBanner,
        existingSlotNotice: Q.existingSlotNotice,
        discountCallout: Q.discountCallout,
        refreshDiscountCallout: Q.refreshDiscountCallout,
        legacyPricingNotes: Q.legacyPricingNotes,
        refreshPricingNotes: Q.refreshPricingNotes,
        refreshNextStepLabel: $,
    });
}
