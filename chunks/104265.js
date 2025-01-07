n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var l = n(200651),
    o = n(192379),
    a = n(120356),
    r = n.n(a),
    i = n(666912),
    s = n(399606),
    c = n(692547),
    d = n(780384),
    u = n(481060),
    m = n(596454),
    h = n(410030),
    v = n(339085),
    x = n(14263),
    g = n(388032),
    p = n(268280);
function f(e) {
    let { guildId: t, option: n, selected: a, onSelect: f, hideMemberCount: j, canBeNew: C } = e,
        b = (0, d.wj)((0, h.ZP)()),
        [Z, y] = o.useState(!1),
        k = Z && !j,
        w = o.useRef(null),
        { reducedMotion: N } = o.useContext(u.AccessibilityPreferencesContext),
        T = (0, s.e7)([v.ZP], () => {
            var e, t, l, o;
            return (null === (e = n.emoji) || void 0 === e ? void 0 : e.id) != null && null !== (o = null === (t = v.ZP.getCustomEmojiById(null === (l = n.emoji) || void 0 === l ? void 0 : l.id)) || void 0 === t ? void 0 : t.animated) && void 0 !== o && o;
        }),
        I = (0, x.Z)(t, 1000),
        M = null == I || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => I[e])),
        R = C && !a && n.isUnseen,
        A = (0, u.useSpring)(
            {
                transform: a || N.enabled ? 'scale(1)' : 'scale(0.7)',
                opacity: a ? 1 : 0,
                config: { duration: 150 }
            },
            'animate-always'
        ),
        B = (0, u.useToken)(c.Z.colors.BACKGROUND_MODIFIER_ACCENT),
        _ = (0, u.useToken)(c.Z.unsafe_rawColors.BRAND_500),
        E = (0, u.useSpring)(
            {
                from: { color: _.spring() },
                color: B.spring({ opacity: b ? 0.5 : 0.25 }),
                config: { duration: 300 },
                delay: 500
            },
            'animate-always'
        ),
        S = (0, u.useTransition)(
            k,
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
        [D, O] = o.useState(!1);
    o.useEffect(() => {
        if (k)
            return (
                (w.current = setTimeout(() => {
                    y(!1), (w.current = null);
                }, 3000)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [k]);
    let P = r()(p.optionButtonWrapper, {
            [p.selected]: a,
            [p.pressed]: D
        }),
        W = R ? { borderColor: E.color } : {};
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)(i.animated.div, {
            style: W,
            className: P,
            children: (0, l.jsxs)(u.Clickable, {
                className: r()(p.optionButton),
                onClick: () => {
                    y(!a), f(!a);
                },
                onMouseDown: () => O(!0),
                onMouseUp: () => O(!1),
                children: [
                    null != n.emoji && (null != n.emoji.id || null != n.emoji.name)
                        ? (0, l.jsx)(m.Z, {
                              animated: n.emoji.animated || T,
                              className: p.buttonEmoji,
                              emojiId: n.emoji.id,
                              emojiName: n.emoji.name
                          })
                        : null,
                    (0, l.jsxs)('div', {
                        className: p.buttonText,
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
                    (0, l.jsx)(i.animated.div, {
                        className: p.checkIcon,
                        style: A,
                        children: (0, l.jsx)(u.CheckmarkLargeIcon, {
                            size: 'custom',
                            width: 10,
                            height: 10,
                            color: c.Z.unsafe_rawColors.WHITE_500.css
                        })
                    }),
                    S(
                        (e, t) =>
                            M > 0 &&
                            t &&
                            (0, l.jsx)(i.animated.div, {
                                className: p.memberCount,
                                style: e,
                                children: (0, l.jsx)(u.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: g.intl.format(g.t.EgKsZG, { memberCount: M })
                                })
                            })
                    ),
                    R &&
                        (0, l.jsx)(u.TextBadge, {
                            color: c.Z.unsafe_rawColors.BRAND_260.css,
                            text: g.intl.string(g.t.y2b7CA),
                            className: p.newBadge
                        })
                ]
            })
        })
    });
}
