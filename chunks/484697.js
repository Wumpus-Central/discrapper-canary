n.d(t, { $9: () => o, M7: () => l, Yt: () => r, fl: () => d, lw: () => a });
let i = new WeakMap();
function r(e, t) {
    i.set(e, t);
}
function a(e) {
    return i.get(e) ?? null;
}
let s = new Map();
function l(e, t) {
    s.set(e, t);
}
function o(e) {
    s.delete(e);
}
function d(e) {
    return s.get(e) ?? null;
}
