n.d(t, { c: () => d, t: () => o });
var i = n(582128);
let r = 0,
    a = new Set();
function s(e) {
    return (a.add(e), () => a.delete(e));
}
function l() {
    return r;
}
function o(e) {
    if (e !== r) for (let t of ((r = e), [...a])) t();
}
function d() {
    return i.useSyncExternalStore(s, l);
}
