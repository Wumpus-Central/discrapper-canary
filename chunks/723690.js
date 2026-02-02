i.d(t, {
    A: () => h,
});
var s = i(627968);
i(64700);
var n = i(503698),
    r = i.n(n),
    o = i(311907),
    a = i(297413),
    l = i(966327),
    u = i(994500);
i(427262);
var c = i(156528);
let h = function (e) {
    let {
            user: t,
            hovered: i,
            subText: n,
            showAccountIdentifier: h,
            status: p,
            isMobile: d,
            isVR: m,
            className: A,
        } = e,
        y = (0, o.bG)([u.A], () => u.A.getNickname(t.id));
    return (0, s.jsxs)("div", {
        className: r()(c.eF, A, {
            [c.yo]: i,
        }),
        children: [
            (0, s.jsx)(l.A, {
                user: t,
                className: c.my,
                animate: i,
                status: p,
                isMobile: d,
                isVR: m,
            }),
            (0, s.jsxs)("div", {
                className: c.Qq,
                children: [
                    (0, s.jsx)(a.A, {
                        user: t,
                        nick: y,
                        botClass: c.AO,
                        className: r()(c.xK, {
                            [c.ID]: t.hasUniqueUsername(),
                        }),
                        usernameClass: c.Xh,
                        discriminatorClass: c.D2,
                        showAccountIdentifier: h,
                    }),
                    (0, s.jsx)("div", {
                        className: c.W$,
                        children: n,
                    }),
                ],
            }),
        ],
    });
};
