n.d(t, {
    Z: function () {
        return i;
    }
});
var s = n(200651);
n(192379);
var o = n(481060),
    l = n(388032),
    a = n(981818);
function i(e) {
    let { email: t, onClose: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: a.header,
                children: [
                    (0, s.jsx)(o.Heading, {
                        className: a.title,
                        variant: 'heading-xl/semibold',
                        children: l.intl.string(l.t['8O+nFx'])
                    }),
                    (0, s.jsx)(o.ModalCloseButton, {
                        onClick: n,
                        className: a.modalCloseButton
                    })
                ]
            }),
            (0, s.jsx)(o.ModalContent, {
                className: a.content,
                children: (0, s.jsx)(o.Text, {
                    className: a.description,
                    variant: 'text-md/normal',
                    children: l.intl.format(l.t.Zvx0Oz, { email: t })
                })
            }),
            (0, s.jsx)(o.ModalContent, {
                className: a.content,
                children: (0, s.jsx)(o.Text, {
                    className: a.tooltip,
                    variant: 'text-sm/normal',
                    children: l.intl.string(l.t.yb7itb)
                })
            }),
            (0, s.jsx)(o.ModalFooter, {
                className: a.modalFooter,
                children: (0, s.jsx)(o.Button, {
                    className: a.__invalid_submit,
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.MEDIUM,
                    onClick: n,
                    children: l.intl.string(l.t.BddRzc)
                })
            })
        ]
    });
}
