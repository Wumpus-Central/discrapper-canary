n.d(t, { A: () => r });
var s = n(882035),
    i = n(121894),
    l = n(463347),
    a = n(334465),
    o = n(652215);
function u(e) {
    let t = (0, a.B)(e ?? "", { path: o.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return { guildId: e === o.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, a.B)(e ?? "", { path: o.BVt.GUILD_BOOSTING_MARKETING(l.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let r = (0, s.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: s } = u(t);
        (0, i.r)(() => e({ path: t, guildId: n, channelId: s }));
    },
    resetPath(t) {
        let { guildId: n, channelId: s } = u(t);
        (0, i.r)(() => e({ path: null, guildId: n, channelId: s, basePath: t }));
    },
}));
