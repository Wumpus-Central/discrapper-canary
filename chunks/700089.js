n.d(t, { R: () => l });
var i = n(192379),
    r = n(442837),
    a = n(675478),
    s = n(654455),
    o = n(526761);
function l(e) {
    i.useEffect(() => {
        a.DZ.loadIfUncached(o.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, r.e7)([s.ZP], () => s.ZP.getTopCommandsWithoutLoadingLatest());
    return i.useMemo(() => (0, s.LU)(t, e), [t, e]);
}
