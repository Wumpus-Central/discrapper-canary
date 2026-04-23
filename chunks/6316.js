n.d(t, { A: () => a });
var r = n(64700),
    i = n(311907),
    l = n(904629),
    s = n(522055);
function a(e) {
    let t = (0, i.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(() => {
        let e = Object.values(t?.entitlements ?? {});
        return 0 === e.length ? [] : (0, l.k)(e);
    }, [t?.entitlements]);
}
