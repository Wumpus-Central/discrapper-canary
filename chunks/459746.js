n.d(t, {
    A: () => d,
    w: () => u,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(985018),
    c = n(902820),
    u = (function (e) {
        return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.LARGE = 1)] = "LARGE"), e;
    })({});

function d(e) {
    var t;
    let { game: n, application: a, size: u, className: d } = e,
        [f, p] = i.useState(!1),
        _ = null != (t = null == a ? void 0 : a.name) ? t : n.name,
        h = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null,
        m = () => {
            p(!0);
        },
        g = () => {
            p(!1);
        };
    return null == n.coverImageUrl || f
        ? (0, r.jsxs)("div", {
              className: s()(c.N, d),
              children: [
                  (0, r.jsx)("div", {
                      className: c.j,
                  }),
                  (0, r.jsx)(o.EYj, {
                      variant: 1 === u ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === u ? 4 : 3,
                      children: _,
                  }),
                  (0, r.jsx)("div", {
                      className: c.j,
                  }),
                  (0, r.jsx)(o.EYj, {
                      variant: 1 === u ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != h ? "(".concat(null == h ? void 0 : h.getFullYear(), ")") : null,
                  }),
              ],
          })
        : (0, r.jsx)("img", {
              className: d,
              src: n.coverImageUrl,
              alt: l.intl.formatToPlainString(l.t["3ev90U"], {
                  game: _,
              }),
              onError: m,
              onLoad: g,
          });
}
