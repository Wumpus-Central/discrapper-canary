n.d(t, {
    CY: () => c,
    LI: () => s,
    nq: () => u,
    z8: () => l,
});
var r = n(442837),
    i = n(358085),
    a = n(924557),
    o = n(435064);
function s() {
    let e = (0, a.w2)(),
        t = o.Z.getState().clipsSettings.clipsEnabled;
    return e && t;
}
function l() {
    let e = (0, a.w9)(),
        t = (0, r.e7)([o.Z], () => o.Z.getState().clipsSettings.clipsEnabled);
    return e && t;
}
function c() {
    let e = s(),
        t = (0, i.isWindows)(),
        n = o.Z.getState().clipsSettings.decoupledClipsEnabled;
    return e && t && n;
}
function u() {
    let e = l(),
        t = (0, i.isWindows)(),
        n = (0, r.e7)([o.Z], () => o.Z.getState().clipsSettings.decoupledClipsEnabled);
    return e && t && n;
}
