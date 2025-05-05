n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(267097),
    o = n(752053),
    s = n(557972);
function l(e) {
    let { onClose: t } = e,
        { refreshCategories: n } = (0, a.Z)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.xBx, {
                className: s.header,
                children: (0, r.jsx)(i.olH, {
                    className: s.closeButton,
                    onClick: t
                })
            }),
            (0, r.jsx)(o.Z, {
                onRetry: n,
                errorOrigin: o.i.GIFT_MODAL
            })
        ]
    });
}
