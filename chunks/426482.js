(r.d(t, {
    C: () => m,
    Z: () => u
}),
    r(388685));
var n,
    a = r(255367),
    i = r(73800),
    l = r(120356),
    o = r.n(l),
    s = r(793030),
    c = r(388032),
    d = r(376377),
    u = (((n = {})[(n.SMALL = 0)] = 'SMALL'), (n[(n.LARGE = 1)] = 'LARGE'), n);
function m(e) {
    var t;
    let { game: r, application: n, size: l, className: u } = e,
        [m, g] = i.useState(!1),
        p = null != (t = null == n ? void 0 : n.name) ? t : r.name,
        f = null != r.firstReleaseDate ? new Date(r.firstReleaseDate) : null;
    return null == r.coverImageUrl || m
        ? (0, a.jsxs)('div', {
              className: o()(d.fallback, u),
              children: [
                  (0, a.jsx)('div', { className: d.spacer }),
                  (0, a.jsx)(s.xv, {
                      variant: 1 === l ? 'text-md/medium' : 'text-xs/medium',
                      color: 'always-white',
                      lineClamp: 1 === l ? 4 : 3,
                      children: p
                  }),
                  (0, a.jsx)('div', { className: d.spacer }),
                  (0, a.jsx)(s.xv, {
                      variant: 1 === l ? 'text-sm/normal' : 'text-xxs/normal',
                      color: 'always-white',
                      children: null != f ? '('.concat(null == f ? void 0 : f.getFullYear(), ')') : null
                  })
              ]
          })
        : (0, a.jsx)('img', {
              className: u,
              src: r.coverImageUrl,
              alt: c.intl.formatToPlainString(c.t['3ev90d'], { game: p }),
              onError: () => {
                  g(!0);
              },
              onLoad: () => {
                  g(!1);
              }
          });
}
