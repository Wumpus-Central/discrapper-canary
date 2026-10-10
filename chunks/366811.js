n.d(e, { A: () => u });
var i = n(882035),
    s = n(121894),
    a = n(463347),
    l = n(334465),
    o = n(652215);
function r(t) {
    let e = (0, l.B)(t ?? "", { path: o.BVt.CHANNEL(a.pv.guildId(), a.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != e) {
        let { guildId: t, channelId: n } = e.params;
        return { guildId: t === o.ME ? null : t, channelId: n ?? null };
    }
    let n = (0, l.B)(t ?? "", { path: o.BVt.GUILD_BOOSTING_MARKETING(a.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let u = (0, i.h)((t) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(e) {
        let { guildId: n, channelId: i } = r(e);
        (0, s.r)(() => t({ path: e, guildId: n, channelId: i }));
    },
    resetPath(e) {
        let { guildId: n, channelId: i } = r(e);
        (0, s.r)(() => t({ path: null, guildId: n, channelId: i, basePath: e }));
    },
}));
