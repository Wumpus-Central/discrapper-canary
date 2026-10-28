n.d(t, { Fi: () => s, Ig: () => d, Wr: () => E });
var i = n(17928),
    l = n(610136),
    a = n(576705),
    r = n(652215);
function s(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(r.xBc.MANAGE_GUILD, e), [e]);
}
function E(e) {
    let t = (0, i.bG)([l.A], () => (null != e ? l.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(r.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function d(e) {
    let t = s(e),
        n = E(e);
    return t && n;
}
