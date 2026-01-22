n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(486020),
    l = n(985018),
    c = n(921010);
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
                    ? o.Ay.getApplicationIconURL({
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
            ? (0, r.jsx)("div", { className: s()(c.K, c.q, a) })
            : null
        : (0, r.jsx)("img", {
              className: s()(c.K, a),
              alt: l.intl.string(l.t.X4IxWL),
              src: _,
              "aria-hidden": !0,
              draggable: !1,
          });
}
