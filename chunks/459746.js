l.d(a, { Ay: () => u, FQ: () => h, wu: () => x });
var s,
    r = l(477900);
l(582128);
var n = l(503698),
    t = l.n(n),
    i = l(834730),
    m = l(5399),
    c = l(105292),
    d = l(899830),
    x = (((s = {})[(s.SMALL = 0)] = "SMALL"), (s[(s.LARGE = 1)] = "LARGE"), (s[(s.COMPACT = 2)] = "COMPACT"), s);
let o = {
    0: { nameVariant: "text-xs/medium", nameLineClamp: 3, releaseYearVariant: "text-xxs/normal" },
    1: { nameVariant: "text-md/medium", nameLineClamp: 4, releaseYearVariant: "text-sm/normal" },
};
function u(e) {
    let { game: a, imageSize: l, ...s } = e;
    return (0, r.jsx)(h, {
        ...s,
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
            gameName: s,
            firstReleaseDate: n,
            size: i,
            className: x,
            foregroundClassName: o,
            loadingPlaceholder: u,
        } = e,
        { imageUrl: h, isCover: g, isLoading: v, handleLoad: p, handleError: N } = (0, m.Ay)(a, l);
    if (null == h) return (0, r.jsx)(j, { gameName: s, firstReleaseDate: n, size: i, className: t()(x, o) });
    let C = 2 === i ? s : c.intl.formatToPlainString(c.t["3ev90U"], { game: s }),
        L = (0, r.jsx)("img", { src: h, alt: C, draggable: !1, onLoad: p, onError: N, className: d.Sl }, h);
    return g
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("span", { className: t()(d.Iv, x, o), children: L }), v && u],
          })
        : (0, r.jsxs)("div", {
              className: t()(d.EU, x),
              children: [
                  (0, r.jsx)("span", {
                      className: d.tB,
                      "aria-hidden": !0,
                      children: (0, r.jsx)("img", { src: h, alt: "", draggable: !1, className: d.oP }),
                  }),
                  (0, r.jsx)("span", { className: t()(d.Kk, o), children: L }),
                  v && u,
              ],
          });
}
function j(e) {
    let { gameName: a, firstReleaseDate: l, size: s, className: n } = e;
    if (2 === s)
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": a,
            className: t()(d.ui, n),
            children: (0, r.jsx)(i.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: a }),
        });
    let { nameVariant: m, nameLineClamp: c, releaseYearVariant: x } = o[s],
        u = null != l ? new Date(l) : null;
    return (0, r.jsxs)("div", {
        className: t()(d.Np, n),
        children: [
            (0, r.jsx)("div", { className: d.jH }),
            (0, r.jsx)(i.E, { variant: m, color: "text-overlay-light", lineClamp: c, children: a }),
            (0, r.jsx)("div", { className: d.jH }),
            (0, r.jsx)(i.E, {
                variant: x,
                color: "text-overlay-light",
                children: null != u ? `(${u.getFullYear()})` : null,
            }),
        ],
    });
}
