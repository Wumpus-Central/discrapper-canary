a.d(t, { A: () => d, w: () => u });
var l,
    s = a(627968),
    n = a(64700),
    r = a(503698),
    i = a.n(r),
    o = a(834730),
    c = a(375708),
    m = a(840625),
    u = (((l = {})[(l.SMALL = 0)] = "SMALL"), (l[(l.LARGE = 1)] = "LARGE"), l);
function d(e) {
    let { game: t, size: a, className: l, imageSize: r } = e,
        [u, d] = n.useState(!1),
        x = t.name,
        h = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        v = t.getCoverURL(r);
    return null == v || u
        ? (0, s.jsxs)("div", {
              className: i()(m.N, l),
              children: [
                  (0, s.jsx)("div", { className: m.j }),
                  (0, s.jsx)(o.E, {
                      variant: 1 === a ? "text-md/medium" : "text-xs/medium",
                      color: "text-overlay-light",
                      lineClamp: 1 === a ? 4 : 3,
                      children: x,
                  }),
                  (0, s.jsx)("div", { className: m.j }),
                  (0, s.jsx)(o.E, {
                      variant: 1 === a ? "text-sm/normal" : "text-xxs/normal",
                      color: "text-overlay-light",
                      children: null != h ? `(${h?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, s.jsx)("img", {
              className: l,
              src: v,
              alt: c.intl.formatToPlainString(c.t["3ev90U"], { game: x }),
              onError: function () {
                  d(!0);
              },
              onLoad: function () {
                  d(!1);
              },
              draggable: !1,
          });
}
