n.d(t, { Z: () => m });
var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(481060),
    s = n(894653),
    o = n(34674),
    c = n(388032),
    d = n(207876),
    u = n(882008);
let m = function (e) {
    let { selectedCategoryId: t, searchAllCategories: n } = e,
        m = (0, r.e7)([s.Z], () => s.Z.getCategories()),
        h = a.useMemo(() => {
            var e;
            return null === (e = m.find((e) => e.id === t)) || void 0 === e ? void 0 : e.name;
        }, [m, t]),
        p = t === o.MU || null == h ? c.intl.string(c.t['FVJt+/']) : c.intl.formatToPlainString(c.t.FjCaND, { categoryName: h }),
        g = t === o.MU ? c.intl.string(c.t.GXiMtb) : c.intl.format(c.t.JaLoFB, { onClick: n });
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: u,
                className: d.image
            }),
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                className: d.header,
                children: p
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: g
            })
        ]
    });
};
