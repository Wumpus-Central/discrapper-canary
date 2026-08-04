n.d(t, { Y: () => a, l: () => r });
let s = new WeakMap();
function a(e, t) {
    s.set(e, t);
}
function r(e) {
    return s.get(e) ?? null;
}
