n.d(t, { R: () => l });
var r = n(192379),
    i = n(442837),
    a = n(675478),
    o = n(654455),
    s = n(526761);
function l(e) {
    r.useEffect(() => {
        a.DZ.loadIfUncached(s.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, i.e7)([o.ZP], () => o.ZP.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, o.LU)(t, e), [t, e]);
}
