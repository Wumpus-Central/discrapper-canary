"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    s = n(359701),
    a = n(550111),
    o = n(488189);
let l = i.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: i, size: l = "default" } = e,
        u = "small" === l ? 62 : 94,
        c = "small" === l ? 72 : 110;
    return (0, r.jsx)("div", {
        className: o.Dz,
        children: (0, r.jsxs)("div", {
            className: o.ur,
            children: [
                (0, r.jsx)(s._, { showStatus: !0, width: u, opacity: 0.7, size: l }),
                (0, r.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: l }),
                (0, r.jsx)(a.A, {
                    user: t,
                    nameplate: n,
                    className: o.tZ,
                    isHighlighted: i,
                    showPlaceholderUser: !i,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === l ? "small" : "default",
                }),
                (0, r.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: l }),
                (0, r.jsx)(s._, { showStatus: !0, width: u, opacity: 0.7, size: l }),
            ],
        }),
    });
});
