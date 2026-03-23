n.d(t, { p: () => l });
var i = n(64700),
    a = n(965660);
function l(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
        l = i.useCallback(
            (e, i) => {
                t.markAsSeen(i, e, n);
            },
            [t, n],
        ),
        r = i.useCallback(
            (e, t, i, l) => (0, a.Wl)({ loadId: n, guildId: e, index: t, categoryId: i, analyticsLocation: l }),
            [n],
        );
    return i.useMemo(() => ({ onGuildCardSeen: l, onGuildCardClick: r }), [r, l]);
}
