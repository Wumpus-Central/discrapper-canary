e.r(a), e.d(a, { default: () => b });
var l = e(627968),
    c = e(64700),
    i = e(503698),
    r = e.n(i),
    d = e(17928),
    m = e(97808),
    t = e(778712),
    n = e(303136),
    u = e(137177),
    j = e(287809),
    x = e(486020),
    N = e(60934),
    h = e(268920),
    p = e(633217);
let v = () =>
        (0, l.jsx)("div", {
            className: N.Vi,
            children: (0, l.jsx)(n.A, { src: p.A, fallbackImage: h.A, className: N.LG }),
        }),
    b = c.memo(function (s) {
        let { application: a, isIncentivizedAccountLinking: e } = s,
            c = (0, d.bG)([j.default], () => j.default.getCurrentUser()),
            i = x.Ay.getUserAvatarURL(c),
            n = r()(N.pw, { [N.yi]: e });
        return (0, l.jsxs)("div", {
            className: r()(N.Y, { [N.VT]: e }),
            children: [
                (0, l.jsx)(u.A, { className: N.my, game: a, size: u.M.MEDIUM, "aria-label": a.name }),
                (0, l.jsxs)("div", {
                    className: r()(N.I5, { [N.BE]: e }),
                    children: [
                        (0, l.jsx)("div", { className: n }),
                        e ? (0, l.jsx)(v, {}) : (0, l.jsx)("div", { className: n }),
                        (0, l.jsx)("div", { className: n }),
                    ],
                }),
                (0, l.jsx)(m.eu, { className: N.my, src: i, size: t._3.SIZE_48, "aria-label": c.username }),
            ],
        });
    });
