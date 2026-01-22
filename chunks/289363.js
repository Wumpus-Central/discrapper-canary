e.r(s),
    e.d(s, {
        default: () => u,
    });
var c = e(627968),
    r = e(64700),
    d = e(311907),
    l = e(397927),
    i = e(769015),
    t = e(287809),
    m = e(486020),
    p = e(239031);
let u = r.memo(function (a) {
    let { application: s } = a,
        e = (0, d.bG)([t.default], () => t.default.getCurrentUser()),
        r = m.Ay.getUserAvatarURL(e);
    return (0, c.jsxs)("div", {
        className: p.Y,
        children: [
            (0, c.jsx)(i.A, {
                className: p.my,
                game: s,
                size: i.M.MEDIUM,
                "aria-label": s.name,
            }),
            (0, c.jsxs)("div", {
                className: p.I5,
                children: [
                    (0, c.jsx)("div", {
                        className: p.pw,
                    }),
                    (0, c.jsx)("div", {
                        className: p.pw,
                    }),
                    (0, c.jsx)("div", {
                        className: p.pw,
                    }),
                ],
            }),
            (0, c.jsx)(l.euF, {
                className: p.my,
                src: r,
                size: l._3J.SIZE_48,
                "aria-label": e.username,
            }),
        ],
    });
});
