r.d(t, {
    C: () => m,
    Z: () => d
}),
    r(388685);
var n,
    a = r(200651),
    i = r(192379),
    l = r(120356),
    s = r.n(l),
    o = r(793030),
    c = r(388032),
    u = r(376377),
    d = (((n = {})[(n.SMALL = 0)] = 'SMALL'), (n[(n.LARGE = 1)] = 'LARGE'), n);
function m(e) {
    var t;
    let { game: r, application: n, size: l, className: d } = e,
        [m, g] = i.useState(!1),
        f = null != (t = null == n ? void 0 : n.name) ? t : r.name,
        p = null != r.firstReleaseDate ? new Date(r.firstReleaseDate) : null;
    return null == r.coverImageUrl || m
        ? (0, a.jsxs)('div', {
              className: s()(u.fallback, d),
              children: [
                  (0, a.jsx)('div', { className: u.spacer }),
                  (0, a.jsx)(o.xv, {
                      variant: 1 === l ? 'text-md/medium' : 'text-xs/medium',
                      color: 'always-white',
                      lineClamp: 1 === l ? 4 : 3,
                      children: f
                  }),
                  (0, a.jsx)('div', { className: u.spacer }),
                  (0, a.jsx)(o.xv, {
                      variant: 1 === l ? 'text-sm/normal' : 'text-xxs/normal',
                      color: 'always-white',
                      children: null != p ? '('.concat(null == p ? void 0 : p.getFullYear(), ')') : null
                  })
              ]
          })
        : (0, a.jsx)('img', {
              className: d,
              src: r.coverImageUrl,
              alt: c.NW.formatToPlainString(c.t['3ev90d'], { game: f }),
              onError: () => {
                  g(!0);
              },
              onLoad: () => {
                  g(!1);
              }
          });
}
