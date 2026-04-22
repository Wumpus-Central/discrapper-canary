"use strict";
n.d(t, { r: () => o }), n(321073);
var r = n(417597),
    i = n(38021),
    s = n(775602),
    a = n(534409);
function o(e, t) {
    let { theme: n, density: o } = (0, i.wR)(),
        l = (0, r.bG)([s.A], () => s.A.saturation),
        u = (0, r.bG)([s.A], () => s.A.isHighContrastModeEnabled),
        d = (0, a.qK)("useToken"),
        c = (0, a.k5)("useToken"),
        _ = (0, a.lV)("useToken"),
        f = [];
    return (
        d && f.push("refresh-fast-follow-avatars"),
        c && f.push("refresh-fast-follow-guild-bg"),
        _ && f.push("refresh-fast-follow-distinct-borders"),
        e.resolve({ theme: t ?? n, saturation: l, enabledExperiments: f, density: o, highContrastModeEnabled: u })
    );
}
