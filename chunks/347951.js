"use strict";
n.d(t, { Fi: () => o, Ig: () => u, Wr: () => l });
var i = n(17928),
    r = n(610136),
    s = n(576705),
    a = n(652215);
function o(e) {
    return (0, i.bG)([s.A], () => null != e && s.A.can(a.xBc.MANAGE_GUILD, e), [e]);
}
function l(e) {
    let t = (0, i.bG)([r.A], () => (null != e ? r.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(a.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function u(e) {
    let t = o(e),
        n = l(e);
    return t && n;
}
