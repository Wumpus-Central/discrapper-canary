t.d(a, { Z: () => n });
var r = t(255367);
t(73800);
var s = t(481060),
    l = t(475286);
let n = function (e) {
    let { label: a, subLabel: t, icon: n } = e;
    return (0, r.jsxs)('div', {
        className: l.valueProp,
        children: [
            (0, r.jsx)('div', {
                className: l.valuePropIconContainer,
                children: (0, r.jsx)(n, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: l.valuePropText,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-default',
                        children: a
                    }),
                    null != t &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: t
                        })
                ]
            })
        ]
    });
};
