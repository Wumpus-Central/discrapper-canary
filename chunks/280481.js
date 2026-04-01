s.d(t, { A: () => c });
var r = s(627968);
s(64700);
var i = s(397927),
    n = s(793574),
    l = s(688810),
    a = s(213279),
    o = s(5402);
function c(e) {
    let { onClose: t } = e,
        { analyticsLocations: s } = (0, l.Ay)(n.A.GO_LIVE_MODAL_V2);
    return (0, r.jsx)(i.IzF, {
        options: [
            { name: "SD", value: "sd" },
            { name: "HD", value: "hd", className: o.T },
        ],
        className: o.g,
        value: "sd",
        look: "pill",
        onChange: function (e) {
            "hd" === e.value && (0, a.p)({ analyticsLocation: s?.[0], onClose: t });
        },
    });
}
