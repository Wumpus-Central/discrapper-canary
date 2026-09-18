n.d(t, { A: () => d });
var i = n(882035),
    r = n(121894),
    a = n(463347),
    s = n(334465),
    l = n(652215);
function o(e) {
    let t = (0, s.B)(e ?? "", { path: l.BVt.CHANNEL(a.pv.guildId(), a.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return { guildId: e === l.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, s.B)(e ?? "", { path: l.BVt.GUILD_BOOSTING_MARKETING(a.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let d = (0, i.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: i } = o(t);
        (0, r.r)(() => e({ path: t, guildId: n, channelId: i }));
    },
    resetPath(t) {
        let { guildId: n, channelId: i } = o(t);
        (0, r.r)(() => e({ path: null, guildId: n, channelId: i, basePath: t }));
    },
}));
