n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(17928),
    r = n(297413),
    o = n(966327),
    c = n(994500);
n(427262);
var d = n(463361);
let u = function (e) {
    let {
            user: t,
            hovered: n,
            subText: s,
            showAccountIdentifier: u,
            status: m,
            isMobile: h,
            isVR: A,
            className: x,
        } = e,
        p = (0, a.bG)([c.A], () => c.A.getNickname(t.id));
    return (0, i.jsxs)("div", {
        className: l()(d.eF, x, { [d.yo]: n }),
        children: [
            (0, i.jsx)(o.A, { user: t, className: d.my, animate: n, status: m, isMobile: h, isVR: A }),
            (0, i.jsxs)("div", {
                className: d.Qq,
                children: [
                    (0, i.jsx)(r.A, {
                        user: t,
                        nick: p,
                        botClass: d.AO,
                        className: l()(d.xK, { [d.Nu]: t.hasUniqueUsername() }),
                        usernameClass: d.Xh,
                        discriminatorClass: d.D2,
                        showAccountIdentifier: u,
                    }),
                    (0, i.jsx)("div", { className: d.W$, children: s }),
                ],
            }),
        ],
    });
};
