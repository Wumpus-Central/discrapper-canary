n.d(t, { A: () => E });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(941143),
    s = n(702841),
    c = n(661531),
    d = n(462887),
    u = n(844222),
    m = n(717421),
    h = n(602853),
    p = n(866323),
    g = n(939249),
    x = n(834730),
    f = n(933832),
    A = n(62010),
    j = n(565645),
    C = n(736653),
    v = n(236285),
    y = n(386784),
    _ = n(105292),
    N = n(455168);
function E(e) {
    let { guildId: t, option: n, selected: a, onSelect: E, hideMemberCount: w, canBeNew: I } = e,
        k = (0, d.M)((0, C.Ay)()),
        [M, b] = i.useState(!1),
        R = M && !w,
        O = i.useRef(null),
        { reducedMotion: T } = i.useContext(u.C),
        D = (0, s.bG)([v.Ay], () => n.emoji?.id != null && (v.Ay.getCustomEmojiById(n.emoji?.id)?.animated ?? !1)),
        H = (0, y.A)(t, 1e3),
        K = null == H || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => H[e])),
        L = I && !a && n.isUnseen,
        U = (0, m.z)(
            { transform: a || T.enabled ? "scale(1)" : "scale(0.7)", opacity: +!!a, config: { duration: 150 } },
            "animate-always",
        ),
        G = (0, h.r)(c.A.colors.BORDER_SUBTLE),
        P = (0, h.r)(c.A.unsafe_rawColors.BRAND_500),
        B = (0, m.z)(
            {
                from: { color: P.spring() },
                color: G.spring({ opacity: k ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        W = (0, p.p)(
            R,
            {
                from: { transform: T.enabled ? "translateX(0)" : "translateX(8px)", opacity: 0 },
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
                (O.current = setTimeout(() => {
                    (b(!1), (O.current = null));
                }, 3e3)),
                () => {
                    null != O.current && clearTimeout(O.current);
                }
            );
    }, [R]);
    let Z = r()(N.RH, { [N.wH]: a, [N.Vq]: z }),
        V = L ? { borderColor: B.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: V,
        className: Z,
        children: (0, l.jsxs)(g.D, {
            className: N.AP,
            onClick: function () {
                (b(!a), E(!a));
            },
            onMouseDown: () => S(!0),
            onMouseUp: () => S(!1),
            "aria-pressed": a,
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, l.jsx)(j.A, {
                          animated: n.emoji.animated || D,
                          className: N.t0,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: N._d,
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
                    className: N.oE,
                    style: U,
                    children: (0, l.jsx)(f.CheckmarkLargeIcon, {
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
                            className: N.Kl,
                            style: e,
                            children: (0, l.jsx)(x.E, {
                                variant: "text-xs/normal",
                                color: "text-overlay-light",
                                children: _.intl.format(_.t.EgKsZA, { memberCount: K }),
                            }),
                        }),
                ),
                L &&
                    (0, l.jsx)("div", {
                        className: N.Ad,
                        children: (0, l.jsx)(A.E, { type: "new", variant: "primary" }),
                    }),
            ],
        }),
    });
}
