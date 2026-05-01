"use strict";
n.d(t, { VU: () => o, ef: () => a, ny: () => l });
var i = n(353640),
    r = n(121894);
let s = (0, i.v)((e) => ({ inDndMode: !1 }));
function a(e) {
    (0, r.r)(() => s.setState({ inDndMode: e }));
}
function o() {
    return s((e) => e.inDndMode);
}
function l() {
    return s.getState().inDndMode;
}
