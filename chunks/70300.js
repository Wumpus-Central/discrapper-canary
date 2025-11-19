n.d(t, { Z: () => c }), n(388685);
var r = n(473749),
    i = n(494497),
    a = n(442837),
    o = n(905128),
    s = n(535396);
let l = new Set([...Array.from(s.NL), i.A$]);
function c(e) {
    let t = (0, a.e7)([o.Z], () => {
        var t, n;
        return null == (n = o.Z.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? void 0 : t[s.Us.PERK];
    });
    return r.useMemo(() => (null != t ? t : []).filter((e) => !l.has(e.skuId)), [t]);
}
