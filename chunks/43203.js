n.d(t, { $: () => m, A: () => p });
var l = n(228366),
    s = n(376728),
    i = n(976860),
    a = n(495544),
    r = n(954571),
    o = n(723702),
    c = n(19575),
    u = n(636401),
    d = n(613057),
    h = n(652215);
async function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { invite: d } = await s.Ay.resolveInvite(e, t);
    if (null == d) throw new u.A({ errorCode: h.Lw6.INVALID_INVITE }, `Invalid invite id: ${e}`);
    return (
        n?.installationId != null &&
            r.default.track(h.HAw.EXTERNAL_INSTALLATION_ID_RECEIVED, {
                received_installation_id: n.installationId,
                location: "openInviteFromRPC",
            }),
        a.default.isAuthenticated()
            ? l.h.dispatch({
                  type: "INVITE_MODAL_OPEN",
                  invite: d,
                  code: e,
                  context: h.BRT.APP,
                  received_installation_id: null != n.installationId ? String(n.installationId) : void 0,
              })
            : (n?.installationId != null &&
                  s.Ay.setReceivedInstallationIdForInviteCode(d.code, String(n.installationId)),
              (0, i.bG)(h.BVt.INVITE(e))),
        o.isPlatformEmbedded && c.Ay.focus(),
        { invite: d, code: e }
    );
}
let p = {
    [h.e$_.OPEN_INVITE]: {
        scope: d.hj,
        async handler(e) {
            let { args: t } = e,
                { code: n, ...l } = t;
            await m(n, "RPC OPEN_INVITE Handler", l);
        },
    },
};
