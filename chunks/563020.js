n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(155718),
    s = n(71804),
    l = n(97352),
    o = n(448645),
    d = n(580630),
    c = n(874638),
    u = n(682901),
    _ = n(88001),
    E = n(107198),
    A = n(792996);
function f(e, t) {
    return (e.discounts ?? []).some((e) => e.type === t);
}
function h(e, t, n, i) {
    let r = f(e, a.iS.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case u.gD.PREMIUM_GROUP_MONTH:
            return A.intl.formatToPlainString(E.default["8bPDtb"], { premiumGroupProductName: (0, _.DP)() });
        case u.gD.PREMIUM_MONTH_LEGACY:
        case u.gD.PREMIUM_YEAR_LEGACY:
        case u.gD.PREMIUM_MONTH_TIER_0:
        case u.gD.PREMIUM_YEAR_TIER_0:
        case u.gD.PREMIUM_MONTH_TIER_1:
        case u.gD.PREMIUM_YEAR_TIER_1:
        case u.gD.PREMIUM_MONTH_TIER_2:
        case u.gD.PREMIUM_YEAR_TIER_2:
        case u.gD.PREMIUM_3_MONTH_TIER_2:
        case u.gD.PREMIUM_6_MONTH_TIER_2:
            return (0, o.Mn)(e.subscriptionPlanId, r, n, i);
        case u.MM.PREMIUM_GIFT_MONTH_TIER_2:
            return (0, o.Mn)(u.gD.PREMIUM_MONTH_TIER_2, r, n, i);
        case u.MM.PREMIUM_GIFT_YEAR_TIER_2:
            return (0, o.Mn)(u.gD.PREMIUM_YEAR_TIER_2, r, n, i);
        case u.gD.PREMIUM_3_MONTH_GUILD:
        case u.gD.PREMIUM_6_MONTH_GUILD:
            return A.intl.format(A.t.YAIIWp, { num: e.quantity, intervalCount: t.intervalCount });
        case u.gD.PREMIUM_MONTH_GUILD:
            return A.intl.format(A.t["3BYyip"], { num: e.quantity });
        case u.gD.PREMIUM_YEAR_GUILD:
            return A.intl.format(A.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case u.WT.MONTH:
            if (1 === t.intervalCount) return A.intl.formatToPlainString(A.t["6oq128"], { planName: t.name });
            return A.intl.formatToPlainString(A.t["9ydggS"], { planName: t.name, intervalCount: t.intervalCount });
        case u.WT.YEAR:
            return A.intl.formatToPlainString(A.t.V6UFQM, { planName: t.name });
    }
    throw Error(`Unexpected invoice plan: ${e.subscriptionPlanId}`);
}
function I(e) {
    if (null != e.discounts) return e.discounts.find((e) => e.type === a.iS.SUBSCRIPTION_PLAN);
}
function p(e, t) {
    let n = (0, c.Z)(e.invoiceItems);
    return { subscriptionPlanInvoiceItem: n.find((e) => e.subscriptionPlanId === t), coalescedInvoiceItems: n };
}
n.d(
    t,
    {},
    {
        Ae: function (e, t) {
            let {
                    subscriptionTrial: n,
                    subscriptionPlan: i,
                    overrideAmount: s,
                    isPrepaidPaymentSource: c,
                    currency: u,
                } = t,
                _ = i ?? l.A.get(e.subscriptionPlanId);
            r()(null != _, "Missing subscriptionPlan");
            let E = n?.intervalCount,
                A = h(e, _, c, (0, o.re)({ intervalType: n?.interval, intervalCount: E })),
                f = null != s ? s : e.amount,
                p = (0, d.$g)(f, u),
                m = c ? p : (0, d.CE)(p, _.interval, _.intervalCount),
                g = I(e),
                T = e.discounts ?? [],
                S = T.find((e) => e.type === a.iS.PREMIUM_TRIAL),
                N = T.find((e) => e.type === a.iS.ENTITLEMENT),
                C = T.reduce((e, t) => e + t.amount, 0),
                O = f + (g?.amount ?? 0);
            return {
                label: A,
                value: m,
                originalAmount: e.subscriptionPlanPrice * e.quantity,
                amount: f,
                amountWithoutDiscount: O,
                discountAmountOff: C,
                formattedPrice: p,
                subscriptionPlan: _,
                subscriptionTrial: n,
                trialDiscount: S,
                subscriptionDiscount: g,
                entitlementDiscount: N,
            };
        },
        Lw: function (e, t) {
            let { isCustomGift: n, isPrepaidPaymentSource: i } = t;
            return n
                ? (0, o.D8)(e.interval, !0, void 0, e.intervalCount, !0, (0, o.m6)(e.id))
                : A.intl.formatToPlainString(A.t.LQLxkW, { planName: (0, o.Mn)(e.id, !1, i) });
        },
        NL: I,
        Q8: function (e, t) {
            let n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { isSubscriptionUpdate: !1 },
                r = null != t ? (0, c.Z)(t.invoiceItems) : null,
                a = null != t ? (0, o.Ge)(t) : null,
                { intervalType: s, intervalCount: l } = (0, o.Ge)(e),
                d = null != a && (a.intervalType !== s || a.intervalCount !== l);
            return ((n = (0, c.Z)(e.invoiceItems).slice()).sort((e, t) => {
                let n = (0, o.xq)(e.subscriptionPlanId),
                    i = (0, o.xq)(t.subscriptionPlanId);
                return n && !i ? -1 : !n && i ? 1 : 0;
            }),
            n)
                .filter((e) => {
                    let { subscriptionPlanId: t } = e;
                    return t !== u.gD.NONE_MONTH && t !== u.gD.NONE_YEAR;
                })
                .map((e) => {
                    let t =
                            null != r &&
                            !r.some((t) => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity),
                        n = !i.isSubscriptionUpdate || t;
                    return {
                        ...e,
                        showGuildSubscriptionAdjustmentTooltip:
                            d &&
                            (e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD ||
                                e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD ||
                                e.subscriptionPlanId === u.gD.PREMIUM_3_MONTH_GUILD ||
                                e.subscriptionPlanId === u.gD.PREMIUM_6_MONTH_GUILD),
                        isAddedSubscriptionInvoiceItem: n,
                    };
                });
        },
        Ro: function (e, t) {
            return e.invoiceItems.some((e) => (e.discounts ?? []).some((e) => e.discount_id === t));
        },
        SA: function (e, t) {
            var n;
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.id,
                { subscriptionPlanInvoiceItem: r, coalescedInvoiceItems: l } = p(e, i ?? t.id);
            if (null == r)
                throw new s.v({
                    message: "Expected newPlanInvoiceItem",
                    extraSentryInformation: { invoice: e, subscriptionPlan: t },
                });
            let c = l.find((e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount < 0),
                _ = l.find(
                    (e) =>
                        null == e.subscriptionPlanId &&
                        null != e.discounts &&
                        null != e.discounts.find((e) => e.type === a.iS.PREMIUM_LEGACY_UPGRADE_PROMOTION),
                ),
                E = f(r, a.iS.PREMIUM_TRIAL),
                h =
                    ((n = a.iS.SUBSCRIPTION_PLAN),
                    r.subscriptionPlanPrice - (r.discounts?.find((e) => e.type === n)?.amount ?? 0)),
                I = r.quantity * h,
                m = r.amount + (null != c ? c.amount : 0) - I + (null != _ ? _.amount : 0),
                g = l.filter(
                    (e) =>
                        e.subscriptionPlanId === u.gD.PREMIUM_MONTH_GUILD ||
                        e.subscriptionPlanId === u.gD.PREMIUM_YEAR_GUILD,
                ),
                T = g.reduce((e, t) => e + t.amount, 0),
                S = [];
            return (
                0 === m ||
                    E ||
                    S.push({
                        id: "base-plan-adjustment",
                        label: A.intl.formatToPlainString(A.t.ZSVged, {
                            planName: (0, o.ys)(t.id) ? (0, o.RH)(t.id) : t.name,
                        }),
                        tooltipText: A.intl.string(A.t.JmwQJM),
                        tooltipAriaLabel: "",
                        value: (0, d.$g)(m, e.currency),
                        amount: m,
                        lineItemType: "adjustment",
                    }),
                0 !== T &&
                    S.push({
                        id: "guild-subscription-adjustment",
                        label: A.intl.string(A.t["+as5ZZ"]),
                        tooltipText: A.intl.format(A.t.UDop9c, {}),
                        tooltipAriaLabel: A.intl.string(A.t.P68ePO),
                        value: (0, d.$g)(T, e.currency),
                        amount: T,
                        lineItemType: "adjustment",
                    }),
                {
                    newPlanInvoiceItem: r,
                    basePlanFullAmount: I,
                    basePlanAdjustment: m,
                    guildSubscriptionAdjustment: T,
                    isTrialItem: E,
                    invoiceAdjustmentDisplayItems: S,
                    guildSubscriptionInvoiceItems: g,
                    promotionItem: _,
                    basePlanCreditItem: c,
                }
            );
        },
        Sb: p,
        Tp: h,
        de: function (e) {
            let t,
                {
                    overrideRenewalDate: n,
                    currentInvoice: i,
                    renewalInvoice: r,
                    isSubscriptionUpdate: a,
                    fractionalPremiumInfo: s,
                } = e;
            return null != n
                ? n
                : ((t = null != i ? i.subscriptionPeriodEnd : a ? r.subscriptionPeriodStart : r.subscriptionPeriodEnd),
                    null != s && s.isFractionalPremiumActive)
                  ? (0, o._e)(t, s.unactivatedUnits, s.currentEntitlementEndsAt)
                  : t;
        },
        wt: function (e, t) {
            let n,
                i,
                r,
                { isPrepaidPaymentSource: a = !1 } = t,
                { guildSubscriptionInvoiceItem: s, ...u } =
                    ((i = (n = (0, c.Z)(e.invoiceItems)).find(
                        (e) => !(0, o.z4)(e.subscriptionPlanId) && e.amount >= 0,
                    )),
                    (r = n.find((e) => (0, o.z4)(e.subscriptionPlanId) && e.amount >= 0)),
                    { coalescedInvoiceItems: n, basePlanInvoiceItem: i, guildSubscriptionInvoiceItem: r }),
                _ = null != s ? l.A.get(s.subscriptionPlanId) : null,
                E = (function (e, t, n) {
                    let { currency: i, isPrepaidPaymentSource: r } = n,
                        a = null != t ? t.amount : 0,
                        s = (0, d.$g)(a, i),
                        l = null != e ? (0, d.CE)(s, e.interval, e.intervalCount) : 0;
                    return {
                        guildSubscriptionAmount: a,
                        formattedGuildBoostPrice: s,
                        formattedGuildBoostRate: l,
                        guildBoostItemLabel:
                            null != t && null != e
                                ? A.intl.formatToPlainString(A.t.a3cAOg, {
                                      numGuildSubscriptions: t.quantity,
                                      planName: (0, o.Mn)(e.id, !1, r),
                                  })
                                : null,
                    };
                })(_, s, { currency: e.currency, isPrepaidPaymentSource: a });
            return { ...u, guildSubscriptionInvoiceItem: s, guildSubscriptionPlan: _, ...E };
        },
    },
);
