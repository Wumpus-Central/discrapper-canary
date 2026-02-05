n.d(t, { p: () => a });
var i = n(64700),
    r = n(965660);
function a(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
        a = i.useCallback(
            (e, i) => {
                t.markAsSeen(i, e, n);
            },
            [t, n],
        ),
        l = i.useCallback(
            (e, t, i, a) => (0, r.Wl)({ loadId: n, guildId: e, index: t, categoryId: i, analyticsLocation: a }),
            [n],
        );
    return i.useMemo(() => ({ onGuildCardSeen: a, onGuildCardClick: l }), [l, a]);
}
