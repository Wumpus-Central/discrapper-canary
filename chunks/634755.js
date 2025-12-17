n.d(t, {
    Ij: () => u,
    MQ: () => s,
    O4: () => o,
});
var l = n(442837),
    r = n(487419),
    i = n(496675),
    a = n(981631);
function s(e) {
    return (0, l.e7)([i.Z], () => null != e && i.Z.can(a.Plq.MANAGE_GUILD, e), [e]);
}
function o(e) {
    let t = (0, l.e7)([r.Z], () => (null != e ? r.Z.getGuildIncident(e.id) : null));
    return (
        (null == e ? void 0 : e.features.has(a.GuildFeatures.INVITES_DISABLED)) ||
        ((null == t ? void 0 : t.invitesDisabledUntil) != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function u(e) {
    let t = s(e),
        n = o(e);
    return t && n;
}
