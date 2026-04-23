"use strict";
i.d(t, { A: () => u });
var r = i(627968),
    l = i(64700),
    n = i(503698),
    a = i.n(n),
    s = i(486020),
    o = i(985018),
    c = i(398263);
function u(e) {
    let {
            application: t,
            src: i,
            className: n,
            size: u,
            botIconFirst: d,
            fallbackAvatar: _,
            rendersPlaceholder: h = !1,
        } = e,
        p = l.useMemo(
            () =>
                null != t
                    ? s.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: u,
                          botIconFirst: d,
                          fallbackAvatar: _,
                      })
                    : i,
            [t, i, u, d, _],
        );
    return null == p
        ? h
            ? (0, r.jsx)("div", { className: a()(c.K, c.q, n) })
            : null
        : (0, r.jsx)("img", {
              className: a()(c.K, n),
              alt: o.intl.string(o.t.X4IxWL),
              src: p,
              "aria-hidden": !0,
              draggable: !1,
          });
}
