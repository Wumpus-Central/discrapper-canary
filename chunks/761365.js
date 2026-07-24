l.d(t, { A: () => o });
var a = l(627968),
    i = l(64700),
    n = l(130147),
    r = l(344346),
    s = l(507646);
let o = i.memo(function (e) {
    let { user: t, guildId: l, nameplate: i, isHighlighted: o, size: c = "default" } = e,
        d = "small" === c ? 62 : 94,
        h = "small" === c ? 72 : 110;
    return (0, a.jsx)("div", {
        className: s.Dz,
        children: (0, a.jsxs)("div", {
            className: s.ur,
            children: [
                (0, a.jsx)(n._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
                (0, a.jsx)(n._, { showStatus: !0, width: h, opacity: 0.85, size: c }),
                (0, a.jsx)(r.A, {
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
                (0, a.jsx)(n._, { showStatus: !0, width: h, opacity: 0.85, size: c }),
                (0, a.jsx)(n._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
            ],
        }),
    });
});
