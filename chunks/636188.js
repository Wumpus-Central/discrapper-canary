(n.d(t, { Z: () => B }), n(388685), n(642613));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(2052),
    u = n(493773),
    m = n(100527),
    p = n(906732),
    g = n(70097),
    h = n(142497),
    f = n(810788),
    b = n(626135),
    x = n(768581),
    _ = n(709054),
    j = n(647177),
    C = n(63985),
    O = n(678916),
    E = n(981631),
    v = n(190378),
    S = n(486324),
    T = n(474936),
    N = n(388032),
    I = n(191908);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
    let { icon: t, onClick: n, text: r, children: s, className: l, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: m } = e;
    return (0, i.jsxs)(o.P3F, {
        className: a()(l, I.backgroundOption, {
            [I.backgroundOptionSelected]: c,
            [I.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: m,
        onClick: d ? void 0 : n,
        children: [
            c ? (0, i.jsx)('div', { className: I.backgroundOptionRing }) : null,
            (0, i.jsxs)('div', {
                className: I.backgroundOptionInner,
                children: [
                    s,
                    (0, i.jsxs)('div', {
                        className: I.backgroundOptionContent,
                        children: [
                            (0, i.jsx)(t, {
                                className: I.backgroundIconOptionIcon,
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, i.jsx)(o.Text, {
                                className: I.backgroundOptionText,
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
            className: I.backgroundImageOption,
            style: { backgroundImage: 'url('.concat(n, ')') }
        });
    let o = (0, x.rI)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: 720,
        canAnimate: !1
    });
    return (0, i.jsx)('img', {
        onMouseMove: () => l(!0),
        onMouseLeave: () => l(!1),
        className: I.backgroundImageOption,
        src: a ? n : o,
        alt: t.id
    });
}
function D(e) {
    var { option: t, source: r, selected: s = !1, onSelectOption: u, isAnimatedImage: x, isVideo: _, hotspotLocation: C } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['option', 'source', 'selected', 'onSelectOption', 'isAnimatedImage', 'isVideo', 'hotspotLocation']);
    let v = (0, d.O)(),
        { analyticsLocations: S } = (0, p.ZP)(m.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        P = (0, l.e7)([f.Z], () => null != C && f.Z.hasHotspot(C)),
        D = _
            ? (0, i.jsx)(g.Z, {
                  className: I.backgroundImageOption,
                  src: r,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, i.jsx)(R, {
                  isAnimated: x,
                  option: (0, j.rD)(t) ? t : void 0,
                  source: r
              });
    function Z() {
        null != C &&
            P &&
            (h.Kw(C),
            b.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: v.location,
                location_stack: S
            }));
    }
    return (0, i.jsxs)(
        o.P3F,
        A(y({}, O), {
            className: a()(I.backgroundOption, { [I.backgroundOptionSelected]: s }),
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
                s ? (0, i.jsx)('div', { className: I.backgroundOptionRing }) : null,
                (0, i.jsx)('div', {
                    onFocus: Z,
                    onMouseEnter: Z,
                    className: I.backgroundOptionInner,
                    children: D
                }),
                _ || x
                    ? (0, i.jsx)('div', {
                          className: I.playIcon,
                          children: (0, i.jsx)(o.o1U, {
                              size: 'xxs',
                              color: 'currentColor'
                          })
                      })
                    : null,
                P &&
                    (0, i.jsx)(o.IGR, {
                        text: N.intl.string(N.t.y2b7CA),
                        className: I.newTextBadge
                    })
            ]
        })
    );
}
function Z() {
    return (0, i.jsxs)('div', {
        className: I.customBackgroundTooltip,
        children: [
            (0, i.jsx)(o.SrA, {
                size: 'md',
                color: 'currentColor',
                className: I.customBackgroundTooltipIcon
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: N.intl.string(N.t['T+yRY2'])
            })
        ]
    });
}
function w(e) {
    let { onClick: t, tooltipText: n, disabled: r = !1 } = e,
        s = (0, l.e7)([f.Z], () => f.Z.hasHotspot(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function a() {
        h.Kw(v.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = s ? N.intl.string(N.t['5TUJOj']) : n;
    return (0, i.jsxs)(o.DY3, {
        text: c,
        className: I.newBackgroundTooltipContainer,
        children: [
            (0, i.jsxs)(P, {
                className: I.__invalid_backgroundOptionBlurred,
                disabled: r,
                icon: o.FmF,
                onClick: t,
                onMouseLeave: a,
                onBlur: a,
                text: (0, i.jsxs)('div', {
                    className: I.backgroundCustomInlineUpsell,
                    children: [
                        (0, i.jsx)(o.SrA, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.backgroundCustomInlineUpsellIcon
                        }),
                        (0, i.jsx)('div', {
                            className: I.overflowEllipsis,
                            children: N.intl.string(N.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, i.jsx)('div', { className: I.backgroundCustomInlineUpsellBackground }), (0, i.jsx)('div', { className: I.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            s &&
                (0, i.jsx)(o.IGR, {
                    text: N.intl.string(N.t.y2b7CA),
                    className: I.newTextBadge
                })
        ]
    });
}
function k(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: r } = (0, p.ZP)(m.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, u.ZP)(() => {
            b.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: r
            });
        }),
        (0, i.jsx)(w, {
            onClick: t,
            tooltipText: N.intl.string(N.t.IqE0T0)
        })
    );
}
function L(e) {
    let { onAddBackgroundImage: t, disabled: r } = e,
        s = (0, o.vRw)(),
        a = r ? N.intl.formatToPlainString(N.t.ykGFeH, { maxCustomBackgrounds: 25 }) : N.intl.string(N.t.Qx0tFR),
        l = [
            {
                name: N.intl.string(N.t.Sp2NFx),
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
                                    maxFileSizeBytes: O.SJ,
                                    onComplete: (e) => {
                                        let { imageUri: n, file: i, isFromTenor: r } = e;
                                        return t(n, i, r);
                                    },
                                    uploadType: S.pC.VIDEO_BACKGROUND,
                                    filters: l,
                                    modalTitle: N.intl.string(N.t.yG2pUl),
                                    imageSpecifications: N.intl.string(N.t['72OaxM']),
                                    uploadOptionTitle: N.intl.string(N.t.xsW8u7),
                                    showUpsellHeader: !0
                                },
                                n
                            )
                        );
                },
                { contextKey: s }
            );
        },
        tooltipText: a
    });
}
function B(e) {
    let { canUseCustomBackgrounds: t, customBackgroundOptions: n, selectedOption: s, onSelectOption: a, onUpsellClick: l, onAddBackgroundImage: c, smallerOptions: d } = e,
        u = r.useMemo(() => n.sort((e, t) => (null == e.last_used || null == t.last_used ? _.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime())), [n]),
        g = u.length >= 25,
        { analyticsLocations: h } = (0, p.ZP)(m.Z.VIDEO_BACKGROUND_OPTIONS),
        f = Object.values((0, C.Z)()).sort((e, t) => O.E1[e.id] - O.E1[t.id]);
    return (0, i.jsx)(p.Gt, {
        value: h,
        children: (0, i.jsxs)('div', {
            className: d ? I.backgroundOptionsSmall : I.backgroundOptionsLarge,
            children: [
                (0, i.jsx)(P, {
                    selected: null == s,
                    icon: o.t6m,
                    onClick: () => a(null),
                    text: N.intl.string(N.t.fUdMeH)
                }),
                (0, i.jsx)(P, {
                    className: I.__invalid_backgroundOptionBlurred,
                    selected: s === O.f7,
                    icon: o.yMH,
                    onClick: () => a(O.f7),
                    text: N.intl.string(N.t.LhSyLy),
                    children: (0, i.jsx)('div', { className: I.backgroundOptionBlurBackground })
                }),
                t
                    ? (0, i.jsx)(L, {
                          onAddBackgroundImage: c,
                          disabled: g
                      })
                    : (0, i.jsx)(k, { onClick: l }),
                u.map((e) =>
                    (0, i.jsx)(
                        o.ua7,
                        {
                            text: (0, i.jsx)(Z, {}),
                            'aria-label': N.intl.string(N.t['T+yRY2']),
                            children: (t) => {
                                let n = (0, x.rI)({
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
                                              selected: (0, j.rD)(s) && s.id === e.id,
                                              onSelectOption: a,
                                              isVideo: (0, x.ay)(e.asset),
                                              isAnimatedImage: (0, x.xR)(e.asset)
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
                                        onSelectOption: a,
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
