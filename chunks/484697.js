e.d(n, { $9: () => s, M7: () => p, Yt: () => c, fl: () => a, lw: () => i });
let u = new WeakMap();
function c(t, n) {
    u.set(t, n);
}
function i(t) {
    return u.get(t) ?? null;
}
let l = new Map();
function p(t, n) {
    l.set(t, n);
}
function s(t) {
    l.delete(t);
}
function a(t) {
    return l.get(t) ?? null;
}
