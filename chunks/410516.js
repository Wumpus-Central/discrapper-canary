"use strict";
n.d(t, {
    iU: () => O,
    TI: () => A,
    U9: () => S,
    pg: () => C,
    tQ: () => R,
    YJ: () => y,
    hm: () => m,
    N1: () => v,
    p2: () => g,
});
var i = n(17928),
    r = n(155718),
    s = n(64700),
    a = n(753390),
    o = n(295405),
    l = n(803496),
    u = n(97352),
    c = n(428262),
    d = n(580630),
    _ = n(38405),
    h = n(615396),
    f = n(543767),
    p = n(422936),
    E = n(788868);
function m(e) {
    return null != e && E.U4.includes(e.discountId);
}
function g(e) {
    return null != e && e.discount.userUsageLimitInterval === E.Ff.MONTH;
}
let A = {
        discountOffer: null,
        applicablePlan: void 0,
        discountInvoicePreview: null,
        discountAmountOff: null,
        discountInvoiceError: null,
    },
    I = new Set();
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "message",
        r = null != t ? (t.id ?? t.discountId) : "unknown",
        s = `${e}:${String(r)}`;
    if (I.has(s)) return;
    I.add(s);
    let a = {
        tags: { app_context: "billing", billing_context: "discount_offer" },
        extra: { userDiscountOfferId: t.id, discountId: t.discountId, ...n },
    };
    "message" === i ? _.A.captureMessage(e, a) : _.A.captureException(Error(e), a);
}
function S(e, t) {
    return (
        null != e &&
        (null == e.discount || null == e.discount.planIds
            ? (T(
                  "Unexpected discountOffer payload in discountOfferHasTier: discount offer has no discount or plan ids",
                  e,
                  { reason: null == e.discount ? "missing_discount" : "missing_plan_ids" },
                  "exception",
              ),
              !1)
            : new Set(e.discount.planIds.map((e) => E.hd[e].skuId)).has(t))
    );
}
function y(e) {
    if (null == e) return;
    let t = e.discount?.planIds;
    return null == t || 0 === t.length
        ? void T("getDiscountOfferApplicablePlan: discount offer has no applicable plan ids", e)
        : t[0];
}
function C(e, t) {
    let n = e?.invoiceItems.find((e) => e.subscriptionPlanId === t),
        i = n?.discounts.find((e) => e.type === r.iS.SUBSCRIPTION_PLAN);
    return i?.amount ?? null;
}
let N = (e, t, n, r) => {
        let u = (function () {
                let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, i.cf)([o.A], () => ({
                    defaultPaymentSourceId: o.A.defaultPaymentSourceId,
                    hasFetchedPaymentSources: o.A.hasFetchedPaymentSources,
                }));
                return (
                    s.useEffect(() => {
                        t || (0, a.$o)();
                    }, [t]),
                    e
                );
            })(),
            d = null != e ? E.hd[e] : void 0,
            _ = (0, c.mH)(d?.skuId ?? E.pe.TIER_2),
            p = (0, h.zz)(e),
            { priceOptions: m } = (0, l.A)({ activeSubscription: null, skuIDs: [_], paymentSourceId: u, isGift: !1 }),
            g = null != t && null != p,
            [A, I] = (0, f.YV)({
                subscriptionId: n?.id,
                items: null != e ? [{ planId: e, quantity: 1 }] : [],
                renewal: null != n,
                preventFetch: !g || r || !m.loaded,
                paymentSourceId: u,
                userDiscountOfferId: t?.id,
            });
        return { priceOptions: m, discountAmountOff: null != e ? C(A, e) : null };
    },
    v = (e) => {
        let t = (0, p.O)(),
            n = (0, p.p)(),
            { priceOptions: r, discountAmountOff: s } = N(e, t ?? n),
            a = (0, i.bG)([u.A], () => null != e && u.A.isLoadedForSKU((0, c.mH)(E.hd[e].skuId)), [e]);
        if (null == e || (null == t && null == n)) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, r, a);
            return (0, d.$g)(t.amount - (s ?? 0), t.currency);
        } catch {
            return null;
        }
    },
    R = (e, t, n) => {
        let { priceOptions: i, discountAmountOff: r } = N(t, n, e),
            s = (0, c.y8)(t, !1, !1, i);
        return (0, d.$g)(s.amount - (r ?? 0), s.currency);
    },
    O = (e, t, n) => {
        let r = (0, i.bG)([u.A], () => u.A.get(e), [e]),
            { priceOptions: s, discountAmountOff: a } = N(e, t, n, null == r);
        if (null == r || null == a) return null;
        try {
            let t = (0, c.y8)(e, !1, !1, s);
            return (0, d.$g)(t.amount - (a ?? 0), t.currency);
        } catch (e) {
            return null;
        }
    };
