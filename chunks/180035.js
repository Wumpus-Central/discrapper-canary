n.d(t, { d: () => l }), n(653041);
var r = n(399606),
    i = n(481060),
    o = n(607070),
    a = n(591146),
    s = n(540059);
function l(e, t) {
    let { theme: n, density: l } = (0, i.TCT)(),
        c = (0, r.e7)([o.Z], () => o.Z.saturation),
        u = (0, s.Q3)('useToken'),
        d = (0, s.R6)('useToken'),
        f = (0, a.M)('useToken'),
        _ = (0, a.C)('useToken'),
        p = [];
    return (
        f && p.push('refresh-fast-follow-avatars'),
        _ && p.push('refresh-fast-follow-guild-bg'),
        u && p.push('visual-refresh'),
        d && p.push('visual-refresh-chat-input'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: c,
            enabledExperiments: p,
            density: l
        })
    );
}
