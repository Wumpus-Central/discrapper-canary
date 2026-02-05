n.d(t, { Fi: () => s, Ig: () => E, Wr: () => o });
var l = n(311907),
    r = n(610136),
    a = n(576705),
    i = n(652215);
function s(e) {
    return (0, l.bG)([a.A], () => null != e && a.A.can(i.xBc.MANAGE_GUILD, e), [e]);
}
function o(e) {
    let t = (0, l.bG)([r.A], () => (null != e ? r.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(i.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function E(e) {
    let t = s(e),
        n = o(e);
    return t && n;
}
