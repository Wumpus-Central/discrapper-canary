"use strict";
n.d(t, { A: () => c, w: () => u });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(834730),
    d = n(985018),
    _ = n(840625),
    u = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.LARGE = 1)] = "LARGE"), i);
function c(e) {
    let { game: t, size: n, className: i } = e,
        [a, u] = s.useState(!1),
        c = t.name,
        E = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        h = t.getCoverURL();
    return null == h || a
        ? (0, r.jsxs)("div", {
              className: o()(_.N, i),
              children: [
                  (0, r.jsx)("div", { className: _.j }),
                  (0, r.jsx)(l.E, {
                      variant: 1 === n ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === n ? 4 : 3,
                      children: c,
                  }),
                  (0, r.jsx)("div", { className: _.j }),
                  (0, r.jsx)(l.E, {
                      variant: 1 === n ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != E ? `(${E?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, r.jsx)("img", {
              className: i,
              src: h,
              alt: d.intl.formatToPlainString(d.t["3ev90U"], { game: c }),
              onError: () => {
                  u(!0);
              },
              onLoad: () => {
                  u(!1);
              },
              draggable: !1,
          });
}
