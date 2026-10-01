s.d(t, { GD: () => r, ls: () => o, oc: () => u, uj: () => d, v1: () => i, y5: () => c });
var n = s(506774),
    a = s(824744);
let l = "MediaPlayerVolume";
function i() {
    let { volume: e } = n.w.get(l) ?? {};
    return ("number" != typeof e && (e = 1), (e = Math.min(1, Math.max(0, e))));
}
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return (0, a.M)(i(), e);
}
function o(e) {
    n.w.set(l, { volume: e, muted: d() });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    o((0, a.w)(e, t));
}
function d() {
    let { muted: e } = n.w.get(l) ?? {};
    return ("boolean" != typeof e && (e = !1), e);
}
function c(e) {
    n.w.set(l, { volume: i(), muted: e });
}
