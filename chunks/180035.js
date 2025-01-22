r.d(n, {
    d: function () {
        return l;
    }
});
var i = r(399606),
    a = r(410030),
    o = r(607070),
    s = r(540059);
function l(e, n) {
    let r = (0, a.ZP)(),
        l = (0, i.e7)([o.Z], () => o.Z.saturation),
        u = (0, s.Q3)('useToken') ? ['visual-refresh'] : [];
    return e.resolve({
        theme: null != n ? n : r,
        saturation: l,
        enabledExperiments: u
    });
}
