n.d(t, {
    A: () => u,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(512750),
    a = n(311907),
    s = n(897418),
    o = n(645619),
    l = n(568065);
let c = new Set([...Array.from(l.aH), i.FB]);

function u(e) {
    let t = (0, a.bG)([o.A], () => {
            var t, n;
            return null == (n = o.A.getStateForGuild(e)) || null == (t = n.powerupCatalog) ? void 0 : t[l.o9.PERK];
        }),
        n = (0, s.A)(e);
    return r.useMemo(() => {
        let e = [...(null != t ? t : [])];
        return null != n && e.push(n), e.filter((e) => !c.has(e.skuId));
    }, [t, n]);
}
