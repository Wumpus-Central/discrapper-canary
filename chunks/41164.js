n.d(t, { default: () => m });
var i = n(255367);
n(73800);
var a = n(481060),
    l = n(230711),
    r = n(181211),
    o = n(188879),
    s = n(981631),
    c = n(726985),
    d = n(388032),
    u = n(688443),
    p = n(170143);
let m = (e) => {
    let { transitionState: t, onClose: n, classificationId: m, source: f } = e,
        h = (0, r.Z)(),
        g = () => {
            (n(), l.Z.open(s.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING));
        };
    return (0, i.jsxs)(a.Y0X, {
        className: u.modalRoot,
        transitionState: t,
        parentComponent: 'ClassificationDetailModal',
        children: [
            (0, i.jsxs)('div', {
                className: u.modalHeader,
                children: [
                    (0, i.jsx)('img', {
                        className: u.image,
                        src: p,
                        alt: ''
                    }),
                    (0, i.jsx)(a.olH, {
                        className: u.modalClose,
                        onClick: n
                    })
                ]
            }),
            (0, i.jsx)(a.hzk, {
                className: u.modalContent,
                children: h
                    ? (0, i.jsx)(a.$jN, {})
                    : (0, i.jsx)(o.Z, {
                          classificationId: m,
                          source: f,
                          onError: g,
                          onClose: g
                      })
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: u.__invalid_button,
                    children: (0, i.jsx)(a.zxk, {
                        variant: 'primary',
                        text: d.intl.string(d.t.elrEjI),
                        type: 'button',
                        onClick: g
                    })
                })
            })
        ]
    });
};
