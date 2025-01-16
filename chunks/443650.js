t.d(n, {
    Z: function () {
        return s;
    }
});
var r = t(200651);
t(192379);
var o = t(120356),
    u = t.n(o),
    a = t(481060),
    c = t(809086),
    l = t(274348);
function i(e) {
    let { className: n, onClose: t } = e;
    return (0, r.jsx)(a.Clickable, {
        className: u()(l.closeButtonContainer, n),
        onClick: t,
        children: (0, r.jsx)(a.XSmallIcon, {
            size: 'xs',
            color: 'currentColor',
            className: l.closeButtonIcon
        })
    });
}
function s(e) {
    let { guildProductListing: n, onClose: t, className: o } = e;
    return (0, r.jsxs)(a.ModalHeader, {
        className: u()(l.header, o),
        separator: !1,
        children: [
            (0, r.jsx)(c.Z, {
                className: l.headerImage,
                listing: n,
                imageSize: 500,
                alt: ''
            }),
            (0, r.jsx)(i, {
                className: l.closeButton,
                onClose: t
            })
        ]
    });
}
