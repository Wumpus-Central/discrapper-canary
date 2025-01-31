n.d(t, {
    C: () => m,
    Z: () => u
}),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(793030),
    c = n(388032),
    d = n(605910),
    u = (((i = {})[(i.SMALL = 0)] = 'SMALL'), (i[(i.LARGE = 1)] = 'LARGE'), i);
function m(e) {
    var t;
    let { game: n, application: i, size: l, className: u } = e,
        [m, p] = a.useState(!1),
        g = null !== (t = null == i ? void 0 : i.name) && void 0 !== t ? t : n.name,
        h = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null;
    return null == n.coverImageUrl || m
        ? (0, r.jsxs)('div', {
              className: o()(d.fallback, u),
              children: [
                  (0, r.jsx)('div', { className: d.spacer }),
                  (0, r.jsx)(s.xv, {
                      variant: 1 === l ? 'text-md/medium' : 'text-xs/medium',
                      color: 'always-white',
                      lineClamp: 1 === l ? 4 : 3,
                      children: g
                  }),
                  (0, r.jsx)('div', { className: d.spacer }),
                  (0, r.jsx)(s.xv, {
                      variant: 1 === l ? 'text-sm/normal' : 'text-xxs/normal',
                      color: 'always-white',
                      children: null != h ? '('.concat(null == h ? void 0 : h.getFullYear(), ')') : null
                  })
              ]
          })
        : (0, r.jsx)('img', {
              className: u,
              src: n.coverImageUrl,
              alt: c.intl.formatToPlainString(c.t['3ev90d'], { game: g }),
              onError: () => {
                  p(!0);
              },
              onLoad: () => {
                  p(!1);
              }
          });
}
