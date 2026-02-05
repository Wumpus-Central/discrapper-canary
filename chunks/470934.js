n.d(t, { A: () => c });
var i = n(64700),
    l = n(311907),
    s = n(985018),
    a = n(645619),
    r = n(998418),
    o = n(568065),
    d = n(333354);
function c(e, t, n) {
    let c = (0, l.bG)([a.A], () => a.A.getStateForGuild(e)),
        u = (0, r.Ay)(e, t);
    return i.useMemo(() => {
        if (null == c || u.type === o.b_.LEVEL_ACTIVATED) return { disabled: !0, reason: void 0 };
        let { allPowerups: e, unlockedPowerups: i } = c,
            l = n
                ? Object.values(i).find((e) => e.sku?.dependent_sku_id === t.skuId)?.sku_id
                : t.dependencies.find((e) => null == i[e]);
        return {
            disabled: null != l,
            reason:
                null != l && null != e[l]
                    ? s.intl.formatToPlainString(n ? d.default.vCEBiS : d.default["1B8AZr"], { perk: e[l]?.title })
                    : void 0,
        };
    }, [c, t.skuId, t.dependencies, n, u.type]);
}
