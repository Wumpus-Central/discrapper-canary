n.d(t, { Z: () => s }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(360044);
let s = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: i, renderMedia: s, className: c, isHorizontal: u = !1 } = e;
    return (0, r.jsxs)('div', {
        className: a()(o.tile, { [o.tileHorizontal]: u }, c),
        children: [
            (0, r.jsx)('div', {
                className: a()(o.media, { [o.mediaHorizontal]: u }),
                children: null == s ? void 0 : s()
            }),
            (0, r.jsxs)('div', {
                className: o.description,
                children: [
                    (0, r.jsx)(l.H, {
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
