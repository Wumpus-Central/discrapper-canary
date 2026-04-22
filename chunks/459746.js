"use strict";
n.d(t, { A: () => h, w: () => d });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(834730),
    c = n(985018),
    u = n(840625),
    d = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.LARGE = 1)] = "LARGE"), i);
function h(e) {
    let { game: t, application: n, size: i, className: r } = e,
        [d, h] = s.useState(!1),
        m = n?.name ?? t.name,
        p = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        f = t.getCoverURL();
    return null == f || d
        ? (0, l.jsxs)("div", {
              className: a()(u.N, r),
              children: [
                  (0, l.jsx)("div", { className: u.j }),
                  (0, l.jsx)(o.E, {
                      variant: 1 === i ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === i ? 4 : 3,
                      children: m,
                  }),
                  (0, l.jsx)("div", { className: u.j }),
                  (0, l.jsx)(o.E, {
                      variant: 1 === i ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != p ? `(${p?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, l.jsx)("img", {
              className: r,
              src: f,
              alt: c.intl.formatToPlainString(c.t["3ev90U"], { game: m }),
              onError: () => {
                  h(!0);
              },
              onLoad: () => {
                  h(!1);
              },
              draggable: !1,
          });
}
