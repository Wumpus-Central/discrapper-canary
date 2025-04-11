t.d(n, { Z: () => l }), t(388685);
var r = t(192379),
    o = t(442837),
    s = t(388032),
    i = t(905128),
    a = t(680278);
function l(e, n, t) {
    let l = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e, r;
        if (null == l)
            return {
                disabled: !0,
                reason: void 0
            };
        let { powerups: o, unlocked: i } = l,
            c = t
                ? null ==
                  (e = i.values().find((e) => {
                      var t;
                      return (null == (t = e.sku) ? void 0 : t.dependent_sku_id) === n.skuId;
                  }))
                    ? void 0
                    : e.sku_id
                : n.dependencies.find((e) => !i.has(e));
        return {
            disabled: null != c,
            reason: null != c && null != o.get(c) ? s.NW.formatToPlainString(t ? a.Z.vCEBiY : a.Z['1B8AZm'], { perk: null == (r = o.get(c)) ? void 0 : r.title }) : void 0
        };
    }, [l, n.skuId, n.dependencies, t]);
}
