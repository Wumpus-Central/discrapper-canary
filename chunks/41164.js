n.d(t, { default: () => p });
var i = n(951288);
n(647438);
var a = n(481060),
    o = n(313789),
    l = n(518596),
    s = n(181211),
    r = n(188879),
    c = n(981631),
    d = n(726985),
    u = n(699244);
let p = (e) => {
    let { transitionState: t, onClose: n, classificationId: p, source: m } = e,
        f = (0, s.Z)(),
        h = () => {
            n(),
                (0, l.openUserSettings)(o.n.ACCOUNT_PANEL, {
                    section: c.oAB.ACCOUNT,
                    subsection: d.s6.PRIVACY_AND_SAFETY_STANDING,
                });
        };
    return (0, i.jsxs)(a.Y0X, {
        className: u.modalRoot,
        transitionState: t,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, i.jsx)("div", {
                className: u.modalHeader,
                children: (0, i.jsx)(a.olH, {
                    "data-migration-pending": !0,
                    className: u.modalClose,
                    onClick: n,
                }),
            }),
            (0, i.jsx)(a.hzk, {
                "data-migration-pending": !0,
                className: u.modalContent,
                children: f
                    ? (0, i.jsx)(a.$jN, {})
                    : (0, i.jsx)(r.Z, {
                          classificationId: p,
                          source: m,
                          onError: h,
                          onClose: h,
                      }),
            }),
        ],
    });
};
