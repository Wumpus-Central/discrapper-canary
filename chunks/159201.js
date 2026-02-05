"use strict";
n.d(t, { a: () => a, f: () => i });
var r = n(761821);
function i(e, t) {
    let n = e.fields.find((e) => e.localName === t);
    if (null == n) throw Error(`Unknown proto field name ${String(t)}`);
    return n.T();
}
function a(e, t, n, i, a) {
    let s = null != e ? n.fromBinary(n.toBinary(e), r.Su) : n.create();
    if (!1 === t(s)) return null;
    let o = i.create();
    return (o[a] = s), o;
}
