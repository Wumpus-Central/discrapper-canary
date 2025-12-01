n.d(t, { d: () => l }), n(539854);
var r = n(399606),
    i = n(481060),
    a = n(607070),
    o = n(591146),
    s = n(377089);
function l(e, t) {
    let { theme: n, density: l } = (0, i.TCT)(),
        c = (0, r.e7)([a.Z], () => a.Z.saturation),
        u = (0, r.e7)([a.Z], () => a.Z.isHighContrastModeEnabled),
        d = (0, o.Ml)("useToken"),
        f = (0, o.CL)("useToken"),
        p = (0, o.VM)("useToken"),
        _ = (0, s.U)("useToken"),
        m = [];
    return (
        d && m.push("refresh-fast-follow-avatars"),
        f && m.push("refresh-fast-follow-guild-bg"),
        p && m.push("refresh-fast-follow-distinct-borders"),
        _ && m.push("mana-text-inputs"),
        e.resolve({
            theme: null != t ? t : n,
            saturation: c,
            enabledExperiments: m,
            density: l,
            highContrastModeEnabled: u,
        })
    );
}
