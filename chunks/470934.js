var d = t(582128),
    u = t(855986),
    i = t(792996),
    l = t(645619),
    r = t(998418),
    s = t(568065),
    a = t(586428);
t.d(
    n,
    {},
    {
        A: function (e, n, t) {
            let p = (0, u.bG)([l.A], () => l.A.getStateForGuild(e)),
                o = (0, r.Ay)(e, n);
            return d.useMemo(() => {
                if (null == p || o.type === s.b_.LEVEL_ACTIVATED || o.type === s.b_.TIER_OVERRIDE_ACTIVATED)
                    return { disabled: !0, reason: void 0 };
                let { allPowerups: e, unlockedPowerups: d } = p,
                    u = t
                        ? Object.values(d).find((e) => e.sku?.dependent_sku_id === n.skuId)?.sku_id
                        : n.dependencies.find((e) => null == d[e]);
                return {
                    disabled: null != u,
                    reason:
                        null != u && null != e[u]
                            ? i.intl.formatToPlainString(t ? a.default.vCEBiS : a.default["1B8AZr"], {
                                  perk: e[u]?.title,
                              })
                            : void 0,
                };
            }, [p, n.skuId, n.dependencies, t, o.type]);
        },
    },
);
