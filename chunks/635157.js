n.d(t, {
    A: () => E,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(732955),
    s = n(397927),
    o = n(775602),
    c = n(793574),
    u = n(571694),
    d = n(47167),
    h = n(922301),
    p = n(750112),
    f = n(598104),
    m = n(697122),
    g = n(73028),
    A = n(95550),
    b = n(854627),
    _ = n(314307),
    y = n(985018),
    v = n(82842);

function E(e) {
    var t;
    let n,
        { channel: E, children: O, user: C } = e,
        x = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        S = null != (t = (0, d.Ay)(E)) ? t : "",
        {
            avatarDecorationSrc: j,
            eventHandlers: I,
            isAnimating: T,
        } = (0, b.A)({
            userId: null == C ? void 0 : C.id,
            size: s._3J.SIZE_80,
            animateOnHover: !0,
        }),
        [N, P] = r.useState(!1),
        w = r.useCallback(() => {
            I.onMouseEnter(), P(!0);
        }, [I]),
        R = r.useCallback(() => {
            I.onMouseLeave(), P(!1);
        }, [I]),
        D = !E.isMultiUserDM() && (null == C ? void 0 : C.displayNameStyles) != null;
    return (0, l.jsxs)(_.Ay, {
        channelId: E.id,
        onMouseEnter: w,
        onMouseLeave: R,
        children: [
            ((n = !x && T),
            E.isMultiUserDM()
                ? (0, l.jsx)(m.Q, {
                      channel: E,
                      editable: !0,
                      location: c.A.EMPTY_GROUP_DM,
                      children: (0, l.jsx)(f.A, {
                          channel: E,
                          size: s._3J.SIZE_80,
                          animated: n,
                          "aria-label": S,
                      }),
                  })
                : (0, l.jsx)(s.euF, {
                      "aria-label": S,
                      size: s._3J.SIZE_80,
                      src: (0, u.Y)(E, 80, n),
                      avatarDecoration: j,
                  })),
            (0, l.jsx)(_.cr, {
                children: D
                    ? (0, l.jsx)(p.A, {
                          userName: S,
                          displayNameStyles: null == C ? void 0 : C.displayNameStyles,
                          effectDisplayType: N ? h.G.ANIMATED : h.G.STATIC,
                          loop: !0,
                      })
                    : S,
            }),
            (0, l.jsx)(_.j1, {
                children: O,
            }),
            E.isMultiUserDM() &&
                (0, l.jsxs)(a.e2v, {
                    className: v.U,
                    children: [
                        (0, l.jsx)(A.NE, {
                            channel: E,
                            text: y.intl.string(y.t["6Qgrev"]),
                            icon: s.DpX,
                        }),
                        (0, l.jsx)(a.$nd, {
                            icon: s.R2l,
                            variant: "secondary",
                            text: y.intl.string(y.t["5Q9+/L"]),
                            "aria-label": y.intl.string(y.t["5Q9+/L"]),
                            onClick: () => (0, g.U)(E.id, c.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
