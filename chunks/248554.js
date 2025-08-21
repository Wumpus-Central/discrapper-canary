r.d(t, {
    c: () => f,
    i: () => d,
});
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    a = r(210753),
    o = r(817053),
    c = r(932366),
    s = r(978276);
function u(e) {
    let { applicationId: t } = e,
        { coverImageUrl: r } = (0, a.$)(t);
    return null != r && "" !== r
        ? (0, n.jsx)("div", {
              className: l()(c.coverContainer, s.placeholderCover),
              children: (0, n.jsx)(o.o, { imageSrc: r }),
          })
        : (0, n.jsx)("div", { className: l()(c.loadingCover, s.placeholderCover) });
}
function d(e) {
    let { applicationId: t, size: r = "default" } = e;
    return (0, n.jsxs)("div", {
        className: l()(s.container, s.placeholderDetailsCard, "small" === r && s.sizeSmall),
        "aria-hidden": !0,
        children: [
            null != t ? (0, n.jsx)(u, { applicationId: t }) : (0, n.jsx)("div", { className: c.loadingCover }),
            (0, n.jsxs)("div", {
                className: s.placeholderText,
                children: [
                    (0, n.jsx)("div", { className: s.placeholderBar }),
                    (0, n.jsx)("div", { className: s.placeholderBar }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { applicationIds: t, size: r = "default" } = e,
        i = "small" === r,
        a = i ? t.slice(0, 3) : t.slice(0, 4);
    return (0, n.jsx)("div", {
        className: l()(s.container, s.placeholderCoverGrid, i && s.sizeSmall),
        "aria-hidden": !0,
        children: a.map((e, t) => (0, n.jsx)(u, { applicationId: e }, t)),
    });
}
