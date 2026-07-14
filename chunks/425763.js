"use strict";
n.d(t, { VU: () => l, ef: () => s, ny: () => o });
var i = n(353640),
    r = n(121894);
let a = (0, i.v)((e) => ({ inDndMode: !1 }));
function s(e) {
    (0, r.r)(() => a.setState({ inDndMode: e }));
}
function l() {
    return a((e) => e.inDndMode);
}
function o() {
    return a.getState().inDndMode;
}
