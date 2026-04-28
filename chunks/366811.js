"use strict";
n.d(t, { A: () => c });
var r = n(265690),
    a = n(121894),
    i = n(463347),
    l = n(334465),
    s = n(652215);
function o(e) {
    let t = (0, l.B)(e ?? "", { path: s.BVt.CHANNEL(i.pv.guildId(), i.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return { guildId: e === s.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, l.B)(e ?? "", { path: s.BVt.GUILD_BOOSTING_MARKETING(i.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let c = (0, r.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: r } = o(t);
        (0, a.r)(() => e({ path: t, guildId: n, channelId: r }));
    },
    resetPath(t) {
        let { guildId: n, channelId: r } = o(t);
        (0, a.r)(() => e({ path: null, guildId: n, channelId: r, basePath: t }));
    },
}));
