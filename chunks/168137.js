"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(133636),
    o = n(776310),
    l = n(48228),
    u = n(190380),
    c = n(346640);
function d(e) {
    let { setScreen: t } = e,
        n = (0, s.bG)([a.A], () => a.A.getCombatClass()),
        d = (0, i.useCallback)(() => {
            switch (n) {
                case c.$6.TANK:
                    return (0, r.jsx)(l.A, { setScreen: t });
                case c.$6.DPS:
                    return (0, r.jsx)(u.A, { setScreen: t });
                case c.$6.HEALER:
                    return (0, r.jsx)(o.A, { setScreen: t });
            }
        }, [n, t]);
    if (null == n) return null;
    let _ = d();
    return (0, r.jsx)("div", { children: _ });
}
