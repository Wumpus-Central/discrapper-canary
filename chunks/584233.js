n.d(t, { x: () => o });
var r = n(447543),
    i = n(652898),
    l = n(430824);
async function o(e) {
    let { code: t } = e,
        o = (await (0, i.Z)(t)).invite;
    if (
        null == o ||
        null == o.guild ||
        (await new Promise((e) => {
            l.Z.addConditionalChangeListener(() => !l.Z.isLoaded() || (e(), !1));
        }),
        null == l.Z.getGuild(o.guild.id))
    )
        return;
    let { default: a } = await Promise.resolve().then(n.bind(n, 17181));
    await a({ guildId: o.guild.id }), r.Z.transitionToInvite(o);
}
