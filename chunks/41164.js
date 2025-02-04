t.d(i, { default: () => h });
var n = t(200651);
t(192379);
var a = t(481060),
    l = t(230711),
    s = t(181211),
    o = t(188879),
    r = t(981631),
    c = t(726985),
    d = t(388032),
    m = t(280322),
    u = t(170143);
let h = (e) => {
    let { transitionState: i, onClose: t, classificationId: h, source: p } = e,
        x = (0, s.Z)(),
        f = () => {
            t(), l.Z.open(r.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
        };
    return (0, n.jsxs)(a.Y0X, {
        className: m.modalRoot,
        transitionState: i,
        children: [
            (0, n.jsxs)('div', {
                className: m.modalHeader,
                children: [
                    (0, n.jsx)('img', {
                        className: m.image,
                        src: u,
                        alt: ''
                    }),
                    (0, n.jsx)(a.olH, {
                        className: m.modalClose,
                        onClick: t
                    })
                ]
            }),
            (0, n.jsx)(a.hzk, {
                className: m.modalContent,
                children: x
                    ? (0, n.jsx)(a.$jN, {})
                    : (0, n.jsx)(o.Z, {
                          classificationId: h,
                          source: p,
                          onError: f,
                          onClose: f
                      })
            }),
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)(a.zxk, {
                    className: m.__invalid_button,
                    type: 'button',
                    color: a.zxk.Colors.BRAND,
                    onClick: f,
                    children: d.intl.string(d.t.elrEjI)
                })
            })
        ]
    });
};
