n.d(t, { o: () => s });
var r = n(647438),
    i = n(442837),
    a = n(384275),
    o = n(881998);
function s(e, t) {
    let n = (0, i.e7)([o.default], () => o.default.getNewestTokenForApplication(e)),
        s = (0, i.e7)([o.default], () =>
            null != e ? o.default.getFetchStateForApplication(e) : o.FetchState.NOT_FETCHED,
        ),
        l = s === o.FetchState.FETCHED,
        { disableFetch: c = !1 } = null != t ? t : {};
    return (
        r.useEffect(() => {
            c || s !== o.FetchState.NOT_FETCHED || (null != e && a.Z.fetchByApplicationId(e));
        }, [c, s, e]),
        {
            token: n,
            fetched: l,
        }
    );
}
