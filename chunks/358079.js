n.d(t, {
    A0: () => O,
    gI: () => m,
    pK: () => y,
}),
    n(642613),
    n(415506),
    n(539854);
var r = n(512722),
    i = n.n(r),
    a = n(911969),
    o = n(509545),
    s = n(74538),
    l = n(937615),
    c = n(591548),
    u = n(474936),
    d = n(282793),
    f = n(353149),
    p = n(388032);
function _(e) {
    let t = e.slice();
    return (
        t.sort((e, t) => {
            let n = (0, s.uZ)(e.subscriptionPlanId),
                r = (0, s.uZ)(t.subscriptionPlanId);
            return n && !r ? -1 : !n && r ? 1 : 0;
        }),
        t
    );
}
function h(e) {
    return e.filter((e) => {
        let { subscriptionPlanId: t } = e;
        return t !== u.Xh.NONE_MONTH && t !== u.Xh.NONE_YEAR;
    });
}
let m = (e) => h(_((0, c.j)(e.invoiceItems))),
    g = (e, t) => {
        var n;
        return (null != (n = e.discounts) ? n : []).some((e) => e.type === t);
    },
    E = (e, t) => {
        var n, r, i;
        return (
            e.subscriptionPlanPrice -
            (null != (i = null == (r = e.discounts) || null == (n = r.find((e) => e.type === t)) ? void 0 : n.amount)
                ? i
                : 0)
        );
    };
function b(e, t, n, r) {
    let i = g(e, a.eW.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
        case u.Xh.PREMIUM_GROUP_MONTH:
            return p.intl.formatToPlainString(f.default["8bPDtb"], { premiumGroupProductName: (0, d.sO)() });
        case u.Xh.PREMIUM_MONTH_LEGACY:
        case u.Xh.PREMIUM_YEAR_LEGACY:
        case u.Xh.PREMIUM_MONTH_TIER_0:
        case u.Xh.PREMIUM_YEAR_TIER_0:
        case u.Xh.PREMIUM_MONTH_TIER_1:
        case u.Xh.PREMIUM_YEAR_TIER_1:
        case u.Xh.PREMIUM_MONTH_TIER_2:
        case u.Xh.PREMIUM_YEAR_TIER_2:
        case u.Xh.PREMIUM_3_MONTH_TIER_2:
        case u.Xh.PREMIUM_6_MONTH_TIER_2:
            return (0, s.Gf)(e.subscriptionPlanId, i, n, r);
        case u.Xh.PREMIUM_3_MONTH_GUILD:
        case u.Xh.PREMIUM_6_MONTH_GUILD:
            return p.intl.format(p.t.YAIIWp, {
                num: e.quantity,
                intervalCount: t.intervalCount,
            });
        case u.Xh.PREMIUM_MONTH_GUILD:
            return p.intl.format(p.t["3BYyip"], { num: e.quantity });
        case u.Xh.PREMIUM_YEAR_GUILD:
            return p.intl.format(p.t.JVW4UN, { num: e.quantity });
    }
    switch (t.interval) {
        case u.rV.MONTH:
            if (1 === t.intervalCount) return p.intl.formatToPlainString(p.t["6oq128"], { planName: t.name });
            return p.intl.formatToPlainString(p.t["9ydggS"], {
                planName: t.name,
                intervalCount: t.intervalCount,
            });
        case u.rV.YEAR:
            return p.intl.formatToPlainString(p.t.V6UFQM, { planName: t.name });
    }
    throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId));
}
let y = (e, t) => {
        let {
                premiumTrialOffer: n,
                subscriptionPlan: r,
                overrideAmount: a,
                isPrepaidPaymentSource: c,
                currency: u,
            } = t,
            d = null != r ? r : o.Z.get(e.subscriptionPlanId),
            f = null == n ? void 0 : n.subscription_trial;
        i()(null != d, "Missing subscriptionPlan");
        let p = b(
                e,
                d,
                c,
                (0, s.if)({
                    intervalType: null == f ? void 0 : f.interval,
                    intervalCount: null == f ? void 0 : f.interval_count,
                }),
            ),
            _ = null != a ? a : e.amount,
            h = (0, l.T4)(_, u);
        return {
            label: p,
            value: c ? h : (0, l.og)(h, d.interval, d.intervalCount),
            amount: _,
            formattedPrice: h,
            subscriptionPlan: d,
            subscriptionTrial: f,
        };
    },
    O = (e, t) => {
        let n = (0, c.j)(e.invoiceItems),
            r = n.find((e) => e.subscriptionPlanId === t.id);
        i()(null != r, "Expected newPlanInvoiceItem");
        let o = n.find((e) => !(0, s.Z8)(e.subscriptionPlanId) && e.amount < 0),
            d = n.find(
                (e) =>
                    null == e.subscriptionPlanId &&
                    null != e.discounts &&
                    e.discounts.find((e) => e.type === a.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION),
            ),
            f = g(r, a.eW.PREMIUM_TRIAL),
            _ = E(r, a.eW.SUBSCRIPTION_PLAN),
            h = r.quantity * _,
            m = r.amount + (null != o ? o.amount : 0) - h + (null != d ? d.amount : 0),
            b = n.filter(
                (e) =>
                    e.subscriptionPlanId === u.Xh.PREMIUM_MONTH_GUILD ||
                    e.subscriptionPlanId === u.Xh.PREMIUM_YEAR_GUILD,
            ),
            y = b.reduce((e, t) => e + t.amount, 0),
            O = [];
        return (
            0 === m ||
                f ||
                O.push({
                    id: "base-plan-adjustment",
                    label: p.intl.formatToPlainString(p.t.ZSVged, {
                        planName: (0, s.PV)(t.id) ? (0, s.MF)(t.id) : t.name,
                    }),
                    tooltipText: p.intl.string(p.t.JmwQJM),
                    tooltipAriaLabel: "",
                    value: (0, l.T4)(m, e.currency),
                    amount: m,
                }),
            0 !== y &&
                O.push({
                    id: "guild-subscription-adjustment",
                    label: p.intl.string(p.t["+as5ZZ"]),
                    tooltipText: p.intl.format(p.t.UDop9c, {}),
                    tooltipAriaLabel: p.intl.string(p.t.P68ePO),
                    value: (0, l.T4)(y, e.currency),
                    amount: y,
                }),
            {
                newPlanInvoiceItem: r,
                basePlanFullAmount: h,
                basePlanAdjustment: m,
                guildSubscriptionAdjustment: y,
                isTrialItem: f,
                invoiceAdjustmentDisplayItems: O,
                guildSubscriptionInvoiceItems: b,
                promotionItem: d,
                basePlanCreditItem: o,
            }
        );
    };
