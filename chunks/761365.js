i.d(t, { A: () => u });
var n = i(627968),
    l = i(64700),
    r = i(130147),
    s = i(344346),
    a = i(101206);
let u = l.memo(function (e) {
    let { user: t, nameplate: i, isHighlighted: l, size: u = "default" } = e,
        o = "small" === u ? 62 : 94,
        d = "small" === u ? 72 : 110;
    return (0, n.jsx)("div", {
        className: a.Dz,
        children: (0, n.jsxs)("div", {
            className: a.ur,
            children: [
                (0, n.jsx)(r._, { showStatus: !0, width: o, opacity: 0.7, size: u }),
                (0, n.jsx)(r._, { showStatus: !0, width: d, opacity: 0.85, size: u }),
                (0, n.jsx)(s.A, {
                    user: t,
                    nameplate: i,
                    className: a.tZ,
                    isHighlighted: l,
                    showPlaceholderUser: !l,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === u ? "small" : "default",
                }),
                (0, n.jsx)(r._, { showStatus: !0, width: d, opacity: 0.85, size: u }),
                (0, n.jsx)(r._, { showStatus: !0, width: o, opacity: 0.7, size: u }),
            ],
        }),
    });
});
