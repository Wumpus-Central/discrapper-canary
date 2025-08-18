n.d(t, { Z: () => v }), n(388685), n(953529);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    a = n(815061),
    s = n(399606),
    c = n(692547),
    u = n(780384),
    d = n(481060),
    m = n(596454),
    f = n(410030),
    p = n(339085),
    h = n(14263),
    x = n(388032),
    g = n(830626);
function v(e) {
    let { guildId: t, option: n, selected: i, onSelect: v, hideMemberCount: j, canBeNew: _ } = e,
        b = (0, u.wj)((0, f.ZP)()),
        [O, C] = l.useState(!1),
        y = O && !j,
        N = l.useRef(null),
        { reducedMotion: E } = l.useContext(d.Sfi),
        P = (0, s.e7)([p.ZP], () => {
            var e, t, r, l;
            return (
                (null == (e = n.emoji) ? void 0 : e.id) != null &&
                null !=
                    (l =
                        null == (t = p.ZP.getCustomEmojiById(null == (r = n.emoji) ? void 0 : r.id))
                            ? void 0
                            : t.animated) &&
                l
            );
        }),
        Z = (0, h.Z)(t, 1000),
        I = null == Z || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => Z[e])),
        T = _ && !i && n.isUnseen,
        w = (0, d.q_F)(
            {
                transform: i || E.enabled ? "scale(1)" : "scale(0.7)",
                opacity: +!!i,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        k = (0, d.dQu)(c.Z.colors.BORDER_SUBTLE),
        D = (0, d.dQu)(c.Z.unsafe_rawColors.BRAND_500),
        R = (0, d.q_F)(
            {
                from: { color: D.spring() },
                color: k.spring({ opacity: b ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        S = (0, d.Yzy)(
            y,
            {
                from: {
                    transform: E.enabled ? "translateX(0)" : "translateX(8px)",
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
        [B, A] = l.useState(!1);
    l.useEffect(() => {
        if (y)
            return (
                (N.current = setTimeout(() => {
                    C(!1), (N.current = null);
                }, 3000)),
                () => {
                    null != N.current && clearTimeout(N.current);
                }
            );
    }, [y]);
    let M = o()(g.optionButtonWrapper, {
            [g.selected]: i,
            [g.pressed]: B,
        }),
        F = T ? { borderColor: R.color } : {};
    return (0, r.jsx)(a.animated.div, {
        style: F,
        className: M,
        children: (0, r.jsxs)(d.P3F, {
            className: g.optionButton,
            onClick: () => {
                C(!i), v(!i);
            },
            onMouseDown: () => A(!0),
            onMouseUp: () => A(!1),
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, r.jsx)(m.Z, {
                          animated: n.emoji.animated || P,
                          className: g.buttonEmoji,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name,
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: g.buttonText,
                    children: [
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: n.title,
                        }),
                        n.description.length > 0
                            ? (0, r.jsx)(d.Text, {
                                  variant: "text-xs/normal",
                                  color: "header-secondary",
                                  children: n.description,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(a.animated.div, {
                    className: g.checkIcon,
                    style: w,
                    children: (0, r.jsx)(d.dz2, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: c.Z.unsafe_rawColors.WHITE_500.css,
                    }),
                }),
                S(
                    (e, t) =>
                        I > 0 &&
                        t &&
                        (0, r.jsx)(a.animated.div, {
                            className: g.memberCount,
                            style: e,
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: x.intl.format(x.t.EgKsZG, { memberCount: I }),
                            }),
                        }),
                ),
                T &&
                    (0, r.jsx)(d.IGR, {
                        color: c.Z.unsafe_rawColors.BRAND_260.css,
                        text: x.intl.string(x.t.y2b7CA),
                        className: g.newBadge,
                    }),
            ],
        }),
    });
}
