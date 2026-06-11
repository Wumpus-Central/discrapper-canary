"use strict";
n.d(t, { r: () => o }), n(321073);
var i = n(702841),
    r = n(38021),
    s = n(775602),
    a = n(534409);
function o(e, t) {
    let { theme: n, density: o } = (0, r.wR)(),
        l = (0, i.bG)([s.Ay], () => s.Ay.saturation),
        u = (0, i.bG)([s.Ay], () => s.Ay.isHighContrastModeEnabled),
        c = (0, a.qK)("useToken"),
        d = (0, a.k5)("useToken"),
        _ = (0, a.lV)("useToken"),
        h = [];
    return (
        c && h.push("refresh-fast-follow-avatars"),
        d && h.push("refresh-fast-follow-guild-bg"),
        _ && h.push("refresh-fast-follow-distinct-borders"),
        e.resolve({ theme: t ?? n, saturation: l, enabledExperiments: h, density: o, highContrastModeEnabled: u })
    );
}
