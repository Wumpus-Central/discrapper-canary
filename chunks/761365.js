n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    s = n(130147),
    a = n(512213),
    r = n(101206);
let o = l.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: l, size: o = "default" } = e,
        d = "small" === o ? 62 : 94,
        c = "small" === o ? 72 : 110;
    return (0, i.jsx)("div", {
        className: r.Dz,
        children: (0, i.jsxs)("div", {
            className: r.ur,
            children: [
                (0, i.jsx)(s._, { showStatus: !0, width: d, opacity: 0.7, size: o }),
                (0, i.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: o }),
                (0, i.jsx)(a.A, {
                    user: t,
                    nameplate: n,
                    className: r.tZ,
                    isHighlighted: l,
                    showPlaceholderUser: !l,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                }),
                (0, i.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: o }),
                (0, i.jsx)(s._, { showStatus: !0, width: d, opacity: 0.7, size: o }),
            ],
        }),
    });
});
