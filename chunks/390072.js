n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    s = n(481060),
    l = n(725436),
    a = n(11868),
    o = n(217804),
    c = n(765305),
    u = n(910497);
function d(e) {
    let { guildScheduledEvent: t, channel: n, onClose: d } = e,
        h = t.entity_type === c.WX.EXTERNAL,
        g = i.useCallback((e) => (0, a.Qt)(t, d)(e), [t, d]),
        m = (0, o.u)(t, n);
    if (null == m) return null;
    let { IconComponent: p, locationName: f } = m,
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                null != p &&
                    (0, r.jsx)(p, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: u.channelIcon,
                    }),
                (0, r.jsx)(s.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    className: u.locationText,
                    children: (0, l.m)(f, !0),
                }),
            ],
        });
    return (0, r.jsx)("div", {
        className: u.row,
        children:
            null != g
                ? (0, r.jsx)(s.P3F, {
                      className: h ? u.externalLocation : u.channelLocation,
                      onClick: g,
                      children: _,
                  })
                : _,
    });
}
