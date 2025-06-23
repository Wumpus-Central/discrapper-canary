t.d(n, { Z: () => l });
var r = t(73800),
    i = t(442837),
    o = t(388032),
    a = t(905128),
    s = t(93841);
function l(e, n, t) {
    let l = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e, r;
        if (null == l)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: i, unlockedPowerups: a } = l,
            c = t
                ? null ==
                  (e = Object.values(a).find((e) => {
                      var t;
                      return (null == (t = e.sku) ? void 0 : t.dependent_sku_id) === n.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : n.dependencies.find((e) => null == a[e]);
        return {
            disabled: null != c,
            reason: null != c && null != i[c] ? o.intl.formatToPlainString(t ? s.default.vCEBiY : s.default['1B8AZm'], { perk: null == (r = i[c]) ? void 0 : r.title }) : void 0
        };
    }, [l, n.skuId, n.dependencies, t]);
}
