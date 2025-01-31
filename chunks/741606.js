n.d(t, { Z: () => o });
var i = n(192379),
    r = n(442837),
    a = n(693546),
    s = n(937111);
function o(e) {
    let t = (0, r.e7)([s.Z], () => (null == e ? null : s.Z.getRequest(e))),
        n = (0, r.e7)([s.Z], () => s.Z.hasFetchedRequestToJoinGuilds);
    return (
        i.useEffect(() => {
            n || a.Z.fetchRequestToJoinGuilds();
        }, [n]),
        t
    );
}
