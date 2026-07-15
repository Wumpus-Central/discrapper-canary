"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(778712),
    d = n(97808),
    c = n(297413),
    u = n(966327),
    _ = n(562819),
    E = n(963977),
    A = n(386467),
    h = n(956705),
    I = n(994500);
n(427262);
var f = n(19575),
    p = n(463361);
let T = f.Ay.getEnableHardwareAcceleration(),
    m = function (e) {
        let {
                user: t,
                hovered: n,
                subText: a,
                showAccountIdentifier: f,
                status: m,
                isMobile: g,
                isVR: S,
                className: N,
            } = e,
            C = (0, l.bG)([I.A], () => I.A.getNickname(t.id)),
            R = r.useContext(A.A),
            O = (0, h.r)("PeopleUserInfo"),
            L = t.getAvatarURL(R, (0, o.FT)(o._3.SIZE_32), n),
            {
                avatarDecorationSrc: D,
                eventHandlers: { onMouseEnter: y, onMouseLeave: v },
            } = (0, E.A)({ user: t, guildId: R, size: (0, _.Te)(o._3.SIZE_32), onlyAnimateOnHoverOrFocus: !0 });
        r.useEffect(() => {
            O && (n ? y() : v());
        }, [n, O, y, v]);
        let b = T ? d.Js : d.eu;
        return (0, i.jsxs)("div", {
            className: s()(p.eF, N, { [p.yo]: n }),
            children: [
                O
                    ? (0, i.jsx)(b, {
                          src: L,
                          size: o._3.SIZE_32,
                          status: m,
                          isMobile: g,
                          isVR: S,
                          avatarDecoration: D,
                          "aria-label": t.username,
                          className: p.my,
                      })
                    : (0, i.jsx)(u.A, { user: t, className: p.my, animate: n, status: m, isMobile: g, isVR: S }),
                (0, i.jsxs)("div", {
                    className: p.Qq,
                    children: [
                        (0, i.jsx)(c.A, {
                            user: t,
                            nick: C,
                            botClass: p.AO,
                            className: s()(p.xK, { [p.Nu]: t.hasUniqueUsername() }),
                            usernameClass: p.Xh,
                            discriminatorClass: p.D2,
                            showAccountIdentifier: f,
                            showGuildTag: O,
                        }),
                        (0, i.jsx)("div", { className: p.W$, children: a }),
                    ],
                }),
            ],
        });
    };
