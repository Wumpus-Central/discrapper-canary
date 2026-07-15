"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(130147),
    s = n(344346),
    l = n(101206);
let o = r.memo(function (e) {
    let { user: t, guildId: n, nameplate: r, isHighlighted: o, size: d = "default" } = e,
        c = "small" === d ? 62 : 94,
        u = "small" === d ? 72 : 110;
    return (0, i.jsx)("div", {
        className: l.Dz,
        children: (0, i.jsxs)("div", {
            className: l.ur,
            children: [
                (0, i.jsx)(a._, { showStatus: !0, width: c, opacity: 0.7, size: d }),
                (0, i.jsx)(a._, { showStatus: !0, width: u, opacity: 0.85, size: d }),
                (0, i.jsx)(s.A, {
                    user: t,
                    guildId: n,
                    nameplate: r,
                    className: l.tZ,
                    isHighlighted: o,
                    showPlaceholderUser: !o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === d ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(a._, { showStatus: !0, width: u, opacity: 0.85, size: d }),
                (0, i.jsx)(a._, { showStatus: !0, width: c, opacity: 0.7, size: d }),
            ],
        }),
    });
});
