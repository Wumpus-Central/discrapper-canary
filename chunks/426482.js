n.d(t, {
    C: function () {
        return m;
    },
    Z: function () {
        return r;
    }
}),
    n(47120);
var r,
    i,
    a = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(793030),
    d = n(388032),
    u = n(605910);
function m(e) {
    var t;
    let { game: n, application: r, size: i, className: o } = e,
        [m, p] = l.useState(!1),
        g = null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : n.name,
        f = null != n.firstReleaseDate ? new Date(n.firstReleaseDate) : null;
    return null == n.coverImageUrl || m
        ? (0, a.jsxs)('div', {
              className: s()(u.fallback, o),
              children: [
                  (0, a.jsx)('div', { className: u.spacer }),
                  (0, a.jsx)(c.xv, {
                      variant: 1 === i ? 'text-md/medium' : 'text-xs/medium',
                      color: 'always-white',
                      lineClamp: 1 === i ? 4 : 3,
                      children: g
                  }),
                  (0, a.jsx)('div', { className: u.spacer }),
                  (0, a.jsx)(c.xv, {
                      variant: 1 === i ? 'text-sm/normal' : 'text-xxs/normal',
                      color: 'always-white',
                      children: null != f ? '('.concat(null == f ? void 0 : f.getFullYear(), ')') : null
                  })
              ]
          })
        : (0, a.jsx)('img', {
              className: o,
              src: n.coverImageUrl,
              alt: d.intl.formatToPlainString(d.t['3ev90d'], { game: g }),
              onError: () => {
                  p(!0);
              },
              onLoad: () => {
                  p(!1);
              }
          });
}
((i = r || (r = {}))[(i.SMALL = 0)] = 'SMALL'), (i[(i.LARGE = 1)] = 'LARGE');
