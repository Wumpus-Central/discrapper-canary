n.d(t, { A: () => E });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(4798),
    s = n(702841),
    c = n(661531),
    u = n(462887),
    d = n(844222),
    m = n(717421),
    h = n(602853),
    p = n(866323),
    g = n(939249),
    x = n(834730),
    f = n(933832),
    A = n(812993),
    C = n(565645),
    j = n(736653),
    v = n(159273),
    _ = n(386784),
    N = n(375708),
    y = n(300167);
function E(e) {
    let { guildId: t, option: n, selected: a, onSelect: E, hideMemberCount: w, canBeNew: I } = e,
        M = (0, u.M)((0, j.Ay)()),
        [b, k] = i.useState(!1),
        R = b && !w,
        D = i.useRef(null),
        { reducedMotion: O } = i.useContext(d.C),
        T = (0, s.bG)([v.Ay], () => n.emoji?.id != null && (v.Ay.getCustomEmojiById(n.emoji?.id)?.animated ?? !1)),
        H = (0, _.A)(t, 1e3),
        K = null == H || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => H[e])),
        L = I && !a && n.isUnseen,
        B = (0, m.z)(
            { transform: a || O.enabled ? "scale(1)" : "scale(0.7)", opacity: +!!a, config: { duration: 150 } },
            "animate-always",
        ),
        U = (0, h.r)(c.A.colors.BORDER_SUBTLE),
        G = (0, h.r)(c.A.unsafe_rawColors.BRAND_500),
        P = (0, m.z)(
            {
                from: { color: G.spring() },
                color: U.spring({ opacity: M ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        W = (0, p.p)(
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
        [z, S] = i.useState(!1);
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
    let Z = r()(y.RH, { [y.wH]: a, [y.Vq]: z }),
        V = L ? { borderColor: P.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: V,
        className: Z,
        children: (0, l.jsxs)(g.D, {
            className: y.AP,
            onClick: function () {
                k(!a), E(!a);
            },
            onMouseDown: () => S(!0),
            onMouseUp: () => S(!1),
            "aria-pressed": a,
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, l.jsx)(C.A, {
                          animated: n.emoji.animated || T,
                          className: y.t0,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: y._d,
                    children: [
                        (0, l.jsx)(x.E, { variant: "text-md/medium", color: "text-strong", children: n.title }),
                        n.description.length > 0
                            ? (0, l.jsx)(x.E, {
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
                    children: (0, l.jsx)(f.A, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.A.unsafe_rawColors.WHITE.css,
                    }),
                }),
                W(
                    (e, t) =>
                        K > 0 &&
                        t &&
                        (0, l.jsx)(o.animated.div, {
                            className: y.Kl,
                            style: e,
                            children: (0, l.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-overlay-light",
                                children: N.intl.format(N.t.EgKsZA, { memberCount: K }),
                            }),
                        }),
                ),
                L &&
                    (0, l.jsx)(A.Lp, {
                        color: c.A.unsafe_rawColors.BRAND_260.css,
                        text: N.intl.string(N.t.y2b7CA),
                        className: y.Ad,
                    }),
            ],
        }),
    });
}
