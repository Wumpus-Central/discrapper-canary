"use strict";
n.d(t, { Ao: () => u, Et: () => l, TD: () => o, XT: () => c });
var r = n(311907),
    i = n(723702),
    a = n(734066),
    s = n(274372);
function o() {
    let e = (0, a.Pm)(),
        t = s.A.getState().clipsSettings.clipsEnabled;
    return e && t;
}
function l() {
    let e = (0, a.sw)(),
        t = (0, r.bG)([s.A], () => s.A.getState().clipsSettings.clipsEnabled);
    return e && t;
}
function u() {
    let e = o(),
        t = (0, i.isWindows)(),
        n = s.A.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n;
}
function c() {
    let e = l(),
        t = (0, i.isWindows)(),
        n = (0, r.bG)([s.A], () => s.A.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n;
}
