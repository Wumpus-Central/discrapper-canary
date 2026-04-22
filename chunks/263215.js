n.d(t, { A: () => c }), n(321073);
var r = n(64700),
    i = n(512750),
    a = n(311907),
    l = n(897418),
    s = n(645619),
    d = n(568065);
let o = new Set([...Array.from(d.aH), ...Array.from(d.m_), i.FB]);
function c(e) {
    let t = (0, a.bG)([s.A], () => s.A.getStateForGuild(e)?.powerupCatalog?.[d.o9.PERK]),
        n = (0, l.A)(e);
    return r.useMemo(() => {
        let e = [...(t ?? [])];
        return null != n && e.push(n), e.filter((e) => !o.has(e.skuId));
    }, [t, n]);
}
