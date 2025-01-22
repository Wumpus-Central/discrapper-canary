r.d(n, {
    R: function () {
        return u;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(675478),
    s = r(654455),
    l = r(526761);
function u(e) {
    i.useEffect(() => {
        o.DZ.loadIfUncached(l.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, a.e7)([s.ZP], () => s.ZP.getTopCommandsWithoutLoadingLatest());
    return i.useMemo(() => (0, s.LU)(n, e), [n, e]);
}
