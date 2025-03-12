n.d(t, { d: () => s }), n(653041);
var r = n(399606),
    i = n(481060),
    o = n(607070),
    a = n(540059);
function s(e, t) {
    let { theme: n, density: s } = (0, i.TCT)(),
        l = (0, r.e7)([o.Z], () => o.Z.saturation),
        c = (0, a.Q3)('useToken'),
        u = (0, a.R6)('useToken'),
        d = [];
    return (
        c && d.push('visual-refresh'),
        u && d.push('visual-refresh-chat-input'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: l,
            enabledExperiments: d,
            density: s
        })
    );
}
