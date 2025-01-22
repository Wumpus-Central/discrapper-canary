r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(267097),
    s = r(752053),
    l = r(814335);
function u(e) {
    let { onClose: n } = e,
        { refreshCategories: r } = (0, o.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.ModalHeader, {
                className: l.header,
                children: (0, i.jsx)(a.ModalCloseButton, {
                    className: l.closeButton,
                    onClick: n
                })
            }),
            (0, i.jsx)(s.Z, {
                onRetry: r,
                errorOrigin: s.i.GIFT_MODAL
            })
        ]
    });
}
