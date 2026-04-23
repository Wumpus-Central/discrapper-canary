n.d(t, { q: () => d });
var i = n(73153),
    r = n(846293),
    a = n(970163),
    l = n(961350),
    s = n(696451),
    o = n(652215);
async function d(e) {
    let { code: t } = e,
        d = (await (0, a.A)(t)).invite;
    if (null == d || null == d.guild) return;
    let u = d.guild.id,
        c = s.Ay.getMember(u, l.default.getId()),
        A = !1;
    if (null != c && null != d.roles && d.roles.length > 0) {
        let e = new Set(c.roles ?? []);
        A = d.roles.some((t) => !e.has(t.id));
    }
    if (null == c || A) return void i.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: d, code: t, context: o.BRT.APP });
    let { default: h } = await Promise.resolve().then(n.bind(n, 967305));
    await h({ guildId: u }), r.Ay.transitionToInvite(d, void 0, !0);
}
