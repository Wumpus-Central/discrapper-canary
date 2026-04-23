n.r(t), n.d(t, { default: () => x });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(17928),
    o = n(97808),
    c = n(778712),
    d = n(303136),
    u = n(137177),
    m = n(287809),
    h = n(486020),
    f = n(60934),
    _ = n(268920),
    g = n(633217);
let p = () =>
        (0, l.jsx)("div", {
            className: f.Vi,
            children: (0, l.jsx)(d.A, { src: g.A, fallbackImage: _.A, className: f.LG }),
        }),
    x = a.memo(function (e) {
        let { application: t, isIncentivizedAccountLinking: n } = e,
            a = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
            i = h.Ay.getUserAvatarURL(a),
            d = r()(f.pw, { [f.yi]: n });
        return (0, l.jsxs)("div", {
            className: r()(f.Y, { [f.VT]: n }),
            children: [
                (0, l.jsx)(u.A, { className: f.my, game: t, size: u.M.MEDIUM, "aria-label": t.name }),
                (0, l.jsxs)("div", {
                    className: r()(f.I5, { [f.BE]: n }),
                    children: [
                        (0, l.jsx)("div", { className: d }),
                        n ? (0, l.jsx)(p, {}) : (0, l.jsx)("div", { className: d }),
                        (0, l.jsx)("div", { className: d }),
                    ],
                }),
                (0, l.jsx)(o.eu, { className: f.my, src: i, size: c._3.SIZE_48, "aria-label": a.username }),
            ],
        });
    });
