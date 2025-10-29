n.d(t, { Z: () => s });
var a = n(951288),
    r = n(647438),
    l = n(956748),
    i = n(566697),
    o = n(346284);
let s = r.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: r, isPurchased: s } = e;
    return (0, a.jsx)("div", {
        className: o.nameplatePreviewContainer,
        children: (0, a.jsxs)("div", {
            className: o.nameplatePreviewList,
            children: [
                (0, a.jsx)(l.G, {
                    showStatus: !0,
                    width: 94,
                    opacity: 0.7,
                }),
                (0, a.jsx)(l.G, {
                    showStatus: !0,
                    width: 110,
                    opacity: 0.85,
                }),
                (0, a.jsx)(i.Z, {
                    user: t,
                    nameplate: n,
                    className: o.nameplatePreviewSampleItem,
                    isHighlighted: r,
                    showPlaceholderUser: !r,
                    showStatus: !0,
                    isPurchased: s,
                }),
                (0, a.jsx)(l.G, {
                    showStatus: !0,
                    width: 110,
                    opacity: 0.85,
                }),
                (0, a.jsx)(l.G, {
                    showStatus: !0,
                    width: 94,
                    opacity: 0.7,
                }),
            ],
        }),
    });
});
