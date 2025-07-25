(n.d(t, { d: () => s }), n(539854));
var r = n(399606),
    i = n(481060),
    a = n(607070),
    o = n(591146);
function s(e, t) {
    let { theme: n, density: s } = (0, i.TCT)(),
        l = (0, r.e7)([a.Z], () => a.Z.saturation),
        c = (0, r.e7)([a.Z], () => a.Z.isHighContrastModeEnabled),
        u = (0, o.Ml)('useToken'),
        d = (0, o.CL)('useToken'),
        f = (0, o.VM)('useToken'),
        _ = [];
    return (
        u && _.push('refresh-fast-follow-avatars'),
        d && _.push('refresh-fast-follow-guild-bg'),
        f && _.push('refresh-fast-follow-distinct-borders'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: l,
            enabledExperiments: _,
            density: s,
            highContrastModeEnabled: c
        })
    );
}
