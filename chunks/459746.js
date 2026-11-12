var n,
    s = l(477900);
l(582128);
var r = l(503698),
    i = l.n(r),
    t = l(834730),
    d = l(5399),
    c = l(799699),
    m = l(792996),
    o = l(899830),
    u = (((n = {})[(n.SMALL = 0)] = "SMALL"), (n[(n.LARGE = 1)] = "LARGE"), (n[(n.COMPACT = 2)] = "COMPACT"), n);
let h = {
    0: { nameVariant: "body-xs/medium", nameLineClamp: 3, releaseYearVariant: "footnote/normal" },
    1: { nameVariant: "body-md/medium", nameLineClamp: 4, releaseYearVariant: "body-sm/normal" },
};
function v(e) {
    let {
            coverUrl: a,
            iconUrl: l,
            gameName: n,
            firstReleaseDate: r,
            size: t,
            className: c,
            foregroundClassName: u,
            loadingPlaceholder: h,
        } = e,
        { imageUrl: v, isCover: j, isLoading: f, handleLoad: g, handleError: N } = (0, d.Ay)(a, l);
    if (null == v) return (0, s.jsx)(x, { gameName: n, firstReleaseDate: r, size: t, className: i()(c, u) });
    let p = 2 === t ? n : m.intl.formatToPlainString(m.t["3ev90U"], { game: n }),
        C = (0, s.jsx)("img", { src: v, alt: p, draggable: !1, onLoad: g, onError: N, className: o.Sl }, v);
    return j
        ? (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("span", { className: i()(o.Iv, c, u), children: C }), f && h],
          })
        : (0, s.jsxs)("div", {
              className: i()(o.EU, c),
              children: [
                  (0, s.jsx)("span", {
                      className: o.tB,
                      "aria-hidden": !0,
                      children: (0, s.jsx)("img", { src: v, alt: "", draggable: !1, className: o.oP }),
                  }),
                  (0, s.jsx)("span", { className: i()(o.Kk, u), children: C }),
                  f && h,
              ],
          });
}
function x(e) {
    let { gameName: a, firstReleaseDate: l, size: n, className: r } = e;
    if (2 === n)
        return (0, s.jsx)("div", {
            role: "img",
            "aria-label": a,
            className: i()(o.ui, r),
            children: (0, s.jsx)(t.E, { variant: "footnote/medium", lineClamp: 3, "aria-hidden": !0, children: a }),
        });
    let { nameVariant: d, nameLineClamp: c, releaseYearVariant: m } = h[n],
        u = null != l ? new Date(l) : null;
    return (0, s.jsxs)("div", {
        className: i()(o.Np, r),
        children: [
            (0, s.jsx)("div", { className: o.jH }),
            (0, s.jsx)(t.E, { variant: d, color: "text-overlay-light", lineClamp: c, children: a }),
            (0, s.jsx)("div", { className: o.jH }),
            (0, s.jsx)(t.E, {
                variant: m,
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
            let { game: a, imageSize: l, ...n } = e;
            return (0, s.jsx)(v, {
                ...n,
                coverUrl: a.getCoverURL(l),
                iconUrl: a.getIconURL(l ?? 256),
                gameName: a.name,
                firstReleaseDate: a.firstReleaseDate,
            });
        },
        FQ: v,
        gr: function (e) {
            let { className: a } = e;
            return (0, s.jsx)(c.qT, { className: a, children: (0, s.jsx)(c.Ay, { className: o.hF }) });
        },
        wu: u,
    },
);
