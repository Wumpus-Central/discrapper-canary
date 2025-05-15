n.d(t, { Z: () => s });
var r = n(442837),
    i = n(353647),
    a = n(146282),
    o = n(206583);
function s(e) {
    let { activity: t, user: n } = e,
        s = (0, r.e7)(
            [a.Z],
            () => {
                a.Z.getMatchingInboxEntry({
                    activity: t,
                    userId: n.id,
                    feedId: o.YN.GLOBAL_FEED
                });
            },
            [t, n.id]
        ),
        l = (0, r.e7)(
            [i.Z],
            () =>
                i.Z.getMatchingOutboxEntry({
                    activity: t,
                    userId: n.id
                }),
            [t, n.id]
        );
    return null != s ? s : l;
}
