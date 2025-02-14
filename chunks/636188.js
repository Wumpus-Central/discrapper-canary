n.d(t, { Z: () => L }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(2052),
    u = n(493773),
    m = n(100527),
    h = n(906732),
    g = n(70097),
    x = n(142497),
    _ = n(810788),
    p = n(626135),
    E = n(768581),
    C = n(709054),
    f = n(647177),
    T = n(63985),
    N = n(678916),
    S = n(981631),
    I = n(190378),
    b = n(486324),
    v = n(474936),
    j = n(388032),
    A = n(232341);
function O(e) {
    let { icon: t, onClick: n, text: s, children: r, className: a, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: m } = e;
    return (0, i.jsxs)(o.P3F, {
        className: l()(a, A.backgroundOption, {
            [A.backgroundOptionSelected]: c,
            [A.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: m,
        onClick: d ? void 0 : n,
        children: [
            c ? (0, i.jsx)('div', { className: A.backgroundOptionRing }) : null,
            (0, i.jsxs)('div', {
                className: A.backgroundOptionInner,
                children: [
                    r,
                    (0, i.jsxs)('div', {
                        className: A.backgroundOptionContent,
                        children: [
                            (0, i.jsx)(t, {
                                className: l()(A.backgroundIconOptionIcon),
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
    let { option: t, source: n, isAnimated: r } = e,
        [l, a] = s.useState(!1);
    if (
        (s.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !r || null == t)
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
        src: l ? n : o,
        alt: t.id
    });
}
function P(e) {
    let { option: t, source: s, selected: r = !1, onSelectOption: u, isAnimatedImage: E, isVideo: C, hotspotLocation: T, ...N } = e,
        I = (0, d.O)(),
        { analyticsLocations: b } = (0, h.ZP)(m.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        O = (0, a.e7)([_.Z], () => null != T && _.Z.hasHotspot(T)),
        P = C
            ? (0, i.jsx)(g.Z, {
                  className: A.backgroundImageOption,
                  src: s,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, i.jsx)(R, {
                  isAnimated: E,
                  option: (0, f.rD)(t) ? t : void 0,
                  source: s
              });
    function D() {
        null != T &&
            O &&
            (x.Kw(T),
            p.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: I.location,
                location_stack: b
            }));
    }
    return (0, i.jsxs)(o.P3F, {
        ...N,
        className: l()(A.backgroundOption, { [A.backgroundOptionSelected]: r }),
        onClick: () => u(t),
        onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('99414').then(n.bind(n, 187658));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        backgroundOption: t,
                        optionIsInUse: r
                    });
            }),
        children: [
            r ? (0, i.jsx)('div', { className: A.backgroundOptionRing }) : null,
            (0, i.jsx)('div', {
                onFocus: D,
                onMouseEnter: D,
                className: A.backgroundOptionInner,
                children: P
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
                    text: j.intl.string(j.t.y2b7CA),
                    className: A.newTextBadge
                })
        ]
    });
}
function D() {
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
                children: j.intl.string(j.t['T+yRY2'])
            })
        ]
    });
}
function y(e) {
    let { onClick: t, tooltipText: n, disabled: s = !1 } = e,
        r = (0, a.e7)([_.Z], () => _.Z.hasHotspot(I.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function l() {
        x.Kw(I.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = r ? j.intl.string(j.t['5TUJOj']) : n;
    return (0, i.jsxs)(o.DY3, {
        text: c,
        className: A.newBackgroundTooltipContainer,
        children: [
            (0, i.jsxs)(O, {
                className: A.__invalid_backgroundOptionBlurred,
                disabled: s,
                icon: o.FmF,
                onClick: t,
                onMouseLeave: l,
                onBlur: l,
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
                            children: j.intl.string(j.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, i.jsx)('div', { className: A.backgroundCustomInlineUpsellBackground }), (0, i.jsx)('div', { className: A.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            r &&
                (0, i.jsx)(o.IGR, {
                    text: j.intl.string(j.t.y2b7CA),
                    className: A.newTextBadge
                })
        ]
    });
}
function Z(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: s } = (0, h.ZP)(m.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, u.ZP)(() => {
            p.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: s
            });
        }),
        (0, i.jsx)(y, {
            onClick: t,
            tooltipText: j.intl.string(j.t.IqE0T0)
        })
    );
}
function k(e) {
    let { onAddBackgroundImage: t, disabled: s } = e,
        r = (0, o.vRw)(),
        l = s ? j.intl.formatToPlainString(j.t.ykGFeH, { maxCustomBackgrounds: 25 }) : j.intl.string(j.t.Qx0tFR),
        a = [
            {
                name: j.intl.string(j.t.Sp2NFx),
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, i.jsx)(y, {
        disabled: s,
        onClick: function () {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('70687'), n.e('55849'), n.e('81224')]).then(n.bind(n, 192277));
                    return (n) =>
                        (0, i.jsx)(e, {
                            maxFileSizeBytes: N.SJ,
                            onComplete: t,
                            uploadType: b.pC.VIDEO_BACKGROUND,
                            filters: a,
                            modalTitle: j.intl.string(j.t.yG2pUl),
                            imageSpecifications: j.intl.string(j.t['72OaxM']),
                            uploadOptionTitle: j.intl.string(j.t.xsW8u7),
                            showUpsellHeader: !0,
                            ...n
                        });
                },
                { contextKey: r }
            );
        },
        tooltipText: l
    });
}
function L(e) {
    let { canUseCustomBackgrounds: t, customBackgroundOptions: n, selectedOption: r, onSelectOption: l, onUpsellClick: a, onAddBackgroundImage: c, smallerOptions: d } = e,
        u = s.useMemo(() => n.sort((e, t) => (null == e.last_used || null == t.last_used ? C.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime())), [n]),
        g = u.length >= 25,
        { analyticsLocations: x } = (0, h.ZP)(m.Z.VIDEO_BACKGROUND_OPTIONS),
        _ = Object.values((0, T.Z)()).sort((e, t) => N.E1[e.id] - N.E1[t.id]);
    return (0, i.jsx)(h.Gt, {
        value: x,
        children: (0, i.jsxs)('div', {
            className: d ? A.backgroundOptionsSmall : A.backgroundOptionsLarge,
            children: [
                (0, i.jsx)(O, {
                    selected: null == r,
                    icon: o.t6m,
                    onClick: () => l(null),
                    text: j.intl.string(j.t.fUdMeH)
                }),
                (0, i.jsx)(O, {
                    className: A.__invalid_backgroundOptionBlurred,
                    selected: r === N.f7,
                    icon: o.yMH,
                    onClick: () => l(N.f7),
                    text: j.intl.string(j.t.LhSyLy),
                    children: (0, i.jsx)('div', { className: A.backgroundOptionBlurBackground })
                }),
                t
                    ? (0, i.jsx)(k, {
                          onAddBackgroundImage: c,
                          disabled: g
                      })
                    : (0, i.jsx)(Z, { onClick: a }),
                u.map((e) =>
                    (0, i.jsx)(
                        o.ua7,
                        {
                            text: (0, i.jsx)(D, {}),
                            'aria-label': j.intl.string(j.t['T+yRY2']),
                            children: (t) => {
                                let n = (0, E.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == n
                                    ? null
                                    : (0, s.createElement)(P, {
                                          ...t,
                                          key: e.id,
                                          option: e,
                                          source: n,
                                          selected: (0, f.rD)(r) && r.id === e.id,
                                          onSelectOption: l,
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
                                (0, s.createElement)(P, {
                                    ...n,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: r === e.id,
                                    onSelectOption: l,
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
