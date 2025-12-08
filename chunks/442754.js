n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    o = n(362658),
    a = n(152376),
    c = n(398758),
    s = n(9156),
    u = n(981631),
    d = n(388032);
function b(e) {
    let { isFavoritesPerk: t } = (0, o.z)("useChannelOptInItems"),
        n = (0, c.DM)(e.guild_id),
        b = (0, i.e7)([s.ZP], () => s.ZP.isChannelOptedIn(e.guild_id, e.id)),
        p = (0, i.e7)([s.ZP], () => null != e.parent_id && s.ZP.isChannelOptedIn(e.guild_id, e.parent_id)),
        f = (0, i.e7)([s.ZP], () => s.ZP.isFavorite(e.guild_id, e.id)),
        O = () => {
            (0, a.XQ)(e.guild_id, e.id, !b, { section: u.jXE.CONTEXT_MENU });
        };
    if (!n || e.isThread()) return null;
    if (e.isCategory())
        return (0, r.jsx)(l.sNh, {
            id: "opt-into-category",
            label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
            action: () => O(),
        });
    let y = f ? d.intl.string(d.t.z7I3gd) : d.intl.string(d.t["N2c/Un"]),
        g = f ? d.intl.string(d.t.M5PWSf) : d.intl.string(d.t.RMpwZu);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.sNh, {
                id: "opt-in-favorite-channel",
                label: t ? g : y,
                action: () => {
                    (0, a.dM)(e.guild_id, e.id, !f, { section: u.jXE.CONTEXT_MENU });
                },
            }),
            p
                ? (0, r.jsx)(l.sNh, {
                      id: "opt-out-category",
                      label: d.intl.string(d.t.jNphKT),
                      action: () =>
                          void (
                              null != e.parent_id &&
                              (0, a.XQ)(e.guild_id, e.parent_id, !1, { section: u.jXE.CONTEXT_MENU })
                          ),
                  })
                : (0, r.jsx)(l.sNh, {
                      id: "opt-into-channel",
                      label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
                      action: () => O(),
                  }),
        ],
    });
}
