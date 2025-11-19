n.d(t, { Z: () => o });
var a = n(54381),
    l = n(473749),
    r = n(956748),
    i = n(566697),
    s = n(788107);
let o = l.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: l, isPurchased: o, size: c = "default" } = e,
        d = "small" === c ? 62 : 94,
        u = "small" === c ? 72 : 110;
    return (0, a.jsx)("div", {
        className: s.nameplatePreviewContainer,
        children: (0, a.jsxs)("div", {
            className: s.nameplatePreviewList,
            children: [
                (0, a.jsx)(r.G, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.7,
                    size: c,
                }),
                (0, a.jsx)(r.G, {
                    showStatus: !0,
                    width: u,
                    opacity: 0.85,
                    size: c,
                }),
                (0, a.jsx)(i.Z, {
                    user: t,
                    nameplate: n,
                    className: s.nameplatePreviewSampleItem,
                    isHighlighted: l,
                    showPlaceholderUser: !l,
                    showStatus: !0,
                    isPurchased: o,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                }),
                (0, a.jsx)(r.G, {
                    showStatus: !0,
                    width: u,
                    opacity: 0.85,
                    size: c,
                }),
                (0, a.jsx)(r.G, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.7,
                    size: c,
                }),
            ],
        }),
    });
});
