l.d(a, { Ay: () => x, wu: () => u });
var n,
    r = l(477900);
l(582128);
var s = l(503698),
    i = l.n(s),
    t = l(834730),
    c = l(5399),
    d = l(105292),
    m = l(899830),
    u = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.LARGE = 1)] = "LARGE"), (n[(n.COMPACT = 2)] = "COMPACT"), n);
let o = {
    0: { nameVariant: "text-xs/medium", nameLineClamp: 3, releaseYearVariant: "text-xxs/normal" },
    1: { nameVariant: "text-md/medium", nameLineClamp: 4, releaseYearVariant: "text-sm/normal" },
};
function x(e) {
    let { game: a, imageSize: l, ...n } = e;
    return (0, r.jsx)(h, {
        ...n,
        coverUrl: a.getCoverURL(l),
        iconUrl: a.getIconURL(l ?? 256),
        gameName: a.name,
        firstReleaseDate: a.firstReleaseDate,
    });
}
function h(e) {
    let {
            coverUrl: a,
            iconUrl: l,
            gameName: n,
            firstReleaseDate: s,
            size: t,
            className: u,
            foregroundClassName: o,
            loadingPlaceholder: x,
        } = e,
        { imageUrl: h, isCover: g, isLoading: j, handleLoad: p, handleError: C } = (0, c.Ay)(a, l);
    if (null == h) return (0, r.jsx)(v, { gameName: n, firstReleaseDate: s, size: t, className: i()(u, o) });
    let f = 2 === t ? n : d.intl.formatToPlainString(d.t["3ev90U"], { game: n }),
        N = (0, r.jsx)("img", { src: h, alt: f, draggable: !1, onLoad: p, onError: C, className: m.Sl }, h);
    return g
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("span", { className: i()(m.Iv, u, o), children: N }), j && x],
          })
        : (0, r.jsxs)("div", {
              className: i()(m.EU, u),
              children: [
                  (0, r.jsx)("span", {
                      className: m.tB,
                      "aria-hidden": !0,
                      children: (0, r.jsx)("img", { src: h, alt: "", draggable: !1, className: m.oP }),
                  }),
                  (0, r.jsx)("span", { className: i()(m.Kk, o), children: N }),
                  j && x,
              ],
          });
}
function v(e) {
    let { gameName: a, firstReleaseDate: l, size: n, className: s } = e;
    if (2 === n)
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": a,
            className: i()(m.ui, s),
            children: (0, r.jsx)(t.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: a }),
        });
    let { nameVariant: c, nameLineClamp: d, releaseYearVariant: u } = o[n],
        x = null != l ? new Date(l) : null;
    return (0, r.jsxs)("div", {
        className: i()(m.Np, s),
        children: [
            (0, r.jsx)("div", { className: m.jH }),
            (0, r.jsx)(t.E, { variant: c, color: "text-overlay-light", lineClamp: d, children: a }),
            (0, r.jsx)("div", { className: m.jH }),
            (0, r.jsx)(t.E, {
                variant: u,
                color: "text-overlay-light",
                children: null != x ? `(${x.getFullYear()})` : null,
            }),
        ],
    });
}
