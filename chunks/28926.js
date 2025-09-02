n.d(t, {
    H: () => i,
    r: () => a,
}),
    n(415506);
var r = n(48481);
function i(e, t) {
    let n = e.fields.find((e) => e.localName === t);
    if (null == n) throw Error("Unknown proto field name ".concat(String(t)));
    return n.T();
}
function a(e, t, n, i, a) {
    let o = null != e ? n.fromBinary(n.toBinary(e), r.Uc) : n.create();
    if (!1 === t(o)) return null;
    let s = i.create();
    return (s[a] = o), s;
}
