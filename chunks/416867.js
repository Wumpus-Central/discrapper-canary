s.d(t, { B: () => u });
var n = s(200651);
s(192379);
var i = s(481060),
    r = s(313201),
    o = s(192635),
    l = s(388032),
    a = s(607217);
function c(e) {
    let { transitionState: t, Icon: s, title: c, body: u, onClose: d } = e,
        f = (0, r.Dt)();
    return (0, n.jsxs)(i.Y0X, {
        className: a.container,
        transitionState: t,
        'aria-labelledby': f,
        children: [
            (0, n.jsxs)(i.hzk, {
                children: [
                    (0, n.jsx)(o.Z, { Icon: s }),
                    (0, n.jsx)(i.LZC, { size: 24 }),
                    (0, n.jsx)(i.X6q, {
                        id: f,
                        className: a.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: c
                    }),
                    (0, n.jsx)(i.LZC, { size: 8 }),
                    (0, n.jsx)(i.Text, {
                        className: a.body,
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
                children: l.intl.string(l.t['NX+WJC'])
            })
        ]
    });
}
function u(e) {
    (0, i.h7j)((t) =>
        (0, n.jsx)(c, {
            ...t,
            ...e
        })
    );
}
