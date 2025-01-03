n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(990547),
    l = n(481060),
    a = n(313201),
    s = n(758119),
    o = n(388032),
    c = n(675335);
function d(e) {
    let { transitionState: t } = e,
        d = (0, a.Dt)();
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: t,
        size: l.ModalSize.SMALL,
        'aria-labelledby': d,
        impression: {
            impressionName: r.ImpressionNames.USER_AGE_GATE,
            impressionProperties: { existing_user: !0 }
        },
        children: [
            (0, i.jsx)(l.ModalContent, {
                children: (0, i.jsxs)('div', {
                    className: c.container,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: n(863181),
                            className: c.img
                        }),
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-xl/semibold',
                            className: c.title,
                            id: d,
                            children: o.intl.string(o.t.gUiIGR)
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'header-secondary',
                            className: c.subtitle,
                            variant: 'text-sm/normal',
                            children: o.intl.string(o.t.susqq6)
                        })
                    ]
                })
            }),
            (0, i.jsx)(l.ModalFooter, {
                children: (0, i.jsx)(l.Button, {
                    size: l.ButtonSizes.SMALL,
                    fullWidth: !0,
                    onClick: function () {
                        (0, s.qV)();
                    },
                    autoFocus: !0,
                    children: o.intl.string(o.t.cpT0Cg)
                })
            })
        ]
    });
}
