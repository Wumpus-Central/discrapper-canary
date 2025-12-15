n.d(t, { Z: () => o });
var a = n(54381),
    r = n(473749),
    i = n(956748),
    l = n(566697),
    s = n(415878);
let o = r.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: r, size: o = "default" } = e,
        c = "small" === o ? 62 : 94,
        d = "small" === o ? 72 : 110;
    return (0, a.jsx)("div", {
        className: s.nameplatePreviewContainer,
        children: (0, a.jsxs)("div", {
            className: s.nameplatePreviewList,
            children: [
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: c,
                    opacity: 0.7,
                    size: o,
                }),
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.85,
                    size: o,
                }),
                (0, a.jsx)(l.Z, {
                    user: t,
                    nameplate: n,
                    className: s.nameplatePreviewSampleItem,
                    isHighlighted: r,
                    showPlaceholderUser: !r,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                }),
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.85,
                    size: o,
                }),
                (0, a.jsx)(i.G, {
                    showStatus: !0,
                    width: c,
                    opacity: 0.7,
                    size: o,
                }),
            ],
        }),
    });
});
