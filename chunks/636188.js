n.d(t, { Z: () => B }), n(388685), n(642613);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(2052),
    u = n(493773),
    m = n(100527),
    g = n(906732),
    p = n(70097),
    h = n(142497),
    f = n(810788),
    b = n(626135),
    _ = n(768581),
    x = n(709054),
    E = n(647177),
    j = n(63985),
    C = n(678916),
    O = n(981631),
    S = n(190378),
    v = n(486324),
    T = n(474936),
    I = n(388032),
    N = n(191908);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { icon: t, onClick: n, text: r, children: s, className: a, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: m } = e;
    return (0, i.jsxs)(o.P3F, {
        className: l()(a, N.backgroundOption, {
            [N.backgroundOptionSelected]: c,
            [N.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: m,
        onClick: d ? void 0 : n,
        children: [
            c ? (0, i.jsx)('div', { className: N.backgroundOptionRing }) : null,
            (0, i.jsxs)('div', {
                className: N.backgroundOptionInner,
                children: [
                    s,
                    (0, i.jsxs)('div', {
                        className: N.backgroundOptionContent,
                        children: [
                            (0, i.jsx)(t, {
                                className: N.backgroundIconOptionIcon,
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, i.jsx)(o.Text, {
                                className: N.backgroundOptionText,
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
        [l, a] = r.useState(!1);
    if (
        (r.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !s || null == t)
    )
        return (0, i.jsx)('div', {
            className: N.backgroundImageOption,
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
        onMouseMove: () => a(!0),
        onMouseLeave: () => a(!1),
        className: N.backgroundImageOption,
        src: l ? n : o,
        alt: t.id
    });
}
function D(e) {
    var { option: t, source: r, selected: s = !1, onSelectOption: u, isAnimatedImage: _, isVideo: x, hotspotLocation: j } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['option', 'source', 'selected', 'onSelectOption', 'isAnimatedImage', 'isVideo', 'hotspotLocation']);
    let S = (0, d.O)(),
        { analyticsLocations: v } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        P = (0, a.e7)([f.Z], () => null != j && f.Z.hasHotspot(j)),
        D = x
            ? (0, i.jsx)(p.Z, {
                  className: N.backgroundImageOption,
                  src: r,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, i.jsx)(R, {
                  isAnimated: _,
                  option: (0, E.rD)(t) ? t : void 0,
                  source: r
              });
    function Z() {
        null != j &&
            P &&
            (h.Kw(j),
            b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: S.location,
                location_stack: v
            }));
    }
    return (0, i.jsxs)(
        o.P3F,
        A(y({}, C), {
            className: l()(N.backgroundOption, { [N.backgroundOptionSelected]: s }),
            onClick: () => u(t),
            onContextMenu: (e) =>
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('99414').then(n.bind(n, 187658));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            A(y({}, n), {
                                backgroundOption: t,
                                optionIsInUse: s
                            })
                        );
                }),
            children: [
                s ? (0, i.jsx)('div', { className: N.backgroundOptionRing }) : null,
                (0, i.jsx)('div', {
                    onFocus: Z,
                    onMouseEnter: Z,
                    className: N.backgroundOptionInner,
                    children: D
                }),
                x || _
                    ? (0, i.jsx)('div', {
                          className: N.playIcon,
                          children: (0, i.jsx)(o.o1U, {
                              size: 'xxs',
                              color: 'currentColor'
                          })
                      })
                    : null,
                P &&
                    (0, i.jsx)(o.IGR, {
                        text: I.intl.string(I.t.y2b7CA),
                        className: N.newTextBadge
                    })
            ]
        })
    );
}
function Z() {
    return (0, i.jsxs)('div', {
        className: N.customBackgroundTooltip,
        children: [
            (0, i.jsx)(o.SrA, {
                size: 'md',
                color: 'currentColor',
                className: N.customBackgroundTooltipIcon
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: I.intl.string(I.t['T+yRY2'])
            })
        ]
    });
}
function w(e) {
    let { onClick: t, tooltipText: n, disabled: r = !1 } = e,
        s = (0, a.e7)([f.Z], () => f.Z.hasHotspot(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function l() {
        h.Kw(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = s ? I.intl.string(I.t['5TUJOj']) : n;
    return (0, i.jsxs)(o.DY3, {
        text: c,
        className: N.newBackgroundTooltipContainer,
        children: [
            (0, i.jsxs)(P, {
                className: N.__invalid_backgroundOptionBlurred,
                disabled: r,
                icon: o.FmF,
                onClick: t,
                onMouseLeave: l,
                onBlur: l,
                text: (0, i.jsxs)('div', {
                    className: N.backgroundCustomInlineUpsell,
                    children: [
                        (0, i.jsx)(o.SrA, {
                            size: 'md',
                            color: 'currentColor',
                            className: N.backgroundCustomInlineUpsellIcon
                        }),
                        (0, i.jsx)('div', {
                            className: N.overflowEllipsis,
                            children: I.intl.string(I.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, i.jsx)('div', { className: N.backgroundCustomInlineUpsellBackground }), (0, i.jsx)('div', { className: N.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            s &&
                (0, i.jsx)(o.IGR, {
                    text: I.intl.string(I.t.y2b7CA),
                    className: N.newTextBadge
                })
        ]
    });
}
function k(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: r } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, u.ZP)(() => {
            b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: r
            });
        }),
        (0, i.jsx)(w, {
            onClick: t,
            tooltipText: I.intl.string(I.t.IqE0T0)
        })
    );
}
function L(e) {
    let { onAddBackgroundImage: t, disabled: r } = e,
        s = (0, o.vRw)(),
        l = r ? I.intl.formatToPlainString(I.t.ykGFeH, { maxCustomBackgrounds: 25 }) : I.intl.string(I.t.Qx0tFR),
        a = [
            {
                name: I.intl.string(I.t.Sp2NFx),
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, i.jsx)(w, {
        disabled: r,
        onClick: function () {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('91689'), n.e('89289'), n.e('85449')]).then(n.bind(n, 28130));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            y(
                                {
                                    maxFileSizeBytes: C.SJ,
                                    onComplete: (e) => {
                                        let { imageUri: n, file: i, isFromTenor: r } = e;
                                        return t(n, i, r);
                                    },
                                    uploadType: v.pC.VIDEO_BACKGROUND,
                                    filters: a,
                                    modalTitle: I.intl.string(I.t.yG2pUl),
                                    imageSpecifications: I.intl.string(I.t['72OaxM']),
                                    uploadOptionTitle: I.intl.string(I.t.xsW8u7),
                                    showUpsellHeader: !0
                                },
                                n
                            )
                        );
                },
                { contextKey: s }
            );
        },
        tooltipText: l
    });
}
function B(e) {
    let { canUseCustomBackgrounds: t, customBackgroundOptions: n, selectedOption: s, onSelectOption: l, onUpsellClick: a, onAddBackgroundImage: c, smallerOptions: d } = e,
        u = r.useMemo(() => n.sort((e, t) => (null == e.last_used || null == t.last_used ? x.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime())), [n]),
        p = u.length >= 25,
        { analyticsLocations: h } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_OPTIONS),
        f = Object.values((0, j.Z)()).sort((e, t) => C.E1[e.id] - C.E1[t.id]);
    return (0, i.jsx)(g.Gt, {
        value: h,
        children: (0, i.jsxs)('div', {
            className: d ? N.backgroundOptionsSmall : N.backgroundOptionsLarge,
            children: [
                (0, i.jsx)(P, {
                    selected: null == s,
                    icon: o.t6m,
                    onClick: () => l(null),
                    text: I.intl.string(I.t.fUdMeH)
                }),
                (0, i.jsx)(P, {
                    className: N.__invalid_backgroundOptionBlurred,
                    selected: s === C.f7,
                    icon: o.yMH,
                    onClick: () => l(C.f7),
                    text: I.intl.string(I.t.LhSyLy),
                    children: (0, i.jsx)('div', { className: N.backgroundOptionBlurBackground })
                }),
                t
                    ? (0, i.jsx)(L, {
                          onAddBackgroundImage: c,
                          disabled: p
                      })
                    : (0, i.jsx)(k, { onClick: a }),
                u.map((e) =>
                    (0, i.jsx)(
                        o.ua7,
                        {
                            text: (0, i.jsx)(Z, {}),
                            'aria-label': I.intl.string(I.t['T+yRY2']),
                            children: (t) => {
                                let n = (0, _.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == n
                                    ? null
                                    : (0, r.createElement)(
                                          D,
                                          A(y({}, t), {
                                              key: e.id,
                                              option: e,
                                              source: n,
                                              selected: (0, E.rD)(s) && s.id === e.id,
                                              onSelectOption: l,
                                              isVideo: (0, _.ay)(e.asset),
                                              isAnimatedImage: (0, _.xR)(e.asset)
                                          })
                                      );
                            }
                        },
                        e.id
                    )
                ),
                f.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, i.jsx)(
                        o.ua7,
                        {
                            text: e.name,
                            'aria-label': e.name,
                            children: (n) =>
                                (0, r.createElement)(
                                    D,
                                    A(y({}, n), {
                                        key: e.id,
                                        option: e.id,
                                        source: e.source,
                                        selected: s === e.id,
                                        onSelectOption: l,
                                        isVideo: t,
                                        isAnimatedImage: !1,
                                        hotspotLocation: e.hotspotLocation
                                    })
                                )
                        },
                        e.id
                    );
                })
            ]
        })
    });
}
