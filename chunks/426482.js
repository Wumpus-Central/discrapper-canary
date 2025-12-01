n.d(t, {
    C: () => d,
    Z: () => u,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(388032),
    c = n(451697),
    u = (function (e) {
        return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.LARGE = 1)] = "LARGE"), e;
    })({});
function d(e) {
    var t;
    let { game: n, application: a, size: u, className: d } = e,
        [f, p] = i.useState(!1),
        _ = null != (t = null == a ? void 0 : a.name) ? t : n.name,
        m = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null,
        h = () => {
            p(!0);
        },
        g = () => {
            p(!1);
        };
    return null == n.coverImageUrl || f
        ? (0, r.jsxs)("div", {
              className: o()(c.fallback, d),
              children: [
                  (0, r.jsx)("div", { className: c.spacer }),
                  (0, r.jsx)(s.xvT, {
                      variant: 1 === u ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === u ? 4 : 3,
                      children: _,
                  }),
                  (0, r.jsx)("div", { className: c.spacer }),
                  (0, r.jsx)(s.xvT, {
                      variant: 1 === u ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != m ? "(".concat(null == m ? void 0 : m.getFullYear(), ")") : null,
                  }),
              ],
          })
        : (0, r.jsx)("img", {
              className: d,
              src: n.coverImageUrl,
              alt: l.intl.formatToPlainString(l.t["3ev90U"], { game: _ }),
              onError: h,
              onLoad: g,
          });
}
