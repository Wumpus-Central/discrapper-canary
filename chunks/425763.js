"use strict";
n.d(t, { VU: () => o, ef: () => s, ny: () => l });
var r = n(353640),
    i = n(121894);
let a = (0, r.v)((e) => ({ inDndMode: !1 }));
function s(e) {
    (0, i.r)(() => a.setState({ inDndMode: e }));
}
function o() {
    return a((e) => e.inDndMode);
}
function l() {
    return a.getState().inDndMode;
}
