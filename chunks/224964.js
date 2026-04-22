"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    l = n(417597),
    s = n(21161),
    r = n(3137);
function a() {
    let { createMultipleConfettiAt: e } = i.useContext(s.x),
        t = (0, l.bG)([r.A], () => r.A.getState()),
        n = i.useCallback(
            (e) => ({ size: { type: "static-random", minValue: e.confettiSize - 7, maxValue: e.confettiSize + 7 } }),
            [],
        );
    return i.useMemo(
        () => ({
            fire: (i, l, s) => {
                let r = s?.settings != null ? { ...t, ...s.settings } : t;
                e(i, l, n(r), (s?.count ?? r.confettiCount) * (s?.countMultiplier ?? 1), { sprite: s?.sprite });
            },
        }),
        [e, n, t],
    );
}
