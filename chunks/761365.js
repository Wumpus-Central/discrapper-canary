l.d(t, { A: () => o });
var i = l(627968),
    n = l(64700),
    a = l(130147),
    r = l(344346),
    s = l(101206);
let o = n.memo(function (e) {
    let { user: t, guildId: l, nameplate: n, isHighlighted: o, size: c = "default" } = e,
        u = "small" === c ? 62 : 94,
        d = "small" === c ? 72 : 110;
    return (0, i.jsx)("div", {
        className: s.Dz,
        children: (0, i.jsxs)("div", {
            className: s.ur,
            children: [
                (0, i.jsx)(a._, { showStatus: !0, width: u, opacity: 0.7, size: c }),
                (0, i.jsx)(a._, { showStatus: !0, width: d, opacity: 0.85, size: c }),
                (0, i.jsx)(r.A, {
                    user: t,
                    guildId: l,
                    nameplate: n,
                    className: s.tZ,
                    isHighlighted: o,
                    showPlaceholderUser: !o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(a._, { showStatus: !0, width: d, opacity: 0.85, size: c }),
                (0, i.jsx)(a._, { showStatus: !0, width: u, opacity: 0.7, size: c }),
            ],
        }),
    });
});
