r.d(t, { Z: () => d });
var n = r(73800),
    o = r(442837),
    a = r(388032),
    i = r(905128),
    s = r(973772),
    l = r(535396),
    c = r(93841);
function d(e, t, r) {
    let d = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(e)),
        u = (0, s.Z)(e, t);
    return n.useMemo(() => {
        var e, n;
        if (null == d || u.type === l.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: o, unlockedPowerups: i } = d,
            s = r
                ? null ==
                  (e = Object.values(i).find((e) => {
                      var r;
                      return (null == (r = e.sku) ? void 0 : r.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == i[e]);
        return {
            disabled: null != s,
            reason: null != s && null != o[s] ? a.intl.formatToPlainString(r ? c.default.vCEBiY : c.default['1B8AZm'], { perk: null == (n = o[s]) ? void 0 : n.title }) : void 0
        };
    }, [d, t.skuId, t.dependencies, r, u.type]);
}
