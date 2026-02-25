n.d(t, { A: () => o });
var l = n(627968),
    i = n(64700),
    s = n(359701),
    r = n(550111),
    a = n(988347);
let o = i.memo(function (e) {
    let { user: t, nameplate: n, isHighlighted: i, showDefaultAvatar: o = !1, size: u = "default" } = e,
        d = "small" === u ? 62 : 94,
        c = "small" === u ? 72 : 110;
    return (0, l.jsx)("div", {
        className: a.Dz,
        children: (0, l.jsxs)("div", {
            className: a.ur,
            children: [
                (0, l.jsx)(s._, { showStatus: !0, width: d, opacity: 0.7, size: u }),
                (0, l.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: u }),
                (0, l.jsx)(r.A, {
                    user: t,
                    nameplate: n,
                    className: a.tZ,
                    isHighlighted: i,
                    showPlaceholderUser: !i || o,
                    showStatus: !0,
                    nameplatePreviewSize: "small" === u ? "small" : "default",
                }),
                (0, l.jsx)(s._, { showStatus: !0, width: c, opacity: 0.85, size: u }),
                (0, l.jsx)(s._, { showStatus: !0, width: d, opacity: 0.7, size: u }),
            ],
        }),
    });
});
