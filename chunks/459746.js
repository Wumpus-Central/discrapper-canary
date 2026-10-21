a.d(e, { Ay: () => x, cO: () => m, wu: () => d });
var n,
    t = a(477900);
a(582128);
var r = a(503698),
    i = a.n(r),
    s = a(834730),
    u = a(5399),
    c = a(105292),
    o = a(899830),
    d = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.LARGE = 1)] = "LARGE"), n);
function m(l) {
    return "icon" === (0, u.My)(l);
}
function x(l) {
    let { game: e, size: a, className: n, imageSize: r, loadingPlaceholder: d } = l,
        m = e.name,
        x = null != e.firstReleaseDate ? new Date(e.firstReleaseDate) : null,
        v = c.intl.formatToPlainString(c.t["3ev90U"], { game: m }),
        h = e.getCoverURL(r),
        g = e.getIconURL(r ?? 256),
        { imageUrl: f, isCover: j, isLoading: L, handleLoad: p, handleError: k } = (0, u.Ay)(h, g);
    if (null == f)
        return (0, t.jsxs)("div", {
            className: i()(o.Np, n),
            children: [
                (0, t.jsx)("div", { className: o.jH }),
                (0, t.jsx)(s.E, {
                    variant: 1 === a ? "text-md/medium" : "text-xs/medium",
                    color: "text-overlay-light",
                    lineClamp: 1 === a ? 4 : 3,
                    children: m,
                }),
                (0, t.jsx)("div", { className: o.jH }),
                (0, t.jsx)(s.E, {
                    variant: 1 === a ? "text-sm/normal" : "text-xxs/normal",
                    color: "text-overlay-light",
                    children: null != x ? `(${x?.getFullYear()})` : null,
                }),
            ],
        });
    let C = { src: f, onError: k, onLoad: p, draggable: !1 };
    return j
        ? (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("img", { ...C, className: n, alt: v }, f), L && d] })
        : (0, t.jsxs)("div", {
              className: i()(o.EU, n),
              children: [(0, t.jsx)("img", { ...C, className: o.Kk, alt: v }, f), L && d],
          });
}
