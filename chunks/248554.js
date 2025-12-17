n.d(t, {
    c: () => p,
    i: () => d,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(210753),
    o = n(817053),
    s = n(713603),
    c = n(572102);
function u(e) {
    let { applicationId: t } = e,
        { coverImageUrl: n } = (0, a.$)(t);
    return null != n && "" !== n
        ? (0, r.jsx)("div", {
              className: l()(s.coverContainer, c.placeholderCover),
              children: (0, r.jsx)(o.o, { imageSrc: n }),
          })
        : (0, r.jsx)("div", { className: l()(s.loadingCover, c.placeholderCover) });
}
function d(e) {
    let { applicationId: t, size: n = "default", className: i } = e;
    return (0, r.jsxs)("div", {
        className: l()(
            c.container,
            c.placeholderDetailsCard,
            {
                [c.sizeSmall]: "small" === n,
                [c.sizeMedium]: "medium" === n,
            },
            i,
        ),
        "aria-hidden": !0,
        children: [
            null != t ? (0, r.jsx)(u, { applicationId: t }) : (0, r.jsx)("div", { className: s.loadingCover }),
            (0, r.jsxs)("div", {
                className: c.placeholderText,
                children: [
                    (0, r.jsx)("div", { className: c.placeholderBar }),
                    (0, r.jsx)("div", { className: c.placeholderBar }),
                ],
            }),
        ],
    });
}
function p(e) {
    let { applicationIds: t, size: n = "default", className: i } = e,
        a = "small" === n ? t.slice(0, 3) : t.slice(0, 4);
    return (0, r.jsx)("div", {
        className: l()(
            c.container,
            c.placeholderCoverGrid,
            {
                [c.sizeSmall]: "small" === n,
                [c.sizeMedium]: "medium" === n,
            },
            i,
        ),
        "aria-hidden": !0,
        children: a.map((e, t) => (0, r.jsx)(u, { applicationId: e }, t)),
    });
}
