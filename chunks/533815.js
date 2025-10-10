r.d(t, { Z: () => f });
var n = r(951288);
r(647438);
var i = r(120356),
    a = r.n(i),
    o = r(28664),
    l = r(481060),
    c = r(785717),
    s = r(86419),
    u = r(388032),
    d = r(51708);
function f(e) {
    let { game: t, widgetType: r, iconSize: i = "refresh_sm", className: f } = e,
        { trackUserProfileEditAction: g } = (0, c.KZ)();
    return (0, n.jsx)(o.u, {
        text: u.intl.string(u.t.HUvyDQ),
        children: (0, n.jsx)(l.kL8, {
            onClick: () => {
                (0, s.$b)(r, t.applicationId),
                    l.uvj.announce(u.intl.string(u.t["08HmMj"])),
                    g({
                        action: "GAME_REMOVED",
                        gameId: t.applicationId,
                        widgetEdited: r,
                    });
            },
            "aria-label": u.intl.string(u.t.HUvyDQ),
            className: a()(f, d.clickable),
            children: (0, n.jsx)(l.XHJ, {
                size: i,
                className: d.icon,
                color: l.TVs.colors.STATUS_DANGER,
            }),
        }),
    });
}
