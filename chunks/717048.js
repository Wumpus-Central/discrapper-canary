"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(486020),
    l = n(985018),
    u = n(921010);
function c(e) {
    let {
            application: t,
            src: n,
            className: a,
            size: c,
            botIconFirst: d,
            fallbackAvatar: _,
            rendersPlaceholder: f = !1,
        } = e,
        p = i.useMemo(
            () =>
                null != t
                    ? o.Ay.getApplicationIconURL({
                          id: t.id,
                          icon: t.icon,
                          bot: t.bot,
                          size: c,
                          botIconFirst: d,
                          fallbackAvatar: _,
                      })
                    : n,
            [t, n, c, d, _],
        );
    return null == p
        ? f
            ? (0, r.jsx)("div", { className: s()(u.K, u.q, a) })
            : null
        : (0, r.jsx)("img", {
              className: s()(u.K, a),
              alt: l.intl.string(l.t.X4IxWL),
              src: p,
              "aria-hidden": !0,
              draggable: !1,
          });
}
