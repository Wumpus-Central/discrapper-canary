t.d(a, { A: () => d, w: () => u });
var l,
    s = t(627968),
    n = t(64700),
    i = t(503698),
    r = t.n(i),
    c = t(834730),
    o = t(375708),
    m = t(840625),
    u = (((l = {})[(l.SMALL = 0)] = "SMALL"), (l[(l.LARGE = 1)] = "LARGE"), l);
function d(e) {
    let { game: a, size: t, className: l, imageSize: i } = e,
        [u, d] = n.useState(!1),
        x = a.name,
        h = null != a.firstReleaseDate ? new Date(a.firstReleaseDate) : null,
        j = a.getCoverURL(i);
    return null == j || u
        ? (0, s.jsxs)("div", {
              className: r()(m.N, l),
              children: [
                  (0, s.jsx)("div", { className: m.j }),
                  (0, s.jsx)(c.E, {
                      variant: 1 === t ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === t ? 4 : 3,
                      children: x,
                  }),
                  (0, s.jsx)("div", { className: m.j }),
                  (0, s.jsx)(c.E, {
                      variant: 1 === t ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != h ? `(${h?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, s.jsx)("img", {
              className: l,
              src: j,
              alt: o.intl.formatToPlainString(o.t["3ev90U"], { game: x }),
              onError: function () {
                  d(!0);
              },
              onLoad: function () {
                  d(!1);
              },
              draggable: !1,
          });
}
