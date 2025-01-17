t.d(n, {
    Z: function () {
        return A;
    }
}),
    t(47120);
var l = t(200651),
    s = t(192379),
    o = t(120356),
    a = t.n(o),
    i = t(442837),
    r = t(481060),
    c = t(239091),
    d = t(2052),
    u = t(493773),
    g = t(100527),
    m = t(906732),
    p = t(70097),
    x = t(142497),
    k = t(810788),
    O = t(626135),
    j = t(768581),
    f = t(709054),
    I = t(647177),
    N = t(63985),
    h = t(678916),
    v = t(981631),
    C = t(190378),
    T = t(486324),
    E = t(474936),
    _ = t(388032),
    b = t(821492);
function S(e) {
    let { icon: n, onClick: t, text: s, children: o, className: i, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: g } = e;
    return (0, l.jsxs)(r.Clickable, {
        className: a()(i, b.backgroundOption, {
            [b.backgroundOptionSelected]: c,
            [b.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: g,
        onClick: d ? void 0 : t,
        children: [
            c ? (0, l.jsx)('div', { className: b.backgroundOptionRing }) : null,
            (0, l.jsxs)('div', {
                className: b.backgroundOptionInner,
                children: [
                    o,
                    (0, l.jsxs)('div', {
                        className: b.backgroundOptionContent,
                        children: [
                            (0, l.jsx)(n, {
                                className: a()(b.backgroundIconOptionIcon),
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, l.jsx)(r.Text, {
                                className: b.backgroundOptionText,
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
function B(e) {
    let { option: n, source: t, isAnimated: o } = e,
        [a, i] = s.useState(!1);
    if (
        (s.useEffect(() => {
            new Image().src = t;
        }, [t]),
        !o || null == n)
    )
        return (0, l.jsx)('div', {
            className: b.backgroundImageOption,
            style: { backgroundImage: 'url('.concat(t, ')') }
        });
    let r = (0, j.rI)({
        userId: n.user_id,
        assetId: n.id,
        assetHash: n.asset,
        size: 720,
        canAnimate: !1
    });
    return (0, l.jsx)('img', {
        onMouseMove: () => i(!0),
        onMouseLeave: () => i(!1),
        className: b.backgroundImageOption,
        src: a ? t : r,
        alt: n.id
    });
}
function D(e) {
    let { option: n, source: s, selected: o = !1, onSelectOption: u, isAnimatedImage: j, isVideo: f, hotspotLocation: N, ...h } = e,
        C = (0, d.O)(),
        { analyticsLocations: T } = (0, m.ZP)(g.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        S = (0, i.e7)([k.Z], () => null != N && k.Z.hasHotspot(N)),
        D = f
            ? (0, l.jsx)(p.Z, {
                  className: b.backgroundImageOption,
                  src: s,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, l.jsx)(B, {
                  isAnimated: j,
                  option: (0, I.rD)(n) ? n : void 0,
                  source: s
              });
    function U() {
        null != N &&
            S &&
            (x.Kw(N),
            O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: E.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: C.location,
                location_stack: T
            }));
    }
    return (0, l.jsxs)(r.Clickable, {
        ...h,
        className: a()(b.backgroundOption, { [b.backgroundOptionSelected]: o }),
        onClick: () => u(n),
        onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
                let { default: e } = await t.e('99414').then(t.bind(t, 187658));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        backgroundOption: n,
                        optionIsInUse: o
                    });
            }),
        children: [
            o ? (0, l.jsx)('div', { className: b.backgroundOptionRing }) : null,
            (0, l.jsx)('div', {
                onFocus: U,
                onMouseEnter: U,
                className: b.backgroundOptionInner,
                children: D
            }),
            f || j
                ? (0, l.jsx)('div', {
                      className: b.playIcon,
                      children: (0, l.jsx)(r.PlayIcon, {
                          size: 'xxs',
                          color: 'currentColor'
                      })
                  })
                : null,
            S &&
                (0, l.jsx)(r.TextBadge, {
                    text: _.intl.string(_.t.y2b7CA),
                    className: b.newTextBadge
                })
        ]
    });
}
function U() {
    return (0, l.jsxs)('div', {
        className: b.customBackgroundTooltip,
        children: [
            (0, l.jsx)(r.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: b.customBackgroundTooltipIcon
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/normal',
                children: _.intl.string(_.t['T+yRY2'])
            })
        ]
    });
}
function y(e) {
    let { onClick: n, tooltipText: t, disabled: s = !1 } = e,
        o = (0, i.e7)([k.Z], () => k.Z.hasHotspot(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function a() {
        x.Kw(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = o ? _.intl.string(_.t['5TUJOj']) : t;
    return (0, l.jsxs)(r.TooltipContainer, {
        text: c,
        className: b.newBackgroundTooltipContainer,
        children: [
            (0, l.jsxs)(S, {
                className: b.__invalid_backgroundOptionBlurred,
                disabled: s,
                icon: r.ImagePlusIcon,
                onClick: n,
                onMouseLeave: a,
                onBlur: a,
                text: (0, l.jsxs)('div', {
                    className: b.backgroundCustomInlineUpsell,
                    children: [
                        (0, l.jsx)(r.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: b.backgroundCustomInlineUpsellIcon
                        }),
                        (0, l.jsx)('div', {
                            className: b.overflowEllipsis,
                            children: _.intl.string(_.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, l.jsx)('div', { className: b.backgroundCustomInlineUpsellBackground }), (0, l.jsx)('div', { className: b.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            o &&
                (0, l.jsx)(r.TextBadge, {
                    text: _.intl.string(_.t.y2b7CA),
                    className: b.newTextBadge
                })
        ]
    });
}
function M(e) {
    let { onClick: n } = e,
        t = (0, d.O)(),
        { analyticsLocations: s } = (0, m.ZP)(g.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, u.Z)(() => {
            O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
                type: E.cd.VIDEO_BACKGROUNDS_INLINE,
                location: t.location,
                location_stack: s
            });
        }),
        (0, l.jsx)(y, {
            onClick: n,
            tooltipText: _.intl.string(_.t.IqE0T0)
        })
    );
}
function Z(e) {
    let { onAddBackgroundImage: n, disabled: s } = e,
        o = (0, r.useModalContext)(),
        a = s ? _.intl.formatToPlainString(_.t.ykGFeH, { maxCustomBackgrounds: 25 }) : _.intl.string(_.t.Qx0tFR),
        i = [
            {
                name: _.intl.string(_.t.Sp2NFx),
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, l.jsx)(y, {
        disabled: s,
        onClick: function () {
            (0, r.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([t.e('70687'), t.e('83332')]).then(t.bind(t, 28130));
                    return (t) =>
                        (0, l.jsx)(e, {
                            maxFileSizeBytes: h.SJ,
                            onComplete: n,
                            uploadType: T.pC.VIDEO_BACKGROUND,
                            filters: i,
                            modalTitle: _.intl.string(_.t.yG2pUl),
                            imageSpecifications: _.intl.string(_.t['72OaxM']),
                            uploadOptionTitle: _.intl.string(_.t.xsW8u7),
                            showUpsellHeader: !0,
                            ...t
                        });
                },
                { contextKey: o }
            );
        },
        tooltipText: a
    });
}
function A(e) {
    let { canUseCustomBackgrounds: n, customBackgroundOptions: t, selectedOption: o, onSelectOption: a, onUpsellClick: i, onAddBackgroundImage: c, smallerOptions: d } = e,
        u = s.useMemo(() => t.sort((e, n) => (null == e.last_used || null == n.last_used ? f.default.compare(n.id, e.id) : new Date(n.last_used).getTime() - new Date(e.last_used).getTime())), [t]),
        p = u.length >= 25,
        { analyticsLocations: x } = (0, m.ZP)(g.Z.VIDEO_BACKGROUND_OPTIONS),
        k = Object.values((0, N.Z)()).sort((e, n) => h.E1[e.id] - h.E1[n.id]);
    return (0, l.jsx)(m.Gt, {
        value: x,
        children: (0, l.jsxs)('div', {
            className: d ? b.backgroundOptionsSmall : b.backgroundOptionsLarge,
            children: [
                (0, l.jsx)(S, {
                    selected: null == o,
                    icon: r.DenyIcon,
                    onClick: () => a(null),
                    text: _.intl.string(_.t.fUdMeH)
                }),
                (0, l.jsx)(S, {
                    className: b.__invalid_backgroundOptionBlurred,
                    selected: o === h.f7,
                    icon: r.BlurBackgroundIcon,
                    onClick: () => a(h.f7),
                    text: _.intl.string(_.t.LhSyLy),
                    children: (0, l.jsx)('div', { className: b.backgroundOptionBlurBackground })
                }),
                n
                    ? (0, l.jsx)(Z, {
                          onAddBackgroundImage: c,
                          disabled: p
                      })
                    : (0, l.jsx)(M, { onClick: i }),
                u.map((e) =>
                    (0, l.jsx)(
                        r.Tooltip,
                        {
                            text: (0, l.jsx)(U, {}),
                            'aria-label': _.intl.string(_.t['T+yRY2']),
                            children: (n) => {
                                let t = (0, j.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == t
                                    ? null
                                    : (0, s.createElement)(D, {
                                          ...n,
                                          key: e.id,
                                          option: e,
                                          source: t,
                                          selected: (0, I.rD)(o) && o.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, j.ay)(e.asset),
                                          isAnimatedImage: (0, j.xR)(e.asset)
                                      });
                            }
                        },
                        e.id
                    )
                ),
                k.map((e) => {
                    let n = !0 === e.isVideo;
                    return (0, l.jsx)(
                        r.Tooltip,
                        {
                            text: e.name,
                            'aria-label': e.name,
                            children: (t) =>
                                (0, s.createElement)(D, {
                                    ...t,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: o === e.id,
                                    onSelectOption: a,
                                    isVideo: n,
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
