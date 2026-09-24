r.d(t, { A: () => u });
var i = r(477900),
    n = r(582128),
    s = r(130147),
    l = r(344346),
    a = r(309239);
let u = n.memo(function (e) {
    let { user: t, guildId: r, nameplate: n, isHighlighted: u, size: o = "default" } = e,
        c = "small" === o ? 62 : 94,
        d = "small" === o ? 72 : 110;
    return (0, i.jsx)("div", {
        className: a.Dz,
        children: (0, i.jsxs)("div", {
            className: a.ur,
            children: [
                (0, i.jsx)(s._, { showStatus: !0, width: c, opacity: 0.7, size: o }),
                (0, i.jsx)(s._, { showStatus: !0, width: d, opacity: 0.85, size: o }),
                (0, i.jsx)(l.A, {
                    user: t,
                    guildId: r,
                    nameplate: n,
                    className: a.tZ,
                    isHighlighted: u,
                    showPlaceholderUser: !u,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(s._, { showStatus: !0, width: d, opacity: 0.85, size: o }),
                (0, i.jsx)(s._, { showStatus: !0, width: c, opacity: 0.7, size: o }),
            ],
        }),
    });
});
