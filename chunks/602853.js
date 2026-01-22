n.d(t, {
    r: () => o,
}),
    n(321073);
var r = n(417597),
    i = n(397927),
    a = n(775602),
    s = n(534409);

function o(e, t) {
    let { theme: n, density: o } = (0, i.wRf)(),
        l = (0, r.bG)([a.A], () => a.A.saturation),
        c = (0, r.bG)([a.A], () => a.A.isHighContrastModeEnabled),
        u = (0, s.qK)("useToken"),
        d = (0, s.k5)("useToken"),
        f = (0, s.lV)("useToken"),
        p = [];
    return (
        u && p.push("refresh-fast-follow-avatars"),
        d && p.push("refresh-fast-follow-guild-bg"),
        f && p.push("refresh-fast-follow-distinct-borders"),
        e.resolve({
            theme: null != t ? t : n,
            saturation: l,
            enabledExperiments: p,
            density: o,
            highContrastModeEnabled: c,
        })
    );
}
