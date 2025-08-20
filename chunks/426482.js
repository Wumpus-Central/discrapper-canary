r.d(t, {
    C: () => m,
    Z: () => d,
}),
    r(388685);
var n,
    i = r(951288),
    l = r(647438),
    a = r(120356),
    s = r.n(a),
    o = r(793030),
    c = r(388032),
    u = r(451697),
    d = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.LARGE = 1)] = "LARGE"), n);
function m(e) {
    var t;
    let { game: r, application: n, size: a, className: d } = e,
        [m, p] = l.useState(!1),
        f = null != (t = null == n ? void 0 : n.name) ? t : r.name,
        g = null != r.firstReleaseDate ? new Date(r.firstReleaseDate) : null;
    return null == r.coverImageUrl || m
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
              src: r.coverImageUrl,
              alt: c.intl.formatToPlainString(c.t["3ev90d"], { game: f }),
              onError: () => {
                  p(!0);
              },
              onLoad: () => {
                  p(!1);
              },
          });
}
