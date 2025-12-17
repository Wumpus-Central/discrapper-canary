n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    c = n(362658),
    o = n(152376),
    a = n(398758),
    u = n(9156),
    s = n(981631),
    d = n(388032);
function p(e) {
    let { isFavoritesPerk: t } = (0, c.z)("useChannelOptInItems"),
        n = (0, a.DM)(e.guild_id),
        p = (0, i.e7)([u.ZP], () => u.ZP.isChannelOptedIn(e.guild_id, e.id)),
        b = (0, i.e7)([u.ZP], () => null != e.parent_id && u.ZP.isChannelOptedIn(e.guild_id, e.parent_id)),
        f = (0, i.e7)([u.ZP], () => u.ZP.isFavorite(e.guild_id, e.id)),
        O = () => {
            (0, o.XQ)(e.guild_id, e.id, !p, { section: s.jXE.CONTEXT_MENU });
        };
    if (!n || e.isThread()) return null;
    if (e.isCategory())
        return (0, r.jsx)(l.sNh, {
            id: "opt-into-category",
            label: p ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
            action: () => O(),
        });
    let y = f ? d.intl.string(d.t.z7I3gd) : d.intl.string(d.t["N2c/Un"]),
        j = f ? d.intl.string(d.t.M5PWSf) : d.intl.string(d.t.RMpwZu);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.sNh, {
                id: "opt-in-favorite-channel",
                label: t ? j : y,
                action: () => {
                    (0, o.dM)(e.guild_id, e.id, !f, { section: s.jXE.CONTEXT_MENU });
                },
            }),
            b
                ? (0, r.jsx)(l.sNh, {
                      id: "opt-out-category",
                      label: d.intl.string(d.t.jNphKT),
                      action: () =>
                          void (
                              null != e.parent_id &&
                              (0, o.XQ)(e.guild_id, e.parent_id, !1, { section: s.jXE.CONTEXT_MENU })
                          ),
                  })
                : (0, r.jsx)(l.sNh, {
                      id: "opt-into-channel",
                      label: p ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
                      action: () => O(),
                  }),
        ],
    });
}
