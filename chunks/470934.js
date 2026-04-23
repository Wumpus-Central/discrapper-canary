l.d(e, { A: () => u });
var n = l(64700),
    a = l(17928),
    i = l(985018),
    r = l(645619),
    s = l(998418),
    o = l(568065),
    d = l(853513);
function u(t, e, l) {
    let u = (0, a.bG)([r.A], () => r.A.getStateForGuild(t)),
        c = (0, s.Ay)(t, e);
    return n.useMemo(() => {
        if (null == u || c.type === o.b_.LEVEL_ACTIVATED) return { disabled: !0, reason: void 0 };
        let { allPowerups: t, unlockedPowerups: n } = u,
            a = l
                ? Object.values(n).find((t) => t.sku?.dependent_sku_id === e.skuId)?.sku_id
                : e.dependencies.find((t) => null == n[t]);
        return {
            disabled: null != a,
            reason:
                null != a && null != t[a]
                    ? i.intl.formatToPlainString(l ? d.default.vCEBiS : d.default["1B8AZr"], { perk: t[a]?.title })
                    : void 0,
        };
    }, [u, e.skuId, e.dependencies, l, c.type]);
}
