n.d(t, { o: () => a });
var r = n(647438),
    i = n(442837),
    l = n(384275),
    o = n(881998);
function a(e, t) {
    let n = (0, i.e7)([o.default], () => o.default.getNewestTokenForApplication(e)),
        a = (0, i.e7)([o.default], () =>
            null != e ? o.default.getFetchStateForApplication(e) : o.FetchState.NOT_FETCHED,
        ),
        s = a === o.FetchState.FETCHED,
        { disableFetch: c = !1 } = null != t ? t : {};
    return (
        r.useEffect(() => {
            c || a !== o.FetchState.NOT_FETCHED || (null != e && l.Z.fetchByApplicationId(e));
        }, [c, a, e]),
        {
            token: n,
            fetched: s,
        }
    );
}
