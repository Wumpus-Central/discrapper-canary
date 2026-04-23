n.d(t, { A: () => o });
var i = n(265690),
    r = n(121894),
    a = n(463347),
    s = n(334465),
    _ = n(652215);
function l(e) {
    let t = (0, s.B)(e ?? "", { path: _.BVt.CHANNEL(a.pv.guildId(), a.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return { guildId: e === _.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, s.B)(e ?? "", { path: _.BVt.GUILD_BOOSTING_MARKETING(a.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let o = (0, i.h)((e) => ({
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
