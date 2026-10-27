n.d(t, { K: () => u, V: () => i });
var l = n(582128);
let r = null,
    s = new Set();
function a(e) {
    return (s.add(e), () => s.delete(e));
}
function i(e) {
    r !== e && ((r = e), s.forEach((e) => e()));
}
function u() {
    return l.useSyncExternalStore(a, () => r);
}
