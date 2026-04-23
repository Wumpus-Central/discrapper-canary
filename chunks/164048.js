t.d(n, { A: () => E });
var l = t(627968),
    i = t(64700),
    a = t(503698),
    r = t.n(a),
    o = t(356197),
    s = t(417597),
    c = t(827734),
    u = t(462887),
    d = t(844222),
    m = t(717421),
    h = t(602853),
    p = t(866323),
    A = t(939249),
    g = t(834730),
    x = t(933832),
    f = t(777666),
    C = t(565645),
    j = t(736653),
    v = t(508675),
    y = t(386784),
    _ = t(985018),
    N = t(117404);
function E(e) {
    let { guildId: n, option: t, selected: a, onSelect: E, hideMemberCount: w, canBeNew: b } = e,
        I = (0, u.M)((0, j.Ay)()),
        [k, M] = i.useState(!1),
        R = k && !w,
        D = i.useRef(null),
        { reducedMotion: O } = i.useContext(d.C),
        L = (0, s.bG)([v.Ay], () => t.emoji?.id != null && (v.Ay.getCustomEmojiById(t.emoji?.id)?.animated ?? !1)),
        K = (0, y.A)(n, 1e3),
        G = null == K || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => K[e])),
        H = b && !a && t.isUnseen,
        T = (0, m.z)(
            { transform: a || O.enabled ? "scale(1)" : "scale(0.7)", opacity: +!!a, config: { duration: 150 } },
            "animate-always",
        ),
        B = (0, h.r)(c.A.colors.BORDER_SUBTLE),
        P = (0, h.r)(c.A.unsafe_rawColors.BRAND_500),
        z = (0, m.z)(
            {
                from: { color: P.spring() },
                color: B.spring({ opacity: I ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        U = (0, p.p)(
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
                    M(!1), (D.current = null);
                }, 3e3)),
                () => {
                    null != D.current && clearTimeout(D.current);
                }
            );
    }, [R]);
    let W = r()(N.RH, { [N.wH]: a, [N.Vq]: S }),
        X = H ? { borderColor: z.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: X,
        className: W,
        children: (0, l.jsxs)(A.D, {
            className: N.AP,
            onClick: () => {
                M(!a), E(!a);
            },
            onMouseDown: () => Z(!0),
            onMouseUp: () => Z(!1),
            children: [
                null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                    ? (0, l.jsx)(C.A, {
                          animated: t.emoji.animated || L,
                          className: N.t0,
                          emojiId: t.emoji.id,
                          emojiName: t.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: N._d,
                    children: [
                        (0, l.jsx)(g.E, { variant: "text-md/medium", color: "text-strong", children: t.title }),
                        t.description.length > 0
                            ? (0, l.jsx)(g.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: t.description,
                              })
                            : null,
                    ],
                }),
                (0, l.jsx)(o.animated.div, {
                    className: N.oE,
                    style: T,
                    children: (0, l.jsx)(x.A, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.A.unsafe_rawColors.WHITE.css,
                    }),
                }),
                U(
                    (e, n) =>
                        G > 0 &&
                        n &&
                        (0, l.jsx)(o.animated.div, {
                            className: N.Kl,
                            style: e,
                            children: (0, l.jsx)(g.E, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: _.intl.format(_.t.EgKsZA, { memberCount: G }),
                            }),
                        }),
                ),
                H &&
                    (0, l.jsx)(f.Lp, {
                        color: c.A.unsafe_rawColors.BRAND_260.css,
                        text: _.intl.string(_.t.y2b7CA),
                        className: N.Ad,
                    }),
            ],
        }),
    });
}
