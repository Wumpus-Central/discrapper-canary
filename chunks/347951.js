l.d(t, { Fi: () => s, Ig: () => d, Wr: () => E });
var i = l(17928),
    n = l(610136),
    a = l(576705),
    r = l(652215);
function s(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(r.xBc.MANAGE_GUILD, e), [e]);
}
function E(e) {
    let t = (0, i.bG)([n.A], () => (null != e ? n.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(r.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function d(e) {
    let t = s(e),
        l = E(e);
    return t && l;
}
