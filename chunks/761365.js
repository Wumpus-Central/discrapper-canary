l.d(t, { A: () => o });
var n = l(477900),
    i = l(582128),
    a = l(130147),
    r = l(344346),
    s = l(507646);
let o = i.memo(function (e) {
    let { user: t, guildId: l, nameplate: i, isHighlighted: o, size: c = "default" } = e,
        d = "small" === c ? 62 : 94,
        u = "small" === c ? 72 : 110;
    return (0, n.jsx)("div", {
        className: s.Dz,
        children: (0, n.jsxs)("div", {
            className: s.ur,
            children: [
                (0, n.jsx)(a._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
                (0, n.jsx)(a._, { showStatus: !0, width: u, opacity: 0.85, size: c }),
                (0, n.jsx)(r.A, {
                    user: t,
                    guildId: l,
                    nameplate: i,
                    className: s.tZ,
                    isHighlighted: o,
                    showPlaceholderUser: !o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, n.jsx)(a._, { showStatus: !0, width: u, opacity: 0.85, size: c }),
                (0, n.jsx)(a._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
            ],
        }),
    });
});
