"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(297413),
    o = n(966327),
    d = n(994500);
n(427262);
var c = n(463361);
let u = function (e) {
    let {
            user: t,
            hovered: n,
            subText: r,
            showAccountIdentifier: u,
            status: _,
            isMobile: E,
            isVR: A,
            className: h,
        } = e,
        I = (0, s.bG)([d.A], () => d.A.getNickname(t.id));
    return (0, i.jsxs)("div", {
        className: a()(c.eF, h, { [c.yo]: n }),
        children: [
            (0, i.jsx)(o.A, { user: t, className: c.my, animate: n, status: _, isMobile: E, isVR: A }),
            (0, i.jsxs)("div", {
                className: c.Qq,
                children: [
                    (0, i.jsx)(l.A, {
                        user: t,
                        nick: I,
                        botClass: c.AO,
                        className: a()(c.xK, { [c.Nu]: t.hasUniqueUsername() }),
                        usernameClass: c.Xh,
                        discriminatorClass: c.D2,
                        showAccountIdentifier: u,
                    }),
                    (0, i.jsx)("div", { className: c.W$, children: r }),
                ],
            }),
        ],
    });
};
