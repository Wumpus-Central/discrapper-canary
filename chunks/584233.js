n.d(t, { x: () => a });
var i = n(447543),
    l = n(652898),
    r = n(430824);
async function a(e) {
    let { code: t } = e,
        a = (await (0, l.Z)(t)).invite;
    if (
        null == a ||
        null == a.guild ||
        (await new Promise((e) => {
            r.Z.addConditionalChangeListener(() => !r.Z.isLoaded() || (e(), !1));
        }),
        null == r.Z.getGuild(a.guild.id))
    )
        return;
    let { default: s } = await Promise.resolve().then(n.bind(n, 17181));
    await s({ guildId: a.guild.id }), i.Z.transitionToInvite(a);
}
