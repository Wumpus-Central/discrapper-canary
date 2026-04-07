"use strict";
n.d(t, { A: () => d, w: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    l = n(985018),
    u = n(716833),
    c = (function (e) {
        return (e[(e.SMALL = 0)] = "SMALL"), (e[(e.LARGE = 1)] = "LARGE"), e;
    })({});
function d(e) {
    let { game: t, application: n, size: s, className: c } = e,
        [d, _] = i.useState(!1),
        f = n?.name ?? t.name,
        p = null != t.firstReleaseDate ? new Date(t.firstReleaseDate) : null,
        h = () => {
            _(!0);
        },
        m = () => {
            _(!1);
        },
        E = t.getCoverURL();
    return null == E || d
        ? (0, r.jsxs)("div", {
              className: a()(u.N, c),
              children: [
                  (0, r.jsx)("div", { className: u.j }),
                  (0, r.jsx)(o.EYj, {
                      variant: 1 === s ? "text-md/medium" : "text-xs/medium",
                      color: "always-white",
                      lineClamp: 1 === s ? 4 : 3,
                      children: f,
                  }),
                  (0, r.jsx)("div", { className: u.j }),
                  (0, r.jsx)(o.EYj, {
                      variant: 1 === s ? "text-sm/normal" : "text-xxs/normal",
                      color: "always-white",
                      children: null != p ? `(${p?.getFullYear()})` : null,
                  }),
              ],
          })
        : (0, r.jsx)("img", {
              className: c,
              src: E,
              alt: l.intl.formatToPlainString(l.t["3ev90U"], { game: f }),
              onError: h,
              onLoad: m,
              draggable: !1,
          });
}
