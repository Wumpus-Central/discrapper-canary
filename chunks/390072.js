n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(725436),
    o = n(11868),
    s = n(217804),
    c = n(765305),
    u = n(925457);
function d(e) {
    let { guildScheduledEvent: t, channel: n, onClose: d } = e,
        g = t.entity_type === c.WX.EXTERNAL,
        h = i.useCallback((e) => (0, o.Qt)(t, d)(e), [t, d]),
        p = (0, s.u)(t, n);
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
                (0, r.jsx)(l.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: u.locationText,
                    children: (0, a.m)(f, !0)
                })
            ]
        });
    return (0, r.jsx)('div', {
        className: u.row,
        children:
            null != h
                ? (0, r.jsx)(l.P3F, {
                      className: g ? u.externalLocation : u.channelLocation,
                      onClick: h,
                      children: _
                  })
                : _
    });
}
