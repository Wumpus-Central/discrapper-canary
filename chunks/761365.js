r.d(t, { A: () => o });
var i = r(477900),
    n = r(582128),
    l = r(130147),
    s = r(344346),
    a = r(309239);
let o = n.memo(function (e) {
    let { user: t, guildId: r, nameplate: n, isHighlighted: o, size: c = "default" } = e,
        d = "small" === c ? 62 : 94,
        u = "small" === c ? 72 : 110;
    return (0, i.jsx)("div", {
        className: a.Dz,
        children: (0, i.jsxs)("div", {
            className: a.ur,
            children: [
                (0, i.jsx)(l._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
                (0, i.jsx)(l._, { showStatus: !0, width: u, opacity: 0.85, size: c }),
                (0, i.jsx)(s.A, {
                    user: t,
                    guildId: r,
                    nameplate: n,
                    className: a.tZ,
                    isHighlighted: o,
                    showPlaceholderUser: !o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(l._, { showStatus: !0, width: u, opacity: 0.85, size: c }),
                (0, i.jsx)(l._, { showStatus: !0, width: d, opacity: 0.7, size: c }),
            ],
        }),
    });
});
