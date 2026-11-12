var i = n(73153),
    l = n(574332),
    a = n(21599),
    r = n(976860),
    s = n(46653),
    o = n(129230),
    u = n(723702),
    c = n(253400),
    d = n(636401),
    m = n(613057),
    f = n(652215);
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        m = (0, a.LO)(n?.targetChannelId),
        p = (0, a.LO)(n?.targetMessageId),
        h = (0, a.LO)(n?.guildScheduledEventId),
        g = (0, a.WU)({ baseCode: e, targetChannelId: m, targetMessageId: p, guildScheduledEventId: h }),
        { invite: A } = await l.Ay.resolveInvite(g, t);
    if (null == A) throw new d.A({ errorCode: f.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            o.default.track(f.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        s.default.isAuthenticated()
            ? i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: A,
                  code: g,
                  context: f.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  l.Ay.setReceivedInstallationIdForInviteCode(A.code, String(n.installationId)),
              (0, r.bG)(f.BVt.INVITE(g))),
        u.isPlatformEmbedded && c.Ay.focus(),
        { invite: A, code: e }
    );
}
let h = {
    [f.e$_.OPEN_INVITE]: {
        scope: m.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await p(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
n.d(t, {}, { $: p, A: h });
