n.d(t, { Z: () => u });
var r = n(647438),
    i = n(442837),
    l = n(388032),
    o = n(905128),
    a = n(973772),
    s = n(535396),
    c = n(18853);
function u(e, t, n) {
    let u = (0, i.e7)([o.Z], () => o.Z.getStateForGuild(e)),
        d = (0, a.ZP)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === s.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0,
            };
        let { allPowerups: i, unlockedPowerups: o } = u,
            a = n
                ? null ==
                  (e = Object.values(o).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == o[e]);
        return {
            disabled: null != a,
            reason:
                null != a && null != i[a]
                    ? l.intl.formatToPlainString(n ? c.default.vCEBiS : c.default["1B8AZr"], {
                          perk: null == (r = i[a]) ? void 0 : r.title,
                      })
                    : void 0,
        };
    }, [u, t.skuId, t.dependencies, n, d.type]);
}
