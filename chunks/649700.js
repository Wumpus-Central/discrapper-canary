n.d(t, { Z: () => s });
var r = n(442837),
    i = n(353647),
    o = n(146282),
    a = n(206583);
function s(e) {
    let { activity: t, user: n } = e,
        s = (0, r.e7)(
            [o.Z],
            () => {
                o.Z.getMatchingInboxEntry({
                    activity: t,
                    userId: n.id,
                    feedId: a.YN.GLOBAL_FEED
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
