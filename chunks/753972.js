r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(768581),
    u = r(388032),
    c = r(662355);
function d(e) {
    let { application: n, src: r, className: o, size: d, botIconFirst: f, fallbackAvatar: p, rendersPlaceholder: h = !1 } = e,
        _ = a.useMemo(
            () =>
                null != n
                    ? l.ZP.getApplicationIconURL({
                          id: n.id,
                          icon: n.icon,
                          bot: n.bot,
                          size: d,
                          botIconFirst: f,
                          fallbackAvatar: p
                      })
                    : r,
            [n, r, d, f, p]
        );
    if (null == _) return h ? (0, i.jsx)('div', { className: s()(c.icon, c.placeholder, o) }) : null;
    return (0, i.jsx)('img', {
        className: s()(c.icon, o),
        alt: u.intl.string(u.t.X4IxWF),
        src: _,
        'aria-hidden': !0,
        draggable: !1
    });
}
