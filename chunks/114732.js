var i = r(200651);
r(192379);
var a = r(780384),
    o = r(481060),
    s = r(410030),
    l = r(388032),
    u = r(85139),
    c = r(167969),
    d = r(557256);
function f(e) {
    let { onClose: n } = e,
        r = (0, s.ZP)(),
        f = (0, a.wj)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: u.headerImage,
                        src: f ? c : d
                    }),
                    (0, i.jsx)(o.Heading, {
                        className: u.title,
                        variant: 'heading-xl/medium',
                        children: l.intl.string(l.t.tWYWJy)
                    }),
                    (0, i.jsx)(o.ModalCloseButton, {
                        onClick: n,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, i.jsx)(o.ModalContent, {
                className: u.content,
                scrollbarType: 'none',
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: l.intl.string(l.t.JNQRU1)
                })
            }),
            (0, i.jsx)(o.ModalFooter, {
                className: u.modalFooter,
                children: (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.MEDIUM,
                    onClick: n,
                    children: l.intl.string(l.t.cpT0Cg)
                })
            })
        ]
    });
}
n.Z = f;
