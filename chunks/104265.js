n.d(t, { Z: () => v }), n(388685), n(953529);
var l = n(54381),
    i = n(473749),
    r = n(120356),
    o = n.n(r),
    a = n(636606),
    c = n(399606),
    s = n(692547),
    u = n(780384),
    d = n(481060),
    m = n(596454),
    p = n(410030),
    h = n(339085),
    f = n(14263),
    g = n(388032),
    j = n(46807);
function v(e) {
    let { guildId: t, option: n, selected: r, onSelect: v, hideMemberCount: x, canBeNew: y } = e,
        b = (0, u.wj)((0, p.ZP)()),
        [C, O] = i.useState(!1),
        Z = C && !x,
        w = i.useRef(null),
        { reducedMotion: _ } = i.useContext(d.Sfi),
        N = (0, c.e7)([h.ZP], () => {
            var e, t, l, i;
            return (
                (null == (e = n.emoji) ? void 0 : e.id) != null &&
                null !=
                    (i =
                        null == (t = h.ZP.getCustomEmojiById(null == (l = n.emoji) ? void 0 : l.id))
                            ? void 0
                            : t.animated) &&
                i
            );
        }),
        P = (0, f.Z)(t, 1000),
        k = null == P || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => P[e])),
        E = y && !r && n.isUnseen,
        I = (0, d.q_F)(
            {
                transform: r || _.enabled ? "scale(1)" : "scale(0.7)",
                opacity: +!!r,
                config: { duration: 150 },
            },
            "animate-always",
        ),
        D = (0, d.dQu)(s.Z.colors.BORDER_SUBTLE),
        M = (0, d.dQu)(s.Z.unsafe_rawColors.BRAND_500),
        A = (0, d.q_F)(
            {
                from: { color: M.spring() },
                color: D.spring({ opacity: b ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500,
            },
            "animate-always",
        ),
        R = (0, d.Yzy)(
            Z,
            {
                from: {
                    transform: _.enabled ? "translateX(0)" : "translateX(8px)",
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
        [T, S] = i.useState(!1);
    i.useEffect(() => {
        if (Z)
            return (
                (w.current = setTimeout(() => {
                    O(!1), (w.current = null);
                }, 3000)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [Z]);
    let B = o()(j.optionButtonWrapper, {
            [j.selected]: r,
            [j.pressed]: T,
        }),
        z = E ? { borderColor: A.color } : {};
    return (0, l.jsx)(a.animated.div, {
        style: z,
        className: B,
        children: (0, l.jsxs)(d.P3F, {
            className: j.optionButton,
            onClick: () => {
                O(!r), v(!r);
            },
            onMouseDown: () => S(!0),
            onMouseUp: () => S(!1),
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, l.jsx)(m.Z, {
                          animated: n.emoji.animated || N,
                          className: j.buttonEmoji,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name,
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: j.buttonText,
                    children: [
                        (0, l.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: n.title,
                        }),
                        n.description.length > 0
                            ? (0, l.jsx)(d.Text, {
                                  variant: "text-xs/normal",
                                  color: "header-secondary",
                                  children: n.description,
                              })
                            : null,
                    ],
                }),
                (0, l.jsx)(a.animated.div, {
                    className: j.checkIcon,
                    style: I,
                    children: (0, l.jsx)(d.dz2, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: s.Z.unsafe_rawColors.WHITE_500.css,
                    }),
                }),
                R(
                    (e, t) =>
                        k > 0 &&
                        t &&
                        (0, l.jsx)(a.animated.div, {
                            className: j.memberCount,
                            style: e,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: g.intl.format(g.t.EgKsZA, { memberCount: k }),
                            }),
                        }),
                ),
                E &&
                    (0, l.jsx)(d.IGR, {
                        color: s.Z.unsafe_rawColors.BRAND_260.css,
                        text: g.intl.string(g.t.y2b7CA),
                        className: j.newBadge,
                    }),
            ],
        }),
    });
}
