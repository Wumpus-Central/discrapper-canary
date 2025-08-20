n.d(t, {
    C: () => m,
    Z: () => d,
}),
    n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    c = n(388032),
    u = n(451697),
    d = (((r = {})[(r.SMALL = 0)] = "SMALL"), (r[(r.LARGE = 1)] = "LARGE"), r);
function m(e) {
    var t;
    let { game: n, application: r, size: a, className: d } = e,
        [m, p] = l.useState(!1),
        f = null != (t = null == r ? void 0 : r.name) ? t : n.name,
        g = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null;
    return null == n.coverImageUrl || m
        ? (0, i.jsxs)("div", {
              className: s()(u.fallback, d),
              children: [
                  (0, i.jsx)("div", { className: u.spacer }),
                  (0, i.jsx)(o.xv, {
                      variant: 1 === a ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === a ? 4 : 3,
                      children: f,
                  }),
                  (0, i.jsx)("div", { className: u.spacer }),
                  (0, i.jsx)(o.xv, {
                      variant: 1 === a ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != g ? "(".concat(null == g ? void 0 : g.getFullYear(), ")") : null,
                  }),
              ],
          })
        : (0, i.jsx)("img", {
              className: d,
              src: n.coverImageUrl,
              alt: c.intl.formatToPlainString(c.t["3ev90d"], { game: f }),
              onError: () => {
                  p(!0);
              },
              onLoad: () => {
                  p(!1);
              },
          });
}
