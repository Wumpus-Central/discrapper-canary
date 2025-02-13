n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(768581),
    l = n(388032),
    u = n(417955);
function c(e) {
    let { application: t, src: n, className: a, size: c, botIconFirst: d, fallbackAvatar: f, rendersPlaceholder: _ = !1 } = e,
        p = r.useMemo(
            () =>
                null != t
                    ? o.ZP.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: c,
                          botIconFirst: d,
                          fallbackAvatar: f
                      })
                    : n,
            [t, n, c, d, f]
        );
    return null == p
        ? _
            ? (0, i.jsx)('div', { className: s()(u.icon, u.placeholder, a) })
            : null
        : (0, i.jsx)('img', {
              className: s()(u.icon, a),
              alt: l.intl.string(l.t.X4IxWF),
              src: p,
              'aria-hidden': !0,
              draggable: !1
          });
}
