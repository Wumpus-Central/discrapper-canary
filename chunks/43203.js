n.d(t, { $: () => m, A: () => f });
var i = n(228366),
    l = n(376728),
    s = n(842241),
    a = n(976860),
    r = n(280450),
    o = n(174459),
    d = n(723702),
    c = n(19575),
    u = n(636401),
    h = n(613057),
    p = n(652215);
async function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        h = (0, s.LO)(n?.targetChannelId),
        m = (0, s.LO)(n?.targetMessageId),
        f = (0, s.LO)(n?.guildScheduledEventId),
        g = (0, s.WU)({ baseCode: e, targetChannelId: h, targetMessageId: m, guildScheduledEventId: f }),
        { invite: A } = await l.Ay.resolveInvite(g, t);
    if (null == A) throw new u.A({ errorCode: p.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            o.default.track(p.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        r.default.isAuthenticated()
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
        d.isPlatformEmbedded && c.Ay.focus(),
        { invite: A, code: e }
    );
}
let f = {
    [p.e$_.OPEN_INVITE]: {
        scope: h.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await m(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
