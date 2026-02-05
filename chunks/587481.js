"use strict";
n.d(t, { ls: () => s, uj: () => o, v1: () => a, y5: () => l });
var r = n(506774);
let i = "MediaPlayerVolume";
function a() {
    let { volume: e } = r.w.get(i) ?? {};
    return "number" != typeof e && (e = 1), (e = Math.min(1, Math.max(0, e)));
}
function s(e) {
    r.w.set(i, { volume: e, muted: o() });
}
function o() {
    let { muted: e } = r.w.get(i) ?? {};
    return "boolean" != typeof e && (e = !1), e;
}
function l(e) {
    r.w.set(i, { volume: a(), muted: e });
}
