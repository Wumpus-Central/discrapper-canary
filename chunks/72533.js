"use strict";
n.d(t, { A: () => r, o: () => a });
var i = n(311907),
    s = n(71393),
    l = n(652215);
function r(e) {
    return (0, i.bG)([s.A], () => {
        let t = s.A.getGuild(e);
        return null != t && t.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
    });
}
function a(e) {
    let t = s.A.getGuild(e);
    return null != t && t.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
}
