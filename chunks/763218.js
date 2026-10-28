n.d(t, { U: () => i, l: () => o });
var s = n(582128);
let a = !1,
    l = new Set();
function r(e) {
    return (l.add(e), () => l.delete(e));
}
function i(e) {
    a !== e && ((a = e), l.forEach((e) => e()));
}
function o() {
    return s.useSyncExternalStore(r, () => a);
}
