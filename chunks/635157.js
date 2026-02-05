n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(732955),
    r = n(397927),
    o = n(775602),
    c = n(793574),
    d = n(571694),
    u = n(47167),
    h = n(922301),
    m = n(750112),
    A = n(598104),
    p = n(697122),
    g = n(73028),
    f = n(95550),
    _ = n(854627),
    E = n(314307),
    C = n(985018),
    x = n(82842);
function S(e) {
    let t,
        { channel: n, children: S, user: T } = e,
        I = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        N = (0, u.Ay)(n) ?? "",
        {
            avatarDecorationSrc: v,
            eventHandlers: y,
            isAnimating: b,
        } = (0, _.A)({ userId: T?.id, size: r._3J.SIZE_80, animateOnHover: !0 }),
        [R, j] = l.useState(!1),
        M = l.useCallback(() => {
            y.onMouseEnter(), j(!0);
        }, [y]),
        D = l.useCallback(() => {
            y.onMouseLeave(), j(!1);
        }, [y]),
        O = !n.isMultiUserDM() && T?.displayNameStyles != null;
    return (0, i.jsxs)(E.Ay, {
        channelId: n.id,
        onMouseEnter: M,
        onMouseLeave: D,
        children: [
            ((t = !I && b),
            n.isMultiUserDM()
                ? (0, i.jsx)(p.Q, {
                      channel: n,
                      editable: !0,
                      location: c.A.EMPTY_GROUP_DM,
                      children: (0, i.jsx)(A.A, { channel: n, size: r._3J.SIZE_80, animated: t, "aria-label": N }),
                  })
                : (0, i.jsx)(r.euF, {
                      "aria-label": N,
                      size: r._3J.SIZE_80,
                      src: (0, d.Y)(n, 80, t),
                      avatarDecoration: v,
                  })),
            (0, i.jsx)(E.cr, {
                children: O
                    ? (0, i.jsx)(m.A, {
                          userName: N,
                          displayNameStyles: T?.displayNameStyles,
                          effectDisplayType: R ? h.G.ANIMATED : h.G.STATIC,
                          loop: !0,
                      })
                    : N,
            }),
            (0, i.jsx)(E.j1, { children: S }),
            n.isMultiUserDM() &&
                (0, i.jsxs)(s.e2v, {
                    className: x.U,
                    children: [
                        (0, i.jsx)(f.NE, { channel: n, text: C.intl.string(C.t["6Qgrev"]), icon: r.DpX }),
                        (0, i.jsx)(s.$nd, {
                            icon: r.R2l,
                            variant: "secondary",
                            text: C.intl.string(C.t["5Q9+/L"]),
                            "aria-label": C.intl.string(C.t["5Q9+/L"]),
                            onClick: () => (0, g.U)(n.id, c.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
