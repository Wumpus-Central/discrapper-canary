n.d(t, { q: () => o });
var i = n(73153),
    r = n(846293),
    a = n(970163),
    l = n(71393),
    s = n(652215);
async function o(e) {
    let { code: t } = e,
        o = (await (0, a.A)(t)).invite;
    if (null == o || null == o.guild) return;
    let d = o.guild.id;
    if (null == l.A.getGuild(d))
        return void i.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: o, code: t, context: s.BRT.APP });
    let { default: c } = await Promise.resolve().then(n.bind(n, 967305));
    await c({ guildId: d }), r.Ay.transitionToInvite(o, void 0, !0);
}
