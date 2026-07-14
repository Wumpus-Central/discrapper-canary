i.d(t, { Fi: () => E, Ig: () => d, Wr: () => s });
var n = i(17928),
    l = i(610136),
    a = i(576705),
    r = i(652215);
function E(e) {
    return (0, n.bG)([a.A], () => null != e && a.A.can(r.xBc.MANAGE_GUILD, e), [e]);
}
function s(e) {
    let t = (0, n.bG)([l.A], () => (null != e ? l.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(r.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function d(e) {
    let t = E(e),
        i = s(e);
    return t && i;
}
