var s,
    r = l(477900);
l(582128);
var n = l(503698),
    i = l.n(n),
    t = l(834730),
    m = l(5399),
    c = l(799699),
    d = l(792996),
    o = l(899830),
    u = (((s = {})[(s.SMALL = 0)] = "SMALL"), (s[(s.LARGE = 1)] = "LARGE"), (s[(s.COMPACT = 2)] = "COMPACT"), s);
let h = {
    0: { nameVariant: "body-xs/medium", nameLineClamp: 3, releaseYearVariant: "footnote/normal" },
    1: { nameVariant: "body-md/medium", nameLineClamp: 4, releaseYearVariant: "body-sm/normal" },
};
function x(e) {
    let {
            coverUrl: a,
            iconUrl: l,
            gameName: s,
            firstReleaseDate: n,
            size: t,
            className: c,
            foregroundClassName: u,
            loadingPlaceholder: h,
        } = e,
        { imageUrl: x, isCover: g, isLoading: v, handleLoad: N, handleError: p } = (0, m.Ay)(a, l);
    if (null == x) return (0, r.jsx)(j, { gameName: s, firstReleaseDate: n, size: t, className: i()(c, u) });
    let f = 2 === t ? s : d.intl.formatToPlainString(d.t["3ev90U"], { game: s }),
        C = (0, r.jsx)("img", { src: x, alt: f, draggable: !1, onLoad: N, onError: p, className: o.Sl }, x);
    return g
        ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("span", { className: i()(o.Iv, c, u), children: C }), v && h],
          })
        : (0, r.jsxs)("div", {
              className: i()(o.EU, c),
              children: [
                  (0, r.jsx)("span", {
                      className: o.tB,
                      "aria-hidden": !0,
                      children: (0, r.jsx)("img", { src: x, alt: "", draggable: !1, className: o.oP }),
                  }),
                  (0, r.jsx)("span", { className: i()(o.Kk, u), children: C }),
                  v && h,
              ],
          });
}
function j(e) {
    let { gameName: a, firstReleaseDate: l, size: s, className: n } = e;
    if (2 === s)
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": a,
            className: i()(o.ui, n),
            children: (0, r.jsx)(t.E, { variant: "footnote/medium", lineClamp: 3, "aria-hidden": !0, children: a }),
        });
    let { nameVariant: m, nameLineClamp: c, releaseYearVariant: d } = h[s],
        u = null != l ? new Date(l) : null;
    return (0, r.jsxs)("div", {
        className: i()(o.Np, n),
        children: [
            (0, r.jsx)("div", { className: o.jH }),
            (0, r.jsx)(t.E, { variant: m, color: "text-overlay-light", lineClamp: c, children: a }),
            (0, r.jsx)("div", { className: o.jH }),
            (0, r.jsx)(t.E, {
                variant: d,
                color: "text-overlay-light",
                children: null != u ? `(${u.getFullYear()})` : null,
            }),
        ],
    });
}
l.d(
    a,
    {},
    {
        Ay: function (e) {
            let { game: a, imageSize: l, ...s } = e;
            return (0, r.jsx)(x, {
                ...s,
                coverUrl: a.getCoverURL(l),
                iconUrl: a.getIconURL(l ?? 256),
                gameName: a.name,
                firstReleaseDate: a.firstReleaseDate,
            });
        },
        FQ: x,
        gr: function (e) {
            let { className: a } = e;
            return (0, r.jsx)(c.qT, { className: a, children: (0, r.jsx)(c.Ay, { className: o.hF }) });
        },
        wu: u,
    },
);
