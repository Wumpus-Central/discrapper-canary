t.d(n, { Z: () => u });
var i = t(200651),
    r = t(192379),
    l = t(481060),
    a = t(725436),
    d = t(11868),
    o = t(217804),
    s = t(765305),
    c = t(244231);
function u(e) {
    let { guildScheduledEvent: n, channel: t, onClose: u } = e,
        _ = n.entity_type === s.WX.EXTERNAL,
        p = r.useCallback((e) => (0, d.Qt)(n, u)(e), [n, u]),
        g = (0, o.u)(n, t);
    if (null == g) return null;
    let { IconComponent: m, locationName: I } = g,
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
                (0, i.jsx)(l.Text, {
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
            null != p
                ? (0, i.jsx)(l.P3F, {
                      className: _ ? c.externalLocation : c.channelLocation,
                      onClick: p,
                      children: f
                  })
                : f
    });
}
