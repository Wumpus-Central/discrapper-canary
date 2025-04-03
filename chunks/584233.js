n.d(t, { x: () => a });
var r = n(447543),
    i = n(652898),
    l = n(430824);
async function a(e) {
    let { code: t } = e,
        a = (await (0, i.Z)(t)).invite;
    if (
        null == a ||
        null == a.guild ||
        (await new Promise((e) => {
            l.Z.addConditionalChangeListener(() => !l.Z.isLoaded() || (e(), !1));
        }),
        null == l.Z.getGuild(a.guild.id))
    )
        return;
    let { default: o } = await Promise.resolve().then(n.bind(n, 17181));
    await o({ guildId: a.guild.id }), r.ZP.transitionToInvite(a, void 0, !0);
}
