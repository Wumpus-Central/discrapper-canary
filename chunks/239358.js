a.d(t, { Z: () => n });
var l = a(255367);
a(73800);
var r = a(481060),
    s = a(475286);
let n = function (e) {
    let { label: t, subLabel: a, icon: n } = e;
    return (0, l.jsxs)('div', {
        className: s.valueProp,
        children: [
            (0, l.jsx)('div', {
                className: s.valuePropIconContainer,
                children: (0, l.jsx)(n, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, l.jsxs)('div', {
                className: s.valuePropText,
                children: [
                    (0, l.jsx)(r.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-default',
                        children: t
                    }),
                    null != a &&
                        (0, l.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: a
                        })
                ]
            })
        ]
    });
};
