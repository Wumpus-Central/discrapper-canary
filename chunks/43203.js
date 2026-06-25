"use strict";
n.d(t, { $: () => f, A: () => p });
var i = n(228366),
    r = n(376728),
    s = n(842241),
    a = n(976860),
    o = n(495544),
    l = n(174459),
    u = n(723702),
    c = n(19575),
    d = n(636401),
    _ = n(613057),
    h = n(652215);
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        _ = (0, s.LO)(n?.targetChannelId),
        f = (0, s.LO)(n?.targetMessageId),
        p = (0, s.LO)(n?.guildScheduledEventId),
        E = (0, s.WU)({ baseCode: e, targetChannelId: _, targetMessageId: f, guildScheduledEventId: p }),
        { invite: m } = await r.Ay.resolveInvite(E, t);
    if (null == m) throw new d.A({ errorCode: h.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            l.default.track(h.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        o.default.isAuthenticated()
            ? i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: m,
                  code: E,
                  context: h.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  r.Ay.setReceivedInstallationIdForInviteCode(m.code, String(n.installationId)),
              (0, a.bG)(h.BVt.INVITE(E))),
        u.isPlatformEmbedded && c.Ay.focus(),
        { invite: m, code: e }
    );
}
let p = {
    [h.e$_.OPEN_INVITE]: {
        scope: _.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await f(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
