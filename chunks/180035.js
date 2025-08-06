(n.d(t, { d: () => l }), n(539854));
var r = n(399606),
    i = n(481060),
    o = n(607070),
    a = n(591146),
    s = n(377089);
function l(e, t) {
    let { theme: n, density: l } = (0, i.TCT)(),
        c = (0, r.e7)([o.Z], () => o.Z.saturation),
        u = (0, r.e7)([o.Z], () => o.Z.isHighContrastModeEnabled),
        d = (0, a.Ml)('useToken'),
        f = (0, a.CL)('useToken'),
        _ = (0, a.VM)('useToken'),
        p = (0, s.U)('useToken'),
        h = [];
    return (
        d && h.push('refresh-fast-follow-avatars'),
        f && h.push('refresh-fast-follow-guild-bg'),
        _ && h.push('refresh-fast-follow-distinct-borders'),
        p && h.push('mana-text-inputs'),
        e.resolve({
            theme: null != t ? t : n,
            saturation: c,
            enabledExperiments: h,
            density: l,
            highContrastModeEnabled: u
        })
    );
}
