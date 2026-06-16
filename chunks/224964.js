"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(702841),
    s = n(21161),
    a = n(3137);
function o() {
    let { createMultipleConfettiAt: e } = i.useContext(s.x),
        t = (0, r.bG)([a.A], () => a.A.getState()),
        n = i.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 } }),
            [],
        );
    return i.useMemo(
        () => ({
            fire: (i, r, s) => {
                let a = s?.settings != null ? { ...t, ...s.settings } : t;
                e(i, r, n(a), (s?.count ?? a.confettiCount) * (s?.countMultiplier ?? 1), { sprite: s?.sprite });
            },
        }),
        [e, n, t],
    );
}
