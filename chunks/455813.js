r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(249458),
    c = r(388032),
    d = r(267954);
function f(e) {
    let { onPlay: n, className: r, inactive: o } = e,
        f = a.useRef(null),
        p = (0, i.jsx)('div', {
            className: d.iconWrapper,
            ref: f,
            children: (0, i.jsx)(l.PlayIcon, {
                size: 'xs',
                color: 'currentColor',
                className: s()(d.icon)
            })
        });
    return (0, i.jsx)(u.G.Consumer, {
        children: (e) =>
            o || null == n
                ? (0, i.jsx)('div', {
                      className: d.cover,
                      children: p
                  })
                : (0, i.jsx)(l.Clickable, {
                      className: s()(r, d.cover, { [d.active]: !e.disableInteractions }),
                      onClick: n,
                      tabIndex: 0,
                      'aria-label': c.intl.string(c.t.RscU7O),
                      focusProps: { ringTarget: f },
                      children: p
                  })
    });
}
