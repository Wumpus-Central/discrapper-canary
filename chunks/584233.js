n.d(t, { x: () => s });
var r = n(447543),
    i = n(38618),
    l = n(652898),
    a = n(430824);
async function s(e) {
    let { code: t } = e,
        s = (await (0, l.Z)(t)).invite;
    if (
        null == s ||
        null == s.guild ||
        (await new Promise((e) => {
            i.Z.addChangeListener(() => !i.Z.isConnected() || (e(), !1));
        }),
        null == a.Z.getGuild(s.guild.id))
    )
        return;
    let { default: o } = await Promise.resolve().then(n.bind(n, 17181));
    await o({ guildId: s.guild.id }), r.ZP.transitionToInvite(s, void 0, !0);
}
