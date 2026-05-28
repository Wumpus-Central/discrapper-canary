"use strict";
n.d(t, { Ao: () => u, Et: () => l, TD: () => o, XT: () => c });
var i = n(17928),
    r = n(723702),
    s = n(734066),
    a = n(274372);
function o() {
    let e = (0, s.Pm)(),
        t = a.Ay.getState().clipsSettings.clipsEnabled;
    return e && t;
}
function l() {
    let e = (0, s.sw)(),
        t = (0, i.bG)([a.Ay], () => a.Ay.getState().clipsSettings.clipsEnabled);
    return e && t;
}
function u() {
    let e = o(),
        t = (0, r.isWindows)(),
        n = a.Ay.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n;
}
function c() {
    let e = l(),
        t = (0, r.isWindows)(),
        n = (0, i.bG)([a.Ay], () => a.Ay.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n;
}
