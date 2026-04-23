"use strict";
n.d(t, { Ay: () => a, aF: () => l, jV: () => o });
var r = n(311907),
    i = n(71393),
    s = n(652215);
function a(e, t) {
    return (0, r.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return null != t && t.features.has(s.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
}
function o(e, t) {
    return (0, r.bG)([i.A], () => {
        let t = i.A.getGuild(e);
        return null != t && t.features.has(s.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
}
function l(e, t) {
    let n = i.A.getGuild(e);
    return null != n && n.features.has(s.GuildFeatures.ENHANCED_ROLE_COLORS);
}
