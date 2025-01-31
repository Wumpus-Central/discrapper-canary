n.d(t, { d: () => o }), n(653041);
var i = n(399606),
    r = n(410030),
    a = n(607070),
    s = n(540059);
function o(e, t) {
    let n = (0, r.ZP)(),
        o = (0, i.e7)([a.Z], () => a.Z.saturation),
        l = (0, s.Q3)('useToken'),
        u = (0, s.R6)('useToken'),
        c = [];
    return (
        l && c.push('visual-refresh'),
        u && c.push('visual-refresh-chat-input'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: o,
            enabledExperiments: c
        })
    );
}
