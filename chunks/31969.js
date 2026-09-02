l.d(t, { F: () => g });
var n = l(582128),
    i = l(17928),
    a = l(318254),
    r = l(278416),
    s = l(403581),
    o = l(561573),
    c = l(288106),
    u = l(240248),
    d = l(429635),
    h = l(206285),
    f = l(375708);
let p = "{value}",
    S = { ORBS: a.C, TAG: r.TagIcon, NITRO: s.t };
function _(e) {
    return null != e ? S[e] : void 0;
}
function m(e, t) {
    return null == e ? null : e.includes(p) ? (null == t ? null : e.replaceAll(p, String(t))) : e;
}
function g(e, t) {
    let { applicationId: l, skuId: a } = t,
        r = (0, d.A)({ applicationId: l }),
        s = (0, i.bG)([o.A], () => o.A.getPromotionIdsForSkuId(a), [a]),
        p = n.useMemo(() => {
            let e = r?.storefront?.promotions;
            if (null == e) return null;
            if (null == a) return Object.values(e)[0] ?? null;
            if (null == s) return null;
            for (let t of s) {
                let l = e[t];
                if (null != l) return l;
            }
            return null;
        }, [r, a, s]),
        S =
            "gift_customization" === e || "sku_gift_badge" === e || "vc_gift_recommendations" === e
                ? c.QK.GIFT
                : c.QK.SELF_PURCHASE,
        g = (0, i.bG)(
            [o.A],
            () =>
                (function (e, t) {
                    if (null == e) return null;
                    for (let l of e) {
                        let e = l[t];
                        if (e?.amount != null && e.amount > 0) return e;
                    }
                    return null;
                })(o.A.getRewardsForSkuId(a), S),
            [a, S],
        );
    return n.useMemo(() => {
        if (null == p) return null;
        let t = null != p.endsAt ? new Date(p.endsAt) : null;
        switch (e) {
            case "storefront_banner": {
                let e = p.storefront?.headerText;
                if ((0, u.uJ)(e)) return null;
                return {
                    Icon: _(p.pdp?.icon ?? null),
                    text: e,
                    tooltip: null,
                    endsAt: t,
                    flavor: p.flavor,
                    reward: null,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "storefront_badge": {
                let e = p.storefront?.headerText;
                if ((0, u.uJ)(e)) return null;
                return {
                    Icon: _("TAG"),
                    text: f.intl.string(h.default.hriMCc),
                    tooltip: e,
                    endsAt: t,
                    flavor: p.flavor,
                    reward: null,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "gift_customization": {
                if (null == g) return null;
                let e = m(p.checkout?.label ?? null, g.amount);
                if ((0, u.uJ)(e)) return null;
                return {
                    Icon: _(p.checkout?.icon ?? null),
                    text: e,
                    tooltip: m(p.checkout?.tooltip ?? null, g.amount),
                    endsAt: t,
                    flavor: p.flavor,
                    reward: g,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "pdp":
            case "card": {
                let e = p.pdp,
                    l = m(e?.label ?? null, g?.amount ?? null);
                if ((0, u.uJ)(l)) return null;
                return {
                    Icon: _(e?.icon ?? null),
                    text: l,
                    tooltip: m(e?.tooltip ?? null, g?.amount ?? null),
                    endsAt: t,
                    flavor: p.flavor,
                    reward: g,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "vc_purchase_recommendations":
            case "vc_gift_recommendations": {
                let e = p.vcStream?.label;
                if ((0, u.uJ)(e)) return null;
                return {
                    Icon: _(p.vcStream?.icon ?? null),
                    text: e,
                    tooltip: p.vcStream?.tooltip ?? null,
                    endsAt: t,
                    flavor: p.flavor,
                    reward: null,
                    rewardRequirements: p.rewardRequirements,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == g) return null;
                let l = "sku_gift_badge" === e ? p.checkout : p.pdp,
                    n = m(l?.label ?? null, g.amount);
                if ((0, u.uJ)(n)) return null;
                return {
                    Icon: _("TAG"),
                    text: f.intl.string(h.default.hriMCc),
                    tooltip: m(l?.tooltip ?? null, g.amount),
                    endsAt: t,
                    flavor: p.flavor,
                    reward: g,
                    rewardRequirements: p.rewardRequirements,
                };
            }
        }
    }, [e, p, g]);
}
