e.d(s, { B: () => u });
var n = e(200651);
e(192379);
var i = e(481060),
    r = e(313201),
    a = e(192635),
    c = e(388032),
    o = e(607217);
function l(t) {
    let { transitionState: s, Icon: e, title: l, body: u, onClose: d } = t,
        p = (0, r.Dt)();
    return (0, n.jsxs)(i.Y0X, {
        className: o.container,
        transitionState: s,
        'aria-labelledby': p,
        children: [
            (0, n.jsxs)(i.hzk, {
                children: [
                    (0, n.jsx)(a.Z, { Icon: e }),
                    (0, n.jsx)(i.LZC, { size: 24 }),
                    (0, n.jsx)(i.X6q, {
                        id: p,
                        className: o.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: l
                    }),
                    (0, n.jsx)(i.LZC, { size: 8 }),
                    (0, n.jsx)(i.Text, {
                        className: o.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, n.jsx)(i.LZC, { size: 24 }),
            (0, n.jsx)(i.zxk, {
                size: i.zxk.Sizes.MEDIUM,
                grow: !1,
                onClick: d,
                children: c.intl.string(c.t['NX+WJC'])
            })
        ]
    });
}
function u(t) {
    (0, i.h7j)((s) =>
        (0, n.jsx)(l, {
            ...s,
            ...t
        })
    );
}
