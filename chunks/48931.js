n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(267097),
    a = n(752053),
    s = n(557972);
function l(e) {
    let { onClose: t } = e,
        { refreshCategories: n } = (0, o.Z)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.xBx, {
                className: s.header,
                children: (0, r.jsx)(i.olH, {
                    className: s.closeButton,
                    onClick: t
                })
            }),
            (0, r.jsx)(a.Z, {
                onRetry: n,
                errorOrigin: a.i.GIFT_MODAL
            })
        ]
    });
}
