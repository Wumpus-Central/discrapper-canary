a.d(t, { A: () => c });
var n = a(265690),
    l = a(121894),
    r = a(463347),
    i = a(334465),
    s = a(652215);
function o(e) {
    let t = (0, i.B)(e ?? "", { path: s.BVt.CHANNEL(r.pv.guildId(), r.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: a } = t.params;
        return { guildId: e === s.ME ? null : e, channelId: a ?? null };
    }
    let a = (0, i.B)(e ?? "", { path: s.BVt.GUILD_BOOSTING_MARKETING(r.pv.guildId()) });
    return null != a ? { guildId: a.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let c = (0, n.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: a, channelId: n } = o(t);
        (0, l.r)(() => e({ path: t, guildId: a, channelId: n }));
    },
    resetPath(t) {
        let { guildId: a, channelId: n } = o(t);
        (0, l.r)(() => e({ path: null, guildId: a, channelId: n, basePath: t }));
    },
}));
