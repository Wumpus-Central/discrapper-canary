n.d(t, { q: () => _ });
var i = n(582128),
    l = n(536637),
    r = n.n(l),
    s = n(465323),
    a = n(17928),
    o = n(803496),
    d = n(773669),
    c = n(252424),
    u = n(158045),
    A = n(580630),
    h = n(615396),
    E = n(202541),
    g = n(652215),
    C = n(375708);
function _(e) {
    var t;
    let n,
        l,
        _ = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        I = (0, a.bG)([d.default], () => d.default.locale),
        T =
            _ &&
            null != e &&
            (t = e).status === g.Dmq.ACTIVE &&
            !t.isPurchasedExternally &&
            !(0, u.Nc)(t) &&
            null != (l = null == (n = t.premiumSince) ? null : r()().diff(r()(n).add(1, "day"), "months")) &&
            l <= 4
                ? (function (e) {
                      let t = (0, u.EL)(e);
                      if (null == t || !E.BL.has(t.planId)) return null;
                      let n = E.hd[t.planId]?.skuId;
                      if (null == n) return null;
                      let i = E.zE[n];
                      return null == i ? null : { yearlyPlanId: i, skuId: (0, u.mH)(n) };
                  })(e)
                : null,
        p = (0, h.zz)(T?.yearlyPlanId ?? null),
        S = e?.paymentSourceId ?? void 0,
        { priceOptions: N } = (0, o.A)({
            activeSubscription: e ?? null,
            skuIDs: null != T ? [T.skuId] : [],
            paymentSourceId: S,
            isGift: !1,
        });
    return (0, i.useMemo)(() => {
        if (null == p || null == e || !N.loaded || N.paymentSourceId !== S) return null;
        let t = (0, u.z_)(p, !1, N);
        if (null == t) return null;
        let n = (0, s.LQ)(t.amount, t.currency);
        if (null == n || n <= 0) return null;
        let i = (0, A.$g)(n, t.currency, { maximumFractionDigits: 0 }),
            l = (0, u.L_)({ planId: p.id, priceOptions: N, subscriptionPlan: p }),
            r = null != l ? (0, c.l9)(I, l / 100) : null,
            a = null != r ? C.intl.formatToPlainString(C.t.IAybsG, { discount: r }) : void 0;
        return {
            title: C.intl.formatToPlainString(C.t.cZPXK6, { amount: i }),
            body: C.intl.string(C.t.KD6MH5),
            cta: C.intl.string(C.t.xmQfYw),
            badge: a,
            yearlyPlanId: p.id,
        };
    }, [I, e, p, N, S]);
}
