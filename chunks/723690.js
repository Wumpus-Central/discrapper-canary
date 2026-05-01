s.d(t, { A: () => u });
var i = s(627968);
s(64700);
var n = s(503698),
    a = s.n(n),
    l = s(17928),
    o = s(297413),
    r = s(966327),
    c = s(994500);
s(427262);
var h = s(463361);
let u = function (e) {
    let {
            user: t,
            hovered: s,
            subText: n,
            showAccountIdentifier: u,
            status: d,
            isMobile: p,
            isVR: v,
            className: A,
        } = e,
        m = (0, l.bG)([c.A], () => c.A.getNickname(t.id));
    return (0, i.jsxs)("div", {
        className: a()(h.eF, A, { [h.yo]: s }),
        children: [
            (0, i.jsx)(r.A, { user: t, className: h.my, animate: s, status: d, isMobile: p, isVR: v }),
            (0, i.jsxs)("div", {
                className: h.Qq,
                children: [
                    (0, i.jsx)(o.A, {
                        user: t,
                        nick: m,
                        botClass: h.AO,
                        className: a()(h.xK, { [h.Nu]: t.hasUniqueUsername() }),
                        usernameClass: h.Xh,
                        discriminatorClass: h.D2,
                        showAccountIdentifier: u,
                    }),
                    (0, i.jsx)("div", { className: h.W$, children: n }),
                ],
            }),
        ],
    });
};
