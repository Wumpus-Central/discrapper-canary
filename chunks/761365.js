a.d(t, { A: () => o });
var r = a(627968),
    n = a(64700),
    l = a(130147),
    i = a(344346),
    s = a(101206);
let o = n.memo(function (e) {
    let { user: t, nameplate: a, isHighlighted: n, size: o = "default" } = e,
        c = "small" === o ? 62 : 94,
        d = "small" === o ? 72 : 110;
    return (0, r.jsx)("div", {
        className: s.Dz,
        children: (0, r.jsxs)("div", {
            className: s.ur,
            children: [
                (0, r.jsx)(l._, { showStatus: !0, width: c, opacity: 0.7, size: o }),
                (0, r.jsx)(l._, { showStatus: !0, width: d, opacity: 0.85, size: o }),
                (0, r.jsx)(i.A, {
                    user: t,
                    nameplate: a,
                    className: s.tZ,
                    isHighlighted: n,
                    showPlaceholderUser: !n,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                }),
                (0, r.jsx)(l._, { showStatus: !0, width: d, opacity: 0.85, size: o }),
                (0, r.jsx)(l._, { showStatus: !0, width: c, opacity: 0.7, size: o }),
            ],
        }),
    });
});
