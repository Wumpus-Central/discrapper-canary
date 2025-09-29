n.d(t, { default: () => c });
var r = n(951288);
n(647438);
var i = n(435935),
    a = n(481060),
    s = n(115849),
    l = n(388032),
    u = n(50051);
function c(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, r.jsxs)(a.Y0X, {
        size: a.CgR.SMALL,
        transitionState: t,
        parentComponent: "AddFriendModal",
        children: [
            (0, r.jsxs)(a.xBx, {
                justify: i.k.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-lg/semibold",
                        children: l.intl.string(l.t.w5uwoK),
                    }),
                    (0, r.jsx)(a.olH, { onClick: n }),
                ],
            }),
            (0, r.jsx)(a.hzk, {
                children: (0, r.jsx)("div", {
                    className: u.content,
                    children: (0, r.jsx)(s.Z, { placeholder: l.intl.string(l.t.IEpCBQ) }),
                }),
            }),
        ],
    });
}
