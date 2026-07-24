l.d(t, { A: () => o });
var i = l(627968),
    a = l(64700),
    n = l(130147),
    s = l(344346),
    r = l(507646);
let o = a.memo(function (e) {
    let { user: t, guildId: l, nameplate: a, isHighlighted: o, size: c = "default" } = e,
        d = "small" === c ? 62 : 94,
        h = "small" === c ? 72 : 110;
    return (0, i.jsx)("div", {
        className: r.Dz,
        children: (0, i.jsxs)("div", {
            className: r.ur,
            children: [
                (0, i.jsx)(n._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
                (0, i.jsx)(n._, { showStatus: !0, width: h, opacity: 0.85, size: c }),
                (0, i.jsx)(s.A, {
                    user: t,
                    guildId: l,
                    nameplate: a,
                    className: r.tZ,
                    isHighlighted: o,
                    showPlaceholderUser: !o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(n._, { showStatus: !0, width: h, opacity: 0.85, size: c }),
                (0, i.jsx)(n._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
            ],
        }),
    });
});
