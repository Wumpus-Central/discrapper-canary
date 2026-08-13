n.d(t, { Y: () => r, l: () => a });
let s = new WeakMap();
function r(e, t) {
    s.set(e, t);
}
function a(e) {
    return s.get(e) ?? null;
}
