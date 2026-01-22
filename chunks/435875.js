n.d(t, {
    q: () => s,
});
var r = n(846293),
    i = n(142120),
    l = n(970163),
    a = n(71393);
async function s(e) {
    let { code: t } = e,
        s = (await (0, l.A)(t)).invite;
    if (
        null == s ||
        null == s.guild ||
        (await new Promise((e) => {
            i.A.addChangeListener(() => !i.A.isConnected() || (e(), !1));
        }),
        null == a.A.getGuild(s.guild.id))
    )
        return;
    let { default: o } = await Promise.resolve().then(n.bind(n, 967305));
    await o({
        guildId: s.guild.id,
    }),
        r.Ay.transitionToInvite(s, void 0, !0);
}
