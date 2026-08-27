"use strict";
r.d(t, { e: () => l, o: () => u });
var n = r(366632),
    i = r(559550),
    o = r(60808),
    a = r(582128);
let s = new WeakMap();
function l(e, t) {
    let r;
    return (t && i.B.getGlobalDictionaryForPackage(t)) || ((r = s.get(e)) || ((r = new (0, i.B)(e)), s.set(e, r)), r);
}
function u(e, t) {
    let { locale: r } = (0, n.Y)(),
        i = l(e, t);
    return (0, a.useMemo)(() => new (0, o.J)(r, i), [r, i]);
}
