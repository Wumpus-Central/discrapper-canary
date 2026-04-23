a.d(t, { p: () => r });
var s = a(64700),
    l = a(965660);
function r(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: a } = e,
        r = s.useCallback(
            (e, s) => {
                t.markAsSeen(s, e, a);
            },
            [t, a],
        ),
        i = s.useCallback(
            (e, t, s, r) => (0, l.Wl)({ loadId: a, guildId: e, index: t, categoryId: s, analyticsLocation: r }),
            [a],
        );
    return s.useMemo(() => ({ onGuildCardSeen: r, onGuildCardClick: i }), [i, r]);
}
