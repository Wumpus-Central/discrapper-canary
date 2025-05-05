n.d(t, { Z: () => a }), n(953529);
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921801),
    l = n(632805);
function a(e) {
    let { children: t, title: n, description: a, webSetting: o } = e;
    return (0, i.jsx)(s.F, {
        setting: o,
        children: (0, i.jsxs)('div', {
            className: l.category,
            children: [
                (null != n || null != a) &&
                    (0, i.jsxs)('div', {
                        className: l.categoryHeader,
                        children: [
                            null != n &&
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-lg/semibold',
                                    color: 'header-primary',
                                    children: n
                                }),
                            null != a &&
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: a
                                })
                        ]
                    }),
                (0, i.jsx)('div', {
                    className: l.categoryContent,
                    children: t
                }),
                (0, i.jsx)(r.$i$, { className: l.categoryDivider })
            ]
        })
    });
}
