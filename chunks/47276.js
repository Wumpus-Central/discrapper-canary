"use strict";
n.d(t, { e: () => l, o: () => u });
var r = n(853590),
    i = n(731692),
    s = n(944490),
    a = n(64700);
let o = new WeakMap();
function l(e, t) {
    let n;
    return (t && i.B.getGlobalDictionaryForPackage(t)) || ((n = o.get(e)) || ((n = new (0, i.B)(e)), o.set(e, n)), n);
}
function u(e, t) {
    let { locale: n } = (0, r.Y)(),
        i = l(e, t);
    return (0, a.useMemo)(() => new (0, s.J)(n, i), [n, i]);
}
