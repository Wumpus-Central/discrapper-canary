n.d(t, { A: () => u });
var l = n(882035),
    i = n(121894),
    s = n(463347),
    r = n(334465),
    a = n(652215);
function o(e) {
    let t = (0, r.B)(e ?? "", { path: a.BVt.CHANNEL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?") });
    if (null != t) {
        let { guildId: e, channelId: n } = t.params;
        return { guildId: e === a.ME ? null : e, channelId: n ?? null };
    }
    let n = (0, r.B)(e ?? "", { path: a.BVt.GUILD_BOOSTING_MARKETING(s.pv.guildId()) });
    return null != n ? { guildId: n.params.guildId, channelId: null } : { guildId: null, channelId: null };
}
let u = (0, l.h)((e) => ({
    path: null,
    basePath: "/",
    guildId: null,
    channelId: null,
    updatePath(t) {
        let { guildId: n, channelId: l } = o(t);
        (0, i.r)(() => e({ path: t, guildId: n, channelId: l }));
    },
    resetPath(t) {
        let { guildId: n, channelId: l } = o(t);
        (0, i.r)(() => e({ path: null, guildId: n, channelId: l, basePath: t }));
    },
}));
