n.d(t, { A: () => r });
var l = n(582128),
    s = n(702841),
    i = n(21161),
    a = n(3137);
function r() {
    let { createMultipleConfettiAt: e } = l.useContext(i.x),
        t = (0, s.bG)([a.A], () => a.A.getState()),
        n = l.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 } }),
            [],
        );
    return l.useMemo(
        () => ({
            fire: (l, s, i) => {
                let a = i?.settings != null ? { ...t, ...i.settings } : t;
                e(l, s, n(a), (i?.count ?? a.confettiCount) * (i?.countMultiplier ?? 1), { sprite: i?.sprite });
            },
        }),
        [e, n, t],
    );
}
