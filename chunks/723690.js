i.d(t, { A: () => h });
var s = i(627968);
i(64700);
var n = i(503698),
    a = i.n(n),
    r = i(17928),
    l = i(297413),
    o = i(966327),
    u = i(994500);
i(427262);
var c = i(463361);
let h = function (e) {
    let {
            user: t,
            hovered: i,
            subText: n,
            showAccountIdentifier: h,
            status: d,
            isMobile: A,
            isVR: p,
            className: m,
        } = e,
        N = (0, r.bG)([u.A], () => u.A.getNickname(t.id));
    return (0, s.jsxs)("div", {
        className: a()(c.eF, m, { [c.yo]: i }),
        children: [
            (0, s.jsx)(o.A, { user: t, className: c.my, animate: i, status: d, isMobile: A, isVR: p }),
            (0, s.jsxs)("div", {
                className: c.Qq,
                children: [
                    (0, s.jsx)(l.A, {
                        user: t,
                        nick: N,
                        botClass: c.AO,
                        className: a()(c.xK, { [c.Nu]: t.hasUniqueUsername() }),
                        usernameClass: c.Xh,
                        discriminatorClass: c.D2,
                        showAccountIdentifier: h,
                    }),
                    (0, s.jsx)("div", { className: c.W$, children: n }),
                ],
            }),
        ],
    });
};
