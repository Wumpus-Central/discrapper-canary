"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(130147),
    s = n(344346),
    l = n(101206);
let o = r.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: r, size: o = "default" } = e,
        d = "small" === o ? 62 : 94,
        c = "small" === o ? 72 : 110;
    return (0, i.jsx)("div", {
        className: l.Dz,
        children: (0, i.jsxs)("div", {
            className: l.ur,
            children: [
                (0, i.jsx)(a._, { showStatus: !0, width: d, opacity: 0.7, size: o }),
                (0, i.jsx)(a._, { showStatus: !0, width: c, opacity: 0.85, size: o }),
                (0, i.jsx)(s.A, {
                    user: t,
                    nameplate: n,
                    className: l.tZ,
                    isHighlighted: r,
                    showPlaceholderUser: !r,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === o ? "small" : "default",
                    hideDecorators: !0,
                }),
                (0, i.jsx)(a._, { showStatus: !0, width: c, opacity: 0.85, size: o }),
                (0, i.jsx)(a._, { showStatus: !0, width: d, opacity: 0.7, size: o }),
            ],
        }),
    });
});
