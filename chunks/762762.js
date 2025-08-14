r.d(t, { Z: () => c });
var n = r(73800),
    o = r(442837),
    i = r(388032),
    l = r(905128),
    u = r(973772),
    s = r(535396),
    a = r(989308);
function c(e, t, r) {
    let c = (0, o.e7)([l.Z], () => l.Z.getStateForGuild(e)),
        p = (0, u.ZP)(e, t);
    return n.useMemo(() => {
        var e, n;
        if (null == c || p.type === s.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0,
            };
        let { allPowerups: o, unlockedPowerups: l } = c,
            u = r
                ? null ==
                  (e = Object.values(l).find((e) => {
                      var r;
                      return (null == (r = e.sku) ? void 0 : r.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == l[e]);
        return {
            disabled: null != u,
            reason:
                null != u && null != o[u]
                    ? i.intl.formatToPlainString(r ? a.default.vCEBiY : a.default["1B8AZm"], {
                          perk: null == (n = o[u]) ? void 0 : n.title,
                      })
                    : void 0,
        };
    }, [c, t.skuId, t.dependencies, r, p.type]);
}
