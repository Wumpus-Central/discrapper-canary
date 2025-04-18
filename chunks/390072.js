n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    o = n(725436),
    l = n(11868),
    a = n(217804),
    c = n(765305),
    u = n(244231);
function d(e) {
    let { guildScheduledEvent: t, channel: n, onClose: d } = e,
        h = t.entity_type === c.WX.EXTERNAL,
        g = i.useCallback((e) => (0, l.Qt)(t, d)(e), [t, d]),
        p = (0, a.u)(t, n);
    if (null == p) return null;
    let { IconComponent: m, locationName: f } = p,
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                null != m &&
                    (0, r.jsx)(m, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: u.channelIcon
                    }),
                (0, r.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: u.locationText,
                    children: (0, o.m)(f, !0)
                })
            ]
        });
    return (0, r.jsx)('div', {
        className: u.row,
        children:
            null != g
                ? (0, r.jsx)(s.P3F, {
                      className: h ? u.externalLocation : u.channelLocation,
                      onClick: g,
                      children: _
                  })
                : _
    });
}
