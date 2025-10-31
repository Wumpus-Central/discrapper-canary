n.d(t, { Z: () => o });
var a = n(951288),
    i = n(647438),
    l = n(956748),
    r = n(566697),
    s = n(346284);
let o = i.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: i, isPurchased: o } = e;
    return (0, a.jsx)("div", {
        className: s.nameplatePreviewContainer,
        children: (0, a.jsxs)("div", {
            className: s.nameplatePreviewList,
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
                (0, a.jsx)(r.Z, {
                    user: t,
                    nameplate: n,
                    className: s.nameplatePreviewSampleItem,
                    isHighlighted: i,
                    showPlaceholderUser: !i,
                    showStatus: !0,
                    isPurchased: o,
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
