n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(2052),
    u = n(493773),
    h = n(100527),
    m = n(906732),
    g = n(70097),
    x = n(142497),
    _ = n(810788),
    p = n(626135),
    E = n(768581),
    C = n(709054),
    N = n(647177),
    f = n(63985),
    I = n(678916),
    T = n(981631),
    S = n(190378),
    j = n(486324),
    v = n(474936),
    b = n(388032),
    A = n(531362);
function O(e) {
    let { icon: t, onClick: n, text: s, children: l, className: a, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: h } = e;
    return (0, i.jsxs)(o.P3F, {
        className: r()(a, A.backgroundOption, {
            [A.backgroundOptionSelected]: c,
            [A.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: h,
        onClick: d ? void 0 : n,
        children: [
            c ? (0, i.jsx)('div', { className: A.backgroundOptionRing }) : null,
            (0, i.jsxs)('div', {
                className: A.backgroundOptionInner,
                children: [
                    l,
                    (0, i.jsxs)('div', {
                        className: A.backgroundOptionContent,
                        children: [
                            (0, i.jsx)(t, {
                                className: r()(A.backgroundIconOptionIcon),
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, i.jsx)(o.Text, {
                                className: A.backgroundOptionText,
                                color: 'none',
                                variant: 'text-sm/normal',
                                children: s
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { option: t, source: n, isAnimated: l } = e,
        [r, a] = s.useState(!1);
    if (
        (s.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !l || null == t)
    )
        return (0, i.jsx)('div', {
            className: A.backgroundImageOption,
            style: { backgroundImage: 'url('.concat(n, ')') }
        });
    let o = (0, E.rI)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: 720,
        canAnimate: !1
    });
    return (0, i.jsx)('img', {
        onMouseMove: () => a(!0),
        onMouseLeave: () => a(!1),
        className: A.backgroundImageOption,
        src: r ? n : o,
        alt: t.id
    });
}
function D(e) {
    let { option: t, source: s, selected: l = !1, onSelectOption: u, isAnimatedImage: E, isVideo: C, hotspotLocation: f, ...I } = e,
        S = (0, d.O)(),
        { analyticsLocations: j } = (0, m.ZP)(h.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        O = (0, a.e7)([_.Z], () => null != f && _.Z.hasHotspot(f)),
        D = C
            ? (0, i.jsx)(g.Z, {
                  className: A.backgroundImageOption,
                  src: s,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, i.jsx)(R, {
                  isAnimated: E,
                  option: (0, N.rD)(t) ? t : void 0,
                  source: s
              });
    function P() {
        null != f &&
            O &&
            (x.Kw(f),
            p.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: S.location,
                location_stack: j
            }));
    }
    return (0, i.jsxs)(o.P3F, {
        ...I,
        className: r()(A.backgroundOption, { [A.backgroundOptionSelected]: l }),
        onClick: () => u(t),
        onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('99414').then(n.bind(n, 187658));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        backgroundOption: t,
                        optionIsInUse: l
                    });
            }),
        children: [
            l ? (0, i.jsx)('div', { className: A.backgroundOptionRing }) : null,
            (0, i.jsx)('div', {
                onFocus: P,
                onMouseEnter: P,
                className: A.backgroundOptionInner,
                children: D
            }),
            C || E
                ? (0, i.jsx)('div', {
                      className: A.playIcon,
                      children: (0, i.jsx)(o.o1U, {
                          size: 'xxs',
                          color: 'currentColor'
                      })
                  })
                : null,
            O &&
                (0, i.jsx)(o.IGR, {
                    text: b.intl.string(b.t.y2b7CA),
                    className: A.newTextBadge
                })
        ]
    });
}
function P() {
    return (0, i.jsxs)('div', {
        className: A.customBackgroundTooltip,
        children: [
            (0, i.jsx)(o.SrA, {
                size: 'md',
                color: 'currentColor',
                className: A.customBackgroundTooltipIcon
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: b.intl.string(b.t['T+yRY2'])
            })
        ]
    });
}
function y(e) {
    let { onClick: t, tooltipText: n, disabled: s = !1 } = e,
        l = (0, a.e7)([_.Z], () => _.Z.hasHotspot(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function r() {
        x.Kw(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = l ? b.intl.string(b.t['5TUJOj']) : n;
    return (0, i.jsxs)(o.DY3, {
        text: c,
        className: A.newBackgroundTooltipContainer,
        children: [
            (0, i.jsxs)(O, {
                className: A.__invalid_backgroundOptionBlurred,
                disabled: s,
                icon: o.FmF,
                onClick: t,
                onMouseLeave: r,
                onBlur: r,
                text: (0, i.jsxs)('div', {
                    className: A.backgroundCustomInlineUpsell,
                    children: [
                        (0, i.jsx)(o.SrA, {
                            size: 'md',
                            color: 'currentColor',
                            className: A.backgroundCustomInlineUpsellIcon
                        }),
                        (0, i.jsx)('div', {
                            className: A.overflowEllipsis,
                            children: b.intl.string(b.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, i.jsx)('div', { className: A.backgroundCustomInlineUpsellBackground }), (0, i.jsx)('div', { className: A.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            l &&
                (0, i.jsx)(o.IGR, {
                    text: b.intl.string(b.t.y2b7CA),
                    className: A.newTextBadge
                })
        ]
    });
}
function Z(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: s } = (0, m.ZP)(h.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, u.ZP)(() => {
            p.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: s
            });
        }),
        (0, i.jsx)(y, {
            onClick: t,
            tooltipText: b.intl.string(b.t.IqE0T0)
        })
    );
}
function L(e) {
    let { onAddBackgroundImage: t, disabled: s } = e,
        l = (0, o.vRw)(),
        r = s ? b.intl.formatToPlainString(b.t.ykGFeH, { maxCustomBackgrounds: 25 }) : b.intl.string(b.t.Qx0tFR),
        a = [
            {
                name: b.intl.string(b.t.Sp2NFx),
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, i.jsx)(y, {
        disabled: s,
        onClick: function () {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('70687'), n.e('86177')]).then(n.bind(n, 28130));
                    return (n) =>
                        (0, i.jsx)(e, {
                            maxFileSizeBytes: I.SJ,
                            onComplete: t,
                            uploadType: j.pC.VIDEO_BACKGROUND,
                            filters: a,
                            modalTitle: b.intl.string(b.t.yG2pUl),
                            imageSpecifications: b.intl.string(b.t['72OaxM']),
                            uploadOptionTitle: b.intl.string(b.t.xsW8u7),
                            showUpsellHeader: !0,
                            ...n
                        });
                },
                { contextKey: l }
            );
        },
        tooltipText: r
    });
}
function k(e) {
    let { canUseCustomBackgrounds: t, customBackgroundOptions: n, selectedOption: l, onSelectOption: r, onUpsellClick: a, onAddBackgroundImage: c, smallerOptions: d } = e,
        u = s.useMemo(() => n.sort((e, t) => (null == e.last_used || null == t.last_used ? C.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime())), [n]),
        g = u.length >= 25,
        { analyticsLocations: x } = (0, m.ZP)(h.Z.VIDEO_BACKGROUND_OPTIONS),
        _ = Object.values((0, f.Z)()).sort((e, t) => I.E1[e.id] - I.E1[t.id]);
    return (0, i.jsx)(m.Gt, {
        value: x,
        children: (0, i.jsxs)('div', {
            className: d ? A.backgroundOptionsSmall : A.backgroundOptionsLarge,
            children: [
                (0, i.jsx)(O, {
                    selected: null == l,
                    icon: o.t6m,
                    onClick: () => r(null),
                    text: b.intl.string(b.t.fUdMeH)
                }),
                (0, i.jsx)(O, {
                    className: A.__invalid_backgroundOptionBlurred,
                    selected: l === I.f7,
                    icon: o.yMH,
                    onClick: () => r(I.f7),
                    text: b.intl.string(b.t.LhSyLy),
                    children: (0, i.jsx)('div', { className: A.backgroundOptionBlurBackground })
                }),
                t
                    ? (0, i.jsx)(L, {
                          onAddBackgroundImage: c,
                          disabled: g
                      })
                    : (0, i.jsx)(Z, { onClick: a }),
                u.map((e) =>
                    (0, i.jsx)(
                        o.ua7,
                        {
                            text: (0, i.jsx)(P, {}),
                            'aria-label': b.intl.string(b.t['T+yRY2']),
                            children: (t) => {
                                let n = (0, E.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == n
                                    ? null
                                    : (0, s.createElement)(D, {
                                          ...t,
                                          key: e.id,
                                          option: e,
                                          source: n,
                                          selected: (0, N.rD)(l) && l.id === e.id,
                                          onSelectOption: r,
                                          isVideo: (0, E.ay)(e.asset),
                                          isAnimatedImage: (0, E.xR)(e.asset)
                                      });
                            }
                        },
                        e.id
                    )
                ),
                _.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, i.jsx)(
                        o.ua7,
                        {
                            text: e.name,
                            'aria-label': e.name,
                            children: (n) =>
                                (0, s.createElement)(D, {
                                    ...n,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: l === e.id,
                                    onSelectOption: r,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation
                                })
                        },
                        e.id
                    );
                })
            ]
        })
    });
}
