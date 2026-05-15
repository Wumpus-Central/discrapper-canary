"use strict";
n.d(t, { tQ: () => g, N1: () => m, U9: () => p, iU: () => A });
var i = n(17928),
    r = n(155718),
    s = n(853398),
    a = n(64700),
    o = n(753390),
    l = n(295405),
    u = n(97352),
    c = n(428262),
    d = n(580630),
    _ = n(543767),
    f = n(422936),
    h = n(788868);
function p(e, t) {
    return null != e && new Set(e.discount?.planIds.map((e) => h.hd[e].skuId)).has(t);
}
let E = (e, t, n, u) => {
        let d = (function () {
                let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, i.cf)([l.A], () => ({
                    defaultPaymentSourceId: l.A.defaultPaymentSourceId,
                    hasFetchedPaymentSources: l.A.hasFetchedPaymentSources,
                }));
                return (
                    a.useEffect(() => {
                        t || (0, o.$o)();
                    }, [t]),
                    e
                );
            })(),
            f = h.hd[e],
            p = (0, c.mH)(f?.skuId ?? h.pe.TIER_2),
            { priceOptions: E } = (0, s.A)({ activeSubscription: null, skuIDs: [p], paymentSourceId: d, isGift: !1 }),
            m = null != t,
            [g, A] = (0, _.YV)({
                subscriptionId: n?.id,
                items: [{ planId: e, quantity: 1 }],
                renewal: null != n,
                preventFetch: !m || u,
                paymentSourceId: d,
                currency: E.currency,
                userDiscountOfferId: t?.id,
            });
        return {
            priceOptions: E,
            discountAmountOff: g?.invoiceItems
                ?.find((t) => t.subscriptionPlanId === e)
                ?.discounts?.find((e) => e.type === r.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    m = (e) => {
        let { priceOptions: t, discountAmountOff: n } = E(e, (0, f.O)()),
            i = (0, c.y8)(e, !1, !1, t);
        return (0, d.$g)(i.amount - (n ?? 0), i.currency);
    },
    g = (e, t, n) => {
        let { priceOptions: i, discountAmountOff: r } = E(t, n, e),
            s = (0, c.y8)(t, !1, !1, i);
        return (0, d.$g)(s.amount - (r ?? 0), s.currency);
    },
    A = (e, t, n) => {
        let r = (0, i.bG)([u.A], () => u.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = E(e, t, n, null == r);
        if (null == r || null == a) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, s);
            return (0, d.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
