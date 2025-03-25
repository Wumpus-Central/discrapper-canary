n.d(t, { Z: () => i }), n(47120);
var o = n(192379),
    r = n(442837),
    s = n(388032),
    a = n(905128),
    c = n(367123);
function i(e, t, n) {
    let i = (0, r.e7)([a.Z], () => a.Z.getStateForGuild(e));
    return o.useMemo(() => {
        var e, o;
        if (null == i)
            return {
                disabled: !0,
                reason: void 0
            };
        let { powerups: r, unlocked: a } = i,
            l = n
                ? null ===
                      (e = a.values().find((e) => {
                          var n;
                          return (null === (n = e.sku) || void 0 === n ? void 0 : n.dependent_sku_id) === t.skuId;
                      })) || void 0 === e
                    ? void 0
                    : e.sku_id
                : t.dependencies.find((e) => !a.has(e));
        return {
            disabled: null != l,
            reason: null != l && null != r.get(l) ? s.NW.formatToPlainString(n ? c.Z.vCEBiY : c.Z['1B8AZm'], { perk: null === (o = r.get(l)) || void 0 === o ? void 0 : o.title }) : void 0
        };
    }, [i, t.skuId, t.dependencies, n]);
}
