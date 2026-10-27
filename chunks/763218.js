a.d(t, { U: () => i, l: () => o });
var s = a(582128);
let n = !1,
    l = new Set();
function r(e) {
    return (l.add(e), () => l.delete(e));
}
function i(e) {
    n !== e && ((n = e), l.forEach((e) => e()));
}
function o() {
    return s.useSyncExternalStore(r, () => n);
}
