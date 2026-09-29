r.d(t, { A: () => c });
var s = r(477900),
    i = r(582128),
    l = r(130147),
    n = r(344346),
    a = r(309239);
let c = i.memo(function (e) {
    let { user: t, guildId: r, nameplate: i, isHighlighted: c, size: u = "default" } = e,
        d = "small" === u ? 62 : 94,
        o = "small" === u ? 72 : 110;
    return (0, s.jsx)("div", {
        className: a.Dz,
        children: (0, s.jsxs)("div", {
            className: a.ur,
            children: [
                (0, s.jsx)(l._, { showStatus: !0, width: d, opacity: 0.7, size: u }),
                (0, s.jsx)(l._, { showStatus: !0, width: o, opacity: 0.85, size: u }),
                (0, s.jsx)(n.A, {
                    user: t,
                    guildId: r,
                    nameplate: i,
                    className: a.tZ,
                    isHighlighted: c,
                    showPlaceholderUser: !c,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === u ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, s.jsx)(l._, { showStatus: !0, width: o, opacity: 0.85, size: u }),
                (0, s.jsx)(l._, { showStatus: !0, width: d, opacity: 0.7, size: u }),
            ],
        }),
    });
});
