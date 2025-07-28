n.d(t, { Z: () => u });
var r = n(73800),
    o = n(442837),
    i = n(388032),
    l = n(905128),
    s = n(973772),
    a = n(535396),
    c = n(93841);
function u(e, t, n) {
    let u = (0, o.e7)([l.Z], () => l.Z.getStateForGuild(e)),
        d = (0, s.Z)(e, t);
    return r.useMemo(() => {
        var e, r;
        if (null == u || d.type === a.A3.LEVEL_ACTIVATED)
            return {
                disabled: !0,
                reason: void 0
            };
        let { allPowerups: o, unlockedPowerups: l } = u,
            s = n
                ? null ==
                  (e = Object.values(l).find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => null == l[e]);
        return {
            disabled: null != s,
            reason: null != s && null != o[s] ? i.intl.formatToPlainString(n ? c.default.vCEBiY : c.default['1B8AZm'], { perk: null == (r = o[s]) ? void 0 : r.title }) : void 0
        };
    }, [u, t.skuId, t.dependencies, n, d.type]);
}
