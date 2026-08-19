"use strict";
n.d(t, { GD: () => a, ls: () => o, oc: () => u, uj: () => c, v1: () => r, y5: () => d });
var l = n(506774),
    i = n(824744);
let s = "MediaPlayerVolume";
function r() {
    let { volume: e } = l.w.get(s) ?? {};
    return "number" != typeof e && (e = 1), (e = Math.min(1, Math.max(0, e)));
}
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return (0, i.M)(r(), e);
}
function o(e) {
    l.w.set(s, { volume: e, muted: c() });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    o((0, i.w)(e, t));
}
function c() {
    let { muted: e } = l.w.get(s) ?? {};
    return "boolean" != typeof e && (e = !1), e;
}
function d(e) {
    l.w.set(s, { volume: r(), muted: e });
}
