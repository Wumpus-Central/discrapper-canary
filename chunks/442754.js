e.d(t, {
    Z: function () {
        return p;
    }
});
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    r = e(362658),
    u = e(152376),
    o = e(398758),
    c = e(9156),
    d = e(981631),
    s = e(388032);
function p(n) {
    let { isFavoritesPerk: t } = (0, r.z)('useChannelOptInItems'),
        e = (0, o.DM)(n.guild_id),
        p = (0, l.e7)([c.ZP], () => c.ZP.isChannelOptedIn(n.guild_id, n.id)),
        _ = (0, l.e7)([c.ZP], () => null != n.parent_id && c.ZP.isChannelOptedIn(n.guild_id, n.parent_id)),
        f = (0, l.e7)([c.ZP], () => c.ZP.isFavorite(n.guild_id, n.id)),
        E = () => {
            (0, u.XQ)(n.guild_id, n.id, !p, { section: d.jXE.CONTEXT_MENU });
        },
        Z = () => {
            null != n.parent_id && (0, u.XQ)(n.guild_id, n.parent_id, !1, { section: d.jXE.CONTEXT_MENU });
        };
    if (!e || n.isThread()) return null;
    if (n.isCategory())
        return (0, i.jsx)(a.MenuItem, {
            id: 'opt-into-category',
            label: p ? s.intl.string(s.t['3zySTE']) : s.intl.string(s.t['9mysCg']),
            action: () => E()
        });
    let h = f ? s.intl.string(s.t.z7I3gY) : s.intl.string(s.t['N2c/Ul']),
        g = f ? s.intl.string(s.t.M5PWSU) : s.intl.string(s.t.RMpwZm);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.MenuItem, {
                id: 'opt-in-favorite-channel',
                label: t ? g : h,
                action: () => {
                    (0, u.dM)(n.guild_id, n.id, !f, { section: d.jXE.CONTEXT_MENU });
                }
            }),
            _
                ? (0, i.jsx)(a.MenuItem, {
                      id: 'opt-out-category',
                      label: s.intl.string(s.t.jNphKS),
                      action: () => Z()
                  })
                : (0, i.jsx)(a.MenuItem, {
                      id: 'opt-into-channel',
                      label: p ? s.intl.string(s.t['3zySTE']) : s.intl.string(s.t['9mysCg']),
                      action: () => E()
                  })
        ]
    });
}
