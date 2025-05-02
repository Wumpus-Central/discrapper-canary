n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(362658),
    c = n(152376),
    a = n(398758),
    s = n(9156),
    u = n(981631),
    d = n(388032);
function f(e) {
    let { isFavoritesPerk: t } = (0, o.z)('useChannelOptInItems'),
        n = (0, a.DM)(e.guild_id),
        f = (0, i.e7)([s.ZP], () => s.ZP.isChannelOptedIn(e.guild_id, e.id)),
        b = (0, i.e7)([s.ZP], () => null != e.parent_id && s.ZP.isChannelOptedIn(e.guild_id, e.parent_id)),
        p = (0, i.e7)([s.ZP], () => s.ZP.isFavorite(e.guild_id, e.id)),
        O = () => {
            (0, c.XQ)(e.guild_id, e.id, !f, { section: u.jXE.CONTEXT_MENU });
        },
        g = () => {
            null != e.parent_id && (0, c.XQ)(e.guild_id, e.parent_id, !1, { section: u.jXE.CONTEXT_MENU });
        };
    if (!n || e.isThread()) return null;
    if (e.isCategory())
        return (0, r.jsx)(l.sNh, {
            id: 'opt-into-category',
            label: f ? d.intl.string(d.t['3zySTE']) : d.intl.string(d.t['9mysCg']),
            action: () => O()
        });
    let y = p ? d.intl.string(d.t.z7I3gY) : d.intl.string(d.t['N2c/Ul']),
        h = p ? d.intl.string(d.t.M5PWSU) : d.intl.string(d.t.RMpwZm);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.sNh, {
                id: 'opt-in-favorite-channel',
                label: t ? h : y,
                action: () => {
                    (0, c.dM)(e.guild_id, e.id, !p, { section: u.jXE.CONTEXT_MENU });
                }
            }),
            b
                ? (0, r.jsx)(l.sNh, {
                      id: 'opt-out-category',
                      label: d.intl.string(d.t.jNphKS),
                      action: () => g()
                  })
                : (0, r.jsx)(l.sNh, {
                      id: 'opt-into-channel',
                      label: f ? d.intl.string(d.t['3zySTE']) : d.intl.string(d.t['9mysCg']),
                      action: () => O()
                  })
        ]
    });
}
