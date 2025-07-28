(n.d(t, { Z: () => _ }), n(388685), n(953529));
var l = n(255367),
    r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(652141),
    s = n(399606),
    c = n(692547),
    d = n(780384),
    u = n(481060),
    m = n(596454),
    h = n(410030),
    p = n(339085),
    f = n(14263),
    g = n(388032),
    x = n(136338);
function _(e) {
    let { guildId: t, option: n, selected: i, onSelect: _, hideMemberCount: C, canBeNew: b } = e,
        j = (0, d.wj)((0, h.ZP)()),
        [v, y] = r.useState(!1),
        O = v && !C,
        Z = r.useRef(null),
        { reducedMotion: N } = r.useContext(u.Sfi),
        I = (0, s.e7)([p.ZP], () => {
            var e, t, l, r;
            return (null == (e = n.emoji) ? void 0 : e.id) != null && null != (r = null == (t = p.ZP.getCustomEmojiById(null == (l = n.emoji) ? void 0 : l.id)) ? void 0 : t.animated) && r;
        }),
        w = (0, f.Z)(t, 1000),
        P = null == w || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => w[e])),
        E = b && !i && n.isUnseen,
        S = (0, u.q_F)(
            {
                transform: i || N.enabled ? 'scale(1)' : 'scale(0.7)',
                opacity: +!!i,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        T = (0, u.dQu)(c.Z.colors.BORDER_SUBTLE),
        A = (0, u.dQu)(c.Z.unsafe_rawColors.BRAND_500),
        k = (0, u.q_F)(
            {
                from: { color: A.spring() },
                color: T.spring({ opacity: j ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500
            },
            'animate-always'
        ),
        B = (0, u.Yzy)(
            O,
            {
                from: {
                    transform: N.enabled ? 'translateX(0)' : 'translateX(8px)',
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
        if (O)
            return (
                (Z.current = setTimeout(() => {
                    (y(!1), (Z.current = null));
                }, 3000)),
                () => {
                    null != Z.current && clearTimeout(Z.current);
                }
            );
    }, [O]);
    let L = a()(x.optionButtonWrapper, {
            [x.selected]: i,
            [x.pressed]: R
        }),
        M = E ? { borderColor: k.color } : {};
    return (0, l.jsx)(o.animated.div, {
        style: M,
        className: L,
        children: (0, l.jsxs)(u.P3F, {
            className: x.optionButton,
            onClick: () => {
                (y(!i), _(!i));
            },
            onMouseDown: () => D(!0),
            onMouseUp: () => D(!1),
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, l.jsx)(m.Z, {
                          animated: n.emoji.animated || I,
                          className: x.buttonEmoji,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name
                      })
                    : null,
                (0, l.jsxs)('div', {
                    className: x.buttonText,
                    children: [
                        (0, l.jsx)(u.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: n.title
                        }),
                        n.description.length > 0
                            ? (0, l.jsx)(u.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: n.description
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
                B(
                    (e, t) =>
                        P > 0 &&
                        t &&
                        (0, l.jsx)(o.animated.div, {
                            className: x.memberCount,
                            style: e,
                            children: (0, l.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: g.intl.format(g.t.EgKsZG, { memberCount: P })
                            })
                        })
                ),
                E &&
                    (0, l.jsx)(u.IGR, {
                        color: c.Z.unsafe_rawColors.BRAND_260.css,
                        text: g.intl.string(g.t.y2b7CA),
                        className: x.newBadge
                    })
            ]
        })
    });
}
