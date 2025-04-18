n.d(t, { Z: () => i }), n(388685);
var r = n(192379),
    o = n(442837),
    a = n(388032),
    s = n(905128),
    c = n(680278);
function i(e, t, n) {
    let i = (0, o.e7)([s.Z], () => s.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e, r;
        if (null == i)
            return {
                disabled: !0,
                reason: void 0
            };
        let { powerups: o, unlocked: s } = i,
            l = n
                ? null ==
                  (e = s.values().find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => !s.has(e));
        return {
            disabled: null != l,
            reason: null != l && null != o.get(l) ? a.NW.formatToPlainString(n ? c.Z.vCEBiY : c.Z['1B8AZm'], { perk: null == (r = o.get(l)) ? void 0 : r.title }) : void 0
        };
    }, [i, t.skuId, t.dependencies, n]);
}
