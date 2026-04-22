n.d(t, { A: () => I });
var s = n(627968);
n(64700);
var l = n(311907),
    a = n(692617),
    i = n(834730),
    r = n(97808),
    c = n(778712),
    d = n(297413),
    o = n(775602),
    u = n(29160),
    A = n(854378),
    h = n(571694),
    m = n(562819),
    g = n(215689),
    x = n(994500),
    S = n(427262),
    E = n(837921),
    f = n(800583),
    _ = n(999068),
    b = n(122943),
    j = n(985018),
    p = n(746345);
let v = (e) => {
        let { userId: t } = e,
            n = (0, _.y)(t);
        return null == n || 0 === n.length
            ? (0, s.jsx)(i.E, {
                  className: p.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: j.intl.string(j.t.jpY0X5),
              })
            : (0, s.jsxs)("div", {
                  className: p.I9,
                  children: [
                      (0, s.jsx)(a.A, { guilds: n, maxGuilds: 3, size: A.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, s.jsx)(i.E, {
                          className: p.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: j.intl.format(j.t.eE3oep, { count: n.length }),
                      }),
                  ],
              });
    },
    C = E.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu;
function I(e) {
    let { channel: t, otherUser: n, active: a } = e,
        r = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        A = (0, l.bG)([x.A], () => (null == n ? null : x.A.getNickname(n.id))),
        E = !r && a,
        _ = (0, f.j)(t),
        { avatarDecorationSrc: I } = (0, g.A)({
            user: n,
            size: (0, m.Te)(c._3.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(C, {
                className: p.my,
                src: (0, h.Y)(t, 40, E),
                avatarDecoration: I,
                size: c._3.SIZE_40,
                "aria-label": n?.username ?? j.intl.string(j.t["30mdIx"]),
            }),
            (0, s.jsxs)("div", {
                className: p.yt,
                children: [
                    (0, s.jsxs)("div", {
                        className: p.rU,
                        children: [
                            (0, s.jsx)(d.A, {
                                nick: A,
                                user: n,
                                showAccountIdentifier: !0,
                                className: p.I8,
                                usernameClass: p.Xh,
                                discriminatorClass: null != S.Ay.getGlobalName(n) ? p.vl : p.D2,
                            }),
                            (0, s.jsx)(i.E, {
                                className: p.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: _,
                            }),
                        ],
                    }),
                    (0, s.jsx)(u.A, {
                        hoverText: (0, s.jsx)(b.A, { channel: t }),
                        forceHover: a,
                        children: (0, s.jsx)(v, { userId: n.id }),
                    }),
                ],
            }),
        ],
    });
}
