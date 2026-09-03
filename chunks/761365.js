n.d(t, { A: () => o });
var l = n(477900),
    i = n(582128),
    r = n(130147),
    a = n(344346),
    s = n(309239);
let o = i.memo(function (e) {
    let { user: t, guildId: n, nameplate: i, isHighlighted: o, size: u = "default" } = e,
        c = "small" === u ? 62 : 94,
        d = "small" === u ? 72 : 110;
    return (0, l.jsx)("div", {
        className: s.Dz,
        children: (0, l.jsxs)("div", {
            className: s.ur,
            children: [
                (0, l.jsx)(r._, { showStatus: !0, width: c, opacity: 0.7, size: u }),
                (0, l.jsx)(r._, { showStatus: !0, width: d, opacity: 0.85, size: u }),
                (0, l.jsx)(a.A, {
                    user: t,
                    guildId: n,
                    nameplate: i,
                    className: s.tZ,
                    isHighlighted: o,
                    showPlaceholderUser: !o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === u ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, l.jsx)(r._, { showStatus: !0, width: d, opacity: 0.85, size: u }),
                (0, l.jsx)(r._, { showStatus: !0, width: c, opacity: 0.7, size: u }),
            ],
        }),
    });
});
