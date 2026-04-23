"use strict";
n.d(t, { Ao: () => u, Et: () => l, TD: () => o, XT: () => c });
var r = n(311907),
    i = n(723702),
    s = n(734066),
    a = n(274372);
function o() {
    let e = (0, s.Pm)(),
        t = a.A.getState().clipsSettings.clipsEnabled;
    return e && t;
}
function l() {
    let e = (0, s.sw)(),
        t = (0, r.bG)([a.A], () => a.A.getState().clipsSettings.clipsEnabled);
    return e && t;
}
function u() {
    let e = o(),
        t = (0, i.isWindows)(),
        n = a.A.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n;
}
function c() {
    let e = l(),
        t = (0, i.isWindows)(),
        n = (0, r.bG)([a.A], () => a.A.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n;
}
