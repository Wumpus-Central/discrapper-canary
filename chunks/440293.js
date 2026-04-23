"use strict";
n.d(t, { $: () => o, w: () => a });
var i = n(17928),
    r = n(71393),
    s = n(652215);
function a(e) {
    return (0, i.bG)([r.A], () => {
        if (null == e) return !1;
        let t = r.A.getGuild(e);
        return (
            null != t && (t.features.has(s.GuildFeatures.COMMUNITY) || t.features.has(s.GuildFeatures.GUILD_PRODUCTS))
        );
    }, [e]);
}
function o(e) {
    if (null == e) return !1;
    let t = r.A.getGuild(e);
    return null != t && (t.features.has(s.GuildFeatures.COMMUNITY) || t.features.has(s.GuildFeatures.GUILD_PRODUCTS));
}
