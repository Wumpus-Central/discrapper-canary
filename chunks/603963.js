n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(481060),
    l = n(921801),
    r = n(979082);
function a(e) {
    let { children: t, title: n, description: a, webSetting: o } = e;
    return (0, i.jsx)(l.F, {
        setting: o,
        children: (0, i.jsxs)('div', {
            className: r.category,
            children: [
                (null != n || null != a) &&
                    (0, i.jsxs)('div', {
                        className: r.categoryHeader,
                        children: [
                            null != n &&
                                (0, i.jsx)(s.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'header-primary',
                                    children: n
                                }),
                            null != a &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: a
                                })
                        ]
                    }),
                (0, i.jsx)('div', {
                    className: r.categoryContent,
                    children: t
                }),
                (0, i.jsx)(s.$i$, { className: r.categoryDivider })
            ]
        })
    });
}
