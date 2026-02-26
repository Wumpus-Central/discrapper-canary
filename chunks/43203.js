n.d(t, { $: () => h, A: () => x });
var a = n(73153),
    i = n(846293),
    s = n(394681),
    l = n(976860),
    r = n(961350),
    o = n(723702),
    d = n(837921),
    c = n(636401),
    u = n(613057),
    m = n(652215);
async function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { invite: u } = await i.Ay.resolveInvite(e, t);
    if (null == u) throw new c.A({ errorCode: m.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    if (null != n && "experiments" in n)
        for (let e of n.experiments ?? [])
            e === s.R.definition.id && null != u.guild && s.R.trackExposure({ guildId: u.guild.id, location: t });
    return (
        r.default.isAuthenticated()
            ? a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: u, code: e, context: m.BRT.APP })
            : (0, l.bG)(m.BVt.INVITE(e)),
        o.isPlatformEmbedded && d.Ay.focus(),
        { invite: u, code: e }
    );
}
let x = {
    [m.e$_.OPEN_INVITE]: {
        scope: u.hj,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            await h(t, "RPC OPEN_INVITE Handler");
        },
    },
};
