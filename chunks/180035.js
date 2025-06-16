n.d(t, { d: () => l }), n(539854);
var r = n(399606),
    i = n(481060),
    a = n(607070),
    o = n(591146),
    s = n(540059);
function l(e, t) {
    let { theme: n, density: l } = (0, i.TCT)(),
        c = (0, r.e7)([a.Z], () => a.Z.saturation),
        u = (0, s.Q3)('useToken'),
        d = (0, s.R6)('useToken'),
        f = (0, o.Ml)('useToken'),
        _ = (0, o.CL)('useToken'),
        p = (0, o.VM)('useToken'),
        h = [];
    return (
        f && h.push('refresh-fast-follow-avatars'),
        _ && h.push('refresh-fast-follow-guild-bg'),
        p && h.push('refresh-fast-follow-distinct-borders'),
        u && h.push('visual-refresh'),
        d && h.push('visual-refresh-chat-input'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: c,
            enabledExperiments: h,
            density: l
        })
    );
}
