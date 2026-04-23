"use strict";
n.d(t, { G: () => s });
var r = n(530702),
    i = n(64700);
function s(e, t, n) {
    let s = (0, i.useMemo)(() => new (0, r.G)(), []),
        { children: a, items: o, collection: l } = e;
    return (0, i.useMemo)(() => l || t(s.build({ children: a, items: o }, n)), [s, a, o, l, n, t]);
}
