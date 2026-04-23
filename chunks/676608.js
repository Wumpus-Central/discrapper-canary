"use strict";
n.d(t, { Ay: () => a, aF: () => l, jV: () => o });
var i = n(17928),
    r = n(71393),
    s = n(652215);
function a(e, t) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return null != t && t.features.has(s.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
}
function o(e, t) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return null != t && t.features.has(s.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
}
function l(e, t) {
    let n = r.A.getGuild(e);
    return null != n && n.features.has(s.GuildFeatures.ENHANCED_ROLE_COLORS);
}
