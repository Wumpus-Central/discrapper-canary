e.r(a);
var l = e(477900),
    i = e(582128),
    c = e(503698),
    r = e.n(c),
    d = e(855986),
    m = e(97808),
    n = e(778712),
    t = e(303136),
    u = e(769015),
    j = e(287809),
    x = e(486020),
    N = e(519993),
    v = e(268920),
    h = e(633217);
function f() {
    return (0, l.jsx)("div", {
        className: N.Vi,
        children: (0, l.jsx)(t.A, { src: h.A, fallbackImage: v.A, className: N.LG }),
    });
}
function p() {
    let s = r()(N.pw, N.J9, N.uq);
    return (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: N.Y,
        children: [
            (0, l.jsx)("div", { className: r()(N.my, N.J9, N.Js) }),
            (0, l.jsxs)("div", {
                className: N.I5,
                children: [
                    (0, l.jsx)("div", { className: s }),
                    (0, l.jsx)("div", { className: s }),
                    (0, l.jsx)("div", { className: s }),
                ],
            }),
            (0, l.jsx)("div", { className: r()(N.my, N.J9, N.zw) }),
        ],
    });
}
let b = i.memo(function (s) {
    let { application: a, isIncentivizedAccountLinking: e, isLoading: i } = s,
        c = (0, d.bG)([j.default], () => j.default.getCurrentUser());
    if (i) return (0, l.jsx)(p, {});
    if (null == a || null == c) return null;
    let t = x.Ay.getUserAvatarURL(c),
        v = r()(N.pw, { [N.yi]: e });
    return (0, l.jsxs)("div", {
        className: r()(N.Y, { [N.VT]: e }),
        children: [
            (0, l.jsx)(u.A, { className: N.my, game: a, size: u.M.MEDIUM, "aria-label": a.name }),
            (0, l.jsxs)("div", {
                className: r()(N.I5, { [N.BE]: e }),
                children: [
                    (0, l.jsx)("div", { className: v }),
                    e ? (0, l.jsx)(f, {}) : (0, l.jsx)("div", { className: v }),
                    (0, l.jsx)("div", { className: v }),
                ],
            }),
            (0, l.jsx)(m.eu, { className: N.my, src: t, size: n._3.SIZE_48, "aria-label": c.username }),
        ],
    });
});
e.d(a, {}, { default: b });
