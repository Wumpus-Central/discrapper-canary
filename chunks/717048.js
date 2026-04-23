n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(486020),
    o = n(985018),
    c = n(398263);
function d(e) {
    let {
            application: t,
            src: n,
            className: a,
            size: d,
            botIconFirst: u,
            fallbackAvatar: m,
            rendersPlaceholder: p = !1,
        } = e,
        _ = i.useMemo(
            () =>
                null != t
                    ? r.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: d,
                          botIconFirst: u,
                          fallbackAvatar: m,
                      })
                    : n,
            [t, n, d, u, m],
        );
    return null == _
        ? p
            ? (0, l.jsx)("div", { className: s()(c.K, c.q, a) })
            : null
        : (0, l.jsx)("img", {
              className: s()(c.K, a),
              alt: o.intl.string(o.t.X4IxWL),
              src: _,
              "aria-hidden": !0,
              draggable: !1,
          });
}
