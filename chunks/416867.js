n.d(t, {
    B: function () {
        return u;
    }
});
var s = n(200651);
n(192379);
var i = n(481060),
    r = n(313201),
    o = n(192635),
    c = n(388032),
    l = n(139266);
function a(e) {
    let { transitionState: t, Icon: n, title: a, body: u, onClose: d } = e,
        f = (0, r.Dt)();
    return (0, s.jsxs)(i.ModalRoot, {
        className: l.container,
        transitionState: t,
        'aria-labelledby': f,
        children: [
            (0, s.jsxs)(i.ModalContent, {
                children: [
                    (0, s.jsx)(o.Z, { Icon: n }),
                    (0, s.jsx)(i.Spacer, { size: 24 }),
                    (0, s.jsx)(i.Heading, {
                        id: f,
                        className: l.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: a
                    }),
                    (0, s.jsx)(i.Spacer, { size: 8 }),
                    (0, s.jsx)(i.Text, {
                        className: l.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsx)(i.Button, {
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
        (0, s.jsx)(a, {
            ...t,
            ...e
        })
    );
}
