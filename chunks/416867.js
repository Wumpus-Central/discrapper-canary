s.d(t, {
    B: function () {
        return u;
    }
});
var n = s(200651);
s(192379);
var i = s(481060),
    r = s(313201),
    o = s(192635),
    c = s(388032),
    a = s(139266);
function l(e) {
    let { transitionState: t, Icon: s, title: l, body: u, onClose: d } = e,
        f = (0, r.Dt)();
    return (0, n.jsxs)(i.ModalRoot, {
        className: a.container,
        transitionState: t,
        'aria-labelledby': f,
        children: [
            (0, n.jsxs)(i.ModalContent, {
                children: [
                    (0, n.jsx)(o.Z, { Icon: s }),
                    (0, n.jsx)(i.Spacer, { size: 24 }),
                    (0, n.jsx)(i.Heading, {
                        id: f,
                        className: a.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: l
                    }),
                    (0, n.jsx)(i.Spacer, { size: 8 }),
                    (0, n.jsx)(i.Text, {
                        className: a.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, n.jsx)(i.Spacer, { size: 24 }),
            (0, n.jsx)(i.Button, {
                size: i.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: d,
                children: c.intl.string(c.t['NX+WJC'])
            })
        ]
    });
}
function u(e) {
    (0, i.openModal)((t) =>
        (0, n.jsx)(l, {
            ...t,
            ...e
        })
    );
}
