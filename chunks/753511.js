var a = t(200651),
    i = t(192379),
    r = t(442837),
    l = t(481060),
    o = t(894653),
    s = t(34674),
    c = t(388032),
    d = t(207876),
    u = t(882008);
n.Z = function (e) {
    let { selectedCategoryId: n, searchAllCategories: t } = e,
        m = (0, r.e7)([o.Z], () => o.Z.getCategories()),
        p = i.useMemo(() => {
            var e;
            return null === (e = m.find((e) => e.id === n)) || void 0 === e ? void 0 : e.name;
        }, [m, n]),
        _ = n === s.MU || null == p ? c.intl.string(c.t['FVJt+/']) : c.intl.formatToPlainString(c.t.FjCaND, { categoryName: p }),
        g = n === s.MU ? c.intl.string(c.t.GXiMtb) : c.intl.format(c.t.JaLoFB, { onClick: t });
    return (0, a.jsxs)('div', {
        className: d.container,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                src: u,
                className: d.image
            }),
            (0, a.jsx)(l.Heading, {
                variant: 'heading-xl/semibold',
                className: d.header,
                children: _
            }),
            (0, a.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: g
            })
        ]
    });
};
