"use strict";
n.d(t, { Ay: () => s, aF: () => o, jV: () => l });
var i = n(17928),
    r = n(71393),
    a = n(652215);
function s(e, t) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
}
function l(e, t) {
    return (0, i.bG)([r.A], () => {
        let t = r.A.getGuild(e);
        return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
}
function o(e, t) {
    let n = r.A.getGuild(e);
    return null != n && n.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
}
