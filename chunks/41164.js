i.r(t);
var n = i(200651);
i(192379);
var a = i(481060),
    l = i(230711),
    s = i(181211),
    o = i(188879),
    r = i(981631),
    c = i(726985),
    d = i(388032),
    u = i(280322),
    m = i(170143);
t.default = (e) => {
    let { transitionState: t, onClose: i, classificationId: h, source: p } = e,
        x = (0, s.Z)(),
        f = () => {
            i(), l.Z.open(r.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
        };
    return (0, n.jsxs)(a.ModalRoot, {
        className: u.modalRoot,
        transitionState: t,
        children: [
            (0, n.jsxs)('div', {
                className: u.modalHeader,
                children: [
                    (0, n.jsx)('img', {
                        className: u.image,
                        src: m,
                        alt: ''
                    }),
                    (0, n.jsx)(a.ModalCloseButton, {
                        className: u.modalClose,
                        onClick: i
                    })
                ]
            }),
            (0, n.jsx)(a.ModalContent, {
                className: u.modalContent,
                children: x
                    ? (0, n.jsx)(a.Spinner, {})
                    : (0, n.jsx)(o.Z, {
                          classificationId: h,
                          source: p,
                          onError: f,
                          onClose: f
                      })
            }),
            (0, n.jsx)(a.ModalFooter, {
                children: (0, n.jsx)(a.Button, {
                    className: u.__invalid_button,
                    type: 'button',
                    color: a.Button.Colors.BRAND,
                    onClick: f,
                    children: d.intl.string(d.t.elrEjI)
                })
            })
        ]
    });
};
