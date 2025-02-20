n.d(t, { Z: () => s }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    l = n(483590);
let s = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: i, renderMedia: s, className: c, isHorizontal: d = !1 } = e;
    return (0, r.jsxs)('div', {
        className: a()(l.tile, { [l.tileHorizontal]: d }, c),
        children: [
            (0, r.jsx)('div', {
                className: a()(l.media, { [l.mediaHorizontal]: d }),
                children: null == s ? void 0 : s()
            }),
            (0, r.jsxs)('div', {
                className: l.description,
                children: [
                    (0, r.jsx)(o.H, {
                        className: l.title,
                        children: null == t ? void 0 : t()
                    }),
                    (0, r.jsx)('div', {
                        className: l.tagline,
                        children: null == n ? void 0 : n()
                    }),
                    (0, r.jsx)('div', {
                        className: l.actions,
                        children: null == i ? void 0 : i()
                    })
                ]
            })
        ]
    });
};
