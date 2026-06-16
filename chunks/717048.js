s.d(n, { A: () => r });
var a = s(627968),
    t = s(64700),
    c = s(503698),
    l = s.n(c),
    e = s(486020),
    d = s(375708),
    o = s(340791);
function r(i) {
    let {
            application: n,
            src: s,
            className: c,
            size: r,
            botIconFirst: u,
            fallbackAvatar: p,
            rendersPlaceholder: h = !1,
        } = i,
        b = t.useMemo(
            () =>
                null != n
                    ? e.Ay.getApplicationIconURL({
                          id: n.id,
                          icon: n.icon,
                          bot: n.bot,
                          size: r,
                          botIconFirst: u,
                          fallbackAvatar: p,
                      })
                    : s,
            [n, s, r, u, p],
        );
    return null == b
        ? h
            ? (0, a.jsx)("div", { className: l()(o.K, o.q, c) })
            : null
        : (0, a.jsx)("img", {
              className: l()(o.K, c),
              alt: d.intl.string(d.t.X4IxWL),
              src: b,
              "aria-hidden": !0,
              draggable: !1,
          });
}
