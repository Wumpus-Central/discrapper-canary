n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(267097),
    s = n(752053),
    o = n(286157);
function l(e) {
    let { onClose: t } = e,
        { refreshCategories: n } = (0, a.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.xBx, {
                className: o.header,
                children: (0, i.jsx)(r.olH, {
                    className: o.closeButton,
                    onClick: t
                })
            }),
            (0, i.jsx)(s.Z, {
                onRetry: n,
                errorOrigin: s.i.GIFT_MODAL
            })
        ]
    });
}
