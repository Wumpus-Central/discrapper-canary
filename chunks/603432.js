"use strict";
n.d(t, { e: () => l, o: () => u });
var r = n(59344),
    i = n(731692),
    a = n(944490),
    o = n(582128);
let s = new WeakMap();
function l(e, t) {
    let n;
    return (t && i.B.getGlobalDictionaryForPackage(t)) || ((n = s.get(e)) || ((n = new (0, i.B)(e)), s.set(e, n)), n);
}
function u(e, t) {
    let { locale: n } = (0, r.Y)(),
        i = l(e, t);
    return (0, o.useMemo)(() => new (0, a.J)(n, i), [n, i]);
}
