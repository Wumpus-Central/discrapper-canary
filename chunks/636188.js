n.d(t, { Z: () => L }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
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
    N = n(768581),
    x = n(709054),
    _ = n(647177),
    E = n(63985),
    j = n(678916),
    O = n(981631),
    C = n(190378),
    S = n(486324),
    v = n(474936),
    T = n(388032),
    I = n(191908);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { icon: t, onClick: n, text: i, children: s, className: l, selected: c = !1, disabled: d = !1, onMouseLeave: u, onBlur: m } = e;
    return (0, r.jsxs)(o.P3F, {
        className: a()(l, I.backgroundOption, {
            [I.backgroundOptionSelected]: c,
            [I.backgroundOptionDisabled]: d
        }),
        onMouseLeave: u,
        onBlur: m,
        onClick: d ? void 0 : n,
        children: [
            c ? (0, r.jsx)('div', { className: I.backgroundOptionRing }) : null,
            (0, r.jsxs)('div', {
                className: I.backgroundOptionInner,
                children: [
                    s,
                    (0, r.jsxs)('div', {
                        className: I.backgroundOptionContent,
                        children: [
                            (0, r.jsx)(t, {
                                className: I.backgroundIconOptionIcon,
                                color: 'currentColor',
                                size: 'custom',
                                width: 18,
                                height: 18
                            }),
                            (0, r.jsx)(o.Text, {
                                className: I.backgroundOptionText,
                                color: 'none',
                                variant: 'text-sm/normal',
                                children: i
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
        [a, l] = i.useState(!1);
    if (
        (i.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !s || null == t)
    )
        return (0, r.jsx)('div', {
            className: I.backgroundImageOption,
            style: { backgroundImage: 'url('.concat(n, ')') }
        });
    let o = (0, N.rI)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: 720,
        canAnimate: !1
    });
    return (0, r.jsx)('img', {
        onMouseMove: () => l(!0),
        onMouseLeave: () => l(!1),
        className: I.backgroundImageOption,
        src: a ? n : o,
        alt: t.id
    });
}
function D(e) {
    var { option: t, source: i, selected: s = !1, onSelectOption: u, isAnimatedImage: N, isVideo: x, hotspotLocation: E } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['option', 'source', 'selected', 'onSelectOption', 'isAnimatedImage', 'isVideo', 'hotspotLocation']);
    let C = (0, d.O)(),
        { analyticsLocations: S } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        P = (0, l.e7)([f.Z], () => null != E && f.Z.hasHotspot(E)),
        D = x
            ? (0, r.jsx)(p.Z, {
                  className: I.backgroundImageOption,
                  src: i,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0
              })
            : (0, r.jsx)(R, {
                  isAnimated: N,
                  option: (0, _.rD)(t) ? t : void 0,
                  source: i
              });
    function Z() {
        null != E &&
            P &&
            (h.Kw(E),
            b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: C.location,
                location_stack: S
            }));
    }
    return (0, r.jsxs)(
        o.P3F,
        A(y({}, j), {
            className: a()(I.backgroundOption, { [I.backgroundOptionSelected]: s }),
            onClick: () => u(t),
            onContextMenu: (e) =>
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e('99414').then(n.bind(n, 187658));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            A(y({}, n), {
                                backgroundOption: t,
                                optionIsInUse: s
                            })
                        );
                }),
            children: [
                s ? (0, r.jsx)('div', { className: I.backgroundOptionRing }) : null,
                (0, r.jsx)('div', {
                    onFocus: Z,
                    onMouseEnter: Z,
                    className: I.backgroundOptionInner,
                    children: D
                }),
                x || N
                    ? (0, r.jsx)('div', {
                          className: I.playIcon,
                          children: (0, r.jsx)(o.o1U, {
                              size: 'xxs',
                              color: 'currentColor'
                          })
                      })
                    : null,
                P &&
                    (0, r.jsx)(o.IGR, {
                        text: T.NW.string(T.t.y2b7CA),
                        className: I.newTextBadge
                    })
            ]
        })
    );
}
function Z() {
    return (0, r.jsxs)('div', {
        className: I.customBackgroundTooltip,
        children: [
            (0, r.jsx)(o.SrA, {
                size: 'md',
                color: 'currentColor',
                className: I.customBackgroundTooltipIcon
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: T.NW.string(T.t['T+yRY2'])
            })
        ]
    });
}
function w(e) {
    let { onClick: t, tooltipText: n, disabled: i = !1 } = e,
        s = (0, l.e7)([f.Z], () => f.Z.hasHotspot(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function a() {
        h.Kw(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = s ? T.NW.string(T.t['5TUJOj']) : n;
    return (0, r.jsxs)(o.DY3, {
        text: c,
        className: I.newBackgroundTooltipContainer,
        children: [
            (0, r.jsxs)(P, {
                className: I.__invalid_backgroundOptionBlurred,
                disabled: i,
                icon: o.FmF,
                onClick: t,
                onMouseLeave: a,
                onBlur: a,
                text: (0, r.jsxs)('div', {
                    className: I.backgroundCustomInlineUpsell,
                    children: [
                        (0, r.jsx)(o.SrA, {
                            size: 'md',
                            color: 'currentColor',
                            className: I.backgroundCustomInlineUpsellIcon
                        }),
                        (0, r.jsx)('div', {
                            className: I.overflowEllipsis,
                            children: T.NW.string(T.t['1t7U8f'])
                        })
                    ]
                }),
                children: [(0, r.jsx)('div', { className: I.backgroundCustomInlineUpsellBackground }), (0, r.jsx)('div', { className: I.backgroundCustomInlineUpsellBackgroundDarkener })]
            }),
            s &&
                (0, r.jsx)(o.IGR, {
                    text: T.NW.string(T.t.y2b7CA),
                    className: I.newTextBadge
                })
        ]
    });
}
function k(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: i } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, u.ZP)(() => {
            b.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
                type: v.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: i
            });
        }),
        (0, r.jsx)(w, {
            onClick: t,
            tooltipText: T.NW.string(T.t.IqE0T0)
        })
    );
}
function W(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        s = (0, o.vRw)(),
        a = i ? T.NW.formatToPlainString(T.t.ykGFeH, { maxCustomBackgrounds: 25 }) : T.NW.string(T.t.Qx0tFR),
        l = [
            {
                name: T.NW.string(T.t.Sp2NFx),
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'mp4']
            }
        ];
    return (0, r.jsx)(w, {
        disabled: i,
        onClick: function () {
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('91689'), n.e('55849'), n.e('42791')]).then(n.bind(n, 192277));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            y(
                                {
                                    maxFileSizeBytes: j.SJ,
                                    onComplete: (e) => {
                                        let { imageUri: n, file: r, isFromTenor: i } = e;
                                        return t(n, r, i);
                                    },
                                    uploadType: S.pC.VIDEO_BACKGROUND,
                                    filters: l,
                                    modalTitle: T.NW.string(T.t.yG2pUl),
                                    imageSpecifications: T.NW.string(T.t['72OaxM']),
                                    uploadOptionTitle: T.NW.string(T.t.xsW8u7),
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
function L(e) {
    let { canUseCustomBackgrounds: t, customBackgroundOptions: n, selectedOption: s, onSelectOption: a, onUpsellClick: l, onAddBackgroundImage: c, smallerOptions: d } = e,
        u = i.useMemo(() => n.sort((e, t) => (null == e.last_used || null == t.last_used ? x.default.compare(t.id, e.id) : new Date(t.last_used).getTime() - new Date(e.last_used).getTime())), [n]),
        p = u.length >= 25,
        { analyticsLocations: h } = (0, g.ZP)(m.Z.VIDEO_BACKGROUND_OPTIONS),
        f = Object.values((0, E.Z)()).sort((e, t) => j.E1[e.id] - j.E1[t.id]);
    return (0, r.jsx)(g.Gt, {
        value: h,
        children: (0, r.jsxs)('div', {
            className: d ? I.backgroundOptionsSmall : I.backgroundOptionsLarge,
            children: [
                (0, r.jsx)(P, {
                    selected: null == s,
                    icon: o.t6m,
                    onClick: () => a(null),
                    text: T.NW.string(T.t.fUdMeH)
                }),
                (0, r.jsx)(P, {
                    className: I.__invalid_backgroundOptionBlurred,
                    selected: s === j.f7,
                    icon: o.yMH,
                    onClick: () => a(j.f7),
                    text: T.NW.string(T.t.LhSyLy),
                    children: (0, r.jsx)('div', { className: I.backgroundOptionBlurBackground })
                }),
                t
                    ? (0, r.jsx)(W, {
                          onAddBackgroundImage: c,
                          disabled: p
                      })
                    : (0, r.jsx)(k, { onClick: l }),
                u.map((e) =>
                    (0, r.jsx)(
                        o.ua7,
                        {
                            text: (0, r.jsx)(Z, {}),
                            'aria-label': T.NW.string(T.t['T+yRY2']),
                            children: (t) => {
                                let n = (0, N.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: 720
                                });
                                return null == n
                                    ? null
                                    : (0, i.createElement)(
                                          D,
                                          A(y({}, t), {
                                              key: e.id,
                                              option: e,
                                              source: n,
                                              selected: (0, _.rD)(s) && s.id === e.id,
                                              onSelectOption: a,
                                              isVideo: (0, N.ay)(e.asset),
                                              isAnimatedImage: (0, N.xR)(e.asset)
                                          })
                                      );
                            }
                        },
                        e.id
                    )
                ),
                f.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, r.jsx)(
                        o.ua7,
                        {
                            text: e.name,
                            'aria-label': e.name,
                            children: (n) =>
                                (0, i.createElement)(
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
