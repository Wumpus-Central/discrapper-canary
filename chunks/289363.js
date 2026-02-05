a.r(s), a.d(s, { default: () => u });
var l = a(627968),
    r = a(64700),
    c = a(311907),
    i = a(397927),
    t = a(769015),
    d = a(287809),
    m = a(486020),
    p = a(239031);
let u = r.memo(function (e) {
    let { application: s } = e,
        a = (0, c.bG)([d.default], () => d.default.getCurrentUser()),
        r = m.Ay.getUserAvatarURL(a);
    return (0, l.jsxs)("div", {
        className: p.Y,
        children: [
            (0, l.jsx)(t.A, { className: p.my, game: s, size: t.M.MEDIUM, "aria-label": s.name }),
            (0, l.jsxs)("div", {
                className: p.I5,
                children: [
                    (0, l.jsx)("div", { className: p.pw }),
                    (0, l.jsx)("div", { className: p.pw }),
                    (0, l.jsx)("div", { className: p.pw }),
                ],
            }),
            (0, l.jsx)(i.euF, { className: p.my, src: r, size: i._3J.SIZE_48, "aria-label": a.username }),
        ],
    });
});
