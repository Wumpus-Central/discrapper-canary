n.d(t, { Z: () => d });
var r = n(73800),
    i = n(442837),
    o = n(388032),
    a = n(905128),
    s = n(973772),
    l = n(535396),
    c = n(93841);
function d(e, t, n) {
    let d = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        u = (0, s.Z)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == d || u.type === l.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: i, unlockedPowerups: a } = d,
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
            reason: null != s && null != i[s] ? o.intl.formatToPlainString(n ? c.default.vCEBiY : c.default['1B8AZm'], { perk: null == (r = i[s]) ? void 0 : r.title }) : void 0
        };
    }, [d, t.skuId, t.dependencies, n, u.type]);
}
