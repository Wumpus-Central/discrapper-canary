s.d(n, { default: () => l });
var e = s(200651);
s(192379);
var i = s(481060),
    r = s(338690),
    a = s(388032),
    c = s(432682);
function l(t) {
    let { transitionState: n, onClose: s } = t;
    return (0, e.jsxs)(i.Y0X, {
        transitionState: n,
        children: [
            (0, e.jsx)(i.xBx, {
                separator: !1,
                children: (0, e.jsx)(i.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a.intl.string(a.t.bAhz9v)
                })
            }),
            (0, e.jsxs)(i.hzk, {
                children: [
                    (0, e.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: a.intl.string(a.t['7KjxW1'])
                    }),
                    (0, e.jsx)('div', { className: c.art })
                ]
            }),
            (0, e.jsx)(i.mzw, {
                children: (0, e.jsx)(i.zxk, {
                    type: 'submit',
                    color: i.zxk.Colors.BRAND,
                    onClick: () => {
                        (0, r.Z)(), s();
                    },
                    children: a.intl.string(a.t.BddRzc)
                })
            })
        ]
    });
}
