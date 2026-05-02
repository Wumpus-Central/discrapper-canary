a.d(t, { A: () => c });
var e = a(627968),
    i = a(64700),
    l = a(130147),
    h = a(344346),
    d = a(101206);
let c = i.memo(function (s) {
    let { user: t, nameplate: a, isHighlighted: i, size: c = "default" } = s,
        o = "small" === c ? 62 : 94,
        u = "small" === c ? 72 : 110;
    return (0, e.jsx)("div", {
        className: d.Dz,
        children: (0, e.jsxs)("div", {
            className: d.ur,
            children: [
                (0, e.jsx)(l._, { showStatus: !0, width: o, opacity: 0.7, size: c }),
                (0, e.jsx)(l._, { showStatus: !0, width: u, opacity: 0.85, size: c }),
                (0, e.jsx)(h.A, {
                    user: t,
                    nameplate: a,
                    className: d.tZ,
                    isHighlighted: i,
                    showPlaceholderUser: !i,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                }),
                (0, e.jsx)(l._, { showStatus: !0, width: u, opacity: 0.85, size: c }),
                (0, e.jsx)(l._, { showStatus: !0, width: o, opacity: 0.7, size: c }),
            ],
        }),
    });
});
