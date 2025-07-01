s.d(n, { default: () => l });
var e = s(255367);
s(73800);
var r = s(481060),
    i = s(338690),
    a = s(388032),
    c = s(593047);
function l(t) {
    let { transitionState: n, onClose: s } = t;
    return (0, e.jsxs)(r.Y0X, {
        transitionState: n,
        parentComponent: 'UrgentMessageModal',
        children: [
            (0, e.jsx)(r.xBx, {
                separator: !1,
                children: (0, e.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a.intl.string(a.t.bAhz9v)
                })
            }),
            (0, e.jsxs)(r.hzk, {
                children: [
                    (0, e.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: a.intl.string(a.t['7KjxW1'])
                    }),
                    (0, e.jsx)('div', { className: c.art })
                ]
            }),
            (0, e.jsx)(r.mzw, {
                children: (0, e.jsx)(r.zxk, {
                    type: 'submit',
                    color: r.zxk.Colors.BRAND,
                    onClick: () => {
                        ((0, i.Z)(), s());
                    },
                    children: a.intl.string(a.t.BddRzc)
                })
            })
        ]
    });
}
