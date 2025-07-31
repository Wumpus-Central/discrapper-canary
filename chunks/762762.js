n.d(t, { Z: () => d });
var r = n(73800),
    s = n(442837),
    o = n(388032),
    l = n(905128),
    a = n(973772),
    i = n(535396),
    c = n(93841);
function d(e, t, n) {
    let d = (0, s.e7)([l.Z], () => l.Z.getStateForGuild(e)),
        u = (0, a.Z)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == d || u.type === i.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: s, unlockedPowerups: l } = d,
            a = n
                ? null ==
                  (e = Object.values(l).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == l[e]);
        return {
            disabled: null != a,
            reason: null != a && null != s[a] ? o.intl.formatToPlainString(n ? c.default.vCEBiY : c.default['1B8AZm'], { perk: null == (r = s[a]) ? void 0 : r.title }) : void 0
        };
    }, [d, t.skuId, t.dependencies, n, u.type]);
}
