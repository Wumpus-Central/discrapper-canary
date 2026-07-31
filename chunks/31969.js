l.d(t, { F: () => v });
var n = l(582128),
    i = l(17928),
    a = l(318254),
    r = l(278416),
    s = l(561573),
    o = l(288106),
    c = l(240248),
    d = l(429635),
    u = l(430825),
    h = l(375708);
let f = "{value}",
    p = { ORBS: a.C, TAG: r.g };
function _(e) {
    return null != e ? p[e] : void 0;
}
function S(e, t) {
    return null == e ? null : e.includes(f) ? (null == t ? null : e.replaceAll(f, String(t))) : e;
}
function v(e, t) {
    let { applicationId: l, skuId: a } = t,
        r = (0, d.A)({ applicationId: l }),
        f = n.useMemo(() => {
            let e = r?.storefront?.promotions;
            return null == e ? null : (Object.values(e)[0] ?? null);
        }, [r]),
        p =
            "gift_customization" === e || "sku_gift_badge" === e || "vc_gift_recommendations" === e
                ? o.QK.GIFT
                : o.QK.SELF_PURCHASE,
        v = (0, i.bG)(
            [s.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    for (let l of e) {
                        let e = l[t];
                        if (e?.amount != null && e.amount > 0) return e;
                    }
                    return null;
                })(s.A.getRewardsForSkuId(a), p),
            [a, p],
        );
    return n.useMemo(() => {
        if (null == f) return null;
        let t = null != f.endsAt ? new Date(f.endsAt) : null;
        switch (e) {
            case "storefront_banner": {
                let e = f.storefront?.headerText;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: _(f.pdp?.icon ?? null),
                    text: e,
                    tooltip: null,
                    endsAt: t,
                    flavor: f.flavor,
                    reward: null,
                };
            }
            case "storefront_badge": {
                let e = f.storefront?.headerText;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: _("TAG"),
                    text: h.intl.string(u.default.hriMCc),
                    tooltip: e,
                    endsAt: t,
                    flavor: f.flavor,
                    reward: null,
                };
            }
            case "gift_customization": {
                if (null == v) return null;
                let e = S(f.checkout?.label ?? null, v.amount);
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: _(f.checkout?.icon ?? null),
                    text: e,
                    tooltip: S(f.checkout?.tooltip ?? null, v.amount),
                    endsAt: t,
                    flavor: f.flavor,
                    reward: v,
                };
            }
            case "pdp":
            case "card": {
                let e = f.pdp,
                    l = S(e?.label ?? null, v?.amount ?? null);
                if ((0, c.uJ)(l)) return null;
                return {
                    Icon: _(e?.icon ?? null),
                    text: l,
                    tooltip: S(e?.tooltip ?? null, v?.amount ?? null),
                    endsAt: t,
                    flavor: f.flavor,
                    reward: v,
                };
            }
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let e = f.vcStream?.label;
                if ((0, c.uJ)(e)) return null;
                return {
                    Icon: _(f.vcStream?.icon ?? null),
                    text: e,
                    tooltip: f.vcStream?.tooltip ?? null,
                    endsAt: t,
                    flavor: f.flavor,
                    reward: null,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == v) return null;
                let l = "sku_gift_badge" === e ? f.checkout : f.pdp,
                    n = S(l?.label ?? null, v.amount);
                if ((0, c.uJ)(n)) return null;
                return {
                    Icon: _("TAG"),
                    text: h.intl.string(u.default.hriMCc),
                    tooltip: S(l?.tooltip ?? null, v.amount),
                    endsAt: t,
                    flavor: f.flavor,
                    reward: v,
                };
            }
        }
    }, [e, f, v]);
}
