n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(200651);
n(192379);
var o = n(481060),
    l = n(308569),
    a = n(388032),
    i = n(981818);
function r(e) {
    let { onNext: t, onClose: n } = e;
    return (0, s.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: i.header,
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: a.intl.string(a.t.hhR7gY)
                    }),
                    (0, s.jsx)(o.ModalCloseButton, {
                        onClick: n,
                        className: i.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(o.ModalContent, {
                className: i.content,
                children: [
                    (0, s.jsx)(o.Text, {
                        className: i.description,
                        variant: 'text-md/normal',
                        children: a.intl.format(a.t.rqWXUV, { hcArticle: l.j1 })
                    }),
                    (0, s.jsx)(o.Text, {
                        className: i.description,
                        variant: 'text-md/normal',
                        children: a.intl.string(a.t['3LW10N'])
                    })
                ]
            }),
            (0, s.jsxs)(o.ModalFooter, {
                className: i.modalFooter,
                children: [
                    (0, s.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        onClick: n,
                        children: a.intl.string(a.t['ETE/oK'])
                    }),
                    (0, s.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        onClick: t,
                        children: a.intl.string(a.t.rwTBFh)
                    })
                ]
            })
        ]
    });
}
