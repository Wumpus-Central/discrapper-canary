n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    l = n(403362),
    s = n(645619),
    a = n(904629);
function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let { allPowerups: e, unlockedPowerups: n } = t;
        return (0, a.k)(Object.values(n))
            .map((t) => e[t.sku_id])
            .filter(l.Vq);
    }, [t]);
}
