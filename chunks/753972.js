r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(768581),
    u = r(388032),
    c = r(662355);
function d(e) {
    let { application: n, src: r, className: s, size: d, botIconFirst: f, fallbackAvatar: _, rendersPlaceholder: h = !1 } = e,
        p = a.useMemo(
            () =>
                null != n
                    ? l.ZP.getApplicationIconURL({
                          id: n.id,
                          icon: n.icon,
                          bot: n.bot,
                          size: d,
                          botIconFirst: f,
                          fallbackAvatar: _
                      })
                    : r,
            [n, r, d, f, _]
        );
    if (null == p) return h ? (0, i.jsx)('div', { className: o()(c.icon, c.placeholder, s) }) : null;
    return (0, i.jsx)('img', {
        className: o()(c.icon, s),
        alt: u.intl.string(u.t.X4IxWF),
        src: p,
        'aria-hidden': !0,
        draggable: !1
    });
}
