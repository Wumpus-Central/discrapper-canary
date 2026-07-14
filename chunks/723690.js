s.d(t, { A: () => y });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    l = s(17928),
    o = s(778712),
    u = s(97808),
    h = s(297413),
    c = s(966327),
    d = s(562819),
    A = s(963977),
    m = s(386467),
    p = s(956705),
    N = s(994500);
s(427262);
var I = s(19575),
    E = s(463361);
let g = I.Ay.getEnableHardwareAcceleration(),
    y = function (e) {
        let {
                user: t,
                hovered: s,
                subText: a,
                showAccountIdentifier: I,
                status: y,
                isMobile: f,
                isVR: v,
                className: C,
            } = e,
            L = (0, l.bG)([N.A], () => N.A.getNickname(t.id)),
            D = n.useContext(m.A),
            S = (0, p.r)("PeopleUserInfo"),
            w = t.getAvatarURL(D, (0, o.FT)(o._3.SIZE_32), s),
            {
                avatarDecorationSrc: G,
                eventHandlers: { onMouseEnter: _, onMouseLeave: x },
            } = (0, A.A)({ user: t, guildId: D, size: (0, d.Te)(o._3.SIZE_32), onlyAnimateOnHoverOrFocus: !0 });
        n.useEffect(() => {
            S && (s ? _() : x());
        }, [s, S, _, x]);
        let R = g ? u.Js : u.eu;
        return (0, i.jsxs)("div", {
            className: r()(E.eF, C, { [E.yo]: s }),
            children: [
                S
                    ? (0, i.jsx)(R, {
                          src: w,
                          size: o._3.SIZE_32,
                          status: y,
                          isMobile: f,
                          isVR: v,
                          avatarDecoration: G,
                          "aria-label": t.username,
                          className: E.my,
                      })
                    : (0, i.jsx)(c.A, { user: t, className: E.my, animate: s, status: y, isMobile: f, isVR: v }),
                (0, i.jsxs)("div", {
                    className: E.Qq,
                    children: [
                        (0, i.jsx)(h.A, {
                            user: t,
                            nick: L,
                            botClass: E.AO,
                            className: r()(E.xK, { [E.Nu]: t.hasUniqueUsername() }),
                            usernameClass: E.Xh,
                            discriminatorClass: E.D2,
                            showAccountIdentifier: I,
                            showGuildTag: S,
                        }),
                        (0, i.jsx)("div", { className: E.W$, children: a }),
                    ],
                }),
            ],
        });
    };
