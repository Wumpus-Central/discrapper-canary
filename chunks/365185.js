n.d(t, {
    A: () => o,
});
var r = n(311907),
    i = n(517164),
    a = n(99753),
    s = n(424994);

function o(e) {
    let { activity: t, user: n } = e,
        o = (0, r.bG)([a.A], () => {
            a.A.getMatchingInboxEntry({
                activity: t,
                userId: n.id,
                feedId: s.X1.GLOBAL_FEED,
            });
        }, [t, n.id]),
        l = (0, r.bG)(
            [i.A],
            () =>
                i.A.getMatchingOutboxEntry({
                    activity: t,
                    userId: n.id,
                }),
            [t, n.id],
        );
    return null != o ? o : l;
}
