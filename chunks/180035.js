r.d(n, {
    d: function () {
        return u;
    }
});
var i = r(653041);
var a = r(399606),
    o = r(410030),
    s = r(607070),
    l = r(540059);
function u(e, n) {
    let r = (0, o.ZP)(),
        i = (0, a.e7)([s.Z], () => s.Z.saturation),
        u = (0, l.Q3)('useToken'),
        c = (0, l.R6)('useToken'),
        d = [];
    return (
        u && d.push('visual-refresh'),
        c && d.push('visual-refresh-chat-input'),
        e.resolve({
            theme: null != n ? n : r,
            saturation: i,
            enabledExperiments: d
        })
    );
}
