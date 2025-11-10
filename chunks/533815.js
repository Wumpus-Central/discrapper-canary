n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(28664),
    o = n(481060),
    c = n(785717),
    s = n(86419),
    u = n(388032),
    d = n(51708);
function g(e) {
    let { game: t, widgetType: n, iconSize: i = "refresh_sm", className: g, buttonRef: f, onRemove: p } = e,
        { trackUserProfileEditAction: m } = (0, c.KZ)();
    return (0, r.jsx)(l.u, {
        text: u.intl.string(u.t.HUvyDc),
        children: (0, r.jsx)(o.P3F, {
            innerRef: f,
            onClick: () => {
                (0, s.$b)(n, t.applicationId),
                    o.uvj.announce(u.intl.string(u.t["08HmMj"])),
                    m({
                        action: "GAME_REMOVED",
                        gameId: t.applicationId,
                        widgetEdited: n,
                    }),
                    null == p || p();
            },
            "aria-label": u.intl.string(u.t.HUvyDc),
            className: a()(g, d.clickable),
            children: (0, r.jsx)(o.XHJ, {
                size: i,
                className: d.icon,
                color: o.TVs.colors.STATUS_DANGER,
            }),
        }),
    });
}
