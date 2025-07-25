n.d(t, { Z: () => u });
var r = n(73800),
    o = n(442837),
    i = n(388032),
    s = n(905128),
    l = n(973772),
    a = n(535396),
    c = n(93841);
function u(e, t, n) {
    let u = (0, o.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        d = (0, l.Z)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === a.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: o, unlockedPowerups: s } = u,
            l = n
                ? null ==
                  (e = Object.values(s).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == s[e]);
        return {
            disabled: null != l,
            reason: null != l && null != o[l] ? i.intl.formatToPlainString(n ? c.default.vCEBiY : c.default['1B8AZm'], { perk: null == (r = o[l]) ? void 0 : r.title }) : void 0
        };
    }, [u, t.skuId, t.dependencies, n, d.type]);
}
