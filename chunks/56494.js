n.d(t, {
    F: () => l,
});
var r = n(64700),
    i = n(311907),
    a = n(594061),
    s = n(26909),
    o = n(355097);

function l(e) {
    r.useEffect(() => {
        a.bW.loadIfUncached(o.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, i.bG)([s.Ay], () => s.Ay.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, s.RG)(t, e), [t, e]);
}
