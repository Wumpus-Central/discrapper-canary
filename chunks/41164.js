n.d(t, { default: () => m });
var i = n(951288);
n(647438);
var a = n(481060),
    l = n(313789),
    o = n(518596),
    r = n(181211),
    s = n(188879),
    c = n(981631),
    d = n(726985),
    u = n(22860);
let m = (e) => {
    let { transitionState: t, onClose: n, classificationId: m, source: p } = e,
        f = (0, r.Z)(),
        h = () => {
            n(),
                (0, o.openUserSettings)(l.n.ACCOUNT_PANEL, {
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
                    : (0, i.jsx)(s.Z, {
                          classificationId: m,
                          source: p,
                          onError: h,
                          onClose: h,
                      }),
            }),
        ],
    });
};
