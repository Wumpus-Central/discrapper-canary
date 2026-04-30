"use strict";
n.d(t, { A: () => u });
var i = n(265690),
    r = n(121894),
    s = n(463347),
    a = n(334465),
    o = n(652215);
function l(e) {
    let t = (0, a.B)(e ?? "", { path: o.BVt.CHANNEL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return { guildId: e === o.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, a.B)(e ?? "", { path: o.BVt.GUILD_BOOSTING_MARKETING(s.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let u = (0, i.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: i } = l(t);
        (0, r.r)(() => e({ path: t, guildId: n, channelId: i }));
    },
    resetPath(t) {
        let { guildId: n, channelId: i } = l(t);
        (0, r.r)(() => e({ path: null, guildId: n, channelId: i, basePath: t }));
    },
}));
