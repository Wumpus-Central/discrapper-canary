n.d(t, { Fi: () => s, Ig: () => E, Wr: () => d });
var i = n(17928),
    a = n(610136),
    l = n(576705),
    r = n(652215);
function s(e) {
    return (0, i.bG)([l.A], () => null != e && l.A.can(r.xBc.MANAGE_GUILD, e), [e]);
}
function d(e) {
    let t = (0, i.bG)([a.A], () => (null != e ? a.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(r.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function E(e) {
    let t = s(e),
        n = d(e);
    return t && n;
}
