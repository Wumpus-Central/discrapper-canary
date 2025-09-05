n.d(t, { default: () => u });
var i = n(951288);
n(647438);
var a = n(481060),
    l = n(230711),
    o = n(181211),
    r = n(188879),
    s = n(981631),
    c = n(726985),
    d = n(22860);
let u = (e) => {
    let { transitionState: t, onClose: n, classificationId: u, source: m } = e,
        p = (0, o.Z)(),
        f = () => {
            n(), l.Z.open(s.oAB.ACCOUNT, c.s6.PRIVACY_AND_SAFETY_STANDING);
        };
    return (0, i.jsxs)(a.Y0X, {
        className: d.modalRoot,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)("div", {
                className: d.modalHeader,
                children: (0, i.jsx)(a.olH, {
                    "data-migration-pending": !0,
                    className: d.modalClose,
                    onClick: n,
                }),
            }),
            (0, i.jsx)(a.hzk, {
                "data-migration-pending": !0,
                className: d.modalContent,
                children: p
                    ? (0, i.jsx)(a.$jN, {})
                    : (0, i.jsx)(r.Z, {
                          classificationId: u,
                          source: m,
                          onError: f,
                          onClose: f,
                      }),
            }),
        ],
    });
};
