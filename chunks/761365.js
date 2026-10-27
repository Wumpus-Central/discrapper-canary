n.d(t, { A: () => u });
var l = n(477900),
    r = n(582128),
    i = n(130147),
    a = n(344346),
    s = n(309239);
let u = r.memo(function (e) {
    let { user: t, guildId: n, nameplate: r, isHighlighted: u, size: c = "default" } = e,
        o = "small" === c ? 62 : 94,
        d = "small" === c ? 72 : 110;
    return (0, l.jsx)("div", {
        className: s.Dz,
        children: (0, l.jsxs)("div", {
            className: s.ur,
            children: [
                (0, l.jsx)(i._, { showStatus: !0, width: o, opacity: 0.7, size: c }),
                (0, l.jsx)(i._, { showStatus: !0, width: d, opacity: 0.85, size: c }),
                (0, l.jsx)(a.A, {
                    user: t,
                    guildId: n,
                    nameplate: r,
                    className: s.tZ,
                    isHighlighted: u,
                    showPlaceholderUser: !u,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, l.jsx)(i._, { showStatus: !0, width: d, opacity: 0.85, size: c }),
                (0, l.jsx)(i._, { showStatus: !0, width: o, opacity: 0.7, size: c }),
            ],
        }),
    });
});
