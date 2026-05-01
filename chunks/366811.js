n.d(t, { A: () => u });
var i = n(265690),
    l = n(121894),
    r = n(463347),
    s = n(334465),
    a = n(652215);
function o(e) {
    let t = (0, s.B)(e ?? "", { path: a.BVt.CHANNEL(r.pv.guildId(), r.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return { guildId: e === a.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, s.B)(e ?? "", { path: a.BVt.GUILD_BOOSTING_MARKETING(r.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let u = (0, i.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: i } = o(t);
        (0, l.r)(() => e({ path: t, guildId: n, channelId: i }));
    },
    resetPath(t) {
        let { guildId: n, channelId: i } = o(t);
        (0, l.r)(() => e({ path: null, guildId: n, channelId: i, basePath: t }));
    },
}));
