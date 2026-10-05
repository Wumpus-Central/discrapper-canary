n.d(t, { G1: () => o, Qy: () => a, bR: () => l });
let i = { width: 1 / 0, height: 1 / 0 },
    r = null;
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
function a(e) {
    r = e;
}
function o() {
    return r ?? void 0;
}
