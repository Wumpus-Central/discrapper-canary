r.d(n, {
    d: function () {
        return l;
    }
});
var i = r(399606),
    a = r(410030),
    s = r(607070),
    o = r(540059);
function l(e, n) {
    let r = (0, a.ZP)(),
        l = (0, i.e7)([s.Z], () => s.Z.saturation),
        u = (0, o.Q3)('useToken') ? ['visual-refresh'] : [];
    return e.resolve({
        theme: null != n ? n : r,
        saturation: l,
        enabledExperiments: u
    });
}
