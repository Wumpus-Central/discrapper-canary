t.r(n);
var i = t(200651);
t(192379);
var a = t(481060),
    l = t(230711),
    o = t(181211),
    s = t(188879),
    r = t(981631),
    c = t(726985),
    d = t(388032),
    u = t(280322),
    m = t(170143);
n.default = (e) => {
    let { transitionState: n, onClose: t, classificationId: h, source: p } = e,
        x = (0, o.Z)(),
        f = () => {
            t(), l.Z.open(r.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
        };
    return (0, i.jsxs)(a.ModalRoot, {
        className: u.modalRoot,
        transitionState: n,
        children: [
            (0, i.jsxs)('div', {
                className: u.modalHeader,
                children: [
                    (0, i.jsx)('img', {
                        className: u.image,
                        src: m,
                        alt: ''
                    }),
                    (0, i.jsx)(a.ModalCloseButton, {
                        className: u.modalClose,
                        onClick: t
                    })
                ]
            }),
            (0, i.jsx)(a.ModalContent, {
                className: u.modalContent,
                children: x
                    ? (0, i.jsx)(a.Spinner, {})
                    : (0, i.jsx)(s.Z, {
                          classificationId: h,
                          source: p,
                          onError: f,
                          onClose: f
                      })
            }),
            (0, i.jsx)(a.ModalFooter, {
                children: (0, i.jsx)(a.Button, {
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
