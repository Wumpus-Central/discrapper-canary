n.d(t, { A: () => m, w: () => d });
var i,
    l = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(834730),
    u = n(375708),
    c = n(840625),
    d = (((i = {})[(i.SMALL = 0)] = "SMALL"), (i[(i.LARGE = 1)] = "LARGE"), i);
function m(e) {
    let { game: t, size: n, className: i } = e,
        [a, d] = r.useState(!1),
        m = t.name,
        f = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        g = t.getCoverURL();
    return null == g || a
        ? (0, l.jsxs)("div", {
              className: s()(c.N, i),
              children: [
                  (0, l.jsx)("div", { className: c.j }),
                  (0, l.jsx)(o.E, {
                      variant: 1 === n ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === n ? 4 : 3,
                      children: m,
                  }),
                  (0, l.jsx)("div", { className: c.j }),
                  (0, l.jsx)(o.E, {
                      variant: 1 === n ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != f ? `(${f?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, l.jsx)("img", {
              className: i,
              src: g,
              alt: u.intl.formatToPlainString(u.t["3ev90U"], { game: m }),
              onError: () => {
                  d(!0);
              },
              onLoad: () => {
                  d(!1);
              },
              draggable: !1,
          });
}
