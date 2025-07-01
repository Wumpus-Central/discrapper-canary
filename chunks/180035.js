(n.d(t, { d: () => s }), n(539854));
var r = n(399606),
    i = n(481060),
    a = n(607070),
    o = n(591146);
function s(e, t) {
    let { theme: n, density: s } = (0, i.TCT)(),
        l = (0, r.e7)([a.Z], () => a.Z.saturation),
        c = (0, o.Ml)('useToken'),
        u = (0, o.CL)('useToken'),
        d = (0, o.VM)('useToken'),
        f = [];
    return (
        c && f.push('refresh-fast-follow-avatars'),
        u && f.push('refresh-fast-follow-guild-bg'),
        d && f.push('refresh-fast-follow-distinct-borders'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: l,
            enabledExperiments: f,
            density: s
        })
    );
}
