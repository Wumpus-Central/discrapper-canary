n.d(t, { A: () => o });
var a = n(627968),
    l = n(64700),
    i = n(359701),
    r = n(550111),
    s = n(488189);
let o = l.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: l, size: o = "default" } = e,
        c = "small" === o ? 62 : 94,
        d = "small" === o ? 72 : 110;
    return (0, a.jsx)("div", {
        className: s.Dz,
        children: (0, a.jsxs)("div", {
            className: s.ur,
            children: [
                (0, a.jsx)(i._, {
                    showStatus: !0,
                    width: c,
                    opacity: 0.7,
                    size: o,
                }),
                (0, a.jsx)(i._, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.85,
                    size: o,
                }),
                (0, a.jsx)(r.A, {
                    user: t,
                    nameplate: n,
                    className: s.tZ,
                    isHighlighted: l,
                    showPlaceholderUser: !l,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                }),
                (0, a.jsx)(i._, {
                    showStatus: !0,
                    width: d,
                    opacity: 0.85,
                    size: o,
                }),
                (0, a.jsx)(i._, {
                    showStatus: !0,
                    width: c,
                    opacity: 0.7,
                    size: o,
                }),
            ],
        }),
    });
});
