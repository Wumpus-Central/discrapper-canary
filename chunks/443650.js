n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var o = n(120356),
    c = n.n(o),
    l = n(481060),
    i = n(809086),
    u = n(743766);
function a(e) {
    let { className: t, onClose: n } = e;
    return (0, r.jsx)(l.P3F, {
        className: c()(u.closeButtonContainer, t),
        onClick: n,
        children: (0, r.jsx)(l.Dio, {
            size: "xs",
            color: "currentColor",
            className: u.closeButtonIcon,
        }),
    });
}
function s(e) {
    let { guildProductListing: t, onClose: n, className: o } = e;
    return (0, r.jsxs)(l.xBx, {
        className: c()(u.header, o),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(i.Z, {
                className: u.headerImage,
                listing: t,
                imageSize: 500,
                alt: "",
            }),
            (0, r.jsx)(a, {
                className: u.closeButton,
                onClose: n,
            }),
        ],
    });
}
