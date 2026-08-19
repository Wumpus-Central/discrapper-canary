"use strict";
r.d(t, { e: () => l, o: () => u });
var n = r(59344),
    o = r(731692),
    i = r(944490),
    a = r(582128);
let s = new WeakMap();
function l(e, t) {
    let r;
    return (t && o.B.getGlobalDictionaryForPackage(t)) || ((r = s.get(e)) || ((r = new (0, o.B)(e)), s.set(e, r)), r);
}
function u(e, t) {
    let { locale: r } = (0, n.Y)(),
        o = l(e, t);
    return (0, a.useMemo)(() => new (0, i.J)(r, o), [r, o]);
}
