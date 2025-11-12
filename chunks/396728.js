n.d(t, { Z: () => o });
var a = n(951288),
    i = n(647438),
    r = n(956748),
    l = n(566697),
    s = n(346284);
let o = i.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: i, isPurchased: o, size: c = "default" } = e,
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
                (0, a.jsx)(l.Z, {
                    user: t,
                    nameplate: n,
                    className: s.nameplatePreviewSampleItem,
                    isHighlighted: i,
                    showPlaceholderUser: !i,
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
