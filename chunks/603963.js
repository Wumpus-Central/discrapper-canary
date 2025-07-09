(n.d(t, { Z: () => l }), n(953529));
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921801),
    a = n(632805);
function l(e) {
    let { children: t, title: n, description: l, webSetting: o } = e;
    return (0, i.jsx)(s.F, {
        setting: o,
        children: (0, i.jsxs)('div', {
            className: a.category,
            children: [
                (null != n || null != l) &&
                    (0, i.jsxs)('div', {
                        className: a.categoryHeader,
                        children: [
                            null != n &&
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'header-primary',
                                    children: n
                                }),
                            null != l &&
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: l
                                })
                        ]
                    }),
                (0, i.jsx)('div', {
                    className: a.categoryContent,
                    children: t
                }),
                (0, i.jsx)(r.$i$, { className: a.categoryDivider })
            ]
        })
    });
}
