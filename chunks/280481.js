r.d(t, {
    A: () => o,
});
var n = r(627968);
r(64700);
var l = r(397927),
    s = r(793574),
    i = r(688810),
    a = r(213279),
    c = r(357281);

function o(e) {
    let { onClose: t } = e,
        { analyticsLocations: r } = (0, i.Ay)(s.A.GO_LIVE_MODAL_V2);
    return (0, n.jsx)(l.IzF, {
        options: [
            {
                name: "SD",
                value: "sd",
            },
            {
                name: "HD",
                value: "hd",
                className: c.T,
            },
        ],
        className: c.g,
        value: "sd",
        look: "pill",
        onChange: function (e) {
            "hd" === e.value &&
                (0, a.p)({
                    analyticsLocation: null == r ? void 0 : r[0],
                    onClose: t,
                });
        },
    });
}
