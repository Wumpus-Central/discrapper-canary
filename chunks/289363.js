n.r(t), n.d(t, { default: () => p });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(397927),
    c = n(303136),
    d = n(769015),
    u = n(287809),
    m = n(486020),
    f = n(998518),
    x = n(268920),
    h = n(633217);
let g = () =>
        (0, a.jsx)("div", {
            className: f.Vi,
            children: (0, a.jsx)(c.A, { src: h.A, fallbackImage: x.A, className: f.LG }),
        }),
    p = i.memo(function (e) {
        let { application: t, isIncentivizedAccountLinking: n } = e,
            i = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            l = m.Ay.getUserAvatarURL(i),
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
                (0, a.jsx)(o.euF, { className: f.my, src: l, size: o._3J.SIZE_48, "aria-label": i.username }),
            ],
        });
    });
