s.d(n, { default: () => d });
var e = s(255367);
s(73800);
var r = s(481060),
    a = s(338690),
    i = s(388032),
    c = s(593047);
function d(t) {
    let { transitionState: n, onClose: s } = t;
    return (0, e.jsxs)(r.Y0X, {
        transitionState: n,
        parentComponent: 'UrgentMessageModal',
        children: [
            (0, e.jsx)(r.xBx, {
                separator: !1,
                children: (0, e.jsx)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: i.intl.string(i.t.bAhz9v)
                })
            }),
            (0, e.jsxs)(r.hzk, {
                children: [
                    (0, e.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: i.intl.string(i.t['7KjxW1'])
                    }),
                    (0, e.jsx)('div', { className: c.art })
                ]
            }),
            (0, e.jsx)(r.mzw, {
                children: (0, e.jsx)(r.zxk, {
                    variant: 'primary',
                    text: i.intl.string(i.t.BddRzc),
                    type: 'submit',
                    onClick: () => {
                        ((0, a.Z)(), s());
                    }
                })
            })
        ]
    });
}
