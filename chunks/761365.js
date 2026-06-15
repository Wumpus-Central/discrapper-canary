"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(64700),
    s = n(130147),
    a = n(344346),
    o = n(101206);
let l = r.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: r, size: l = "default" } = e,
        u = "small" === l ? 62 : 94,
        c = "small" === l ? 72 : 110;
    return (0, i.jsx)("div", {
        className: o.Dz,
        children: (0, i.jsxs)("div", {
            className: o.ur,
            children: [
                (0, i.jsx)(s._, { showStatus: !0, width: u, opacity: 0.7, size: l }),
                (0, i.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: l }),
                (0, i.jsx)(a.A, {
                    user: t,
                    nameplate: n,
                    className: o.tZ,
                    isHighlighted: r,
                    showPlaceholderUser: !r,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === l ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: l }),
                (0, i.jsx)(s._, { showStatus: !0, width: u, opacity: 0.7, size: l }),
            ],
        }),
    });
});
