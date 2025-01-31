n.d(t, { Z: () => o });
var i = n(442837),
    r = n(353647),
    a = n(146282),
    s = n(206583);
function o(e) {
    let { activity: t, user: n } = e,
        o = (0, i.e7)([a.Z], () =>
            a.Z.getMatchingInboxEntry({
                activity: t,
                userId: n.id,
                feedId: s.YN.GLOBAL_FEED
            })
        ),
        l = (0, i.e7)([r.Z], () =>
            r.Z.getMatchingOutboxEntry({
                activity: t,
                userId: n.id
            })
        );
    return null != o ? o : l;
}
