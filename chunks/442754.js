e.d(t, { Z: () => h });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    r = e(362658),
    c = e(152376),
    d = e(398758),
    o = e(9156),
    s = e(981631),
    u = e(388032);
function h(n) {
    let { isFavoritesPerk: t } = (0, r.z)('useChannelOptInItems'),
        e = (0, d.DM)(n.guild_id),
        h = (0, l.e7)([o.ZP], () => o.ZP.isChannelOptedIn(n.guild_id, n.id)),
        Z = (0, l.e7)([o.ZP], () => null != n.parent_id && o.ZP.isChannelOptedIn(n.guild_id, n.parent_id)),
        _ = (0, l.e7)([o.ZP], () => o.ZP.isFavorite(n.guild_id, n.id)),
        E = () => {
            (0, c.XQ)(n.guild_id, n.id, !h, { section: s.jXE.CONTEXT_MENU });
        },
        p = () => {
            null != n.parent_id && (0, c.XQ)(n.guild_id, n.parent_id, !1, { section: s.jXE.CONTEXT_MENU });
        };
    if (!e || n.isThread()) return null;
    if (n.isCategory())
        return (0, i.jsx)(a.sNh, {
            id: 'opt-into-category',
            label: h ? u.intl.string(u.t['3zySTE']) : u.intl.string(u.t['9mysCg']),
            action: () => E()
        });
    let N = _ ? u.intl.string(u.t.z7I3gY) : u.intl.string(u.t['N2c/Ul']),
        g = _ ? u.intl.string(u.t.M5PWSU) : u.intl.string(u.t.RMpwZm);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.sNh, {
                id: 'opt-in-favorite-channel',
                label: t ? g : N,
                action: () => {
                    (0, c.dM)(n.guild_id, n.id, !_, { section: s.jXE.CONTEXT_MENU });
                }
            }),
            Z
                ? (0, i.jsx)(a.sNh, {
                      id: 'opt-out-category',
                      label: u.intl.string(u.t.jNphKS),
                      action: () => p()
                  })
                : (0, i.jsx)(a.sNh, {
                      id: 'opt-into-channel',
                      label: h ? u.intl.string(u.t['3zySTE']) : u.intl.string(u.t['9mysCg']),
                      action: () => E()
                  })
        ]
    });
}
