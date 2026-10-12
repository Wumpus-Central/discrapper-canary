n.d(l, { A: () => r });
var t = n(582128),
    s = n(702841),
    i = n(21161),
    a = n(3137);
function r() {
    let { createMultipleConfettiAt: e } = t.useContext(i.x),
        l = (0, s.bG)([a.A], () => a.A.getState()),
        n = t.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 } }),
            [],
        );
    return t.useMemo(
        () => ({
            fire: (t, s, i) => {
                let a = i?.settings != null ? { ...l, ...i.settings } : l;
                e(t, s, n(a), (i?.count ?? a.confettiCount) * (i?.countMultiplier ?? 1), { sprite: i?.sprite });
            },
        }),
        [e, n, l],
    );
}
