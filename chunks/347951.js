"use strict";
n.d(t, { Fi: () => l, Ig: () => d, Wr: () => o });
var i = n(17928),
    r = n(610136),
    a = n(576705),
    s = n(652215);
function l(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(s.xBc.MANAGE_GUILD, e), [e]);
}
function o(e) {
    let t = (0, i.bG)([r.A], () => (null != e ? r.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(s.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function d(e) {
    let t = l(e),
        n = o(e);
    return t && n;
}
