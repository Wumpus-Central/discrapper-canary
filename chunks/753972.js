n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(768581),
    l = n(388032),
    c = n(155455);
function u(e) {
    let {
            application: t,
            src: n,
            className: a,
            size: u,
            botIconFirst: d,
            fallbackAvatar: f,
            rendersPlaceholder: p = !1,
        } = e,
        _ = i.useMemo(
            () =>
                null != t
                    ? s.ZP.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: u,
                          botIconFirst: d,
                          fallbackAvatar: f,
                      })
                    : n,
            [t, n, u, d, f],
        );
    return null == _
        ? p
            ? (0, r.jsx)("div", { className: o()(c.icon, c.placeholder, a) })
            : null
        : (0, r.jsx)("img", {
              className: o()(c.icon, a),
              alt: l.intl.string(l.t.X4IxWL),
              src: _,
              "aria-hidden": !0,
              draggable: !1,
          });
}
