n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var o = n(481060),
    a = n(267097),
    r = n(752053),
    c = n(814335);
function d(e) {
    let { onClose: t } = e,
        { refreshCategories: n } = (0, a.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.ModalHeader, {
                className: c.header,
                children: (0, i.jsx)(o.ModalCloseButton, {
                    className: c.closeButton,
                    onClick: t
                })
            }),
            (0, i.jsx)(r.Z, {
                onRetry: n,
                errorOrigin: r.i.GIFT_MODAL
            })
        ]
    });
}
