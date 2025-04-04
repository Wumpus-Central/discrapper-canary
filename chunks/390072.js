t.d(n, { Z: () => u });
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(725436),
    d = t(11868),
    o = t(217804),
    s = t(765305),
    c = t(244231);
function u(e) {
    let { guildScheduledEvent: n, channel: t, onClose: u } = e,
        _ = n.entity_type === s.WX.EXTERNAL,
        g = l.useCallback((e) => (0, d.Qt)(n, u)(e), [n, u]),
        p = (0, o.u)(n, t);
    if (null == p) return null;
    let { IconComponent: m, locationName: I } = p,
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                null != m &&
                    (0, i.jsx)(m, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: c.channelIcon
                    }),
                (0, i.jsx)(r.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: c.locationText,
                    children: (0, a.m)(I, !0)
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: c.row,
        children:
            null != g
                ? (0, i.jsx)(r.P3F, {
                      className: _ ? c.externalLocation : c.channelLocation,
                      onClick: g,
                      children: f
                  })
                : f
    });
}
