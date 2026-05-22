"use strict";
n.d(t, { $: () => f, A: () => h });
var i = n(228366),
    r = n(376728),
    s = n(976860),
    a = n(495544),
    o = n(174459),
    l = n(723702),
    u = n(19575),
    c = n(636401),
    d = n(613057),
    _ = n(652215);
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { invite: d } = await r.Ay.resolveInvite(e, t);
    if (null == d) throw new c.A({ errorCode: _.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            o.default.track(_.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        a.default.isAuthenticated()
            ? i.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: d,
                  code: e,
                  context: _.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  r.Ay.setReceivedInstallationIdForInviteCode(d.code, String(n.installationId)),
              (0, s.bG)(_.BVt.INVITE(e))),
        l.isPlatformEmbedded && u.Ay.focus(),
        { invite: d, code: e }
    );
}
let h = {
    [_.e$_.OPEN_INVITE]: {
        scope: d.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...i } = t;
            await f(n, "RPC OPEN_INVITE Handler", i);
        },
    },
};
