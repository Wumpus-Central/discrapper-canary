n.d(t, { Z: () => l }), n(388685);
var r = n(73800),
    i = n(442837),
    o = n(905128),
    a = n(535396);
let s = new Set([...Array.from(a.NL)]);
function l(e) {
    let t = (0, i.e7)([o.Z], () => {
        var t, n;
        return null == (n = o.Z.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? void 0 : t[a.Us.PERK];
    });
    return r.useMemo(() => (null != t ? t : []).filter((e) => !s.has(e.skuId)), [t]);
}
