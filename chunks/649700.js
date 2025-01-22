r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(442837),
    a = r(353647),
    o = r(146282),
    s = r(206583);
function l(e) {
    let { activity: n, user: r } = e,
        l = (0, i.e7)([o.Z], () =>
            o.Z.getMatchingInboxEntry({
                activity: n,
                userId: r.id,
                feedId: s.YN.GLOBAL_FEED
            })
        ),
        u = (0, i.e7)([a.Z], () =>
            a.Z.getMatchingOutboxEntry({
                activity: n,
                userId: r.id
            })
        );
    return null != l ? l : u;
}
