n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(28664),
    o = n(481060),
    c = n(785717),
    s = n(86419),
    u = n(388032),
    d = n(51708);
function f(e) {
    let { game: t, widgetType: n, iconSize: i = "refresh_sm", className: f, buttonRef: g, onRemove: p } = e,
        { trackUserProfileEditAction: m } = (0, c.KZ)();
    return (0, r.jsx)(a.u, {
        text: u.intl.string(u.t.HUvyDc),
        ariaHidden: !0,
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
            className: l()(f, d.clickable),
            children: (0, r.jsx)(o.XHJ, {
                size: i,
                className: d.icon,
                color: o.TVs.colors.STATUS_DANGER,
            }),
        }),
    });
}
