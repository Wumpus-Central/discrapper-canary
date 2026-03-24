n.d(t, { $: () => x, A: () => p });
var a = n(73153),
    i = n(846293),
    s = n(394681),
    l = n(976860),
    r = n(961350),
    o = n(954571),
    d = n(723702),
    c = n(837921),
    u = n(636401),
    m = n(613057),
    h = n(652215);
async function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { invite: m } = await i.Ay.resolveInvite(e, t);
    if (null == m) throw new u.A({ errorCode: h.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    if (null != n && "experiments" in n)
        for (let e of n.experiments ?? [])
            e === s.R.definition.id && null != m.guild && s.R.trackExposure({ guildId: m.guild.id, location: t });
    return (
        n?.installationId != null &&
            o.default.track(h.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        r.default.isAuthenticated()
            ? a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: m, code: e, context: h.BRT.APP })
            : (0, l.bG)(h.BVt.INVITE(e)),
        d.isPlatformEmbedded && c.Ay.focus(),
        { invite: m, code: e }
    );
}
let p = {
    [h.e$_.OPEN_INVITE]: {
        scope: m.hj,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            await x(t, "RPC OPEN_INVITE Handler");
        },
    },
};
