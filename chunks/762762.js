t.d(n, { Z: () => c });
var r = t(73800),
    i = t(442837),
    o = t(388032),
    a = t(905128),
    s = t(717259),
    l = t(93841);
function c(e, n, t) {
    let c = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        u = (0, s.Z)(e, n);
    return r.useMemo(() => {
        var e, r;
        if (null == c || u)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: i, unlockedPowerups: a } = c,
            s = t
                ? null ==
                  (e = Object.values(a).find((e) => {
                      var t;
                      return (null == (t = e.sku) ? void 0 : t.dependent_sku_id) === n.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : n.dependencies.find((e) => null == a[e]);
        return {
            disabled: null != s,
            reason: null != s && null != i[s] ? o.intl.formatToPlainString(t ? l.default.vCEBiY : l.default['1B8AZm'], { perk: null == (r = i[s]) ? void 0 : r.title }) : void 0
        };
    }, [c, n.skuId, n.dependencies, t, u]);
}
