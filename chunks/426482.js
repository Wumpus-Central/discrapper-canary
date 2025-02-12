n.d(t, {
    C: () => m,
    Z: () => u
}),
    n(47120);
var r,
    a = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(793030),
    c = n(388032),
    d = n(414667),
    u = (((r = {})[(r.SMALL = 0)] = 'SMALL'), (r[(r.LARGE = 1)] = 'LARGE'), r);
function m(e) {
    var t;
    let { game: n, application: r, size: o, className: u } = e,
        [m, _] = i.useState(!1),
        g = null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : n.name,
        p = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null;
    return null == n.coverImageUrl || m
        ? (0, a.jsxs)('div', {
              className: l()(d.fallback, u),
              children: [
                  (0, a.jsx)('div', { className: d.spacer }),
                  (0, a.jsx)(s.xv, {
                      variant: 1 === o ? 'text-md/medium' : 'text-xs/medium',
                      color: 'always-white',
                      lineClamp: 1 === o ? 4 : 3,
                      children: g
                  }),
                  (0, a.jsx)('div', { className: d.spacer }),
                  (0, a.jsx)(s.xv, {
                      variant: 1 === o ? 'text-sm/normal' : 'text-xxs/normal',
                      color: 'always-white',
                      children: null != p ? '('.concat(null == p ? void 0 : p.getFullYear(), ')') : null
                  })
              ]
          })
        : (0, a.jsx)('img', {
              className: u,
              src: n.coverImageUrl,
              alt: c.intl.formatToPlainString(c.t['3ev90d'], { game: g }),
              onError: () => {
                  _(!0);
              },
              onLoad: () => {
                  _(!1);
              }
          });
}
