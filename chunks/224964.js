"use strict";
n.d(t, { A: () => r });
var l = n(64700),
    i = n(702841),
    s = n(21161),
    a = n(3137);
function r() {
    let { createMultipleConfettiAt: e } = l.useContext(s.x),
        t = (0, i.bG)([a.A], () => a.A.getState()),
        n = l.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 } }),
            [],
        );
    return l.useMemo(
        () => ({
            fire: (l, i, s) => {
                let a = s?.settings != null ? { ...t, ...s.settings } : t;
                e(l, i, n(a), (s?.count ?? a.confettiCount) * (s?.countMultiplier ?? 1), { sprite: s?.sprite });
            },
        }),
        [e, n, t],
    );
}
