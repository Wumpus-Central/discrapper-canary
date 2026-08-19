n.d(t, { $: () => p, A: () => g });
var i = n(228366),
    l = n(376728),
    a = n(842241),
    s = n(976860),
    r = n(280450),
    o = n(174459),
    d = n(723702),
    c = n(19575),
    u = n(636401),
    h = n(613057),
    m = n(652215);
async function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        h = (0, a.LO)(n?.targetChannelId),
        p = (0, a.LO)(n?.targetMessageId),
        g = (0, a.LO)(n?.guildScheduledEventId),
        f = (0, a.WU)({ baseCode: e, targetChannelId: h, targetMessageId: p, guildScheduledEventId: g }),
        { invite: A } = await l.Ay.resolveInvite(f, t);
    if (null == A) throw new u.A({ errorCode: m.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
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
                  code: f,
                  context: m.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  l.Ay.setReceivedInstallationIdForInviteCode(A.code, String(n.installationId)),
              (0, s.bG)(m.BVt.INVITE(f))),
        d.isPlatformEmbedded && c.Ay.focus(),
        { invite: A, code: e }
    );
}
let g = {
    [m.e$_.OPEN_INVITE]: {
        scope: h.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await p(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
