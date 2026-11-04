var i = n(855986),
    l = n(610136),
    a = n(576705),
    r = n(652215);
function E(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(r.xBc.MANAGE_GUILD, e), [e]);
}
function s(e) {
    let t = (0, i.bG)([l.A], () => (null != e ? l.A.getGuildIncident(e.id) : null));
    return (
        e?.features.has(r.GuildFeatures.INVITES_DISABLED) ||
        (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
}
n.d(
    t,
    {},
    {
        Fi: E,
        Ig: function (e) {
            let t = E(e),
                n = s(e);
            return t && n;
        },
        Wr: s,
    },
);
