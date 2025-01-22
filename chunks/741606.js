r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(693546),
    s = r(937111);
function l(e) {
    let n = (0, a.e7)([s.Z], () => (null == e ? null : s.Z.getRequest(e))),
        r = (0, a.e7)([s.Z], () => s.Z.hasFetchedRequestToJoinGuilds);
    return (
        i.useEffect(() => {
            !r && o.Z.fetchRequestToJoinGuilds();
        }, [r]),
        n
    );
}
