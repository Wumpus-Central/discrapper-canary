"use strict";
n.d(t, { r: () => o }), n(321073);
var r = n(417597),
    i = n(397927),
    a = n(775602),
    s = n(534409);
function o(e, t) {
    let { theme: n, density: o } = (0, i.wRf)(),
        l = (0, r.bG)([a.A], () => a.A.saturation),
        u = (0, r.bG)([a.A], () => a.A.isHighContrastModeEnabled),
        c = (0, s.qK)("useToken"),
        d = (0, s.k5)("useToken"),
        _ = (0, s.lV)("useToken"),
        f = [];
    return (
        c && f.push("refresh-fast-follow-avatars"),
        d && f.push("refresh-fast-follow-guild-bg"),
        _ && f.push("refresh-fast-follow-distinct-borders"),
        e.resolve({ theme: t ?? n, saturation: l, enabledExperiments: f, density: o, highContrastModeEnabled: u })
    );
}
