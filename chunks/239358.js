a.d(t, { Z: () => n });
var r = a(200651);
a(192379);
var l = a(481060),
    s = a(475286);
let n = function (e) {
    let { label: t, subLabel: a, icon: n } = e;
    return (0, r.jsxs)('div', {
        className: s.valueProp,
        children: [
            (0, r.jsx)('div', {
                className: s.valuePropIconContainer,
                children: (0, r.jsx)(n, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: s.valuePropText,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: t
                    }),
                    null != a &&
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: a
                        })
                ]
            })
        ]
    });
};
