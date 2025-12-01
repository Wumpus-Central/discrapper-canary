n.d(t, {
    Ij: () => c,
    MQ: () => s,
    O4: () => o,
});
var r = n(442837),
    l = n(487419),
    i = n(496675),
    a = n(981631);
function s(e) {
    return (0, r.e7)([i.Z], () => null != e && i.Z.can(a.Plq.MANAGE_GUILD, e), [e]);
}
function o(e) {
    let t = (0, r.e7)([l.Z], () => (null != e ? l.Z.getGuildIncident(e.id) : null));
    return (
        (null == e ? void 0 : e.features.has(a.GuildFeatures.INVITES_DISABLED)) ||
        ((null == t ? void 0 : t.invitesDisabledUntil) != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
function c(e) {
    let t = s(e),
        n = o(e);
    return t && n;
}
