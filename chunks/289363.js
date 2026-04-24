"use strict";
n.r(t), n.d(t, { default: () => x });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(17928),
    c = n(97808),
    o = n(778712),
    d = n(303136),
    u = n(137177),
    m = n(287809),
    f = n(486020),
    h = n(60934),
    _ = n(268920),
    g = n(633217);
let p = () =>
        (0, a.jsx)("div", {
            className: h.Vi,
            children: (0, a.jsx)(d.A, { src: g.A, fallbackImage: _.A, className: h.LG }),
        }),
    x = i.memo(function (e) {
        let { application: t, isIncentivizedAccountLinking: n } = e,
            i = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
            l = f.Ay.getUserAvatarURL(i),
            d = r()(h.pw, { [h.yi]: n });
        return (0, a.jsxs)("div", {
            className: r()(h.Y, { [h.VT]: n }),
            children: [
                (0, a.jsx)(u.A, { className: h.my, game: t, size: u.M.MEDIUM, "aria-label": t.name }),
                (0, a.jsxs)("div", {
                    className: r()(h.I5, { [h.BE]: n }),
                    children: [
                        (0, a.jsx)("div", { className: d }),
                        n ? (0, a.jsx)(p, {}) : (0, a.jsx)("div", { className: d }),
                        (0, a.jsx)("div", { className: d }),
                    ],
                }),
                (0, a.jsx)(c.eu, { className: h.my, src: l, size: o._3.SIZE_48, "aria-label": i.username }),
            ],
        });
    });
