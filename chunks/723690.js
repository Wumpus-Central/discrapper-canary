var i = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
    l = s(855986),
    o = s(778712),
    u = s(97808),
    c = s(297413),
    h = s(562819),
    d = s(215689),
    A = s(386467),
    m = s(994500);
s(427262);
var p = s(253400),
    N = s(803790);
let I = p.Ay.getEnableHardwareAcceleration();
s.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    user: t,
                    hovered: s,
                    subText: a,
                    showAccountIdentifier: p,
                    status: E,
                    isMobile: g,
                    isVR: y,
                    className: f,
                } = e,
                v = (0, l.bG)([m.A], () => m.A.getNickname(t.id)),
                C = n.useContext(A.A),
                D = t.getAvatarURL(C, (0, o.FT)(o._3.SIZE_32), s),
                {
                    avatarDecorationSrc: G,
                    eventHandlers: { onMouseEnter: S, onMouseLeave: L },
                } = (0, d.A)({ user: t, guildId: C, size: (0, h.Te)(o._3.SIZE_32), onlyAnimateOnHoverOrFocus: !0 });
            n.useEffect(() => {
                s ? S() : L();
            }, [s, S, L]);
            let _ = I ? u.Js : u.eu;
            return (0, i.jsxs)("div", {
                className: r()(N.eF, f, { [N.yo]: s }),
                children: [
                    (0, i.jsx)(_, {
                        src: D,
                        size: o._3.SIZE_32,
                        status: E,
                        isMobile: g,
                        isVR: y,
                        avatarDecoration: G,
                        "aria-label": t.username,
                        className: N.my,
                    }),
                    (0, i.jsxs)("div", {
                        className: N.Qq,
                        children: [
                            (0, i.jsx)(c.A, {
                                user: t,
                                nick: v,
                                botClass: N.AO,
                                className: r()(N.xK, { [N.Nu]: t.hasUniqueUsername() }),
                                usernameClass: N.Xh,
                                discriminatorClass: N.D2,
                                showAccountIdentifier: p,
                                showGuildTag: !0,
                            }),
                            (0, i.jsx)("div", { className: N.W$, children: a }),
                        ],
                    }),
                ],
            });
        },
    },
);
