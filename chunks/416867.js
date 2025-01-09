s.d(n, {
    B: function () {
        return u;
    }
});
var e = s(200651);
s(192379);
var i = s(481060),
    r = s(313201),
    o = s(192635),
    c = s(388032),
    a = s(139266);
function l(t) {
    let { transitionState: n, Icon: s, title: l, body: u, onClose: d } = t,
        p = (0, r.Dt)();
    return (0, e.jsxs)(i.ModalRoot, {
        className: a.container,
        transitionState: n,
        'aria-labelledby': p,
        children: [
            (0, e.jsxs)(i.ModalContent, {
                children: [
                    (0, e.jsx)(o.Z, { Icon: s }),
                    (0, e.jsx)(i.Spacer, { size: 24 }),
                    (0, e.jsx)(i.Heading, {
                        id: p,
                        className: a.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: l
                    }),
                    (0, e.jsx)(i.Spacer, { size: 8 }),
                    (0, e.jsx)(i.Text, {
                        className: a.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, e.jsx)(i.Spacer, { size: 24 }),
            (0, e.jsx)(i.Button, {
                size: i.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: d,
                children: c.intl.string(c.t['NX+WJC'])
            })
        ]
    });
}
function u(t) {
    (0, i.openModal)((n) =>
        (0, e.jsx)(l, {
            ...n,
            ...t
        })
    );
}
