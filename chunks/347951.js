l.d(t, { Fi: () => E, Ig: () => h, Wr: () => n });
var a = l(17928),
    s = l(610136),
    c = l(576705),
    i = l(652215);
function E(e) {
    return (0, a.bG)([c.A], () => null != e && c.A.can(i.xBc.MANAGE_GUILD, e), [e]);
}
function n(e) {
    let t = (0, a.bG)([s.A], () => (null != e ? s.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(i.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function h(e) {
    let t = E(e),
        l = n(e);
    return t && l;
}
