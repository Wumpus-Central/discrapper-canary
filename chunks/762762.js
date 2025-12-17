n.d(t, { Z: () => u });
var r = n(473749),
    i = n(442837),
    l = n(388032),
    a = n(905128),
    o = n(973772),
    s = n(535396),
    c = n(556970);
function u(e, t, n) {
    let u = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        d = (0, o.ZP)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === s.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0,
            };
        let { allPowerups: i, unlockedPowerups: a } = u,
            o = n
                ? null ==
                  (e = Object.values(a).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == a[e]);
        return {
            disabled: null != o,
            reason:
                null != o && null != i[o]
                    ? l.intl.formatToPlainString(n ? c.default.vCEBiS : c.default["1B8AZr"], {
                          perk: null == (r = i[o]) ? void 0 : r.title,
                      })
                    : void 0,
        };
    }, [u, t.skuId, t.dependencies, n, d.type]);
}
