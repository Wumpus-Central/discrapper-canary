"use strict";
n.d(t, { A: () => c }), n(321073);
var r = n(64700),
    i = n(512750),
    s = n(311907),
    a = n(897418),
    o = n(645619),
    l = n(568065);
let u = new Set([...Array.from(l.aH), ...Array.from(l.m_), i.FB]);
function c(e) {
    let t = (0, s.bG)([o.A], () => o.A.getStateForGuild(e)?.powerupCatalog?.[l.o9.PERK]),
        n = (0, a.A)(e);
    return r.useMemo(() => {
        let e = [...(t ?? [])];
        return null != n && e.push(n), e.filter((e) => !u.has(e.skuId));
    }, [t, n]);
}
