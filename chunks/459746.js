"use strict";
n.d(t, { A: () => _, w: () => d });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(834730),
    u = n(375708),
    c = n(840625),
    d = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.LARGE = 1)] = "LARGE"), i);
function _(e) {
    let { game: t, size: n, className: i } = e,
        [a, d] = s.useState(!1),
        _ = t.name,
        h = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        f = t.getCoverURL();
    return null == f || a
        ? (0, r.jsxs)("div", {
              className: o()(c.N, i),
              children: [
                  (0, r.jsx)("div", { className: c.j }),
                  (0, r.jsx)(l.E, {
                      variant: 1 === n ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === n ? 4 : 3,
                      children: _,
                  }),
                  (0, r.jsx)("div", { className: c.j }),
                  (0, r.jsx)(l.E, {
                      variant: 1 === n ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != h ? `(${h?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, r.jsx)("img", {
              className: i,
              src: f,
              alt: u.intl.formatToPlainString(u.t["3ev90U"], { game: _ }),
              onError: () => {
                  d(!0);
              },
              onLoad: () => {
                  d(!1);
              },
              draggable: !1,
          });
}
