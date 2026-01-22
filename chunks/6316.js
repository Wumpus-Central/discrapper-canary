l.d(t, { A: () => o });
var r = l(64700),
    n = l(311907),
    i = l(904629),
    s = l(522055);
function o(e) {
    let t = (0, n.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(() => {
        var e;
        let l = Object.values(null != (e = null == t ? void 0 : t.entitlements) ? e : {});
        return 0 === l.length ? [] : (0, i.k)(l);
    }, [null == t ? void 0 : t.entitlements]);
}
