n.d(t, { p: () => l });
var r = n(64700),
    i = n(965660);
function l(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
        l = r.useCallback(
            (e, r) => {
                t.markAsSeen(r, e, n);
            },
            [t, n],
        ),
        a = r.useCallback(
            (e, t, r, l) =>
                (0, i.Wl)({
                    loadId: n,
                    guildId: e,
                    index: t,
                    categoryId: r,
                    analyticsLocation: l,
                }),
            [n],
        );
    return r.useMemo(
        () => ({
            onGuildCardSeen: l,
            onGuildCardClick: a,
        }),
        [a, l],
    );
}
