t.d(n, { Z: () => l }), t(388685);
var r = t(192379),
    o = t(442837),
    i = t(388032),
    s = t(905128),
    a = t(696672);
function l(e, n, t) {
    let l = (0, o.e7)([s.Z], () => s.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e, r;
        if (null == l)
            return {
                disabled: !0,
                reason: void 0
            };
        let { powerups: o, unlocked: s } = l,
            c = t
                ? null ==
                  (e = s.values().find((e) => {
                      var t;
                      return (null == (t = e.sku) ? void 0 : t.dependent_sku_id) === n.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : n.dependencies.find((e) => !s.has(e));
        return {
            disabled: null != c,
            reason: null != c && null != o.get(c) ? i.NW.formatToPlainString(t ? a.Z.vCEBiY : a.Z['1B8AZm'], { perk: null == (r = o.get(c)) ? void 0 : r.title }) : void 0
        };
    }, [l, n.skuId, n.dependencies, t]);
}
