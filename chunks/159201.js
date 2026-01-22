n.d(t, {
    a: () => a,
    f: () => i,
}),
    n(65821);
var r = n(761821);
function i(e, t) {
    let n = e.fields.find((e) => e.localName === t);
    if (null == n) throw Error("Unknown proto field name ".concat(String(t)));
    return n.T();
}
function a(e, t, n, i, a) {
    let s = null != e ? n.fromBinary(n.toBinary(e), r.Su) : n.create();
    if (!1 === t(s)) return null;
    let o = i.create();
    return (o[a] = s), o;
}
