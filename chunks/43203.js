n.d(t, { $: () => A, A: () => h });
var i = n(73153),
    r = n(846293),
    a = n(394681),
    l = n(976860),
    s = n(961350),
    o = n(837921),
    d = n(636401),
    c = n(613057),
    u = n(652215);
async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { invite: c } = await r.Ay.resolveInvite(e, t);
    if (null == c) throw new d.A({ errorCode: u.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    if (null != n && "experiments" in n)
        for (let e of n.experiments ?? [])
            e === a.R.definition.id && null != c.guild && a.R.trackExposure({ guildId: c.guild.id, location: t });
    return (
        s.default.isAuthenticated()
            ? i.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: c, code: e, context: u.BRT.APP })
            : (0, l.bG)(u.BVt.INVITE(e)),
        o.Ay.focus(),
        { invite: c, code: e }
    );
}
let h = {
    [u.e$_.OPEN_INVITE]: {
        scope: c.hj,
        async handler(e) {
            let {
                args: { code: t },
            } = e;
            await A(t, "RPC OPEN_INVITE Handler");
        },
    },
};
