n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(249458),
    c = n(388032),
    u = n(358413);
function d(e) {
    let { onPlay: t, className: n, inactive: o } = e,
        d = i.useRef(null),
        f = (0, r.jsx)('div', {
            className: u.iconWrapper,
            ref: d,
            children: (0, r.jsx)(s.o1U, {
                size: 'xs',
                color: 'currentColor',
                className: u.icon
            })
        });
    return (0, r.jsx)(l.G.Consumer, {
        children: (e) =>
            o || null == t
                ? (0, r.jsx)('div', {
                      className: u.cover,
                      children: f
                  })
                : (0, r.jsx)(s.P3F, {
                      className: a()(n, u.cover, { [u.active]: !e.disableInteractions }),
                      onClick: t,
                      tabIndex: 0,
                      'aria-label': c.NW.string(c.t.RscU7O),
                      focusProps: { ringTarget: d },
                      children: f
                  })
    });
}
