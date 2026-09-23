r.d(t, { A: () => o });
var n = r(477900),
    i = r(582128),
    l = r(130147),
    a = r(344346),
    s = r(309239);
let o = i.memo(function (e) {
    let { user: t, guildId: r, nameplate: i, isHighlighted: o, size: u = "default" } = e,
        c = "small" === u ? 62 : 94,
        d = "small" === u ? 72 : 110;
    return (0, n.jsx)("div", {
        className: s.Dz,
        children: (0, n.jsxs)("div", {
            className: s.ur,
            children: [
                (0, n.jsx)(l._, { showStatus: !0, width: c, opacity: 0.7, size: u }),
                (0, n.jsx)(l._, { showStatus: !0, width: d, opacity: 0.85, size: u }),
                (0, n.jsx)(a.A, {
                    user: t,
                    guildId: r,
                    nameplate: i,
                    className: s.tZ,
                    isHighlighted: o,
                    showPlaceholderUser: !o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === u ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, n.jsx)(l._, { showStatus: !0, width: d, opacity: 0.85, size: u }),
                (0, n.jsx)(l._, { showStatus: !0, width: c, opacity: 0.7, size: u }),
            ],
        }),
    });
});
