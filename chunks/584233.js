n.d(t, { x: () => o });
var r = n(447543),
    i = n(38618),
    l = n(652898),
    a = n(430824);
async function o(e) {
    let { code: t } = e,
        o = (await (0, l.Z)(t)).invite;
    if (
        null == o ||
        null == o.guild ||
        (await new Promise((e) => {
            i.Z.addChangeListener(() => !i.Z.isConnected() || (e(), !1));
        }),
        null == a.Z.getGuild(o.guild.id))
    )
        return;
    let { default: s } = await Promise.resolve().then(n.bind(n, 17181));
    await s({ guildId: o.guild.id }), r.ZP.transitionToInvite(o, void 0, !0);
}
