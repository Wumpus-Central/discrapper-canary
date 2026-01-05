n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(481060),
    s = n(100527),
    l = n(906732),
    o = n(504710),
    c = n(703259);
function a(e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, l.ZP)(s.Z.GO_LIVE_MODAL_V2);
    return (0, r.jsx)(i.sY7, {
        options: [
            {
                name: "SD",
                value: "sd",
            },
            {
                name: "HD",
                value: "hd",
                className: c.premiumOption,
            },
        ],
        className: c.selector,
        value: "sd",
        look: "pill",
        onChange: function (e) {
            "hd" === e.value &&
                (0, o.E)({
                    analyticsLocation: null == n ? void 0 : n[0],
                    onClose: t,
                });
        },
    });
}
