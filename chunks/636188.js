n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(2052),
    u = n(493773),
    m = n(100527),
    g = n(906732),
    h = n(70097),
    p = n(142497),
    x = n(810788),
    f = n(626135),
    _ = n(768581),
    E = n(709054),
    C = n(647177),
    T = n(63985),
    S = n(678916),
    b = n(981631),
    I = n(190378),
    N = n(486324),
    v = n(474936),
    A = n(388032),
    j = n(821492);
function O(e) {
    let { icon: t, onClick: n, text: r, children: s, className: l, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: m } = e;
    return (0, i.jsxs)(o.Clickable, {
        className: a()(l, j.backgroundOption, {
            [j.backgroundOptionSelected]: c,
            [j.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: m,
        onClick: d ? void 0 : n,
        children: [
            c ? (0, i.jsx)('div', { className: j.backgroundOptionRing }) : null,
            (0, i.jsxs)('div', {
                className: j.backgroundOptionInner,
                children: [
                    s,
                    (0, i.jsxs)('div', {
                        className: j.backgroundOptionContent,
                        children: [
                            (0, i.jsx)(t, {
                                className: a()(j.backgroundIconOptionIcon),
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, i.jsx)(o.Text, {
                                className: j.backgroundOptionText,
                                color: 'none',
                                variant: 'text-sm/normal',
                                children: r
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { option: t, source: n, isAnimated: s } = e,
        [a, l] = r.useState(!1);
    if (
        (r.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !s || null == t)
    )
        return (0, i.jsx)('div', {
            className: j.backgroundImageOption,
            style: { backgroundImage: 'url('.concat(n, ')') }
        });
    let o = (0, _.rI)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: 720,
        canAnimate: !1
    });
    return (0, i.jsx)('img', {
        onMouseMove: () => l(!0),
        onMouseLeave: () => l(!1),
        className: j.backgroundImageOption,
        src: a ? n : o,
        alt: t.id
    });
}
function P(e) {
    let { option: t, source: r, selected: s = !1, onSelectOption: u, isAnimatedImage: _, isVideo: E, hotspotLocation: T, ...S } = e,
        I = (0, d.O)(),
        { analyticsLocations: N } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        O = (0, l.e7)([x.Z], () => null != T && x.Z.hasHotspot(T)),
        P = E
            ? (0, i.jsx)(h.Z, {
                  className: j.backgroundImageOption,
                  src: r,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, i.jsx)(R, {
                  isAnimated: _,
                  option: (0, C.rD)(t) ? t : void 0,
                  source: r
              });
    function D() {
        null != T &&
            O &&
            (p.Kw(T),
            f.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: I.location,
                location_stack: N
            }));
    }
    return (0, i.jsxs)(o.Clickable, {
        ...S,
        className: a()(j.backgroundOption, { [j.backgroundOptionSelected]: s }),
        onClick: () => u(t),
        onContextMenu: (e) =>
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('99414').then(n.bind(n, 187658));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        backgroundOption: t,
                        optionIsInUse: s
                    });
            }),
        children: [
            s ? (0, i.jsx)('div', { className: j.backgroundOptionRing }) : null,
            (0, i.jsx)('div', {
                onFocus: D,
                onMouseEnter: D,
                className: j.backgroundOptionInner,
                children: P
            }),
            E || _
                ? (0, i.jsx)('div', {
                      className: j.playIcon,
                      children: (0, i.jsx)(o.PlayIcon, {
                          size: 'xxs',
                          color: 'currentColor'
                      })
                  })
                : null,
            O &&
                (0, i.jsx)(o.TextBadge, {
                    text: A.intl.string(A.t.y2b7CA),
                    className: j.newTextBadge
                })
        ]
    });
}
function D() {
    return (0, i.jsxs)('div', {
        className: j.customBackgroundTooltip,
        children: [
            (0, i.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: j.customBackgroundTooltipIcon
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: A.intl.string(A.t['T+yRY2'])
            })
        ]
    });
}
function y(e) {
    let { onClick: t, tooltipText: n, disabled: r = !1 } = e,
        s = (0, l.e7)([x.Z], () => x.Z.hasHotspot(I.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function a() {
        p.Kw(I.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = s ? A.intl.string(A.t['5TUJOj']) : n;
    return (0, i.jsxs)(o.TooltipContainer, {
        text: c,
        className: j.newBackgroundTooltipContainer,
        children: [
            (0, i.jsxs)(O, {
                className: j.__invalid_backgroundOptionBlurred,
                disabled: r,
                icon: o.ImagePlusIcon,
                onClick: t,
                onMouseLeave: a,
                onBlur: a,
                text: (0, i.jsxs)('div', {
                    className: j.backgroundCustomInlineUpsell,
                    children: [
                        (0, i.jsx)(o.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: j.backgroundCustomInlineUpsellIcon
                        }),
                        (0, i.jsx)('div', {
                            className: j.overflowEllipsis,
                            children: A.intl.string(A.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, i.jsx)('div', { className: j.backgroundCustomInlineUpsellBackground }), (0, i.jsx)('div', { className: j.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            s &&
                (0, i.jsx)(o.TextBadge, {
                    text: A.intl.string(A.t.y2b7CA),
                    className: j.newTextBadge
                })
        ]
    });
}
function B(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: r } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, u.Z)(() => {
            f.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: r
            });
        }),
        (0, i.jsx)(y, {
            onClick: t,
            tooltipText: A.intl.string(A.t.IqE0T0)
        })
    );
}
function Z(e) {
    let { onAddBackgroundImage: t, disabled: r } = e,
        s = (0, o.useModalContext)(),
        a = r ? A.intl.formatToPlainString(A.t.ykGFeH, { maxCustomBackgrounds: 25 }) : A.intl.string(A.t.Qx0tFR),
        l = [
            {
                name: A.intl.string(A.t.Sp2NFx),
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, i.jsx)(y, {
        disabled: r,
        onClick: function () {
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('70687'), n.e('74752')]).then(n.bind(n, 28130));
                    return (n) =>
                        (0, i.jsx)(e, {
                            maxFileSizeBytes: S.SJ,
                            onComplete: t,
                            uploadType: N.pC.VIDEO_BACKGROUND,
                            filters: l,
                            modalTitle: A.intl.string(A.t.yG2pUl),
                            imageSpecifications: A.intl.string(A.t['72OaxM']),
                            uploadOptionTitle: A.intl.string(A.t.xsW8u7),
                            showUpsellHeader: !0,
                            ...n
                        });
                },
                { contextKey: s }
            );
        },
        tooltipText: a
    });
}
function L(e) {
    let { canUseCustomBackgrounds: t, customBackgroundOptions: n, selectedOption: s, onSelectOption: a, onUpsellClick: l, onAddBackgroundImage: c, smallerOptions: d } = e,
        u = r.useMemo(() => n.sort((e, t) => (null == e.last_used || null == t.last_used ? E.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime())), [n]),
        h = u.length >= 25,
        { analyticsLocations: p } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_OPTIONS),
        x = Object.values((0, T.Z)()).sort((e, t) => S.E1[e.id] - S.E1[t.id]);
    return (0, i.jsx)(g.Gt, {
        value: p,
        children: (0, i.jsxs)('div', {
            className: d ? j.backgroundOptionsSmall : j.backgroundOptionsLarge,
            children: [
                (0, i.jsx)(O, {
                    selected: null == s,
                    icon: o.DenyIcon,
                    onClick: () => a(null),
                    text: A.intl.string(A.t.fUdMeH)
                }),
                (0, i.jsx)(O, {
                    className: j.__invalid_backgroundOptionBlurred,
                    selected: s === S.f7,
                    icon: o.BlurBackgroundIcon,
                    onClick: () => a(S.f7),
                    text: A.intl.string(A.t.LhSyLy),
                    children: (0, i.jsx)('div', { className: j.backgroundOptionBlurBackground })
                }),
                t
                    ? (0, i.jsx)(Z, {
                          onAddBackgroundImage: c,
                          disabled: h
                      })
                    : (0, i.jsx)(B, { onClick: l }),
                u.map((e) =>
                    (0, i.jsx)(
                        o.Tooltip,
                        {
                            text: (0, i.jsx)(D, {}),
                            'aria-label': A.intl.string(A.t['T+yRY2']),
                            children: (t) => {
                                let n = (0, _.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == n
                                    ? null
                                    : (0, r.createElement)(P, {
                                          ...t,
                                          key: e.id,
                                          option: e,
                                          source: n,
                                          selected: (0, C.rD)(s) && s.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, _.ay)(e.asset),
                                          isAnimatedImage: (0, _.xR)(e.asset)
                                      });
                            }
                        },
                        e.id
                    )
                ),
                x.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, i.jsx)(
                        o.Tooltip,
                        {
                            text: e.name,
                            'aria-label': e.name,
                            children: (n) =>
                                (0, r.createElement)(P, {
                                    ...n,
                                    key: e.id,
                                    option: e.id,
                                    source: e.source,
                                    selected: s === e.id,
                                    onSelectOption: a,
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
