r.d(t, { default: () => o });
var n = r(255367);
r(73800);
var l = r(435935),
    i = r(481060),
    s = r(115849),
    a = r(388032),
    u = r(334062);
function o(e) {
    let { transitionState: t, onClose: r } = e;
    return (0, n.jsxs)(i.Y0X, {
        size: i.CgR.SMALL,
        transitionState: t,
        parentComponent: 'AddFriendModal',
        children: [
            (0, n.jsxs)(i.xBx, {
                justify: l.k.Justify.BETWEEN,
                children: [
                    (0, n.jsx)(i.X6q, {
                        variant: 'heading-lg/semibold',
                        children: a.intl.string(a.t.w5uwoK)
                    }),
                    (0, n.jsx)(i.olH, { onClick: r })
                ]
            }),
            (0, n.jsx)(i.hzk, {
                children: (0, n.jsx)('div', {
                    className: u.content,
                    children: (0, n.jsx)(s.Z, { placeholder: a.intl.string(a.t.IEpCBQ) })
                })
            })
        ]
    });
}
