u.d(t, { $9: () => f, M7: () => o, Yt: () => l, fl: () => p, lw: () => i });
let e = new WeakMap();
function l(n, t) {
    e.set(n, t);
}
function i(n) {
    return e.get(n) ?? null;
}
let c = new Map();
function o(n, t) {
    c.set(n, t);
}
function f(n) {
    c.delete(n);
}
function p(n) {
    return c.get(n) ?? null;
}
