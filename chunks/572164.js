n.d(t, {
    Ao: () => c,
    Et: () => l,
    TD: () => o,
    XT: () => u,
});
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
function c() {
    let e = o(),
        t = (0, i.isWindows)(),
        n = s.A.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n;
}
function u() {
    let e = l(),
        t = (0, i.isWindows)(),
        n = (0, r.bG)([s.A], () => s.A.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n;
}
