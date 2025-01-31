n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(249458),
    u = n(388032),
    c = n(267954);
function d(e) {
    let { onPlay: t, className: n, inactive: a } = e,
        d = r.useRef(null),
        f = (0, i.jsx)('div', {
            className: c.iconWrapper,
            ref: d,
            children: (0, i.jsx)(o.o1U, {
                size: 'xs',
                color: 'currentColor',
                className: s()(c.icon)
            })
        });
    return (0, i.jsx)(l.G.Consumer, {
        children: (e) =>
            a || null == t
                ? (0, i.jsx)('div', {
                      className: c.cover,
                      children: f
                  })
                : (0, i.jsx)(o.P3F, {
                      className: s()(n, c.cover, { [c.active]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      'aria-label': u.intl.string(u.t.RscU7O),
                      focusProps: { ringTarget: d },
                      children: f
                  })
    });
}
