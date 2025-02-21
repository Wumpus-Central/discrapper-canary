t.d(n, { Z: () => _ }), t(47120), t(266796);
var l = t(200651),
    r = t(192379),
    a = t(120356),
    i = t.n(a),
    o = t(642128),
    s = t(399606),
    c = t(692547),
    d = t(780384),
    u = t(481060),
    m = t(596454),
    h = t(410030),
    p = t(339085),
    f = t(14263),
    g = t(388032),
    x = t(78272);
function _(e) {
    let { guildId: n, option: t, selected: a, onSelect: _, hideMemberCount: C, canBeNew: j } = e,
        b = (0, d.wj)((0, h.ZP)()),
        [v, N] = r.useState(!1),
        y = v && !C,
        O = r.useRef(null),
        { reducedMotion: I } = r.useContext(u.Sfi),
        Z = (0, s.e7)([p.ZP], () => {
            var e, n, l, r;
            return (null === (e = t.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (r = null === (n = p.ZP.getCustomEmojiById(null === (l = t.emoji) || void 0 === l ? void 0 : l.id)) || void 0 === n ? void 0 : n.animated) && void 0 !== r && r;
        }),
        w = (0, f.Z)(n, 1000),
        P = null == w || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => w[e])),
        E = j && !a && t.isUnseen,
        S = (0, u.q_F)(
            {
                transform: a || I.enabled ? 'scale(1)' : 'scale(0.7)',
                opacity: +!!a,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        T = (0, u.dQu)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT),
        B = (0, u.dQu)(c.Z.unsafe_rawColors.BRAND_500),
        k = (0, u.q_F)(
            {
                from: { color: B.spring() },
                color: T.spring({ opacity: b ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500
            },
            'animate-always'
        ),
        A = (0, u.Yzy)(
            y,
            {
                from: {
                    transform: I.enabled ? 'translateX(0)' : 'translateX(8px)',
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
        [R, D] = r.useState(!1);
    r.useEffect(() => {
        if (y)
            return (
                (O.current = setTimeout(() => {
                    N(!1), (O.current = null);
                }, 3000)),
                () => {
                    null != O.current && clearTimeout(O.current);
                }
            );
    }, [y]);
    let W = i()(x.optionButtonWrapper, {
            [x.selected]: a,
            [x.pressed]: R
        }),
        L = E ? { borderColor: k.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: L,
        className: W,
        children: (0, l.jsxs)(u.P3F, {
            className: i()(x.optionButton),
            onClick: () => {
                N(!a), _(!a);
            },
            onMouseDown: () => D(!0),
            onMouseUp: () => D(!1),
            children: [
                null != t.emoji && (null != t.emoji.id || null != t.emoji.name)
                    ? (0, l.jsx)(m.Z, {
                          animated: t.emoji.animated || Z,
                          className: x.buttonEmoji,
                          emojiId: t.emoji.id,
                          emojiName: t.emoji.name
                      })
                    : null,
                (0, l.jsxs)('div', {
                    className: x.buttonText,
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
                    className: x.checkIcon,
                    style: S,
                    children: (0, l.jsx)(u.dz2, {
                        size: 'custom',
                        width: 10,
                        height: 10,
                        color: c.Z.unsafe_rawColors.WHITE_500.css
                    })
                }),
                A(
                    (e, n) =>
                        P > 0 &&
                        n &&
                        (0, l.jsx)(o.animated.div, {
                            className: x.memberCount,
                            style: e,
                            children: (0, l.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: g.NW.format(g.t.EgKsZG, { memberCount: P })
                            })
                        })
                ),
                E &&
                    (0, l.jsx)(u.IGR, {
                        color: c.Z.unsafe_rawColors.BRAND_260.css,
                        text: g.NW.string(g.t.y2b7CA),
                        className: x.newBadge
                    })
            ]
        })
    });
}
