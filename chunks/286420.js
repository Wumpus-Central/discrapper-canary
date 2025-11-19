n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(100527),
    s = n(906732),
    o = n(156582),
    a = n(808596);
function c(e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, s.ZP)(l.Z.GO_LIVE_MODAL_V2);
    return (0, r.jsx)(i.sY7, {
        options: [
            {
                name: "SD",
                value: "sd",
            },
            {
                name: "HD",
                value: "hd",
                className: a.premiumOption,
            },
        ],
        className: a.selector,
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
