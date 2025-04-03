n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    c = n(362658),
    o = n(152376),
    a = n(398758),
    u = n(9156),
    s = n(981631),
    d = n(388032);
function p(e) {
    let { isFavoritesPerk: t } = (0, c.z)('useChannelOptInItems'),
        n = (0, a.DM)(e.guild_id),
        p = (0, i.e7)([u.ZP], () => u.ZP.isChannelOptedIn(e.guild_id, e.id)),
        b = (0, i.e7)([u.ZP], () => null != e.parent_id && u.ZP.isChannelOptedIn(e.guild_id, e.parent_id)),
        f = (0, i.e7)([u.ZP], () => u.ZP.isFavorite(e.guild_id, e.id)),
        O = () => {
            (0, o.XQ)(e.guild_id, e.id, !p, { section: s.jXE.CONTEXT_MENU });
        },
        y = () => {
            null != e.parent_id && (0, o.XQ)(e.guild_id, e.parent_id, !1, { section: s.jXE.CONTEXT_MENU });
        };
    if (!n || e.isThread()) return null;
    if (e.isCategory())
        return (0, r.jsx)(l.sNh, {
            id: 'opt-into-category',
            label: p ? d.NW.string(d.t['3zySTE']) : d.NW.string(d.t['9mysCg']),
            action: () => O()
        });
    let g = f ? d.NW.string(d.t.z7I3gY) : d.NW.string(d.t['N2c/Ul']),
        j = f ? d.NW.string(d.t.M5PWSU) : d.NW.string(d.t.RMpwZm);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.sNh, {
                id: 'opt-in-favorite-channel',
                label: t ? j : g,
                action: () => {
                    (0, o.dM)(e.guild_id, e.id, !f, { section: s.jXE.CONTEXT_MENU });
                }
            }),
            b
                ? (0, r.jsx)(l.sNh, {
                      id: 'opt-out-category',
                      label: d.NW.string(d.t.jNphKS),
                      action: () => y()
                  })
                : (0, r.jsx)(l.sNh, {
                      id: 'opt-into-channel',
                      label: p ? d.NW.string(d.t['3zySTE']) : d.NW.string(d.t['9mysCg']),
                      action: () => O()
                  })
        ]
    });
}
