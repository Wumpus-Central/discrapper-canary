n.d(t, { $9: () => u, M7: () => a, Yt: () => l, fl: () => o, lw: () => i });
let r = new WeakMap();
function l(e, t) {
    r.set(e, t);
}
function i(e) {
    return r.get(e) ?? null;
}
let s = new Map();
function a(e, t) {
    s.set(e, t);
}
function u(e) {
    s.delete(e);
}
function o(e) {
    return s.get(e) ?? null;
}
