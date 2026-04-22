n.r(t), n.d(t, { default: () => x });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(97808),
    d = n(778712),
    c = n(303136),
    u = n(769015),
    m = n(287809),
    _ = n(486020),
    h = n(495814),
    f = n(268920),
    g = n(633217);
let p = () =>
        (0, a.jsx)("div", {
            className: h.Vi,
            children: (0, a.jsx)(c.A, { src: g.A, fallbackImage: f.A, className: h.LG }),
        }),
    x = l.memo(function (e) {
        let { application: t, isIncentivizedAccountLinking: n } = e,
            l = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
            i = _.Ay.getUserAvatarURL(l),
            c = r()(h.pw, { [h.yi]: n });
        return (0, a.jsxs)("div", {
            className: r()(h.Y, { [h.VT]: n }),
            children: [
                (0, a.jsx)(u.A, { className: h.my, game: t, size: u.M.MEDIUM, "aria-label": t.name }),
                (0, a.jsxs)("div", {
                    className: r()(h.I5, { [h.BE]: n }),
                    children: [
                        (0, a.jsx)("div", { className: c }),
                        n ? (0, a.jsx)(p, {}) : (0, a.jsx)("div", { className: c }),
                        (0, a.jsx)("div", { className: c }),
                    ],
                }),
                (0, a.jsx)(o.eu, { className: h.my, src: i, size: d._3.SIZE_48, "aria-label": l.username }),
            ],
        });
    });
