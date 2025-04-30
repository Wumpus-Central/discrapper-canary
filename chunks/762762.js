t.d(n, { Z: () => l });
var r = t(192379),
    i = t(442837),
    o = t(388032),
    s = t(905128),
    a = t(680278);
function l(e, n, t) {
    let l = (0, i.e7)([s.Z], () => s.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e, r;
        if (null == l)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: i, unlockedPowerups: s } = l,
            c = t
                ? null ==
                  (e = Object.values(s).find((e) => {
                      var t;
                      return (null == (t = e.sku) ? void 0 : t.dependent_sku_id) === n.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : n.dependencies.find((e) => null == s[e]);
        return {
            disabled: null != c,
            reason: null != c && null != i[c] ? o.intl.formatToPlainString(t ? a.default.vCEBiY : a.default['1B8AZm'], { perk: null == (r = i[c]) ? void 0 : r.title }) : void 0
        };
    }, [l, n.skuId, n.dependencies, t]);
}
