n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(572926);
let o = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: l, renderMedia: o, className: c, isHorizontal: d = !1 } = e;
    return (0, i.jsxs)('div', {
        className: a()(s.tile, { [s.tileHorizontal]: d }, c),
        children: [
            (0, i.jsx)('div', {
                className: a()(s.media, { [s.mediaHorizontal]: d }),
                children: null == o ? void 0 : o()
            }),
            (0, i.jsxs)('div', {
                className: s.description,
                children: [
                    (0, i.jsx)(r.H, {
                        className: s.title,
                        children: null == t ? void 0 : t()
                    }),
                    (0, i.jsx)('div', {
                        className: s.tagline,
                        children: null == n ? void 0 : n()
                    }),
                    (0, i.jsx)('div', {
                        className: s.actions,
                        children: null == l ? void 0 : l()
                    })
                ]
            })
        ]
    });
};
