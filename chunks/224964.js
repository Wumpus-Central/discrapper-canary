n.d(t, { A: () => a });
var l = n(582128),
    i = n(702841),
    s = n(21161),
    r = n(3137);
function a() {
    let { createMultipleConfettiAt: e } = l.useContext(s.x),
        t = (0, i.bG)([r.A], () => r.A.getState()),
        n = l.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 } }),
            [],
        );
    return l.useMemo(
        () => ({
            fire: (l, i, s) => {
                let r = s?.settings != null ? { ...t, ...s.settings } : t;
                e(l, i, n(r), (s?.count ?? r.confettiCount) * (s?.countMultiplier ?? 1), { sprite: s?.sprite });
            },
        }),
        [e, n, t],
    );
}
