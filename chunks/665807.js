n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(959165),
    o = n(164991),
    c = n(526429),
    d = n(128449),
    u = n(388032),
    h = n(378057),
    m = n(882008);
let p = function (e) {
    let { loadId: t } = e,
        n = o.Z.useField('categoryId'),
        p = (0, r.e7)([c.Z], () => c.Z.getCategoryName(n)),
        g = l.useCallback(() => {
            o.Z.setState({ categoryId: d.Hk }),
                s.Z.loadCategoryResults({
                    loadId: t,
                    categoryId: d.Hk,
                    query: o.Z.getField('fetchedQuery'),
                    languageCode: o.Z.getField('languageCode')
                });
        }, [t]),
        _ = n === d.Hk ? u.intl.string(u.t.Ivw1Ii) : u.intl.formatToPlainString(u.t['+1WAFR'], { categoryName: p }),
        f = n === d.Hk ? u.intl.string(u.t.aXvEjY) : u.intl.format(u.t.XLioqq, { onClick: g });
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: m,
                className: h.image
            }),
            (0, i.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                className: h.header,
                children: _
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: f
            })
        ]
    });
};
