"use strict";
n.d(t, { $: () => l, w: () => s });
var i = n(17928),
    r = n(71393),
    a = n(652215);
function s(e) {
    return (0, i.bG)([r.A], () => {
        if (null == e) return !1;
        let t = r.A.getGuild(e);
        return (
            null != t && (t.features.has(a.GuildFeatures.COMMUNITY) || t.features.has(a.GuildFeatures.GUILD_PRODUCTS))
        );
    }, [e]);
}
function l(e) {
    if (null == e) return !1;
    let t = r.A.getGuild(e);
    return null != t && (t.features.has(a.GuildFeatures.COMMUNITY) || t.features.has(a.GuildFeatures.GUILD_PRODUCTS));
}
