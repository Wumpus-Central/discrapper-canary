n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(28664),
    o = n(481060),
    c = n(785717),
    s = n(86419),
    u = n(388032),
    d = n(145624);
function f(e) {
    let { game: t, widgetType: n, iconSize: i = "refresh_sm", className: f, buttonRef: g, onRemove: p } = e,
        { trackUserProfileEditAction: m } = (0, c.KZ)();
    return (0, r.jsx)(l.u, {
        text: u.intl.string(u.t.HUvyDc),
        children: (0, r.jsx)(o.P3F, {
            innerRef: g,
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
            className: a()(f, d.clickable),
            children: (0, r.jsx)(o.XHJ, {
                size: i,
                className: d.icon,
                color: o.TVs.colors.STATUS_DANGER,
            }),
        }),
    });
}
