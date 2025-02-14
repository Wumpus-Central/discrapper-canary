t.d(n, { Z: () => g }), t(47120);
var l = t(200651),
    i = t(192379),
    a = t(120356),
    r = t.n(a),
    o = t(642128),
    s = t(399606),
    d = t(692547),
    c = t(780384),
    u = t(481060),
    h = t(596454),
    m = t(410030),
    x = t(339085),
    _ = t(14263),
    p = t(388032),
    f = t(136466);
function g(e) {
    let { guildId: n, option: t, selected: a, onSelect: g, hideMemberCount: C, canBeNew: v } = e,
        I = (0, c.wj)((0, m.ZP)()),
        [j, N] = i.useState(!1),
        Z = j && !C,
        b = i.useRef(null),
        { reducedMotion: E } = i.useContext(u.Sfi),
        w = (0, s.e7)([x.ZP], () => {
            var e, n, l, i;
            return (null === (e = t.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (i = null === (n = x.ZP.getCustomEmojiById(null === (l = t.emoji) || void 0 === l ? void 0 : l.id)) || void 0 === n ? void 0 : n.animated) && void 0 !== i && i;
        }),
        S = (0, _.Z)(n, 1000),
        y = null == S || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => S[e])),
        T = v && !a && t.isUnseen,
        B = (0, u.q_F)(
            {
                transform: a || E.enabled ? 'scale(1)' : 'scale(0.7)',
                opacity: a ? 1 : 0,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        A = (0, u.dQu)(d.Z.colors.BACKGROUND_MODIFIER_ACCENT),
        R = (0, u.dQu)(d.Z.unsafe_rawColors.BRAND_500),
        k = (0, u.q_F)(
            {
                from: { color: R.spring() },
                color: A.spring({ opacity: I ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500
            },
            'animate-always'
        ),
        P = (0, u.Yzy)(
            Z,
            {
                from: {
                    transform: E.enabled ? 'translateX(0)' : 'translateX(8px)',
                    opacity: 0
                },
                enter: {
                    transform: 'translateX(0)',
                    opacity: 1
                },
                leave: { opacity: 0 },
                trail: 400,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        [L, O] = i.useState(!1);
    i.useEffect(() => {
        if (Z)
            return (
                (b.current = setTimeout(() => {
                    N(!1), (b.current = null);
                }, 3000)),
                () => {
                    null != b.current && clearTimeout(b.current);
                }
            );
    }, [Z]);
    let M = r()(f.optionButtonWrapper, {
            [f.selected]: a,
            [f.pressed]: L
        }),
        D = T ? { borderColor: k.color } : {};
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(o.animated.div, {
            style: D,
            className: M,
            children: (0, l.jsxs)(u.P3F, {
                className: r()(f.optionButton),
                onClick: () => {
                    N(!a), g(!a);
                },
                onMouseDown: () => O(!0),
                onMouseUp: () => O(!1),
                children: [
                    null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                        ? (0, l.jsx)(h.Z, {
                              animated: t.emoji.animated || w,
                              className: f.buttonEmoji,
                              emojiId: t.emoji.id,
                              emojiName: t.emoji.name
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        className: f.buttonText,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: t.title
                            }),
                            t.description.length > 0
                                ? (0, l.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: t.description
                                  })
                                : null
                        ]
                    }),
                    (0, l.jsx)(o.animated.div, {
                        className: f.checkIcon,
                        style: B,
                        children: (0, l.jsx)(u.dz2, {
                            size: 'custom',
                            width: 10,
                            height: 10,
                            color: d.Z.unsafe_rawColors.WHITE_500.css
                        })
                    }),
                    P(
                        (e, n) =>
                            y > 0 &&
                            n &&
                            (0, l.jsx)(o.animated.div, {
                                className: f.memberCount,
                                style: e,
                                children: (0, l.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: p.intl.format(p.t.EgKsZG, { memberCount: y })
                                })
                            })
                    ),
                    T &&
                        (0, l.jsx)(u.IGR, {
                            color: d.Z.unsafe_rawColors.BRAND_260.css,
                            text: p.intl.string(p.t.y2b7CA),
                            className: f.newBadge
                        })
                ]
            })
        })
    });
}
