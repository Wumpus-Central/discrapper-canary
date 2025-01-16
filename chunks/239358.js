var a = n(200651);
n(192379);
var r = n(481060),
    l = n(38920);
t.Z = function (e) {
    let { label: t, subLabel: n, icon: o } = e;
    return (0, a.jsxs)('div', {
        className: l.valueProp,
        children: [
            (0, a.jsx)('div', {
                className: l.valuePropIconContainer,
                children: (0, a.jsx)(o, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, a.jsxs)('div', {
                className: l.valuePropText,
                children: [
                    (0, a.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: t
                    }),
                    null != n &&
                        (0, a.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: n
                        })
                ]
            })
        ]
    });
};
