n.d(t, { default: () => c });
var r = n(951288);
n(647438);
var i = n(435935),
    s = n(481060),
    a = n(115849),
    u = n(388032),
    l = n(50051);
function c(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, r.jsxs)(s.Y0X, {
        size: s.CgR.SMALL,
        transitionState: t,
        parentComponent: "AddFriendModal",
        children: [
            (0, r.jsxs)(s.xBx, {
                justify: i.k.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-lg/semibold",
                        children: u.intl.string(u.t.w5uwoK),
                    }),
                    (0, r.jsx)(s.olH, { onClick: n }),
                ],
            }),
            (0, r.jsx)(s.hzk, {
                children: (0, r.jsx)("div", {
                    className: l.content,
                    children: (0, r.jsx)(a.Z, { placeholder: u.intl.string(u.t.IEpCBQ) }),
                }),
            }),
        ],
    });
}
