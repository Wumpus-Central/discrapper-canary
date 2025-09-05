i.d(t, { default: () => m });
var n = i(951288);
i(647438);
var a = i(481060),
    l = i(230711),
    o = i(181211),
    s = i(188879),
    r = i(981631),
    c = i(726985),
    d = i(388032),
    u = i(22860),
    f = i(170143);
let m = (e) => {
    let { transitionState: t, onClose: i, classificationId: m, source: p } = e,
        h = (0, o.Z)(),
        g = () => {
            i(), l.Z.open(r.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
        };
    return (0, n.jsxs)(a.Y0X, {
        className: u.modalRoot,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        children: [
            (0, n.jsxs)("div", {
                className: u.modalHeader,
                children: [
                    (0, n.jsx)("img", {
                        className: u.image,
                        src: f,
                        alt: "",
                    }),
                    (0, n.jsx)(a.olH, {
                        className: u.modalClose,
                        onClick: i,
                    }),
                ],
            }),
            (0, n.jsx)(a.hzk, {
                className: u.modalContent,
                children: h
                    ? (0, n.jsx)(a.$jN, {})
                    : (0, n.jsx)(s.Z, {
                          classificationId: m,
                          source: p,
                          onError: g,
                          onClose: g,
                      }),
            }),
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    children: (0, n.jsx)(a.zxk, {
                        variant: "primary",
                        text: d.intl.string(d.t.elrEjI),
                        type: "button",
                        onClick: g,
                    }),
                }),
            }),
        ],
    });
};
