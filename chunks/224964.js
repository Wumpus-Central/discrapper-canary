"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(417597),
    a = n(21161),
    s = n(3137);
let o = 7;
function l() {
    let { createMultipleConfettiAt: e } = r.useContext(a.x),
        t = (0, i.bG)([s.A], () => s.A.getState()),
        n = r.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - o, maxValue: e.confettiSize + o } }),
            [],
        );
    return r.useMemo(
        () => ({
            fire: (r, i, a) => {
                let s = a?.settings != null ? { ...t, ...a.settings } : t;
                e(r, i, n(s), (a?.count ?? s.confettiCount) * (a?.countMultiplier ?? 1), { sprite: a?.sprite });
            },
        }),
        [e, n, t],
    );
}
