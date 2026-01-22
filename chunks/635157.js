n.d(t, { A: () => v }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(732955),
    s = n(397927),
    o = n(775602),
    c = n(793574),
    u = n(571694),
    d = n(47167),
    f = n(922301),
    p = n(750112),
    h = n(598104),
    b = n(697122),
    g = n(73028),
    m = n(95550),
    A = n(854627),
    y = n(314307),
    O = n(985018),
    j = n(82842);
function v(e) {
    var t;
    let n,
        { channel: v, children: x, user: E } = e,
        _ = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        C = null != (t = (0, d.Ay)(v)) ? t : "",
        {
            avatarDecorationSrc: S,
            eventHandlers: I,
            isAnimating: N,
        } = (0, A.A)({
            userId: null == E ? void 0 : E.id,
            size: s._3J.SIZE_80,
            animateOnHover: !0,
        }),
        [T, P] = l.useState(!1),
        w = l.useCallback(() => {
            I.onMouseEnter(), P(!0);
        }, [I]),
        R = l.useCallback(() => {
            I.onMouseLeave(), P(!1);
        }, [I]),
        D = !v.isMultiUserDM() && (null == E ? void 0 : E.displayNameStyles) != null;
    return (0, r.jsxs)(y.Ay, {
        channelId: v.id,
        onMouseEnter: w,
        onMouseLeave: R,
        children: [
            ((n = !_ && N),
            v.isMultiUserDM()
                ? (0, r.jsx)(b.Q, {
                      channel: v,
                      editable: !0,
                      location: c.A.EMPTY_GROUP_DM,
                      children: (0, r.jsx)(h.A, {
                          channel: v,
                          size: s._3J.SIZE_80,
                          animated: n,
                          "aria-label": C,
                      }),
                  })
                : (0, r.jsx)(s.euF, {
                      "aria-label": C,
                      size: s._3J.SIZE_80,
                      src: (0, u.Y)(v, 80, n),
                      avatarDecoration: S,
                  })),
            (0, r.jsx)(y.cr, {
                children: D
                    ? (0, r.jsx)(p.A, {
                          userName: C,
                          displayNameStyles: null == E ? void 0 : E.displayNameStyles,
                          effectDisplayType: T ? f.G.ANIMATED : f.G.STATIC,
                          loop: !0,
                      })
                    : C,
            }),
            (0, r.jsx)(y.j1, { children: x }),
            v.isMultiUserDM() &&
                (0, r.jsxs)(a.e2v, {
                    className: j.U,
                    children: [
                        (0, r.jsx)(m.N, {
                            channel: v,
                            text: O.intl.string(O.t["6Qgrev"]),
                            icon: s.DpX,
                        }),
                        (0, r.jsx)(a.$nd, {
                            icon: s.R2l,
                            variant: "secondary",
                            text: O.intl.string(O.t["5Q9+/L"]),
                            "aria-label": O.intl.string(O.t["5Q9+/L"]),
                            onClick: () => (0, g.U)(v.id, c.A.EMPTY_GROUP_DM),
                        }),
                    ],
                }),
        ],
    });
}
