"use strict";
n.d(t, { A: () => c });
var a = n(627968),
    i = n(64700),
    l = n(130147),
    r = n(344346),
    s = n(101206);
let c = i.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: i, size: c = "default" } = e,
        o = "small" === c ? 62 : 94,
        d = "small" === c ? 72 : 110;
    return (0, a.jsx)("div", {
        className: s.Dz,
        children: (0, a.jsxs)("div", {
            className: s.ur,
            children: [
                (0, a.jsx)(l._, { showStatus: !0, width: o, opacity: 0.7, size: c }),
                (0, a.jsx)(l._, { showStatus: !0, width: d, opacity: 0.85, size: c }),
                (0, a.jsx)(r.A, {
                    user: t,
                    nameplate: n,
                    className: s.tZ,
                    isHighlighted: i,
                    showPlaceholderUser: !i,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === c ? "small" : "default",
                }),
                (0, a.jsx)(l._, { showStatus: !0, width: d, opacity: 0.85, size: c }),
                (0, a.jsx)(l._, { showStatus: !0, width: o, opacity: 0.7, size: c }),
            ],
        }),
    });
});
