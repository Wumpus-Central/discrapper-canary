n.d(t, { H: () => r });
var i = n(192379),
    l = n(726115);
function r(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
        r = i.useCallback(
            (e, i) => {
                t.markAsSeen(i, e, n);
            },
            [t, n]
        ),
        a = i.useCallback(
            (e, t, i, r) =>
                (0, l.vL)({
                    loadId: n,
                    guildId: e,
                    index: t,
                    categoryId: i,
                    analyticsLocation: r
                }),
            [n]
        );
    return i.useMemo(
        () => ({
            onGuildCardSeen: r,
            onGuildCardClick: a
        }),
        [a, r]
    );
}
