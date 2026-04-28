"use strict";
n.d(t, { A: () => h, w: () => d });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(834730),
    c = n(985018),
    u = n(840625),
    d = (((l = {})[(l.SMALL = 0)] = "SMALL"), (l[(l.LARGE = 1)] = "LARGE"), l);
function h(e) {
    let { game: t, size: n, className: l } = e,
        [a, d] = s.useState(!1),
        h = t.name,
        m = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        p = t.getCoverURL();
    return null == p || a
        ? (0, i.jsxs)("div", {
              className: r()(u.N, l),
              children: [
                  (0, i.jsx)("div", { className: u.j }),
                  (0, i.jsx)(o.E, {
                      variant: 1 === n ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === n ? 4 : 3,
                      children: h,
                  }),
                  (0, i.jsx)("div", { className: u.j }),
                  (0, i.jsx)(o.E, {
                      variant: 1 === n ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != m ? `(${m?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, i.jsx)("img", {
              className: l,
              src: p,
              alt: c.intl.formatToPlainString(c.t["3ev90U"], { game: h }),
              onError: () => {
                  d(!0);
              },
              onLoad: () => {
                  d(!1);
              },
              draggable: !1,
          });
}
