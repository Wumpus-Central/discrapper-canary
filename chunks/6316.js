n.d(t, { A: () => o });
var r = n(64700),
    l = n(311907),
    i = n(904629),
    s = n(522055);
function o(e) {
    let t = (0, l.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, i.k)(e);
    }, [t?.entitlements]);
}
