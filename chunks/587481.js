s.d(t, { GD: () => r, ls: () => o, oc: () => u, uj: () => h, v1: () => l, y5: () => d });
var a = s(506774),
    i = s(824744);
let n = "MediaPlayerVolume";
function l() {
    let { volume: e } = a.w.get(n) ?? {};
    return ("number" != typeof e && (e = 1), (e = Math.min(1, Math.max(0, e))));
}
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return (0, i.M)(l(), e);
}
function o(e) {
    a.w.set(n, { volume: e, muted: h() });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    o((0, i.w)(e, t));
}
function h() {
    let { muted: e } = a.w.get(n) ?? {};
    return ("boolean" != typeof e && (e = !1), e);
}
function d(e) {
    a.w.set(n, { volume: l(), muted: e });
}
