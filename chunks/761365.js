n.d(t, { A: () => o });
var l = n(627968),
    i = n(64700),
    s = n(359701),
    r = n(550111),
    a = n(488189);
let o = i.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: i, size: o = "default" } = e,
        u = "small" === o ? 62 : 94,
        d = "small" === o ? 72 : 110;
    return (0, l.jsx)("div", {
        className: a.Dz,
        children: (0, l.jsxs)("div", {
            className: a.ur,
            children: [
                (0, l.jsx)(s._, { showStatus: !0, width: u, opacity: 0.7, size: o }),
                (0, l.jsx)(s._, { showStatus: !0, width: d, opacity: 0.85, size: o }),
                (0, l.jsx)(r.A, {
                    user: t,
                    nameplate: n,
                    className: a.tZ,
                    isHighlighted: i,
                    showPlaceholderUser: !i,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                }),
                (0, l.jsx)(s._, { showStatus: !0, width: d, opacity: 0.85, size: o }),
                (0, l.jsx)(s._, { showStatus: !0, width: u, opacity: 0.7, size: o }),
            ],
        }),
    });
});
