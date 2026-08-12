"use strict";
n.d(t, { Ao: () => d, Et: () => o, TD: () => l, XT: () => c });
var i = n(17928),
    r = n(723702),
    a = n(734066),
    s = n(915725);
function l() {
    let e = (0, a.Pm)(),
        t = s.Ay.getState().clipsSettings.clipsEnabled;
    return e && t && s.Ay.getState().clipsSettings.decoupledClipsEnabled;
}
function o() {
    let e = (0, a.sw)(),
        t = (0, i.bG)([s.Ay], () => s.Ay.getState().clipsSettings.clipsEnabled),
        n = (0, i.bG)([s.Ay], () => s.Ay.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n;
}
function d() {
    let e = l(),
        t = (0, r.isWindows)();
    return e && t;
}
function c() {
    let e = o(),
        t = (0, r.isWindows)();
    return e && t;
}
