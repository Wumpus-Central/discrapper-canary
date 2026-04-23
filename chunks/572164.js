"use strict";
n.d(t, { Ao: () => d, Et: () => l, TD: () => o, XT: () => _ });
var i = n(17928),
    r = n(723702),
    s = n(734066),
    a = n(274372);
function o() {
    let e = (0, s.Pm)(),
        t = a.A.getState().clipsSettings.clipsEnabled;
    return e && t;
}
function l() {
    let e = (0, s.sw)(),
        t = (0, i.bG)([a.A], () => a.A.getState().clipsSettings.clipsEnabled);
    return e && t;
}
function d() {
    let e = o(),
        t = (0, r.isWindows)(),
        n = a.A.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n;
}
function _() {
    let e = l(),
        t = (0, r.isWindows)(),
        n = (0, i.bG)([a.A], () => a.A.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n;
}
