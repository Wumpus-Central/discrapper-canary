l.d(t, { A: () => o });
var i = l(627968),
    n = l(64700),
    a = l(130147),
    r = l(344346),
    s = l(805974);
let o = n.memo(function (e) {
    let { user: t, nameplate: l, isHighlighted: n, size: o = "default" } = e,
        c = "small" === o ? 62 : 94,
        u = "small" === o ? 72 : 110;
    return (0, i.jsx)("div", {
        className: s.Dz,
        children: (0, i.jsxs)("div", {
            className: s.ur,
            children: [
                (0, i.jsx)(a._, { showStatus: !0, width: c, opacity: 0.7, size: o }),
                (0, i.jsx)(a._, { showStatus: !0, width: u, opacity: 0.85, size: o }),
                (0, i.jsx)(r.A, {
                    user: t,
                    nameplate: l,
                    className: s.tZ,
                    isHighlighted: n,
                    showPlaceholderUser: !n,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(a._, { showStatus: !0, width: u, opacity: 0.85, size: o }),
                (0, i.jsx)(a._, { showStatus: !0, width: c, opacity: 0.7, size: o }),
            ],
        }),
    });
});
