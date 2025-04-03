r.d(a, { Z: () => n });
var s = r(200651);
r(192379);
var t = r(481060),
    l = r(475286);
let n = function (e) {
    let { label: a, subLabel: r, icon: n } = e;
    return (0, s.jsxs)('div', {
        className: l.valueProp,
        children: [
            (0, s.jsx)('div', {
                className: l.valuePropIconContainer,
                children: (0, s.jsx)(n, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, s.jsxs)('div', {
                className: l.valuePropText,
                children: [
                    (0, s.jsx)(t.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: a
                    }),
                    null != r &&
                        (0, s.jsx)(t.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: r
                        })
                ]
            })
        ]
    });
};
