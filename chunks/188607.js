n.d(t, { Z: () => p });
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(481060),
    o = n(678694),
    s = n(216780),
    c = n(388032),
    d = n(675017),
    u = n(882008);
let p = function (e) {
    let { selectedCategoryId: t, searchAllCategories: n } = e,
        p = (0, i.e7)([o.Z], () => o.Z.getCategories()),
        m = a.useMemo(() => {
            var e;
            return null == (e = p.find((e) => e.id === t)) ? void 0 : e.name;
        }, [p, t]),
        h = t === s.MU || null == m ? c.NW.string(c.t['FVJt+/']) : c.NW.formatToPlainString(c.t.FjCaND, { categoryName: m }),
        g = t === s.MU ? c.NW.string(c.t.GXiMtb) : c.NW.format(c.t.JaLoFB, { onClick: n });
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: u,
                className: d.image
            }),
            (0, r.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                className: d.header,
                children: h
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: g
            })
        ]
    });
};
