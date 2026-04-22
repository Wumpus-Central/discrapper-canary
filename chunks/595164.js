"use strict";
n.d(t, { As: () => ea }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    _ = n(408278),
    p = n(834040),
    m = n(499373),
    h = n(834730),
    f = n(403581),
    b = n(663803),
    g = n(320448),
    A = n(534514),
    E = n(104510),
    x = n(695366),
    I = n(289873),
    v = n(726656),
    S = n(793574),
    C = n(688810),
    T = n(531260),
    y = n(94420),
    N = n(404374),
    R = n(543767),
    P = n(881489),
    w = n(477421),
    L = n(234419),
    O = n(163538),
    M = n(363476),
    j = n(156962),
    U = n(72140),
    D = n(773669),
    k = n(287809),
    F = n(97352),
    B = n(473145),
    G = n(975571),
    V = n(252424),
    W = n(927578),
    H = n(580630),
    Y = n(599669),
    Z = n(652215);
n(26279);
var z = n(788868),
    J = n(818348),
    K = n(985018),
    $ = n(406263),
    q = n(7921);
function X(e) {
    return "" === e || "-" === e;
}
function Q(e) {
    let { value: t, onChange: n, minValue: a = 1, maxValue: l = 30, ariaLabel: s } = e,
        [o, c] = r.useState(t);
    r.useEffect(() => {
        c(t);
    }, [t]);
    let d = "number" == typeof o,
        u = (e) => {
            c(e), X(e) || n(e);
        };
    return (0, i.jsxs)("div", {
        className: $.U$,
        children: [
            (0, i.jsx)(_.K, {
                variant: "secondary",
                size: "md",
                icon: p.Q,
                onClick: () => {
                    d && !(o <= a) && u(o - 1);
                },
                "aria-label": K.intl.string(K.t["k+ohJm"]),
                disabled: !d || o <= a,
            }),
            (0, i.jsx)("div", {
                className: $.WJ,
                children: (0, i.jsx)("input", {
                    className: $.Zh,
                    "aria-label": s,
                    inputMode: "numeric",
                    value: `${o}`,
                    onChange: (e) =>
                        ((e) => {
                            if (X(e)) return void u(e);
                            let t = parseInt(e, 10);
                            if (!isNaN(t)) {
                                if (t <= a) return void u(a);
                                if (t >= l) return void u(l);
                                u(t);
                            }
                        })(e.currentTarget.value),
                    onBlur: () => {
                        X(o) && c(t);
                    },
                }),
            }),
            (0, i.jsx)(_.K, {
                variant: "secondary",
                size: "md",
                icon: m.T,
                onClick: () => {
                    d && !(o >= l) && u(o + 1);
                },
                "aria-label": K.intl.string(K.t.w8Sc4B),
                disabled: !d || o >= l,
            }),
        ],
    });
}
function ee(e) {
    let { message: t } = e;
    return (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", className: $.jH, children: t });
}
function et(e) {
    let { text: t } = e;
    return (0, i.jsxs)("div", {
        className: $.Vk,
        children: [
            (0, i.jsx)("div", {
                className: $.D0,
                children: (0, i.jsx)(f.t, {
                    "aria-hidden": "true",
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: $.ue,
                    color: N.k0.PREMIUM_TIER_2,
                }),
            }),
            (0, i.jsx)("div", { className: $.yP, children: t }),
        ],
    });
}
function en(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: a,
        planLabel: s,
        planPriceContent: o,
        subtotalContent: c,
        refreshSubtotalContent: d,
        legacyDescriptionContent: u,
        refreshDescriptionContent: _,
        fractionalBanner: p,
        existingSlotNotice: m,
        discountCallout: h,
        refreshDiscountCallout: f,
        legacyPricingNotes: g,
        refreshPricingNotes: A,
    } = e;
    return (0, i.jsxs)("div", {
        children: [
            p,
            u,
            m,
            (0, i.jsxs)("div", {
                className: q.mP,
                children: [
                    (0, i.jsxs)("div", {
                        className: q.E6,
                        children: [
                            (0, i.jsx)(b.l, {
                                value: n,
                                onChange: (e) => a(e),
                                className: q.__invalid_planSelector,
                                minValue: 1,
                                maxValue: 30,
                            }),
                            (0, i.jsx)("div", { className: q.$0, children: s }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: l()(q.QK, { [q.S]: t }), children: o }),
                ],
            }),
            (0, i.jsx)("div", { className: q.J3 }),
            (0, i.jsxs)("div", {
                className: q.mP,
                children: [
                    (0, i.jsx)("div", { className: q.xp, children: K.intl.string(K.t.RtA7nR) }),
                    (0, i.jsx)("div", {
                        className: l()(q.__invalid_planSelectorSubtotalPrice, { [q.S]: t }),
                        children: c,
                    }),
                ],
            }),
            g.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
            h,
        ],
    });
}
function ei(e) {
    let {
        isLoading: t,
        numGuildBoosts: n,
        setNumGuildBoosts: a,
        refreshNextStepLabel: s,
        planLabel: o,
        planPriceContent: c,
        subtotalContent: d,
        refreshSubtotalContent: u,
        legacyDescriptionContent: _,
        refreshDescriptionContent: p,
        fractionalBanner: m,
        existingSlotNotice: f,
        discountCallout: b,
        refreshDiscountCallout: E,
        legacyPricingNotes: x,
        refreshPricingNotes: I,
    } = e;
    return (0, i.jsxs)("div", {
        className: $.xY,
        children: [
            m,
            (0, i.jsxs)("div", {
                className: $.K3,
                children: [
                    (0, i.jsx)(h.E, {
                        variant: "text-md/medium",
                        className: $.bk,
                        children: K.intl.string(K.t["r+SebU"]),
                    }),
                    (0, i.jsx)(g._, { className: $.bN, color: "currentColor", size: "xs" }),
                    (0, i.jsx)(h.E, { variant: "text-md/medium", className: $.kX, children: s }),
                ],
            }),
            p,
            f,
            (0, i.jsxs)("div", {
                className: $.fh,
                children: [
                    (0, i.jsxs)("div", {
                        className: $.fX,
                        children: [
                            (0, i.jsx)(Q, { value: n, onChange: (e) => a(e), ariaLabel: o, minValue: 1, maxValue: 30 }),
                            (0, i.jsx)(h.E, { variant: "text-md/medium", className: $.ny, children: o }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: l()($.El, { [q.S]: t }), children: c }),
                ],
            }),
            E,
            (0, i.jsxs)("div", {
                className: $.fh,
                children: [
                    (0, i.jsx)(A.D, {
                        variant: "heading-lg/semibold",
                        className: $.O3,
                        children: K.intl.string(K.t.RtA7nR),
                    }),
                    (0, i.jsx)("div", { className: l()($.BU, { [q.S]: t }), children: u }),
                ],
            }),
            I.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t)),
        ],
    });
}
function er(e) {
    let { existingAvailableSlots: t, canceledCount: n, premiumSubscription: r } = e;
    return (0, i.jsxs)("div", {
        className: q.Mv,
        children: [
            (0, i.jsx)(E._, { className: q.T5, color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
            (0, i.jsxs)("div", {
                children: [
                    K.intl.format(K.t.F8xlhr, { slotCount: t.length }),
                    n > 0 && null != r
                        ? (0, i.jsx)(u.m, {
                              text: K.intl.formatToPlainString(K.t.SFpsCH, {
                                  canceledCount: n,
                                  date: r.currentPeriodEnd,
                              }),
                              children: (0, i.jsx)(x.E, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  className: q.Y5,
                                  color: d.A.unsafe_rawColors.YELLOW_300.css,
                              }),
                          })
                        : null,
                ],
            }),
        ],
    });
}
function ea(e) {
    let {
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setNumGuildBoosts: a,
            setForceDisableSubmitButton: s,
            premiumSubscription: d,
            onClickPremiumSubscriptionLink: u,
            existingAvailableSlots: _ = [],
            priceOptions: p,
            isRefreshEnabled: m = !1,
            refreshNextStepLabel: h = K.intl.string(K.t.QBnNHq),
        } = e,
        f = (function (e) {
            let t,
                {
                    premiumSubscriptionPlan: n,
                    numGuildBoosts: a,
                    setForceDisableSubmitButton: s,
                    premiumSubscription: d,
                    onClickPremiumSubscriptionLink: u,
                    existingAvailableSlots: _,
                    priceOptions: p,
                } = e,
                m = (0, O.A)(),
                h = n.interval,
                f = n.intervalCount,
                b = (0, c.bG)([F.A], () => F.A.getForSkuAndInterval((0, W.mH)(z.pe.GUILD), h, f)),
                g = (0, c.bG)([k.default], () => k.default.getCurrentUser()),
                A = (0, T.A)({ forceFetch: !1 });
            o()(null != b, "Missing guildBoostingSubscriptionPlan");
            let E = [{ planId: b.id, quantity: 1 }],
                x = d?.items.find(
                    (e) => e.planId === z.gD.PREMIUM_MONTH_TIER_2 || e.planId === z.gD.PREMIUM_YEAR_TIER_2,
                );
            null != x && E.push(x);
            let X = d?.items.find((e) => e.planId === z.gD.PREMIUM_MONTH_GUILD || e.planId === z.gD.PREMIUM_YEAR_GUILD),
                Q = null == m || !z.uJ.has(m) || null == X,
                { analyticsLocations: en } = (0, C.Ay)(),
                [ei, ea] = (0, R.Kq)({
                    subscriptionId: d?.id,
                    items: E,
                    renewal: !0,
                    paymentSourceId: d?.paymentSourceId,
                    currency: p.currency,
                    preventFetch: Q,
                    analyticsLocations: en,
                    analyticsLocation: S.A.GUILD_BOOSTING_PLAN_SELECT,
                });
            (0, y.F0)(ei);
            let el = !Q && null == ei && null == ea;
            r.useLayoutEffect(() => {
                s(el);
            }, [el, s]);
            let es = (0, L.V)()?.subscription_trial?.sku_id === z.pe.TIER_2,
                eo = W.Ay.hasBoostDiscount(g),
                ec = eo && null != d && W.Ay.isPremiumAtLeast(W.Ay.getPremiumType(d.planId), z.PremiumTypes.TIER_1),
                ed = ei?.findInvoiceItemByPlanId(b.id),
                eu =
                    null != ed
                        ? { amount: ed.amount, tax: 0, taxInclusive: !0, currency: ei.currency }
                        : W.Ay.getPrice(b.id, eo, !1, p),
                e_ = a * eu.amount,
                ep = (0, P.ds)() && eo && null != d,
                em = (function (e) {
                    let t,
                        {
                            existingAvailableSlotsCount: n,
                            fractionalPremiumState: i,
                            isReverseTrial: r,
                            hasDiscountUpsell: a,
                            withTrialOfferCopyVariant: l,
                        } = e;
                    return (
                        (t = r ? "reverse_trial" : a ? "discount" : l ? "upsell_trial" : "upsell"),
                        {
                            showExistingSlotNotice: n > 0,
                            showFractionalPremiumBanner: i === z.xc.FP_SUB_PAUSED,
                            upsellVariant: t,
                        }
                    );
                })({
                    existingAvailableSlotsCount: _.length,
                    fractionalPremiumState: A.fractionalState,
                    isReverseTrial: ep,
                    hasDiscountUpsell: ec,
                    withTrialOfferCopyVariant: es,
                });
            "discount" === em.upsellVariant
                ? (o()(null != d, "Missing premiumSubscription for discount upsell variant"),
                  (t = K.intl.format(K.t.hf6YOY, { planName: W.Ay.getTierDisplayNameByPlanId(d.planId) })))
                : (t = K.intl.format("upsell_trial" === em.upsellVariant ? K.t.ba1L74 : K.t.fkffDT, {
                      onPremiumSubscriptionClick: u,
                      discountPercentage: (0, V.l9)(D.default.locale, z.oX / 100),
                      freeSubscriptionCount: z.M4,
                  }));
            let eh = _.filter((e) => (0, B.I5)(e)).length,
                ef = (0, W.J$)(p.paymentSourceId),
                { ipCountryCode: eb } = (0, w.A)(),
                eg = "HR" === eb && eu.currency === J.Yr.EUR,
                eA =
                    ep && null != d
                        ? (0, i.jsx)(Y.Ak, { text: (0, Y.zT)(d.currentPeriodEnd) })
                        : (0, i.jsx)("div", { className: l()(q.hA, q.G3), children: K.intl.string(K.t.jNY1FO) }),
                eE =
                    ep && null != d
                        ? (0, i.jsx)(Y.Ak, { text: (0, Y.zT)(d.currentPeriodEnd), className: q.jk })
                        : (0, i.jsx)("div", { className: $._X, children: K.intl.string(K.t.jNY1FO) }),
                ex = em.showExistingSlotNotice
                    ? (0, i.jsx)(er, { existingAvailableSlots: _, canceledCount: eh, premiumSubscription: d })
                    : null,
                eI = em.showFractionalPremiumBanner ? (0, i.jsx)(j.vi, { fractionalPremiumInfo: A }) : null,
                ev = ef
                    ? ((function (e) {
                          let { intervalType: t, intervalCount: n = 1 } = e;
                          return t === z.WT.YEAR
                              ? K.intl.string(K.t.YDpAzZ)
                              : t === z.WT.MONTH && 1 === n
                                ? K.intl.string(K.t["6ZR3By"])
                                : null;
                      })({ intervalType: h, intervalCount: f }) ?? K.intl.string(K.t.K9Bmze))
                    : K.intl.string(K.t.K9Bmze),
                eS = el
                    ? (0, i.jsx)(I.y, {})
                    : ef
                      ? (0, H.$g)(eu.amount, eu.currency)
                      : (function (e) {
                            let { amount: t, currency: n, intervalType: i, intervalCount: r = 1 } = e,
                                a = (0, H.$g)(t, n);
                            return i === z.WT.YEAR
                                ? K.intl.formatToPlainString(K.t["8M04YJ"], { price: a })
                                : i === z.WT.MONTH && 1 === r
                                  ? K.intl.formatToPlainString(K.t.VStWCR, { price: a })
                                  : i === z.WT.MONTH && r > 1
                                    ? K.intl.formatToPlainString(K.t.xJvAFU, { price: a })
                                    : null;
                        })({ intervalType: h, intervalCount: f, amount: eu.amount, currency: eu.currency }),
                eC = el
                    ? (0, i.jsx)(I.y, {})
                    : (0, i.jsx)(M.A, {
                          price: e_,
                          currency: eu.currency,
                          intervalType: h,
                          intervalCount: f,
                          isPrepaidPaymentSource: ef,
                      }),
                eT = el ? (0, i.jsx)(I.y, {}) : (0, H.$g)(e_, eu.currency),
                ey = [],
                eN = [];
            if (eg) {
                let e = (0, i.jsx)(
                    v.A,
                    {
                        message: K.intl.formatToPlainString(K.t["9hnZoK"], {
                            kunaPriceWithCurrency: (0, H.$g)(7.5345 * e_, J.Yr.HRK),
                        }),
                    },
                    "hrk-warning",
                );
                ey.push(e), eN.push(e);
            }
            let eR = K.intl.format(K.t.Om31w8, { documentationLink: G.A.getArticleURL(Z.MVz.LOCALIZED_PRICING) });
            return (
                ey.push((0, i.jsx)(v.A, { message: eR }, "localized-pricing")),
                eN.push((0, i.jsx)(ee, { message: eR }, "localized-pricing")),
                {
                    isLoading: el,
                    planLabel: ev,
                    planPriceContent: eS,
                    subtotalContent: eC,
                    refreshSubtotalContent: eT,
                    legacyDescriptionContent: eA,
                    refreshDescriptionContent: eE,
                    existingSlotNotice: ex,
                    fractionalBanner: eI,
                    legacyPricingNotes: ey,
                    refreshPricingNotes: eN,
                    discountCallout:
                        "reverse_trial" === em.upsellVariant
                            ? (0, i.jsx)(U.G, {})
                            : (0, i.jsx)(U.A, { text: t, color: N.k0.PREMIUM_TIER_2 }),
                    refreshDiscountCallout:
                        "reverse_trial" === em.upsellVariant ? (0, i.jsx)(U.G, {}) : (0, i.jsx)(et, { text: t }),
                }
            );
        })({
            premiumSubscriptionPlan: t,
            numGuildBoosts: n,
            setForceDisableSubmitButton: s,
            premiumSubscription: d,
            onClickPremiumSubscriptionLink: u,
            existingAvailableSlots: _,
            priceOptions: p,
        });
    return (0, i.jsx)(m ? ei : en, {
        isLoading: f.isLoading,
        numGuildBoosts: n,
        setNumGuildBoosts: a,
        planLabel: f.planLabel,
        planPriceContent: f.planPriceContent,
        subtotalContent: f.subtotalContent,
        refreshSubtotalContent: f.refreshSubtotalContent,
        legacyDescriptionContent: f.legacyDescriptionContent,
        refreshDescriptionContent: f.refreshDescriptionContent,
        fractionalBanner: f.fractionalBanner,
        existingSlotNotice: f.existingSlotNotice,
        discountCallout: f.discountCallout,
        refreshDiscountCallout: f.refreshDiscountCallout,
        legacyPricingNotes: f.legacyPricingNotes,
        refreshPricingNotes: f.refreshPricingNotes,
        refreshNextStepLabel: h,
    });
}
