s.d(l, { A: () => a });
var t = s(582128),
    n = s(702841),
    i = s(21161),
    r = s(3137);
function a() {
    let { createMultipleConfettiAt: e } = t.useContext(i.x),
        l = (0, n.bG)([r.A], () => r.A.getState()),
        s = t.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 } }),
            [],
        );
    return t.useMemo(
        () => ({
            fire: (t, n, i) => {
                let r = i?.settings != null ? { ...l, ...i.settings } : l;
                e(t, n, s(r), (i?.count ?? r.confettiCount) * (i?.countMultiplier ?? 1), { sprite: i?.sprite });
            },
        }),
        [e, s, l],
    );
}
