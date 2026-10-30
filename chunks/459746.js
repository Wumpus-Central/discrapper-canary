l.d(a, { Ay: () => h, FQ: () => j, gr: () => g, wu: () => o });
var s,
    r = l(477900);
l(582128);
var n = l(503698),
    t = l.n(n),
    i = l(834730),
    m = l(5399),
    c = l(799699),
    d = l(105292),
    x = l(899830),
    o = (((s = {})[(s.SMALL = 0)] = "SMALL"), (s[(s.LARGE = 1)] = "LARGE"), (s[(s.COMPACT = 2)] = "COMPACT"), s);
let u = {
    0: { nameVariant: "text-xs/medium", nameLineClamp: 3, releaseYearVariant: "text-xxs/normal" },
    1: { nameVariant: "text-md/medium", nameLineClamp: 4, releaseYearVariant: "text-sm/normal" },
};
function h(e) {
    let { game: a, imageSize: l, ...s } = e;
    return (0, r.jsx)(j, {
        ...s,
        coverUrl: a.getCoverURL(l),
        iconUrl: a.getIconURL(l ?? 256),
        gameName: a.name,
        firstReleaseDate: a.firstReleaseDate,
    });
}
function j(e) {
    let {
            coverUrl: a,
            iconUrl: l,
            gameName: s,
            firstReleaseDate: n,
            size: i,
            className: c,
            foregroundClassName: o,
            loadingPlaceholder: u,
        } = e,
        { imageUrl: h, isCover: j, isLoading: g, handleLoad: N, handleError: p } = (0, m.Ay)(a, l);
    if (null == h) return (0, r.jsx)(v, { gameName: s, firstReleaseDate: n, size: i, className: t()(c, o) });
    let C = 2 === i ? s : d.intl.formatToPlainString(d.t["3ev90U"], { game: s }),
        L = (0, r.jsx)("img", { src: h, alt: C, draggable: !1, onLoad: N, onError: p, className: x.Sl }, h);
    return j
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("span", { className: t()(x.Iv, c, o), children: L }), g && u],
          })
        : (0, r.jsxs)("div", {
              className: t()(x.EU, c),
              children: [
                  (0, r.jsx)("span", {
                      className: x.tB,
                      "aria-hidden": !0,
                      children: (0, r.jsx)("img", { src: h, alt: "", draggable: !1, className: x.oP }),
                  }),
                  (0, r.jsx)("span", { className: t()(x.Kk, o), children: L }),
                  g && u,
              ],
          });
}
function g(e) {
    let { className: a } = e;
    return (0, r.jsx)(c.qT, { className: a, children: (0, r.jsx)(c.Ay, { className: x.hF }) });
}
function v(e) {
    let { gameName: a, firstReleaseDate: l, size: s, className: n } = e;
    if (2 === s)
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": a,
            className: t()(x.ui, n),
            children: (0, r.jsx)(i.E, { variant: "text-xxs/medium", lineClamp: 3, "aria-hidden": !0, children: a }),
        });
    let { nameVariant: m, nameLineClamp: c, releaseYearVariant: d } = u[s],
        o = null != l ? new Date(l) : null;
    return (0, r.jsxs)("div", {
        className: t()(x.Np, n),
        children: [
            (0, r.jsx)("div", { className: x.jH }),
            (0, r.jsx)(i.E, { variant: m, color: "text-overlay-light", lineClamp: c, children: a }),
            (0, r.jsx)("div", { className: x.jH }),
            (0, r.jsx)(i.E, {
                variant: d,
                color: "text-overlay-light",
                children: null != o ? `(${o.getFullYear()})` : null,
            }),
        ],
    });
}
