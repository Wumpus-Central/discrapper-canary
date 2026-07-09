n.d(t, { q: () => h });
var i = n(64700),
    l = n(465323),
    r = n(17928),
    s = n(773669),
    a = n(97352),
    o = n(252424),
    d = n(428262),
    c = n(580630),
    u = n(202541),
    A = n(652215),
    E = n(375708);
function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, r.bG)([s.default], () => s.default.locale),
        h = (0, r.bG)([a.A], () => {
            if (!t || null == e || !(e.status === A.Dmq.ACTIVE && !e.isPurchasedExternally && !(0, d.Nc)(e)))
                return null;
            let n = (function (e) {
                let t = (0, d.EL)(e);
                if (null == t || !u.BL.has(t.planId)) return null;
                let n = u.hd[t.planId]?.skuId;
                return null == n ? null : (u.zE[n] ?? null);
            })(e);
            return null == n ? null : (a.A.get(n) ?? null);
        }, [t, e]);
    return (0, i.useMemo)(() => {
        if (null == h || null == e) return null;
        let t = { paymentSourceId: e.paymentSourceId ?? void 0 },
            i = (0, d.z_)(h, !1, t);
        if (null == i) return null;
        let r = (0, l.LQ)(i.amount, i.currency);
        if (null == r || r <= 0) return null;
        let s = (0, c.$g)(r, i.currency, { maximumFractionDigits: 0 }),
            a = (0, d.L_)({ planId: h.id, priceOptions: t, subscriptionPlan: h }),
            u = null != a ? (0, o.l9)(n, a / 100) : null,
            A = null != u ? E.intl.formatToPlainString(E.t.IAybsG, { discount: u }) : void 0;
        return {
            title: E.intl.formatToPlainString(E.t.cZPXK6, { amount: s }),
            body: E.intl.string(E.t.KD6MH5),
            cta: E.intl.string(E.t.xmQfYw),
            badge: A,
            yearlyPlanId: h.id,
        };
    }, [n, e, h]);
}
