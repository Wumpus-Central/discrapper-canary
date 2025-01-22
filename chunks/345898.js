var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(572926);
t.Z = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: r, renderMedia: s, className: c, isHorizontal: u = !1 } = e;
    return (0, i.jsxs)('div', {
        className: l()(o.tile, { [o.tileHorizontal]: u }, c),
        children: [
            (0, i.jsx)('div', {
                className: l()(o.media, { [o.mediaHorizontal]: u }),
                children: null == s ? void 0 : s()
            }),
            (0, i.jsxs)('div', {
                className: o.description,
                children: [
                    (0, i.jsx)(a.H, {
                        className: o.title,
                        children: null == t ? void 0 : t()
                    }),
                    (0, i.jsx)('div', {
                        className: o.tagline,
                        children: null == n ? void 0 : n()
                    }),
                    (0, i.jsx)('div', {
                        className: o.actions,
                        children: null == r ? void 0 : r()
                    })
                ]
            })
        ]
    });
};
