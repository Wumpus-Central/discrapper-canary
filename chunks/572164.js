"use strict";
n.d(t, { Ao: () => c, Et: () => d, TD: () => o, XT: () => u });
var i = n(17928),
    r = n(723702),
    a = n(734066),
    s = n(888916),
    l = n(915725);
function o() {
    let e = (0, a.Pm)(),
        t = l.Ay.getState().clipsSettings.clipsEnabled;
    return e && t && (!(0, s.Fp)() || l.Ay.getState().clipsSettings.decoupledClipsEnabled);
}
function d() {
    let e = (0, a.sw)(),
        t = (0, i.bG)([l.Ay], () => l.Ay.getState().clipsSettings.clipsEnabled),
        n = (0, s.As)(),
        r = (0, i.bG)([l.Ay], () => l.Ay.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && (!n || r);
}
function c() {
    let e = o(),
        t = (0, r.isWindows)();
    if ((0, s.Fp)()) return e && t;
    let n = l.Ay.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n;
}
function u() {
    let e = d(),
        t = (0, r.isWindows)(),
        n = (0, i.bG)([l.Ay], () => l.Ay.getState().clipsSettings.decoupledClipsEnabled);
    return (0, s.As)() ? e && t : e && t && n;
}
