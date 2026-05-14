n.d(t, { A: () => E });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(873174),
    s = n(702841),
    c = n(661531),
    d = n(462887),
    u = n(844222),
    m = n(717421),
    h = n(602853),
    p = n(866323),
    x = n(939249),
    g = n(834730),
    A = n(933832),
    f = n(777666),
    C = n(565645),
    j = n(736653),
    v = n(159273),
    _ = n(386784),
    N = n(375708),
    y = n(895023);
function E(e) {
    let { guildId: t, option: n, selected: a, onSelect: E, hideMemberCount: w, canBeNew: I } = e,
        M = (0, d.M)((0, j.Ay)()),
        [b, k] = i.useState(!1),
        R = b && !w,
        D = i.useRef(null),
        { reducedMotion: O } = i.useContext(u.C),
        K = (0, s.bG)([v.Ay], () => n.emoji?.id != null && (v.Ay.getCustomEmojiById(n.emoji?.id)?.animated ?? !1)),
        L = (0, _.A)(t, 1e3),
        H = null == L || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => L[e])),
        T = I && !a && n.isUnseen,
        B = (0, m.z)(
            { transform: a || O.enabled ? "scale(1)" : "scale(0.7)", opacity: +!!a, config: { duration: 150 } },
            "animate-always",
        ),
        G = (0, h.r)(c.A.colors.BORDER_SUBTLE),
        P = (0, h.r)(c.A.unsafe_rawColors.BRAND_500),
        U = (0, m.z)(
            {
                from: { color: P.spring() },
                color: G.spring({ opacity: M ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        z = (0, p.p)(
            R,
            {
                from: { transform: O.enabled ? "translateX(0)" : "translateX(8px)", opacity: 0 },
                enter: { transform: "translateX(0)", opacity: 1 },
                leave: { opacity: 0 },
                trail: 400,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        [S, Z] = i.useState(!1);
    i.useEffect(() => {
        if (R)
            return (
                (D.current = setTimeout(() => {
                    k(!1), (D.current = null);
                }, 3e3)),
                () => {
                    null != D.current && clearTimeout(D.current);
                }
            );
    }, [R]);
    let W = r()(y.RH, { [y.wH]: a, [y.Vq]: S }),
        V = T ? { borderColor: U.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: V,
        className: W,
        children: (0, l.jsxs)(x.D, {
            className: y.AP,
            onClick: () => {
                k(!a), E(!a);
            },
            onMouseDown: () => Z(!0),
            onMouseUp: () => Z(!1),
            "aria-pressed": a,
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, l.jsx)(C.A, {
                          animated: n.emoji.animated || K,
                          className: y.t0,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: y._d,
                    children: [
                        (0, l.jsx)(g.E, { variant: "text-md/medium", color: "text-strong", children: n.title }),
                        n.description.length > 0
                            ? (0, l.jsx)(g.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: n.description,
                              })
                            : null,
                    ],
                }),
                (0, l.jsx)(o.animated.div, {
                    className: y.oE,
                    style: B,
                    children: (0, l.jsx)(A.A, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.A.unsafe_rawColors.WHITE.css,
                    }),
                }),
                z(
                    (e, t) =>
                        H > 0 &&
                        t &&
                        (0, l.jsx)(o.animated.div, {
                            className: y.Kl,
                            style: e,
                            children: (0, l.jsx)(g.E, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: N.intl.format(N.t.EgKsZA, { memberCount: H }),
                            }),
                        }),
                ),
                T &&
                    (0, l.jsx)(f.Lp, {
                        color: c.A.unsafe_rawColors.BRAND_260.css,
                        text: N.intl.string(N.t.y2b7CA),
                        className: y.Ad,
                    }),
            ],
        }),
    });
}
