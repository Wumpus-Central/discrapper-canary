var i = n(855986),
    r = n(610136),
    l = n(576705),
    E = n(652215);
function a(e) {
    return (0, i.bG)([l.A], () => null != e && l.A.can(E.xBc.MANAGE_GUILD, e), [e]);
}
function d(e) {
    let t = (0, i.bG)([r.A], () => (null != e ? r.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(E.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
n.d(
    t,
    {},
    {
        Fi: a,
        Ig: function (e) {
            let t = a(e),
                n = d(e);
            return t && n;
        },
        Wr: d,
    },
);
