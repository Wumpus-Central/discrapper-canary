n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(692617),
    a = n(397927),
    s = n(297413),
    o = n(775602),
    c = n(29160),
    u = n(854378),
    d = n(954921),
    p = n(278539),
    f = n(571694),
    h = n(994500),
    A = n(427262),
    g = n(837921),
    m = n(800583),
    b = n(999068),
    _ = n(122943),
    E = n(985018),
    O = n(518962);
let y = (e) => {
        let { userId: t } = e,
            n = (0, b.y)(t);
        return null == n || 0 === n.length
            ? (0, r.jsx)(a.Text, {
                  className: O.tE,
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: E.intl.string(E.t.jpY0X5),
              })
            : (0, r.jsxs)("div", {
                  className: O.I9,
                  children: [
                      (0, r.jsx)(l.A, {
                          guilds: n,
                          maxGuilds: 3,
                          size: u.$v.Sizes.SMOL,
                          hideOverflowCount: !0,
                      }),
                      (0, r.jsx)(a.Text, {
                          className: O.tE,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.format(E.t.eE3oep, { count: n.length }),
                      }),
                  ],
              });
    },
    I = g.Ay.getEnableHardwareAcceleration() ? a.JsQ : a.euF;
function v(e) {
    var t;
    let { channel: n, otherUser: l, active: u } = e,
        g = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        b = (0, i.bG)([h.A], () => (null == l ? null : h.A.getNickname(l.id))),
        v = !g && u,
        S = (0, m.j)(n),
        { avatarDecorationSrc: C } = (0, p.A)({
            user: l,
            size: (0, d.Te)(a._3J.SIZE_40),
            onlyAnimateOnHoverOrFocus: !0,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I, {
                className: O.my,
                src: (0, f.Y)(n, 40, v),
                avatarDecoration: C,
                size: a._3J.SIZE_40,
                "aria-label": null != (t = null == l ? void 0 : l.username) ? t : E.intl.string(E.t["30mdIx"]),
            }),
            (0, r.jsxs)("div", {
                className: O.yt,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.rU,
                        children: [
                            (0, r.jsx)(s.A, {
                                nick: b,
                                user: l,
                                showAccountIdentifier: !0,
                                className: O.I8,
                                usernameClass: O.Xh,
                                discriminatorClass: null != A.Ay.getGlobalName(l) ? O.vl : O.D2,
                            }),
                            (0, r.jsx)(a.Text, {
                                className: O.L7,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: S,
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.A, {
                        hoverText: (0, r.jsx)(_.A, { channel: n }),
                        forceHover: u,
                        children: (0, r.jsx)(y, { userId: l.id }),
                    }),
                ],
            }),
        ],
    });
}
