r.d(t, { Z: () => s });
var n = r(200651);
r(192379);
var o = r(120356),
    c = r.n(o),
    l = r(481060),
    i = r(809086),
    u = r(760146);
function a(e) {
    let { className: t, onClose: r } = e;
    return (0, n.jsx)(l.P3F, {
        className: c()(u.closeButtonContainer, t),
        onClick: r,
        children: (0, n.jsx)(l.Dio, {
            size: 'xs',
            color: 'currentColor',
            className: u.closeButtonIcon
        })
    });
}
function s(e) {
    let { guildProductListing: t, onClose: r, className: o } = e;
    return (0, n.jsxs)(l.xBx, {
        className: c()(u.header, o),
        separator: !1,
        children: [
            (0, n.jsx)(i.Z, {
                className: u.headerImage,
                listing: t,
                imageSize: 500,
                alt: ''
            }),
            (0, n.jsx)(a, {
                className: u.closeButton,
                onClose: r
            })
        ]
    });
}
