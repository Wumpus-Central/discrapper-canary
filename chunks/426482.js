r.d(t, {
    C: () => p,
    Z: () => d
}),
    r(47120);
var n,
    a = r(200651),
    o = r(192379),
    i = r(120356),
    s = r.n(i),
    l = r(793030),
    c = r(388032),
    u = r(816731),
    d = (((n = {})[(n.SMALL = 0)] = 'SMALL'), (n[(n.LARGE = 1)] = 'LARGE'), n);
function p(e) {
    var t;
    let { game: r, application: n, size: i, className: d } = e,
        [p, m] = o.useState(!1),
        f = null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : r.name,
        g = null != r.firstReleaseDate ? new Date(r.firstReleaseDate) : null;
    return null == r.coverImageUrl || p
        ? (0, a.jsxs)('div', {
              className: s()(u.fallback, d),
              children: [
                  (0, a.jsx)('div', { className: u.spacer }),
                  (0, a.jsx)(l.xv, {
                      variant: 1 === i ? 'text-md/medium' : 'text-xs/medium',
                      color: 'always-white',
                      lineClamp: 1 === i ? 4 : 3,
                      children: f
                  }),
                  (0, a.jsx)('div', { className: u.spacer }),
                  (0, a.jsx)(l.xv, {
                      variant: 1 === i ? 'text-sm/normal' : 'text-xxs/normal',
                      color: 'always-white',
                      children: null != g ? '('.concat(null == g ? void 0 : g.getFullYear(), ')') : null
                  })
              ]
          })
        : (0, a.jsx)('img', {
              className: d,
              src: r.coverImageUrl,
              alt: c.NW.formatToPlainString(c.t['3ev90d'], { game: f }),
              onError: () => {
                  m(!0);
              },
              onLoad: () => {
                  m(!1);
              }
          });
}
