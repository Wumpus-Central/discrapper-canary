s.r(a), s.d(a, { default: () => n });
var l = s(54381),
    r = s(473749),
    c = s(442837),
    i = s(481060),
    t = s(925329),
    p = s(594174),
    d = s(768581),
    f = s(843731);
let n = r.memo(function (e) {
    let { application: a } = e,
        s = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
        r = d.ZP.getUserAvatarURL(s);
    return (0, l.jsxs)("div", {
        className: f.headerIcons,
        children: [
            (0, l.jsx)(t.Z, {
                className: f.avatar,
                game: a,
                size: t.A.MEDIUM,
                "aria-label": a.name,
            }),
            (0, l.jsxs)("div", {
                className: f.ellipseGroup,
                children: [
                    (0, l.jsx)("div", { className: f.ellipse }),
                    (0, l.jsx)("div", { className: f.ellipse }),
                    (0, l.jsx)("div", { className: f.ellipse }),
                ],
            }),
            (0, l.jsx)(i.qEK, {
                className: f.avatar,
                src: r,
                size: i.EFr.SIZE_48,
                "aria-label": s.username,
            }),
        ],
    });
});
