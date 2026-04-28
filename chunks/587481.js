"use strict";
n.d(t, { ls: () => a, uj: () => r, v1: () => s, y5: () => o });
var l = n(506774);
let i = "MediaPlayerVolume";
function s() {
    let { volume: e } = l.w.get(i) ?? {};
    return "number" != typeof e && (e = 1), (e = Math.min(1, Math.max(0, e)));
}
function a(e) {
    l.w.set(i, { volume: e, muted: r() });
}
function r() {
    let { muted: e } = l.w.get(i) ?? {};
    return "boolean" != typeof e && (e = !1), e;
}
function o(e) {
    l.w.set(i, { volume: s(), muted: e });
}
