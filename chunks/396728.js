n.d(t, { Z: () => o });
var a = n(54381),
    r = n(473749),
    i = n(956748),
    l = n(566697),
    s = n(346284);
let o = r.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: r, isPurchased: o, size: c = "default" } = e,
        d = "small" === c ? 62 : 94,
        u = "small" === c ? 72 : 110;
    return (0, a.jsx)("div", {
        className: s.nameplatePreviewContainer,
        children: (0, a.jsxs)("div", {
            className: s.nameplatePreviewList,
            children: [
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.7,
                    size: c,
                }),
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: u,
                    opacity: 0.85,
                    size: c,
                }),
                (0, a.jsx)(l.Z, {
                    user: t,
                    nameplate: n,
                    className: s.nameplatePreviewSampleItem,
                    isHighlighted: r,
                    showPlaceholderUser: !r,
                    showStatus: !0,
                    isPurchased: o,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                }),
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: u,
                    opacity: 0.85,
                    size: c,
                }),
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.7,
                    size: c,
                }),
            ],
        }),
    });
});
