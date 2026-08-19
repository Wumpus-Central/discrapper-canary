t.d(n, { A: () => o });
var d = t(582128),
    u = t(17928),
    l = t(375708),
    a = t(645619),
    i = t(998418),
    r = t(568065),
    s = t(853513);
function o(e, n, t) {
    let o = (0, u.bG)([a.A], () => a.A.getStateForGuild(e)),
        p = (0, i.Ay)(e, n);
    return d.useMemo(() => {
        if (null == o || p.type === r.b_.LEVEL_ACTIVATED || p.type === r.b_.TIER_OVERRIDE_ACTIVATED)
            return { disabled: !0, reason: void 0 };
        let { allPowerups: e, unlockedPowerups: d } = o,
            u = t
                ? Object.values(d).find((e) => e.sku?.dependent_sku_id === n.skuId)?.sku_id
                : n.dependencies.find((e) => null == d[e]);
        return {
            disabled: null != u,
            reason:
                null != u && null != e[u]
                    ? l.intl.formatToPlainString(t ? s.default.vCEBiS : s.default["1B8AZr"], { perk: e[u]?.title })
                    : void 0,
        };
    }, [o, n.skuId, n.dependencies, t, p.type]);
}
