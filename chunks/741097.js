s.d(t, { A: () => k });
var a = s(582128),
    o = s(17928),
    c = s(216623),
    h = s(85109),
    n = s(756377),
    r = s(470654),
    d = s(652215);
function f() {
    (0, c.GY)({ loadMore: !0 });
}
function k() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        {
            fetchState: t,
            hasFetched: s,
            isStale: k,
            hasShownBookmarks: u,
        } = (0, o.cf)([h.A], () => ({
            fetchState: h.A.getBookmarksFetchState(),
            hasFetched: h.A.hasFetchedBookmarks(),
            isStale: h.A.getIsStale(),
            hasShownBookmarks: h.A.getMessageBookmarks().some((e) => null != e.message),
        }));
    return (
        (0, r.A)(e),
        a.useEffect(() => {
            e && !k && (0, c.GY)();
        }, [e, k]),
        a.useEffect(() => {
            e && s && !u && t === n.Z7.LOADED_HAS_MORE && f();
        }, [e, s, u, t]),
        { fetchState: e ? t : n.Z7.LOADED_FINISHED, loadMore: e ? f : d.tEg }
    );
}
