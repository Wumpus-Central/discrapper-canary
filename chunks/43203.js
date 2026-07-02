n.d(t, { $: () => p, A: () => f });
var i = n(228366),
    s = n(376728),
    l = n(842241),
    a = n(976860),
    r = n(495544),
    o = n(174459),
    u = n(723702),
    c = n(19575),
    d = n(636401),
    h = n(613057),
    m = n(652215);
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        h = (0, l.LO)(n?.targetChannelId),
        p = (0, l.LO)(n?.targetMessageId),
        f = (0, l.LO)(n?.guildScheduledEventId),
        g = (0, l.WU)({ baseCode: e, targetChannelId: h, targetMessageId: p, guildScheduledEventId: f }),
        { invite: A } = await s.Ay.resolveInvite(g, t);
    if (null == A) throw new d.A({ errorCode: m.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            o.default.track(m.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        r.default.isAuthenticated()
            ? i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: A,
                  code: g,
                  context: m.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  s.Ay.setReceivedInstallationIdForInviteCode(A.code, String(n.installationId)),
              (0, a.bG)(m.BVt.INVITE(g))),
        u.isPlatformEmbedded && c.Ay.focus(),
        { invite: A, code: e }
    );
}
let f = {
    [m.e$_.OPEN_INVITE]: {
        scope: h.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await p(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
