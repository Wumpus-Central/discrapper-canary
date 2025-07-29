n.d(t, { Z: () => u });
var r = n(73800),
    o = n(442837),
    a = n(388032),
    i = n(905128),
    s = n(973772),
    l = n(535396),
    c = n(93841);
function u(e, t, n) {
    let u = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(e)),
        d = (0, s.Z)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === l.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: o, unlockedPowerups: i } = u,
            s = n
                ? null ==
                  (e = Object.values(i).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == i[e]);
        return {
            disabled: null != s,
            reason: null != s && null != o[s] ? a.intl.formatToPlainString(n ? c.default.vCEBiY : c.default['1B8AZm'], { perk: null == (r = o[s]) ? void 0 : r.title }) : void 0
        };
    }, [u, t.skuId, t.dependencies, n, d.type]);
}
