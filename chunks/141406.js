l.d(t, { A: () => a });
var r = l(64700),
    n = l(311907),
    i = l(403362),
    s = l(645619),
    o = l(904629);
function a(e) {
    let t = (0, n.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let { allPowerups: e, unlockedPowerups: l } = t;
        return (0, o.k)(Object.values(l))
            .map((t) => e[t.sku_id])
            .filter(i.Vq);
    }, [t]);
}
