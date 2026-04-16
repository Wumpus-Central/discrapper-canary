n.r(t), n.d(t, { default: () => p });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(303136),
    d = n(769015),
    u = n(287809),
    m = n(486020),
    f = n(60934),
    x = n(268920),
    h = n(633217);
let g = () =>
        (0, a.jsx)("div", {
            className: f.Vi,
            children: (0, a.jsx)(c.A, { src: h.A, fallbackImage: x.A, className: f.LG }),
        }),
    p = l.memo(function (e) {
        let { application: t, isIncentivizedAccountLinking: n } = e,
            l = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            i = m.Ay.getUserAvatarURL(l),
            c = r()(f.pw, { [f.yi]: n });
        return (0, a.jsxs)("div", {
            className: r()(f.Y, { [f.VT]: n }),
            children: [
                (0, a.jsx)(d.A, { className: f.my, game: t, size: d.M.MEDIUM, "aria-label": t.name }),
                (0, a.jsxs)("div", {
                    className: r()(f.I5, { [f.BE]: n }),
                    children: [
                        (0, a.jsx)("div", { className: c }),
                        n ? (0, a.jsx)(g, {}) : (0, a.jsx)("div", { className: c }),
                        (0, a.jsx)("div", { className: c }),
                    ],
                }),
                (0, a.jsx)(o.euF, { className: f.my, src: i, size: o._3J.SIZE_48, "aria-label": l.username }),
            ],
        });
    });
