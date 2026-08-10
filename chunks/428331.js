"use strict";
n.d(t, { q: () => f });
var i = n(582128),
    r = n(989349),
    a = n.n(r),
    s = n(465323),
    l = n(17928),
    o = n(803496),
    d = n(773669),
    c = n(252424),
    u = n(158045),
    _ = n(580630),
    E = n(615396),
    A = n(202541),
    h = n(652215),
    I = n(375708);
function f(e) {
    var t;
    let n,
        r,
        f = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        p = (0, l.bG)([d.default], () => d.default.locale),
        T =
            f &&
            null != e &&
            (t = e).status === h.Dmq.ACTIVE &&
            !t.isPurchasedExternally &&
            !(0, u.Nc)(t) &&
            null != (r = null == (n = t.premiumSince) ? null : a()().diff(a()(n).add(1, "day"), "months")) &&
            r <= 4
                ? (function (e) {
                      let t = (0, u.EL)(e);
                      if (null == t || !A.BL.has(t.planId)) return null;
                      let n = A.hd[t.planId]?.skuId;
                      if (null == n) return null;
                      let i = A.zE[n];
                      return null == i ? null : { yearlyPlanId: i, skuId: (0, u.mH)(n) };
                  })(e)
                : null,
        m = (0, E.zz)(T?.yearlyPlanId ?? null),
        g = e?.paymentSourceId ?? void 0,
        { priceOptions: S } = (0, o.A)({
            activeSubscription: e ?? null,
            skuIDs: null != T ? [T.skuId] : [],
            paymentSourceId: g,
            isGift: !1,
        });
    return (0, i.useMemo)(() => {
        if (null == m || null == e || !S.loaded || S.paymentSourceId !== g) return null;
        let t = (0, u.z_)(m, !1, S);
        if (null == t) return null;
        let n = (0, s.LQ)(t.amount, t.currency);
        if (null == n || n <= 0) return null;
        let i = (0, _.$g)(n, t.currency, { maximumFractionDigits: 0 }),
            r = (0, u.L_)({ planId: m.id, priceOptions: S, subscriptionPlan: m }),
            a = null != r ? (0, c.l9)(p, r / 100) : null,
            l = null != a ? I.intl.formatToPlainString(I.t.IAybsG, { discount: a }) : void 0;
        return {
            title: I.intl.formatToPlainString(I.t.cZPXK6, { amount: i }),
            body: I.intl.string(I.t.KD6MH5),
            cta: I.intl.string(I.t.xmQfYw),
            badge: l,
            yearlyPlanId: m.id,
        };
    }, [p, e, m, S, g]);
}
