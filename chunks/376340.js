n.d(t, {
    L: function () {
        return i;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    l = n(600164),
    o = n(424071),
    s = n(388032),
    c = n(38920);
function i(e) {
    let { onClose: t, img: n, title: i, body: d, content: u } = e;
    return (0, a.jsxs)(o.Z, {
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                direction: l.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, a.jsx)('div', {
                        className: c.illustration,
                        children: n
                    }),
                    (0, a.jsx)(r.Heading, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: i
                    }),
                    (0, a.jsx)(r.ModalCloseButton, {
                        className: c.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, a.jsxs)(r.ModalContent, {
                className: c.body,
                paddingFix: !1,
                children: [
                    (0, a.jsx)(r.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d
                    }),
                    u
                ]
            }),
            (0, a.jsx)(r.ModalFooter, {
                className: c.footer,
                children: (0, a.jsx)(r.Button, {
                    className: c.footerButton,
                    color: r.Button.Colors.BRAND,
                    onClick: t,
                    children: s.intl.string(s.t.i4jeWV)
                })
            })
        ]
    });
}
