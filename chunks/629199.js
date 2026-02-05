n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(692617),
    l = n(397927),
    s = n(297413),
    o = n(775602),
    d = n(29160),
    c = n(854378),
    u = n(954921),
    A = n(278539),
    h = n(571694),
    _ = n(994500),
    m = n(427262),
    p = n(837921),
    g = n(800583),
    E = n(999068),
    f = n(122943),
    I = n(985018),
    C = n(518962);
let N = (e) => {
        let { userId: t } = e,
            n = (0, E.y)(t);
        return null == n || 0 === n.length
            ? (0, i.jsx)(l.Text, {
                  className: C.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: I.intl.string(I.t.jpY0X5),
              })
            : (0, i.jsxs)("div", {
                  className: C.I9,
                  children: [
                      (0, i.jsx)(a.A, { guilds: n, maxGuilds: 3, size: c.$v.Sizes.SMOL, hideOverflowCount: !0 }),
                      (0, i.jsx)(l.Text, {
                          className: C.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: I.intl.format(I.t.eE3oep, { count: n.length }),
                      }),
                  ],
              });
    },
    T = p.Ay.getEnableHardwareAcceleration() ? l.JsQ : l.euF;
function S(e) {
    let { channel: t, otherUser: n, active: a } = e,
        c = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        p = (0, r.bG)([_.A], () => (null == n ? null : _.A.getNickname(n.id))),
        E = !c && a,
        S = (0, g.j)(t),
        { avatarDecorationSrc: x } = (0, A.A)({
            user: n,
            size: (0, u.Te)(l._3J.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T, {
                className: C.my,
                src: (0, h.Y)(t, 40, E),
                avatarDecoration: x,
                size: l._3J.SIZE_40,
                "aria-label": n?.username ?? I.intl.string(I.t["30mdIx"]),
            }),
            (0, i.jsxs)("div", {
                className: C.yt,
                children: [
                    (0, i.jsxs)("div", {
                        className: C.rU,
                        children: [
                            (0, i.jsx)(s.A, {
                                nick: p,
                                user: n,
                                showAccountIdentifier: !0,
                                className: C.I8,
                                usernameClass: C.Xh,
                                discriminatorClass: null != m.Ay.getGlobalName(n) ? C.vl : C.D2,
                            }),
                            (0, i.jsx)(l.Text, {
                                className: C.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: S,
                            }),
                        ],
                    }),
                    (0, i.jsx)(d.A, {
                        hoverText: (0, i.jsx)(f.A, { channel: t }),
                        forceHover: a,
                        children: (0, i.jsx)(N, { userId: n.id }),
                    }),
                ],
            }),
        ],
    });
}
