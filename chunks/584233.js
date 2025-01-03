n.d(t, {
    x: function () {
        return a;
    }
});
var i = n(447543),
    r = n(652898),
    l = n(430824);
async function a(e) {
    let { code: t } = e,
        a = (await (0, r.Z)(t)).invite;
    if (null == a || null == a.guild) return;
    if (
        (await (function () {
            return new Promise((e) => {
                l.Z.addConditionalChangeListener(() => !l.Z.isLoaded() || (e(), !1));
            });
        })(),
        null == l.Z.getGuild(a.guild.id))
    )
        return;
    let { default: s } = await Promise.resolve().then(n.bind(n, 17181));
    await s({ guildId: a.guild.id }), i.Z.transitionToInvite(a);
}
