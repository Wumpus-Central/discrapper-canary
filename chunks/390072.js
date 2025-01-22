n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(725436),
    o = n(997321),
    a = n(217804),
    c = n(765305),
    d = n(295267);
function u(e) {
    let { guildScheduledEvent: t, channel: n, onClose: u } = e,
        h = t.entity_type === c.WX.EXTERNAL,
        g = r.useCallback((e) => (0, o.Qt)(t, u)(e), [t, u]),
        f = (0, a.u)(t, n);
    if (null == f) return null;
    let { IconComponent: m, locationName: p } = f,
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                null != m &&
                    (0, i.jsx)(m, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: d.channelIcon
                    }),
                (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: d.locationText,
                    children: (0, l.m)(p, !0)
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: d.row,
        children:
            null != g
                ? (0, i.jsx)(s.Clickable, {
                      className: h ? d.externalLocation : d.channelLocation,
                      onClick: g,
                      children: x
                  })
                : x
    });
}
