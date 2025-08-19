n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(725436),
    s = n(11868),
    o = n(217804),
    c = n(765305),
    u = n(831272);
function d(e) {
    let { guildScheduledEvent: t, channel: n, onClose: d } = e,
        h = t.entity_type === c.WX.EXTERNAL,
        p = i.useCallback((e) => (0, s.Qt)(t, d)(e), [t, d]),
        m = (0, o.u)(t, n);
    if (null == m) return null;
    let { IconComponent: f, locationName: g } = m,
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                null != f &&
                    (0, r.jsx)(f, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: u.channelIcon,
                    }),
                (0, r.jsx)(l.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: u.locationText,
                    children: (0, a.m)(g, !0),
                }),
            ],
        });
    return (0, r.jsx)("div", {
        className: u.row,
        children:
            null != p
                ? (0, r.jsx)(l.P3F, {
                      className: h ? u.externalLocation : u.channelLocation,
                      onClick: p,
                      children: _,
                  })
                : _,
    });
}
