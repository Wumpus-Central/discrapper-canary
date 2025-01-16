r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(249458),
    c = r(388032),
    d = r(267954);
function f(e) {
    let { onPlay: n, className: r, inactive: s } = e,
        f = a.useRef(null),
        _ = (0, i.jsx)('div', {
            className: d.iconWrapper,
            ref: f,
            children: (0, i.jsx)(l.PlayIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o()(d.icon)
            })
        });
    return (0, i.jsx)(u.G.Consumer, {
        children: (e) =>
            s || null == n
                ? (0, i.jsx)('div', {
                      className: d.cover,
                      children: _
                  })
                : (0, i.jsx)(l.Clickable, {
                      className: o()(r, d.cover, { [d.active]: !e.disableInteractions }),
                      onClick: n,
                      tabIndex: 0,
                      'aria-label': c.intl.string(c.t.RscU7O),
                      focusProps: { ringTarget: f },
                      children: _
                  })
    });
}
