n.d(t, { Z: () => _ }), n(388685), n(953529);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(200100),
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
    let { guildId: t, option: n, selected: a, onSelect: _, hideMemberCount: C, canBeNew: b } = e,
        j = (0, d.wj)((0, h.ZP)()),
        [N, v] = l.useState(!1),
        y = N && !C,
        O = l.useRef(null),
        { reducedMotion: I } = l.useContext(u.Sfi),
        Z = (0, s.e7)([p.ZP], () => {
            var e, t, r, l;
            return (null == (e = n.emoji) ? void 0 : e.id) != null && null != (l = null == (t = p.ZP.getCustomEmojiById(null == (r = n.emoji) ? void 0 : r.id)) ? void 0 : t.animated) && l;
        }),
        w = (0, f.Z)(t, 1000),
        P = null == w || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => w[e])),
        E = b && !a && n.isUnseen,
        S = (0, u.q_F)(
            {
                transform: a || I.enabled ? 'scale(1)' : 'scale(0.7)',
                opacity: +!!a,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        k = (0, u.dQu)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT),
        T = (0, u.dQu)(c.Z.unsafe_rawColors.BRAND_500),
        B = (0, u.q_F)(
            {
                from: { color: T.spring() },
                color: k.spring({ opacity: j ? 0.5 : 0.25 }),
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
        [R, D] = l.useState(!1);
    l.useEffect(() => {
        if (y)
            return (
                (O.current = setTimeout(() => {
                    v(!1), (O.current = null);
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
        L = E ? { borderColor: B.color } : {};
    return (0, r.jsx)(o.animated.div, {
        style: L,
        className: W,
        children: (0, r.jsxs)(u.P3F, {
            className: x.optionButton,
            onClick: () => {
                v(!a), _(!a);
            },
            onMouseDown: () => D(!0),
            onMouseUp: () => D(!1),
            children: [
                null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                    ? (0, r.jsx)(m.Z, {
                          animated: n.emoji.animated || Z,
                          className: x.buttonEmoji,
                          emojiId: n.emoji.id,
                          emojiName: n.emoji.name
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: x.buttonText,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            children: n.title
                        }),
                        n.description.length > 0
                            ? (0, r.jsx)(u.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: n.description
                              })
                            : null
                    ]
                }),
                (0, r.jsx)(o.animated.div, {
                    className: x.checkIcon,
                    style: S,
                    children: (0, r.jsx)(u.dz2, {
                        size: 'custom',
                        width: 10,
                        height: 10,
                        color: c.Z.unsafe_rawColors.WHITE_500.css
                    })
                }),
                A(
                    (e, t) =>
                        P > 0 &&
                        t &&
                        (0, r.jsx)(o.animated.div, {
                            className: x.memberCount,
                            style: e,
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'always-white',
                                children: g.NW.format(g.t.EgKsZG, { memberCount: P })
                            })
                        })
                ),
                E &&
                    (0, r.jsx)(u.IGR, {
                        color: c.Z.unsafe_rawColors.BRAND_260.css,
                        text: g.NW.string(g.t.y2b7CA),
                        className: x.newBadge
                    })
            ]
        })
    });
}
