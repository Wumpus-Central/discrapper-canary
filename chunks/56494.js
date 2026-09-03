n.d(t, { F: () => o });
var i = n(582128),
    r = n(17928),
    a = n(594061),
    s = n(26909),
    l = n(355097);
function o(e) {
    i.useEffect(() => {
        a.bW.loadIfUncached(l.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, r.bG)([s.Ay], () => s.Ay.getTopCommandsWithoutLoadingLatest());
    return i.useMemo(() => (0, s.RG)(t, e), [t, e]);
}
