n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(825484),
    r = n(821609),
    o = n(778712),
    c = n(97808),
    d = n(241541),
    u = n(22231),
    h = n(775602),
    m = n(793574),
    A = n(571694),
    g = n(47167),
    _ = n(922301),
    p = n(750112),
    f = n(598104),
    E = n(697122),
    C = n(73028),
    x = n(95550),
    S = n(854627),
    I = n(314307),
    v = n(985018),
    N = n(322923);
function T(e) {
    let t,
        { channel: n, children: T, user: y } = e,
        b = (0, a.bG)([h.A], () => h.A.useReducedMotion),
        j = (0, g.Ay)(n) ?? "",
        {
            avatarDecorationSrc: R,
            eventHandlers: M,
            isAnimating: L,
        } = (0, S.A)({ userId: y?.id, size: o._3.SIZE_80, animateOnHover: !0 }),
        [D, P] = l.useState(!1),
        O = l.useCallback(() => {
            M.onMouseEnter(), P(!0);
        }, [M]),
        w = l.useCallback(() => {
            M.onMouseLeave(), P(!1);
        }, [M]),
        U = !n.isMultiUserDM() && y?.displayNameStyles != null;
    return (0, i.jsxs)(I.Ay, {
        channelId: n.id,
        onMouseEnter: O,
        onMouseLeave: w,
        children: [
            ((t = !b && L),
            n.isMultiUserDM()
                ? (0, i.jsx)(E.Q, {
                      channel: n,
                      editable: !0,
                      location: m.A.EMPTY_GROUP_DM,
                      children: (0, i.jsx)(f.A, { channel: n, size: o._3.SIZE_80, animated: t, "aria-label": j }),
                  })
                : (0, i.jsx)(c.eu, {
                      "aria-label": j,
                      size: o._3.SIZE_80,
                      src: (0, A.Y)(n, 80, t),
                      avatarDecoration: R,
                  })),
            (0, i.jsx)(I.cr, {
                children: U
                    ? (0, i.jsx)(p.A, {
                          userName: j,
                          displayNameStyles: y?.displayNameStyles,
                          effectDisplayType: D ? _.G.ANIMATED : _.G.STATIC,
                          loop: !0,
                      })
                    : j,
            }),
            (0, i.jsx)(I.j1, { children: T }),
            n.isMultiUserDM() &&
                (0, i.jsxs)(s.e, {
                    className: N.U,
                    children: [
                        (0, i.jsx)(x.NE, { channel: n, text: v.intl.string(v.t["6Qgrev"]), icon: d.D }),
                        (0, i.jsx)(r.$, {
                            icon: u.R,
                            variant: "secondary",
                            text: v.intl.string(v.t["5Q9+/L"]),
                            "aria-label": v.intl.string(v.t["5Q9+/L"]),
                            onClick: () => (0, C.U)(n.id, m.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
