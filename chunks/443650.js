r.d(t, { Z: () => s });
var n = r(200651);
r(192379);
var o = r(120356),
    c = r.n(o),
    l = r(481060),
    u = r(809086),
    i = r(278357);
function a(e) {
    let { className: t, onClose: r } = e;
    return (0, n.jsx)(l.P3F, {
        className: c()(i.closeButtonContainer, t),
        onClick: r,
        children: (0, n.jsx)(l.Dio, {
            size: 'xs',
            color: 'currentColor',
            className: i.closeButtonIcon
        })
    });
}
function s(e) {
    let { guildProductListing: t, onClose: r, className: o } = e;
    return (0, n.jsxs)(l.xBx, {
        className: c()(i.header, o),
        separator: !1,
        children: [
            (0, n.jsx)(u.Z, {
                className: i.headerImage,
                listing: t,
                imageSize: 500,
                alt: ''
            }),
            (0, n.jsx)(a, {
                className: i.closeButton,
                onClose: r
            })
        ]
    });
}
