t.d(n, { Z: () => u });
var i = t(200651),
    l = t(192379),
    a = t(481060),
    r = t(725436),
    d = t(997321),
    s = t(217804),
    o = t(765305),
    c = t(295267);
function u(e) {
    let { guildScheduledEvent: n, channel: t, onClose: u } = e,
        _ = n.entity_type === o.WX.EXTERNAL,
        m = l.useCallback((e) => (0, d.Qt)(n, u)(e), [n, u]),
        g = (0, s.u)(n, t);
    if (null == g) return null;
    let { IconComponent: p, locationName: v } = g,
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                null != p &&
                    (0, i.jsx)(p, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: c.channelIcon
                    }),
                (0, i.jsx)(a.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: c.locationText,
                    children: (0, r.m)(v, !0)
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: c.row,
        children:
            null != m
                ? (0, i.jsx)(a.P3F, {
                      className: _ ? c.externalLocation : c.channelLocation,
                      onClick: m,
                      children: h
                  })
                : h
    });
}
