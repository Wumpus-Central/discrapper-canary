n.d(t, { Z: () => u }), n(388685), n(539854);
var r = n(473749),
    i = n(494497),
    a = n(442837),
    o = n(483039),
    s = n(905128),
    l = n(535396);
let c = new Set([...Array.from(l.NL), i.A$]);
function u(e) {
    let t = (0, a.e7)([s.Z], () => {
            var t, n;
            return null == (n = s.Z.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? void 0 : t[l.Us.PERK];
        }),
        n = (0, o.Z)(e);
    return r.useMemo(() => {
        let e = [...(null != t ? t : [])];
        return null != n && e.push(n), e.filter((e) => !c.has(e.skuId));
    }, [t, n]);
}
