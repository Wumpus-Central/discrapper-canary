n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(732955),
    r = n(397927),
    o = n(775602),
    c = n(793574),
    d = n(571694),
    u = n(47167),
    h = n(922301),
    m = n(750112),
    A = n(598104),
    g = n(697122),
    p = n(73028),
    f = n(95550),
    _ = n(854627),
    E = n(314307),
    x = n(985018),
    C = n(82842);
function S(e) {
    let t,
        { channel: n, children: S, user: T } = e,
        I = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        N = (0, u.Ay)(n) ?? "",
        {
            avatarDecorationSrc: y,
            eventHandlers: b,
            isAnimating: v,
        } = (0, _.A)({ userId: T?.id, size: r._3J.SIZE_80, animateOnHover: !0 }),
        [j, R] = l.useState(!1),
        M = l.useCallback(() => {
            b.onMouseEnter(), R(!0);
        }, [b]),
        D = l.useCallback(() => {
            b.onMouseLeave(), R(!1);
        }, [b]),
        O = !n.isMultiUserDM() && T?.displayNameStyles != null;
    return (0, i.jsxs)(E.Ay, {
        channelId: n.id,
        onMouseEnter: M,
        onMouseLeave: D,
        children: [
            ((t = !I && v),
            n.isMultiUserDM()
                ? (0, i.jsx)(g.Q, {
                      channel: n,
                      editable: !0,
                      location: c.A.EMPTY_GROUP_DM,
                      children: (0, i.jsx)(A.A, { channel: n, size: r._3J.SIZE_80, animated: t, "aria-label": N }),
                  })
                : (0, i.jsx)(r.euF, {
                      "aria-label": N,
                      size: r._3J.SIZE_80,
                      src: (0, d.Y)(n, 80, t),
                      avatarDecoration: y,
                  })),
            (0, i.jsx)(E.cr, {
                children: O
                    ? (0, i.jsx)(m.A, {
                          userName: N,
                          displayNameStyles: T?.displayNameStyles,
                          effectDisplayType: j ? h.G.ANIMATED : h.G.STATIC,
                          loop: !0,
                      })
                    : N,
            }),
            (0, i.jsx)(E.j1, { children: S }),
            n.isMultiUserDM() &&
                (0, i.jsxs)(a.e2v, {
                    className: C.U,
                    children: [
                        (0, i.jsx)(f.NE, { channel: n, text: x.intl.string(x.t["6Qgrev"]), icon: r.DpX }),
                        (0, i.jsx)(a.$nd, {
                            icon: r.R2l,
                            variant: "secondary",
                            text: x.intl.string(x.t["5Q9+/L"]),
                            "aria-label": x.intl.string(x.t["5Q9+/L"]),
                            onClick: () => (0, p.U)(n.id, c.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
