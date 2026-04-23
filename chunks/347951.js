n.d(t, { Fi: () => a, Ig: () => c, Wr: () => u });
var l = n(17928),
    i = n(610136),
    r = n(576705),
    E = n(652215);
function a(e) {
    return (0, l.bG)([r.A], () => null != e && r.A.can(E.xBc.MANAGE_GUILD, e), [e]);
}
function u(e) {
    let t = (0, l.bG)([i.A], () => (null != e ? i.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(E.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function c(e) {
    let t = a(e),
        n = u(e);
    return t && n;
}
