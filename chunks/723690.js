"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(297413),
    l = n(966327),
    u = n(994500);
n(427262);
var c = n(463361);
let d = function (e) {
    let {
            user: t,
            hovered: n,
            subText: r,
            showAccountIdentifier: d,
            status: _,
            isMobile: f,
            isVR: h,
            className: p,
        } = e,
        E = (0, a.bG)([u.A], () => u.A.getNickname(t.id));
    return (0, i.jsxs)("div", {
        className: s()(c.eF, p, { [c.yo]: n }),
        children: [
            (0, i.jsx)(l.A, { user: t, className: c.my, animate: n, status: _, isMobile: f, isVR: h }),
            (0, i.jsxs)("div", {
                className: c.Qq,
                children: [
                    (0, i.jsx)(o.A, {
                        user: t,
                        nick: E,
                        botClass: c.AO,
                        className: s()(c.xK, { [c.Nu]: t.hasUniqueUsername() }),
                        usernameClass: c.Xh,
                        discriminatorClass: c.D2,
                        showAccountIdentifier: d,
                    }),
                    (0, i.jsx)("div", { className: c.W$, children: r }),
                ],
            }),
        ],
    });
};
