n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(267097),
    a = n(752053),
    l = n(476090);
function c(e) {
    let { onClose: t } = e,
        { refreshCategories: n } = (0, o.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.ModalHeader, {
                className: l.header,
                children: (0, i.jsx)(r.ModalCloseButton, {
                    className: l.closeButton,
                    onClick: t
                })
            }),
            (0, i.jsx)(a.Z, {
                onRetry: n,
                errorOrigin: a.i.GIFT_MODAL
            })
        ]
    });
}
