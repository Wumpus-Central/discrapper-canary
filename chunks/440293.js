"use strict";
n.d(t, { $: () => o, w: () => a });
var r = n(311907),
    i = n(71393),
    s = n(652215);
function a(e) {
    return (0, r.bG)([i.A], () => {
        if (null == e) return !1;
        let t = i.A.getGuild(e);
        return (
            null != t && (t.features.has(s.GuildFeatures.COMMUNITY) || t.features.has(s.GuildFeatures.GUILD_PRODUCTS))
        );
    }, [e]);
}
function o(e) {
    if (null == e) return !1;
    let t = i.A.getGuild(e);
    return null != t && (t.features.has(s.GuildFeatures.COMMUNITY) || t.features.has(s.GuildFeatures.GUILD_PRODUCTS));
}
