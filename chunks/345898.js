n.d(t, { Z: () => s }), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(360044);
let s = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: i, renderMedia: s, className: c, isHorizontal: u = !1 } = e;
    return (0, r.jsxs)('div', {
        className: l()(o.tile, { [o.tileHorizontal]: u }, c),
        children: [
            (0, r.jsx)('div', {
                className: l()(o.media, { [o.mediaHorizontal]: u }),
                children: null == s ? void 0 : s()
            }),
            (0, r.jsxs)('div', {
                className: o.description,
                children: [
                    (0, r.jsx)(a.H, {
                        className: o.title,
                        children: null == t ? void 0 : t()
                    }),
                    (0, r.jsx)('div', {
                        className: o.tagline,
                        children: null == n ? void 0 : n()
                    }),
                    (0, r.jsx)('div', {
                        className: o.actions,
                        children: null == i ? void 0 : i()
                    })
                ]
            })
        ]
    });
};
