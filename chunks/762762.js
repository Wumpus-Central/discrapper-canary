n.d(t, { Z: () => c }), n(388685);
var r = n(192379),
    o = n(442837),
    a = n(388032),
    i = n(905128),
    s = n(680278);
function c(e, t, n) {
    let c = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e, r;
        if (null == c)
            return {
                disabled: !0,
                reason: void 0
            };
        let { powerups: o, unlocked: i } = c,
            l = n
                ? null ==
                  (e = i.values().find((e) => {
                      var n;
                      return (null == (n = e.sku) ? void 0 : n.dependent_sku_id) === t.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => !i.has(e));
        return {
            disabled: null != l,
            reason: null != l && null != o.get(l) ? a.intl.formatToPlainString(n ? s.default.vCEBiY : s.default['1B8AZm'], { perk: null == (r = o.get(l)) ? void 0 : r.title }) : void 0
        };
    }, [c, t.skuId, t.dependencies, n]);
}
