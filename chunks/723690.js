s.d(t, { A: () => c });
var i = s(627968);
s(64700);
var n = s(503698),
    a = s.n(n),
    r = s(311907),
    l = s(297413),
    o = s(966327),
    u = s(994500);
s(427262);
var h = s(30626);
let c = function (e) {
    let {
            user: t,
            hovered: s,
            subText: n,
            showAccountIdentifier: c,
            status: A,
            isMobile: m,
            isVR: d,
            className: p,
        } = e,
        N = (0, r.bG)([u.A], () => u.A.getNickname(t.id));
    return (0, i.jsxs)("div", {
        className: a()(h.eF, p, { [h.yo]: s }),
        children: [
            (0, i.jsx)(o.A, { user: t, className: h.my, animate: s, status: A, isMobile: m, isVR: d }),
            (0, i.jsxs)("div", {
                className: h.Qq,
                children: [
                    (0, i.jsx)(l.A, {
                        user: t,
                        nick: N,
                        botClass: h.AO,
                        className: a()(h.xK, { [h.Nu]: t.hasUniqueUsername() }),
                        usernameClass: h.Xh,
                        discriminatorClass: h.D2,
                        showAccountIdentifier: c,
                    }),
                    (0, i.jsx)("div", { className: h.W$, children: n }),
                ],
            }),
        ],
    });
};
