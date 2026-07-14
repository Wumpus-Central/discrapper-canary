d.d(n, { A: () => p });
var t = d(64700),
    u = d(17928),
    l = d(375708),
    i = d(645619),
    a = d(998418),
    r = d(568065),
    s = d(853513);
function p(e, n, d) {
    let p = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
        o = (0, a.Ay)(e, n);
    return t.useMemo(() => {
        if (null == p || o.type === r.b_.LEVEL_ACTIVATED || o.type === r.b_.TIER_OVERRIDE_ACTIVATED)
            return { disabled: !0, reason: void 0 };
        let { allPowerups: e, unlockedPowerups: t } = p,
            u = d
                ? Object.values(t).find((e) => e.sku?.dependent_sku_id === n.skuId)?.sku_id
                : n.dependencies.find((e) => null == t[e]);
        return {
            disabled: null != u,
            reason:
                null != u && null != e[u]
                    ? l.intl.formatToPlainString(d ? s.default.vCEBiS : s.default["1B8AZr"], { perk: e[u]?.title })
                    : void 0,
        };
    }, [p, n.skuId, n.dependencies, d, o.type]);
}
