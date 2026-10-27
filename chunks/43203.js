n.d(t, { $: () => p, A: () => f });
var l = n(73153),
    i = n(376728),
    a = n(21599),
    r = n(976860),
    s = n(280450),
    o = n(174459),
    u = n(723702),
    c = n(19575),
    d = n(636401),
    m = n(613057),
    h = n(652215);
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        m = (0, a.LO)(n?.targetChannelId),
        p = (0, a.LO)(n?.targetMessageId),
        f = (0, a.LO)(n?.guildScheduledEventId),
        g = (0, a.WU)({ baseCode: e, targetChannelId: m, targetMessageId: p, guildScheduledEventId: f }),
        { invite: A } = await i.Ay.resolveInvite(g, t);
    if (null == A) throw new d.A({ errorCode: h.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            o.default.track(h.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        s.default.isAuthenticated()
            ? l.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: A,
                  code: g,
                  context: h.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  i.Ay.setReceivedInstallationIdForInviteCode(A.code, String(n.installationId)),
              (0, r.bG)(h.BVt.INVITE(g))),
        u.isPlatformEmbedded && c.Ay.focus(),
        { invite: A, code: e }
    );
}
let f = {
    [h.e$_.OPEN_INVITE]: {
        scope: m.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...l } = t;
            await p(n, "RPC OPEN_INVITE Handler", l);
        },
    },
};
