t.d(n, { Z: () => l });
var r = t(192379),
    i = t(442837),
    o = t(388032),
    a = t(905128),
    s = t(730621);
function l(e, n, t) {
    let l = (0, i.e7)([a.Z], () => a.Z.getStateForGuild(e));
    return r.useMemo(() => {
        var e, r;
        if (null == l)
            return {
                disabled: !0,
                reason: void 0
            };
        let { powerups: i, unlocked: a } = l;
        if (0 === n.dependencies.length)
            return {
                disabled: !1,
                reason: void 0
            };
        let c = t
            ? null ===
                  (e = Object.values(a).find((e) => {
                      var t;
                      return (null === (t = e.sku) || void 0 === t ? void 0 : t.dependent_sku_id) === n.skuId;
                  })) || void 0 === e
                ? void 0
                : e.sku_id
            : n.dependencies.find((e) => null == a[e]);
        return {
            disabled: null != c,
            reason: null != c && null != i[c] ? o.NW.formatToPlainString(t ? s.Z.vCEBiY : s.Z['1B8AZm'], { perk: null === (r = i[c]) || void 0 === r ? void 0 : r.title }) : void 0
        };
    }, [l, n.skuId, n.dependencies, t]);
}
