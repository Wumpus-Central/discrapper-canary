n.d(t, { D: () => p, b: () => C });
var l = n(582128),
    i = n(17928),
    r = n(561573),
    a = n(240248),
    s = n(936785),
    o = n(296045),
    u = n(556766),
    c = n(459005),
    d = n(621547),
    m = n(375708);
function p(e) {
    let { surface: t, applicationId: n, skuId: o } = e,
        p = (0, u.m)(n),
        C = (0, i.bG)([r.A], () => r.A.getPromotionIdsForSkuId(o), [o]),
        h = l.useMemo(() => {
            if (null == p || null == C) return null;
            for (let e of C) {
                let t = p[e];
                if (null != t) return t;
            }
            return null;
        }, [p, C]),
        f = (0, c.n)({ surface: t, skuId: o });
    return l.useMemo(() => {
        if (null == h) return null;
        let e = (0, s.RD)(h.endsAt);
        switch (t) {
            case "gift_customization": {
                if (null == f) return null;
                let t = (0, s.Ew)(h.checkout?.label ?? null, f.amount);
                if ((0, a.uJ)(t)) return null;
                return {
                    Icon: (0, s.LZ)(h.checkout?.icon ?? null),
                    text: t,
                    tooltip: (0, s.Ew)(h.checkout?.tooltip ?? null, f.amount),
                    endsAt: e,
                    flavor: h.flavor,
                    rewardRequirements: h.rewardRequirements,
                };
            }
            case "pdp":
            case "card": {
                let t = h.pdp,
                    n = (0, s.Ew)(t?.label ?? null, f?.amount ?? null);
                if ((0, a.uJ)(n)) return null;
                return {
                    Icon: (0, s.LZ)(t?.icon ?? null),
                    text: n,
                    tooltip: (0, s.Ew)(t?.tooltip ?? null, f?.amount ?? null),
                    endsAt: e,
                    flavor: h.flavor,
                    rewardRequirements: h.rewardRequirements,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == f) return null;
                let n = "sku_gift_badge" === t ? h.checkout : h.pdp,
                    l = (0, s.Ew)(n?.label ?? null, f.amount);
                if ((0, a.uJ)(l)) return null;
                return {
                    Icon: (0, s.LZ)("TAG"),
                    text: m.intl.string(d.default.hriMCc),
                    tooltip: (0, s.Ew)(n?.tooltip ?? null, f.amount),
                    endsAt: e,
                    flavor: h.flavor,
                    rewardRequirements: h.rewardRequirements,
                };
            }
        }
    }, [t, h, f]);
}
function C(e) {
    let { surface: t, applicationId: n, skuId: i } = e,
        r = p({ surface: t, applicationId: n, skuId: i }),
        a = (0, c.n)({ surface: t, skuId: i }),
        s = (0, o.x)({ surface: t, skuId: i });
    return l.useMemo(() => ({ display: r, reward: a, offers: s }), [r, a, s]);
}
