n.d(t, { Z: () => H }), n(388685), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(239091),
    d = n(2052),
    f = n(493773),
    _ = n(100527),
    p = n(906732),
    h = n(70097),
    m = n(142497),
    g = n(810788),
    E = n(626135),
    b = n(768581),
    y = n(709054),
    O = n(647177),
    v = n(63985),
    I = n(678916),
    T = n(981631),
    S = n(190378),
    A = n(486324),
    C = n(474936),
    N = n(388032),
    R = n(605690);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = 25,
    M = 720;
function k() {
    return [
        {
            name: N.intl.string(N.t["Sp2NF+"]),
            extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
        },
    ];
}
function j(e) {
    let {
        icon: t,
        onClick: n,
        text: i,
        children: a,
        className: s,
        selected: l = !1,
        disabled: u = !1,
        onMouseLeave: d,
        onBlur: f,
    } = e;
    return (0, r.jsxs)(c.P3F, {
        className: o()(s, R.backgroundOption, {
            [R.backgroundOptionSelected]: l,
            [R.backgroundOptionDisabled]: u,
        }),
        onMouseLeave: d,
        onBlur: f,
        onClick: u ? void 0 : n,
        children: [
            l ? (0, r.jsx)("div", { className: R.backgroundOptionRing }) : null,
            (0, r.jsxs)("div", {
                className: R.backgroundOptionInner,
                children: [
                    a,
                    (0, r.jsxs)("div", {
                        className: R.backgroundOptionContent,
                        children: [
                            (0, r.jsx)(t, {
                                className: R.backgroundIconOptionIcon,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, r.jsx)(c.Text, {
                                className: R.backgroundOptionText,
                                color: "none",
                                variant: "text-sm/normal",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { option: t, source: n, isAnimated: a } = e,
        [o, s] = i.useState(!1);
    if (
        (i.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !a || null == t)
    )
        return (0, r.jsx)("div", {
            className: R.backgroundImageOption,
            style: { backgroundImage: "url(".concat(n, ")") },
        });
    let l = (0, b.rI)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: M,
        canAnimate: !1,
    });
    return (0, r.jsx)("img", {
        onMouseMove: () => s(!0),
        onMouseLeave: () => s(!1),
        className: R.backgroundImageOption,
        src: o ? n : l,
        alt: t.id,
    });
}
function G(e) {
    let {
            option: t,
            source: i,
            selected: a = !1,
            onSelectOption: l,
            isAnimatedImage: f,
            isVideo: b,
            hotspotLocation: y,
        } = e,
        v = (0, d.O)(),
        { analyticsLocations: I } = (0, p.ZP)(_.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        S = (0, s.e7)([g.Z], () => null != y && g.Z.hasHotspot(y)),
        A = b
            ? (0, r.jsx)(h.Z, {
                  className: R.backgroundImageOption,
                  src: i,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0,
              })
            : (0, r.jsx)(U, {
                  isAnimated: f,
                  option: (0, O.rD)(t) ? t : void 0,
                  source: i,
              });
    function P() {
        null != y &&
            S &&
            (m.Kw(y),
            E.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: v.location,
                location_stack: I,
            }));
    }
    return (0, r.jsxs)(c.P3F, {
        className: o()(R.backgroundOption, { [R.backgroundOptionSelected]: a }),
        onClick: () => l(t),
        onContextMenu: (e) =>
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e("99414").then(n.bind(n, 187658));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        L(D({}, n), {
                            backgroundOption: t,
                            optionIsInUse: a,
                        }),
                    );
            }),
        children: [
            a ? (0, r.jsx)("div", { className: R.backgroundOptionRing }) : null,
            (0, r.jsx)("div", {
                onFocus: P,
                onMouseEnter: P,
                className: R.backgroundOptionInner,
                children: A,
            }),
            b || f
                ? (0, r.jsx)("div", {
                      className: R.playIcon,
                      children: (0, r.jsx)(c.o1U, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                  })
                : null,
            S &&
                (0, r.jsx)(c.IGR, {
                    text: N.intl.string(N.t.y2b7CA),
                    className: R.newTextBadge,
                }),
        ],
    });
}
function B() {
    return (0, r.jsxs)("div", {
        className: R.customBackgroundTooltip,
        children: [
            (0, r.jsx)(c.SrA, {
                size: "md",
                color: "currentColor",
                className: R.customBackgroundTooltipIcon,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: N.intl.string(N.t["T+yRY3"]),
            }),
        ],
    });
}
function Z(e) {
    let { onClick: t, tooltipText: n, disabled: i = !1 } = e,
        a = (0, s.e7)([g.Z], () => g.Z.hasHotspot(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        m.Kw(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let l = a ? N.intl.string(N.t["5TUJOv"]) : n;
    return (0, r.jsxs)(c.jSM, {
        text: l,
        className: R.newBackgroundTooltipContainer,
        children: [
            (0, r.jsxs)(j, {
                className: R.__invalid_backgroundOptionBlurred,
                disabled: i,
                icon: c.FmF,
                onClick: t,
                onMouseLeave: o,
                onBlur: o,
                text: (0, r.jsxs)("div", {
                    className: R.backgroundCustomInlineUpsell,
                    children: [
                        (0, r.jsx)(c.SrA, {
                            size: "md",
                            color: "currentColor",
                            className: R.backgroundCustomInlineUpsellIcon,
                        }),
                        (0, r.jsx)("div", {
                            className: R.overflowEllipsis,
                            children: N.intl.string(N.t["1t7U8W"]),
                        }),
                    ],
                }),
                children: [
                    (0, r.jsx)("div", { className: R.backgroundCustomInlineUpsellBackground }),
                    (0, r.jsx)("div", { className: R.backgroundCustomInlineUpsellBackgroundDarkener }),
                ],
            }),
            a &&
                (0, r.jsx)(c.IGR, {
                    text: N.intl.string(N.t.y2b7CA),
                    className: R.newTextBadge,
                }),
        ],
    });
}
function F(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: i } = (0, p.ZP)(_.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, f.ZP)(() => {
            E.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: i,
            });
        }),
        (0, r.jsx)(Z, {
            onClick: t,
            tooltipText: N.intl.string(N.t["IqE0T/"]),
        })
    );
}
function V(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        a = (0, c.vRw)(),
        o = i ? N.intl.formatToPlainString(N.t.ykGFeD, { maxCustomBackgrounds: x }) : N.intl.string(N.t.Qx0tFc),
        s = k();
    function l() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("91689"), n.e("89289"), n.e("50893")]).then(
                    n.bind(n, 28130),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        D(
                            {
                                maxFileSizeBytes: I.SJ,
                                onComplete: (e) => {
                                    let { imageUri: n, file: r, isFromTenor: i } = e;
                                    return t(n, r, i);
                                },
                                uploadType: A.pC.VIDEO_BACKGROUND,
                                filters: s,
                                modalTitle: N.intl.string(N.t.yG2pUi),
                                imageSpecifications: N.intl.string(N.t["72OaxN"]),
                                uploadOptionTitle: N.intl.string(N.t.xsW8u6),
                                showUpsellHeader: !0,
                            },
                            n,
                        ),
                    );
            },
            { contextKey: a },
        );
    }
    return (0, r.jsx)(Z, {
        disabled: i,
        onClick: l,
        tooltipText: o,
    });
}
function H(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: n,
            selectedOption: a,
            onSelectOption: o,
            onUpsellClick: s,
            onAddBackgroundImage: u,
            smallerOptions: d,
        } = e,
        f = i.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? y.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        h = f.length >= x,
        { analyticsLocations: m } = (0, p.ZP)(_.Z.VIDEO_BACKGROUND_OPTIONS),
        g = Object.values((0, v.Z)()).sort((e, t) => I.E1[e.id] - I.E1[t.id]);
    return (0, r.jsx)(p.Gt, {
        value: m,
        children: (0, r.jsxs)("div", {
            className: d ? R.backgroundOptionsSmall : R.backgroundOptionsLarge,
            children: [
                (0, r.jsx)(j, {
                    selected: null == a,
                    icon: c.t6m,
                    onClick: () => o(null),
                    text: N.intl.string(N.t.fUdMeO),
                }),
                (0, r.jsx)(j, {
                    selected: a === I.f7,
                    icon: c.yMH,
                    onClick: () => o(I.f7),
                    text: N.intl.string(N.t.LhSyL8),
                    children: (0, r.jsx)("div", { className: R.backgroundOptionBlurBackground }),
                }),
                t
                    ? (0, r.jsx)(V, {
                          onAddBackgroundImage: u,
                          disabled: h,
                      })
                    : (0, r.jsx)(F, { onClick: s }),
                f.map((e) => {
                    let t = (0, b.rI)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: M,
                    });
                    return null == t
                        ? null
                        : (0, r.jsx)(
                              l.u,
                              {
                                  __unsupportedReactNodeAsText: (0, r.jsx)(B, {}),
                                  "aria-label": N.intl.string(N.t["T+yRY3"]),
                                  children: (0, r.jsx)(
                                      G,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, O.rD)(a) && a.id === e.id,
                                          onSelectOption: o,
                                          isVideo: (0, b.ay)(e.asset),
                                          isAnimatedImage: (0, b.xR)(e.asset),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                g.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, r.jsx)(
                        l.u,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, r.jsx)(
                                G,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: a === e.id,
                                    onSelectOption: o,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation,
                                },
                                e.id,
                            ),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
