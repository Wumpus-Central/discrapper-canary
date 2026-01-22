i.d(t, {
    A: () => h,
});
var n = i(627968);
i(64700);
var s = i(503698),
    r = i.n(s),
    a = i(311907),
    o = i(297413),
    l = i(966327),
    u = i(994500);
i(427262);
var c = i(156528);
let h = function (e) {
    let { user: t, hovered: i, subText: s, showAccountIdentifier: h, status: p, isMobile: d, className: m } = e,
        A = (0, a.bG)([u.A], () => u.A.getNickname(t.id));
    return (0, n.jsxs)("div", {
        className: r()(c.eF, m, {
            [c.yo]: i,
        }),
        children: [
            (0, n.jsx)(l.A, {
                user: t,
                className: c.my,
                animate: i,
                status: p,
                isMobile: d,
            }),
            (0, n.jsxs)("div", {
                className: c.Qq,
                children: [
                    (0, n.jsx)(o.A, {
                        user: t,
                        nick: A,
                        botClass: c.AO,
                        className: r()(c.xK, {
                            [c.ID]: t.hasUniqueUsername(),
                        }),
                        usernameClass: c.Xh,
                        discriminatorClass: c.D2,
                        showAccountIdentifier: h,
                    }),
                    (0, n.jsx)("div", {
                        className: c.W$,
                        children: s,
                    }),
                ],
            }),
        ],
    });
};
