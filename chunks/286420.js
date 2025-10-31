n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(100527),
    o = n(906732),
    s = n(156582),
    a = n(656943);
function c(e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, o.ZP)(l.Z.GO_LIVE_MODAL_V2);
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
                (0, s.E)({
                    analyticsLocation: null == n ? void 0 : n[0],
                    onClose: t,
                });
        },
    });
}
