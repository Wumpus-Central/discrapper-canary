n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    c = n(362658),
    a = n(152376),
    l = n(398758),
    s = n(9156),
    u = n(981631),
    d = n(388032);
function b(e) {
    let { isFavoritesPerk: t } = (0, c.z)('useChannelOptInItems'),
        n = (0, l.DM)(e.guild_id),
        b = (0, i.e7)([s.ZP], () => s.ZP.isChannelOptedIn(e.guild_id, e.id)),
        f = (0, i.e7)([s.ZP], () => null != e.parent_id && s.ZP.isChannelOptedIn(e.guild_id, e.parent_id)),
        O = (0, i.e7)([s.ZP], () => s.ZP.isFavorite(e.guild_id, e.id)),
        p = () => {
            (0, a.XQ)(e.guild_id, e.id, !b, { section: u.jXE.CONTEXT_MENU });
        },
        g = () => {
            null != e.parent_id && (0, a.XQ)(e.guild_id, e.parent_id, !1, { section: u.jXE.CONTEXT_MENU });
        };
    if (!n || e.isThread()) return null;
    if (e.isCategory())
        return (0, r.jsx)(o.sNh, {
            id: 'opt-into-category',
            label: b ? d.NW.string(d.t['3zySTE']) : d.NW.string(d.t['9mysCg']),
            action: () => p()
        });
    let y = O ? d.NW.string(d.t.z7I3gY) : d.NW.string(d.t['N2c/Ul']),
        j = O ? d.NW.string(d.t.M5PWSU) : d.NW.string(d.t.RMpwZm);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.sNh, {
                id: 'opt-in-favorite-channel',
                label: t ? j : y,
                action: () => {
                    (0, a.dM)(e.guild_id, e.id, !O, { section: u.jXE.CONTEXT_MENU });
                }
            }),
            f
                ? (0, r.jsx)(o.sNh, {
                      id: 'opt-out-category',
                      label: d.NW.string(d.t.jNphKS),
                      action: () => g()
                  })
                : (0, r.jsx)(o.sNh, {
                      id: 'opt-into-channel',
                      label: b ? d.NW.string(d.t['3zySTE']) : d.NW.string(d.t['9mysCg']),
                      action: () => p()
                  })
        ]
    });
}
