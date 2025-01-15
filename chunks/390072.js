t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(481060),
    r = t(725436),
    d = t(11868),
    o = t(217804),
    c = t(765305),
    s = t(186062);
function u(e) {
    let { guildScheduledEvent: n, channel: t, onClose: u } = e,
        _ = n.entity_type === c.WX.EXTERNAL,
        g = a.useCallback((e) => (0, d.Qt)(n, u)(e), [n, u]),
        p = (0, o.u)(n, t);
    if (null == p) return null;
    let { IconComponent: m, locationName: I } = p,
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                null != m &&
                    (0, i.jsx)(m, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20,
                        height: 20,
                        className: s.channelIcon
                    }),
                (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: s.locationText,
                    children: (0, r.m)(I, !0)
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: s.row,
        children:
            null != g
                ? (0, i.jsx)(l.Clickable, {
                      className: _ ? s.externalLocation : s.channelLocation,
                      onClick: g,
                      children: v
                  })
                : v
    });
}
