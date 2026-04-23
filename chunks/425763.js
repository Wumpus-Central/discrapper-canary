"use strict";
n.d(t, { VU: () => o, ef: () => a, ny: () => l });
var r = n(353640),
    i = n(121894);
let s = (0, r.v)((e) => ({ inDndMode: !1 }));
function a(e) {
    (0, i.r)(() => s.setState({ inDndMode: e }));
}
function o() {
    return s((e) => e.inDndMode);
}
function l() {
    return s.getState().inDndMode;
}
