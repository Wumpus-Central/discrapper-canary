var i = n(73153),
    l = n(574332),
    r = n(21599),
    a = n(976860),
    s = n(46653),
    o = n(129230),
    u = n(723702),
    c = n(253400),
    d = n(636401),
    m = n(613057),
    p = n(652215);
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        m = (0, r.LO)(n?.targetChannelId),
        f = (0, r.LO)(n?.targetMessageId),
        h = (0, r.LO)(n?.guildScheduledEventId),
        g = (0, r.WU)({ baseCode: e, targetChannelId: m, targetMessageId: f, guildScheduledEventId: h }),
        { invite: A } = await l.Ay.resolveInvite(g, t);
    if (null == A) throw new d.A({ errorCode: p.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            o.default.track(p.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        s.default.isAuthenticated()
            ? i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: A,
                  code: g,
                  context: p.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  l.Ay.setReceivedInstallationIdForInviteCode(A.code, String(n.installationId)),
              (0, a.bG)(p.BVt.INVITE(g))),
        u.isPlatformEmbedded && c.Ay.focus(),
        { invite: A, code: e }
    );
}
let h = {
    [p.e$_.OPEN_INVITE]: {
        scope: m.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await f(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
n.d(t, {}, { $: f, A: h });
