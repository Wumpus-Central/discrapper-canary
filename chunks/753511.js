var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(481060),
    o = n(894653),
    s = n(34674),
    c = n(388032),
    d = n(207876),
    u = n(882008);
t.Z = function (e) {
    let { selectedCategoryId: t, searchAllCategories: n } = e,
        m = (0, r.e7)([o.Z], () => o.Z.getCategories()),
        p = a.useMemo(() => {
            var e;
            return null === (e = m.find((e) => e.id === t)) || void 0 === e ? void 0 : e.name;
        }, [m, t]),
        h = t === s.MU || null == p ? c.intl.string(c.t['FVJt+/']) : c.intl.formatToPlainString(c.t.FjCaND, { categoryName: p }),
        g = t === s.MU ? c.intl.string(c.t.GXiMtb) : c.intl.format(c.t.JaLoFB, { onClick: n });
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: u,
                className: d.image
            }),
            (0, i.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                className: d.header,
                children: h
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: g
            })
        ]
    });
};
