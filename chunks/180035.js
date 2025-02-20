n.d(t, { d: () => s }), n(653041);
var r = n(399606),
    i = n(410030),
    o = n(607070),
    a = n(540059);
function s(e, t) {
    let n = (0, i.ZP)(),
        s = (0, r.e7)([o.Z], () => o.Z.saturation),
        l = (0, a.Q3)('useToken'),
        c = (0, a.R6)('useToken'),
        u = [];
    return (
        l && u.push('visual-refresh'),
        c && u.push('visual-refresh-chat-input'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: s,
            enabledExperiments: u
        })
    );
}
