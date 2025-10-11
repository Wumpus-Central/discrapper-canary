n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    l = n(481060),
    c = n(785717),
    s = n(86419),
    u = n(388032),
    d = n(51708);
function f(e) {
    let { game: t, widgetType: n, iconSize: i = "refresh_sm", className: f } = e,
        { trackUserProfileEditAction: g } = (0, c.KZ)();
    return (0, r.jsx)(o.u, {
        text: u.intl.string(u.t.HUvyDQ),
        children: (0, r.jsx)(l.kL8, {
            onClick: () => {
                (0, s.$b)(n, t.applicationId),
                    l.uvj.announce(u.intl.string(u.t["08HmMj"])),
                    g({
                        action: "GAME_REMOVED",
                        gameId: t.applicationId,
                        widgetEdited: n,
                    });
            },
            "aria-label": u.intl.string(u.t.HUvyDQ),
            className: a()(f, d.clickable),
            children: (0, r.jsx)(l.XHJ, {
                size: i,
                className: d.icon,
                color: l.TVs.colors.STATUS_DANGER,
            }),
        }),
    });
}
