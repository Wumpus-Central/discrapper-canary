n.d(t, { Z: () => d });
var r = n(73800),
    l = n(442837),
    a = n(388032),
    s = n(905128),
    o = n(973772),
    i = n(535396),
    c = n(93841);
function d(e, t, n) {
    let d = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        u = (0, o.Z)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == d || u.type === i.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: l, unlockedPowerups: s } = d,
            o = n
                ? null ==
                  (e = Object.values(s).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == s[e]);
        return {
            disabled: null != o,
            reason: null != o && null != l[o] ? a.intl.formatToPlainString(n ? c.default.vCEBiY : c.default['1B8AZm'], { perk: null == (r = l[o]) ? void 0 : r.title }) : void 0
        };
    }, [d, t.skuId, t.dependencies, n, u.type]);
}
