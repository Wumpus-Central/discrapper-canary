n.d(t, { default: () => p });
var i = n(255367);
n(73800);
var l = n(481060),
    a = n(230711),
    r = n(181211),
    o = n(188879),
    s = n(981631),
    c = n(726985),
    d = n(388032),
    u = n(688443),
    m = n(170143);
let p = (e) => {
    let { transitionState: t, onClose: n, classificationId: p, source: h } = e,
        f = (0, r.Z)(),
        g = () => {
            n(), a.Z.open(s.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
        };
    return (0, i.jsxs)(l.Y0X, {
        className: u.modalRoot,
        transitionState: t,
        children: [
            (0, i.jsxs)('div', {
                className: u.modalHeader,
                children: [
                    (0, i.jsx)('img', {
                        className: u.image,
                        src: m,
                        alt: ''
                    }),
                    (0, i.jsx)(l.olH, {
                        className: u.modalClose,
                        onClick: n
                    })
                ]
            }),
            (0, i.jsx)(l.hzk, {
                className: u.modalContent,
                children: f
                    ? (0, i.jsx)(l.$jN, {})
                    : (0, i.jsx)(o.Z, {
                          classificationId: p,
                          source: h,
                          onError: g,
                          onClose: g
                      })
            }),
            (0, i.jsx)(l.mzw, {
                children: (0, i.jsx)(l.zxk, {
                    className: u.__invalid_button,
                    type: 'button',
                    color: l.zxk.Colors.BRAND,
                    onClick: g,
                    children: d.intl.string(d.t.elrEjI)
                })
            })
        ]
    });
};
