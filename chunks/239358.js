t.d(a, { Z: () => l });
var r = t(255367);
t(73800);
var s = t(481060),
    n = t(475286);
let l = function (e) {
    let { label: a, subLabel: t, icon: l } = e;
    return (0, r.jsxs)('div', {
        className: n.valueProp,
        children: [
            (0, r.jsx)('div', {
                className: n.valuePropIconContainer,
                children: (0, r.jsx)(l, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: n.valuePropText,
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
