n.d(e, { A: () => u });
var i = n(882035),
    a = n(121894),
    l = n(463347),
    s = n(334465),
    r = n(652215);
function o(t) {
    let e = (0, s.B)(t ?? "", { path: r.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != e) {
        let { guildId: t, channelId: n } = e.params;
        return { guildId: t === r.ME ? null : t, channelId: n ?? null };
    }
    let n = (0, s.B)(t ?? "", { path: r.BVt.GUILD_BOOSTING_MARKETING(l.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let u = (0, i.h)((t) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(e) {
        let { guildId: n, channelId: i } = o(e);
        (0, a.r)(() => t({ path: e, guildId: n, channelId: i }));
    },
    resetPath(e) {
        let { guildId: n, channelId: i } = o(e);
        (0, a.r)(() => t({ path: null, guildId: n, channelId: i, basePath: e }));
    },
}));
