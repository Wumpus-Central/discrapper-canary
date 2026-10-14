s.d(t, { A: () => u });
var l = s(477900),
    i = s(582128),
    a = s(130147),
    r = s(344346),
    n = s(309239);
let u = i.memo(function (e) {
    let { user: t, guildId: s, nameplate: i, isHighlighted: u, size: c = "default" } = e,
        d = "small" === c ? 62 : 94,
        o = "small" === c ? 72 : 110;
    return (0, l.jsx)("div", {
        className: n.Dz,
        children: (0, l.jsxs)("div", {
            className: n.ur,
            children: [
                (0, l.jsx)(a._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
                (0, l.jsx)(a._, { showStatus: !0, width: o, opacity: 0.85, size: c }),
                (0, l.jsx)(r.A, {
                    user: t,
                    guildId: s,
                    nameplate: i,
                    className: n.tZ,
                    isHighlighted: u,
                    showPlaceholderUser: !u,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, l.jsx)(a._, { showStatus: !0, width: o, opacity: 0.85, size: c }),
                (0, l.jsx)(a._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
            ],
        }),
    });
});
