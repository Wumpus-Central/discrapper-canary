u.d(t, { $9: () => o, M7: () => f, Yt: () => l, fl: () => r, lw: () => i });
let e = new WeakMap();
function l(n, t) {
    e.set(n, t);
}
function i(n) {
    return e.get(n) ?? null;
}
let c = new Map();
function f(n, t) {
    c.set(n, t);
}
function o(n) {
    c.delete(n);
}
function r(n) {
    return c.get(n) ?? null;
}
