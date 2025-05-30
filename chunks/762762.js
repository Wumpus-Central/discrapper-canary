r.d(t, { Z: () => s });
var n = r(73800),
    o = r(442837),
    a = r(388032),
    i = r(905128),
    l = r(348189);
function s(e, t, r) {
    let s = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(e));
    return n.useMemo(() => {
        var e, n;
        if (null == s)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: o, unlockedPowerups: i } = s,
            c = r
                ? null ==
                  (e = Object.values(i).find((e) => {
                      var r;
                      return (null == (r = e.sku) ? void 0 : r.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == i[e]);
        return {
            disabled: null != c,
            reason: null != c && null != o[c] ? a.intl.formatToPlainString(r ? l.default.vCEBiY : l.default['1B8AZm'], { perk: null == (n = o[c]) ? void 0 : n.title }) : void 0
        };
    }, [s, t.skuId, t.dependencies, r]);
}
