n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(768581),
    l = n(388032),
    c = n(870017);
function u(e) {
    let { application: t, src: n, className: a, size: u, botIconFirst: d, fallbackAvatar: f, rendersPlaceholder: _ = !1 } = e,
        p = i.useMemo(
            () =>
                null != t
                    ? s.ZP.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: u,
                          botIconFirst: d,
                          fallbackAvatar: f
                      })
                    : n,
            [t, n, u, d, f]
        );
    return null == p
        ? _
            ? (0, r.jsx)('div', { className: o()(c.icon, c.placeholder, a) })
            : null
        : (0, r.jsx)('img', {
              className: o()(c.icon, a),
              alt: l.intl.string(l.t.X4IxWF),
              src: p,
              'aria-hidden': !0,
              draggable: !1
          });
}
