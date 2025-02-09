t.d(n, { Z: () => i });
var r = t(200651);
t(192379);
var o = t(120356),
    l = t.n(o),
    s = t(481060),
    u = t(809086),
    a = t(284492);
function c(e) {
    let { className: n, onClose: t } = e;
    return (0, r.jsx)(s.P3F, {
        className: l()(a.closeButtonContainer, n),
        onClick: t,
        children: (0, r.jsx)(s.Dio, {
            size: 'xs',
            color: 'currentColor',
            className: a.closeButtonIcon
        })
    });
}
function i(e) {
    let { guildProductListing: n, onClose: t, className: o } = e;
    return (0, r.jsxs)(s.xBx, {
        className: l()(a.header, o),
        separator: !1,
        children: [
            (0, r.jsx)(u.Z, {
                className: a.headerImage,
                listing: n,
                imageSize: 500,
                alt: ''
            }),
            (0, r.jsx)(c, {
                className: a.closeButton,
                onClose: t
            })
        ]
    });
}
