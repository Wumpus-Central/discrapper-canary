s.r(a), s.d(a, { default: () => u });
var l = s(951288),
    r = s(647438),
    i = s(442837),
    c = s(481060),
    t = s(925329),
    p = s(594174),
    d = s(768581),
    n = s(801298);
let u = r.memo(function (e) {
    let { application: a } = e,
        s = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        r = d.ZP.getUserAvatarURL(s);
    return (0, l.jsxs)("div", {
        className: n.headerIcons,
        children: [
            (0, l.jsx)(t.Z, {
                className: n.avatar,
                game: a,
                size: t.A.MEDIUM,
                "aria-label": a.name,
            }),
            (0, l.jsxs)("div", {
                className: n.ellipseGroup,
                children: [
                    (0, l.jsx)("div", { className: n.ellipse }),
                    (0, l.jsx)("div", { className: n.ellipse }),
                    (0, l.jsx)("div", { className: n.ellipse }),
                ],
            }),
            (0, l.jsx)(c.qEK, {
                className: n.avatar,
                src: r,
                size: c.EFr.SIZE_48,
                "aria-label": s.username,
            }),
        ],
    });
});
