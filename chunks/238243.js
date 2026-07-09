"use strict";
n.d(t, { q: () => A });
var i = n(64700),
    r = n(465323),
    a = n(17928),
    s = n(773669),
    l = n(97352),
    o = n(252424),
    d = n(428262),
    c = n(580630),
    u = n(202541),
    _ = n(652215),
    E = n(375708);
function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, a.bG)([s.default], () => s.default.locale),
        A = (0, a.bG)([l.A], () => {
            if (!t || null == e || !(e.status === _.Dmq.ACTIVE && !e.isPurchasedExternally && !(0, d.Nc)(e)))
                return null;
            let n = (function (e) {
                let t = (0, d.EL)(e);
                if (null == t || !u.BL.has(t.planId)) return null;
                let n = u.hd[t.planId]?.skuId;
                return null == n ? null : (u.zE[n] ?? null);
            })(e);
            return null == n ? null : (l.A.get(n) ?? null);
        }, [t, e]);
    return (0, i.useMemo)(() => {
        if (null == A || null == e) return null;
        let t = { paymentSourceId: e.paymentSourceId ?? void 0 },
            i = (0, d.z_)(A, !1, t);
        if (null == i) return null;
        let a = (0, r.LQ)(i.amount, i.currency);
        if (null == a || a <= 0) return null;
        let s = (0, c.$g)(a, i.currency, { maximumFractionDigits: 0 }),
            l = (0, d.L_)({ planId: A.id, priceOptions: t, subscriptionPlan: A }),
            u = null != l ? (0, o.l9)(n, l / 100) : null,
            _ = null != u ? E.intl.formatToPlainString(E.t.IAybsG, { discount: u }) : void 0;
        return {
            title: E.intl.formatToPlainString(E.t.cZPXK6, { amount: s }),
            body: E.intl.string(E.t.KD6MH5),
            cta: E.intl.string(E.t.xmQfYw),
            badge: _,
            yearlyPlanId: A.id,
        };
    }, [n, e, A]);
}
