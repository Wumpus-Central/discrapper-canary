n.d(t, { Z: () => l }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(16150);
let l = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: i, renderMedia: l, className: c, isHorizontal: u = !1 } = e;
    return (0, r.jsxs)("div", {
        className: a()(s.tile, { [s.tileHorizontal]: u }, c),
        children: [
            (0, r.jsx)("div", {
                className: a()(s.media, { [s.mediaHorizontal]: u }),
                children: null == l ? void 0 : l(),
            }),
            (0, r.jsxs)("div", {
                className: s.description,
                children: [
                    (0, r.jsx)(o.H, {
                        className: s.title,
                        children: null == t ? void 0 : t(),
                    }),
                    (0, r.jsx)("div", {
                        className: s.tagline,
                        children: null == n ? void 0 : n(),
                    }),
                    (0, r.jsx)("div", {
                        className: s.actions,
                        children: null == i ? void 0 : i(),
                    }),
                ],
            }),
        ],
    });
};
