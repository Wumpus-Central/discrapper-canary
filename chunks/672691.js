l.d(t, { A: () => d });
var n = l(64700),
    i = l(573648),
    s = l(429913),
    a = l(321078),
    r = l(403362),
    o = l(484509);
function d(e) {
    let { filteredAppIdentities: t } = (0, a.A)(e),
        l = (0, o.A)(e),
        d = n.useMemo(() => new Set(t?.map((e) => e.application_id) ?? []), [t]),
        c = (0, s.A)([...d]).filter(r.Vq);
    return {
        appIdentities: n.useMemo(
            () =>
                t
                    .map((e) => ({ identity: e, application: c.find((t) => t.id === e.application_id) }))
                    .filter((e) => {
                        let { application: t } = e;
                        return null != t;
                    }),
            [t, c],
        ),
        connections: n.useMemo(
            () =>
                l.filter((e) => {
                    let t = i.A.get(e.type);
                    return t?.replacedBy == null || !d.has(t.replacedBy);
                }),
            [l, d],
        ),
    };
}
