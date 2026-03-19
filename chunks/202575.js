n.d(t, { p: () => r });
var i = n(64700),
    a = n(965660);
function r(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
        r = i.useCallback(
            (e, i) => {
                t.markAsSeen(i, e, n);
            },
            [t, n],
        ),
        l = i.useCallback(
            (e, t, i, r) => (0, a.Wl)({ loadId: n, guildId: e, index: t, categoryId: i, analyticsLocation: r }),
            [n],
        );
    return i.useMemo(() => ({ onGuildCardSeen: r, onGuildCardClick: l }), [l, r]);
}
