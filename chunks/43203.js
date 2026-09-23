n.d(t, { $: () => f, A: () => p });
var i = n(228366),
    l = n(376728),
    a = n(842241),
    s = n(976860),
    r = n(280450),
    o = n(174459),
    d = n(723702),
    c = n(19575),
    u = n(636401),
    m = n(613057),
    h = n(652215);
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        m = (0, a.LO)(n?.targetChannelId),
        f = (0, a.LO)(n?.targetMessageId),
        p = (0, a.LO)(n?.guildScheduledEventId),
        g = (0, a.WU)({ baseCode: e, targetChannelId: m, targetMessageId: f, guildScheduledEventId: p }),
        { invite: A } = await l.Ay.resolveInvite(g, t);
    if (null == A) throw new u.A({ errorCode: h.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            o.default.track(h.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        r.default.isAuthenticated()
            ? i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: A,
                  code: g,
                  context: h.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  l.Ay.setReceivedInstallationIdForInviteCode(A.code, String(n.installationId)),
              (0, s.bG)(h.BVt.INVITE(g))),
        d.isPlatformEmbedded && c.Ay.focus(),
        { invite: A, code: e }
    );
}
let p = {
    [h.e$_.OPEN_INVITE]: {
        scope: m.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await f(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
