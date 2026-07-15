l.d(t, { F: () => m });
var i = l(64700),
    n = l(17928),
    a = l(318254),
    r = l(278416),
    s = l(561573),
    o = l(288106),
    c = l(240248),
    u = l(429635),
    d = l(430825),
    h = l(375708);
let p = "{value}",
    f = { ORBS: a.C, TAG: r.g };
function S(e) {
    return null != e ? f[e] : void 0;
}
function _(e, t) {
    return null == e ? null : e.includes(p) ? (null == t ? null : e.replaceAll(p, String(t))) : e;
}
function m(e, t) {
    let { applicationId: l, skuId: a } = t,
        r = (0, u.A)({ applicationId: l }),
        p = i.useMemo(() => {
            let e = r?.storefront?.promotions;
            return null == e ? null : (Object.values(e)[0] ?? null);
        }, [r]),
        f =
            "gift_customization" === e || "sku_gift_badge" === e || "vc_gift_recommendations" === e
                ? o.QK.GIFT
                : o.QK.SELF_PURCHASE,
        m = (0, n.bG)(
            [s.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    for (let l of e) {
                        let e = l[t];
                        if (e?.amount != null && e.amount > 0) return e;
                    }
                    return null;
                })(s.A.getRewardsForSkuId(a), f),
            [a, f],
        );
    return i.useMemo(() => {
        if (null == p) return null;
        let t = null != p.endsAt ? new Date(p.endsAt) : null;
        switch (e) {
            case "storefront_banner": {
                let e = p.storefront?.headerText;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: S(p.pdp?.icon ?? null),
                    text: e,
                    tooltip: null,
                    endsAt: t,
                    flavor: p.flavor,
                    reward: null,
                };
            }
            case "storefront_badge": {
                let e = p.storefront?.headerText;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: S("TAG"),
                    text: h.intl.string(d.default.hriMCc),
                    tooltip: e,
                    endsAt: t,
                    flavor: p.flavor,
                    reward: null,
                };
            }
            case "pdp":
            case "card":
            case "gift_customization": {
                if (null == m) return null;
                let l = "gift_customization" === e ? p.checkout : p.pdp,
                    i = _(l?.label ?? null, m.amount);
                if ((0, c.uJ)(i)) return null;
                return {
                    Icon: S(l?.icon ?? null),
                    text: i,
                    tooltip: _(l?.tooltip ?? null, m.amount),
                    endsAt: t,
                    flavor: p.flavor,
                    reward: m,
                };
            }
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let e = p.vcStream?.label;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: S(p.vcStream?.icon ?? null),
                    text: e,
                    tooltip: p.vcStream?.tooltip ?? null,
                    endsAt: t,
                    flavor: p.flavor,
                    reward: null,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == m) return null;
                let l = "sku_gift_badge" === e ? p.checkout : p.pdp,
                    i = _(l?.label ?? null, m.amount);
                if ((0, c.uJ)(i)) return null;
                return {
                    Icon: S("TAG"),
                    text: h.intl.string(d.default.hriMCc),
                    tooltip: _(l?.tooltip ?? null, m.amount),
                    endsAt: t,
                    flavor: p.flavor,
                    reward: m,
                };
            }
        }
    }, [e, p, m]);
}
