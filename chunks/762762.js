n.d(t, { Z: () => u });
var r = n(73800),
    o = n(442837),
    i = n(388032),
    a = n(905128),
    s = n(973772),
    c = n(535396),
    l = n(989308);
function u(e, t, n) {
    let u = (0, o.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        d = (0, s.ZP)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === c.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0,
            };
        let { allPowerups: o, unlockedPowerups: a } = u,
            s = n
                ? null ==
                  (e = Object.values(a).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == a[e]);
        return {
            disabled: null != s,
            reason:
                null != s && null != o[s]
                    ? i.intl.formatToPlainString(n ? l.default.vCEBiY : l.default["1B8AZm"], {
                          perk: null == (r = o[s]) ? void 0 : r.title,
                      })
                    : void 0,
        };
    }, [u, t.skuId, t.dependencies, n, d.type]);
}
