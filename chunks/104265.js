t.d(n, { Z: () => _ }), t(388685), t(953529);
var l = t(951288),
    r = t(647438),
    i = t(120356),
    a = t.n(i),
    o = t(13941),
    s = t(399606),
    c = t(692547),
    d = t(780384),
    u = t(481060),
    m = t(596454),
    h = t(410030),
    p = t(339085),
    f = t(14263),
    g = t(388032),
    x = t(46807);
function _(e) {
    let { guildId: n, option: t, selected: i, onSelect: _, hideMemberCount: C, canBeNew: b } = e,
        j = (0, d.wj)((0, h.ZP)()),
        [v, y] = r.useState(!1),
        O = v && !C,
        N = r.useRef(null),
        { reducedMotion: Z } = r.useContext(u.Sfi),
        I = (0, s.e7)([p.ZP], () => {
            var e, n, l, r;
            return (
                (null == (e = t.emoji) ? void 0 : e.id) != null &&
                null !=
                    (r =
                        null == (n = p.ZP.getCustomEmojiById(null == (l = t.emoji) ? void 0 : l.id))
                            ? void 0
                            : n.animated) &&
                r
            );
        }),
        w = (0, f.Z)(n, 1000),
        P = null == w || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => w[e])),
        E = b && !i && t.isUnseen,
        S = (0, u.q_F)(
            {
                transform: i || Z.enabled ? "scale(1)" : "scale(0.7)",
                opacity: +!!i,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        T = (0, u.dQu)(c.Z.colors.BORDER_SUBTLE),
        B = (0, u.dQu)(c.Z.unsafe_rawColors.BRAND_500),
        A = (0, u.q_F)(
            {
                from: { color: B.spring() },
                color: T.spring({ opacity: j ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        R = (0, u.Yzy)(
            O,
            {
                from: {
                    transform: Z.enabled ? "translateX(0)" : "translateX(8px)",
                    opacity: 0,
                },
                enter: {
                    transform: "translateX(0)",
                    opacity: 1,
                },
                leave: { opacity: 0 },
                trail: 400,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        [k, D] = r.useState(!1);
    r.useEffect(() => {
        if (O)
            return (
                (N.current = setTimeout(() => {
                    y(!1), (N.current = null);
                }, 3000)),
                () => {
                    null != N.current && clearTimeout(N.current);
                }
            );
    }, [O]);
    let L = a()(x.optionButtonWrapper, {
            [x.selected]: i,
            [x.pressed]: k,
        }),
        M = E ? { borderColor: A.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: M,
        className: L,
        children: (0, l.jsxs)(u.P3F, {
            className: x.optionButton,
            onClick: () => {
                y(!i), _(!i);
            },
            onMouseDown: () => D(!0),
            onMouseUp: () => D(!1),
            children: [
                null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                    ? (0, l.jsx)(m.Z, {
                          animated: t.emoji.animated || I,
                          className: x.buttonEmoji,
                          emojiId: t.emoji.id,
                          emojiName: t.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: x.buttonText,
                    children: [
                        (0, l.jsx)(u.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: t.title,
                        }),
                        t.description.length > 0
                            ? (0, l.jsx)(u.Text, {
                                  variant: "text-xs/normal",
                                  color: "header-secondary",
                                  children: t.description,
                              })
                            : null,
                    ],
                }),
                (0, l.jsx)(o.animated.div, {
                    className: x.checkIcon,
                    style: S,
                    children: (0, l.jsx)(u.dz2, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.Z.unsafe_rawColors.WHITE_500.css,
                    }),
                }),
                R(
                    (e, n) =>
                        P > 0 &&
                        n &&
                        (0, l.jsx)(o.animated.div, {
                            className: x.memberCount,
                            style: e,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: g.intl.format(g.t.EgKsZA, { memberCount: P }),
                            }),
                        }),
                ),
                E &&
                    (0, l.jsx)(u.IGR, {
                        color: c.Z.unsafe_rawColors.BRAND_260.css,
                        text: g.intl.string(g.t.y2b7CA),
                        className: x.newBadge,
                    }),
            ],
        }),
    });
}
