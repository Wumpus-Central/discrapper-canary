n.d(t, { R: () => l });
var r = n(192379),
    i = n(442837),
    o = n(675478),
    a = n(654455),
    s = n(526761);
function l(e) {
    r.useEffect(() => {
        o.DZ.loadIfUncached(s.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, i.e7)([a.ZP], () => a.ZP.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, a.LU)(t, e), [t, e]);
}
