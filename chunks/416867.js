e.d(n, {
    B: function () {
        return u;
    }
});
var i = e(200651);
e(192379);
var s = e(481060),
    r = e(313201),
    l = e(192635),
    o = e(388032),
    a = e(139266);
function c(t) {
    let { transitionState: n, Icon: e, title: c, body: u, onClose: d } = t,
        g = (0, r.Dt)();
    return (0, i.jsxs)(s.ModalRoot, {
        className: a.container,
        transitionState: n,
        'aria-labelledby': g,
        children: [
            (0, i.jsxs)(s.ModalContent, {
                children: [
                    (0, i.jsx)(l.Z, { Icon: e }),
                    (0, i.jsx)(s.Spacer, { size: 24 }),
                    (0, i.jsx)(s.Heading, {
                        id: g,
                        className: a.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: c
                    }),
                    (0, i.jsx)(s.Spacer, { size: 8 }),
                    (0, i.jsx)(s.Text, {
                        className: a.body,
                        variant: 'text-sm/normal',
                        children: u
                    })
                ]
            }),
            (0, i.jsx)(s.Spacer, { size: 24 }),
            (0, i.jsx)(s.Button, {
                size: s.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: d,
                children: o.intl.string(o.t['NX+WJC'])
            })
        ]
    });
}
function u(t) {
    (0, s.openModal)((n) =>
        (0, i.jsx)(c, {
            ...n,
            ...t
        })
    );
}
