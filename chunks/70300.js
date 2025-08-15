n.d(t, { Z: () => l }), n(388685);
var r = n(73800),
    i = n(442837),
    a = n(905128),
    o = n(535396);
let s = new Set([...Array.from(o.NL)]);
function l(e) {
    let t = (0, i.e7)([a.Z], () => {
        var t, n;
        return null == (n = a.Z.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? void 0 : t[o.Us.PERK];
    });
    return r.useMemo(() => (null != t ? t : []).filter((e) => !s.has(e.skuId)), [t]);
}
