n.d(t, {
    q: () => o,
});
var r = n(73153),
    i = n(846293),
    l = n(970163),
    a = n(71393),
    s = n(652215);
async function o(e) {
    let { code: t } = e,
        o = (await (0, l.A)(t)).invite;
    if (null == o || null == o.guild) return;
    let c = o.guild.id;
    if (null == a.A.getGuild(c))
        return void r.h.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: o,
            code: t,
            context: s.BRT.APP,
        });
    let { default: u } = await Promise.resolve().then(n.bind(n, 967305));
    await u({
        guildId: c,
    }),
        i.Ay.transitionToInvite(o, void 0, !0);
}
