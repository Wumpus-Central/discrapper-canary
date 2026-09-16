t.d(l, { Ay: () => x, cO: () => d, wu: () => m });
var a,
    n = t(477900),
    s = t(582128),
    r = t(503698),
    i = t.n(r),
    c = t(834730),
    o = t(375708),
    u = t(899830),
    m = (((a = {})[(a.SMALL = 0)] = "SMALL"), (a[(a.LARGE = 1)] = "LARGE"), a);
function d(e, l) {
    return null == e.getCoverURL(l) && null != e.getIconURL(l ?? 256);
}
function x(e) {
    let { game: l, size: t, className: a, imageSize: r, onLoad: m, onError: d } = e,
        [x, g] = s.useState(null),
        [v, h] = s.useState(null),
        L = l.name,
        j = null != l.firstReleaseDate ? new Date(l.firstReleaseDate) : null,
        p = o.intl.formatToPlainString(o.t["3ev90U"], { game: L }),
        R = l.getCoverURL(r),
        f = l.getIconURL(r ?? 256);
    return null == R || R === x
        ? null != f && f !== v
            ? (0, n.jsx)("div", {
                  className: i()(u.EU, a),
                  children: (0, n.jsx)("img", {
                      className: u.Kk,
                      src: f,
                      alt: p,
                      onError: function () {
                          h(f);
                      },
                      draggable: !1,
                  }),
              })
            : (0, n.jsxs)("div", {
                  className: i()(u.Np, a),
                  children: [
                      (0, n.jsx)("div", { className: u.jH }),
                      (0, n.jsx)(c.E, {
                          variant: 1 === t ? "text-md/medium" : "text-xs/medium",
                          color: "text-overlay-light",
                          lineClamp: 1 === t ? 4 : 3,
                          children: L,
                      }),
                      (0, n.jsx)("div", { className: u.jH }),
                      (0, n.jsx)(c.E, {
                          variant: 1 === t ? "text-sm/normal" : "text-xxs/normal",
                          color: "text-overlay-light",
                          children: null != j ? `(${j?.getFullYear()})` : null,
                      }),
                  ],
              })
        : (0, n.jsx)("img", {
              className: a,
              src: R,
              alt: p,
              onError: function (e) {
                  (g(R), d?.(e));
              },
              onLoad: m,
              draggable: !1,
          });
}
