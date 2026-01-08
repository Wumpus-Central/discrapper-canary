n.d(t, { Z: () => Y }), n(388685), n(642613);
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
    p = n(100527),
    _ = n(906732),
    m = n(70097),
    h = n(142497),
    g = n(810788),
    E = n(260818),
    b = n(626135),
    y = n(768581),
    O = n(709054),
    v = n(647177),
    S = n(63985),
    I = n(678916),
    T = n(981631),
    C = n(190378),
    A = n(486324),
    N = n(474936),
    P = n(388032),
    R = n(859554);
function w(e, t, n) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 25,
    M = 720;
function k() {
    return [
        {
            name: P.intl.string(P.t["Sp2NF+"]),
            extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
        },
    ];
}
function U(e) {
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
function G(e) {
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
    let l = (0, y.rI)({
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
function Z(e) {
    let {
            option: t,
            source: a,
            selected: l = !1,
            onSelectOption: f,
            isAnimatedImage: y,
            isVideo: O,
            hotspotLocation: S,
        } = e,
        I = (0, d.O)(),
        { analyticsLocations: C } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        A = (0, s.e7)([g.Z], () => null != S && g.Z.hasHotspot(S)),
        w = i.useCallback((e) => {
            if (!(0, E.V)(e)) throw e;
        }, []),
        x = O
            ? (0, r.jsx)(m.Z, {
                  className: R.backgroundImageOption,
                  src: a,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0,
                  onPlayError: w,
              })
            : (0, r.jsx)(G, {
                  isAnimated: y,
                  option: (0, v.rD)(t) ? t : void 0,
                  source: a,
              });
    function j() {
        null != S &&
            A &&
            (h.Kw(S),
            b.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: I.location,
                location_stack: C,
            }));
    }
    return (0, r.jsxs)(c.P3F, {
        className: o()(R.backgroundOption, { [R.backgroundOptionSelected]: l }),
        onClick: () => f(t),
        onContextMenu: (e) =>
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e("99414").then(n.bind(n, 187658));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        L(D({}, n), {
                            backgroundOption: t,
                            optionIsInUse: l,
                        }),
                    );
            }),
        children: [
            l ? (0, r.jsx)("div", { className: R.backgroundOptionRing }) : null,
            (0, r.jsx)("div", {
                onFocus: j,
                onMouseEnter: j,
                className: R.backgroundOptionInner,
                children: x,
            }),
            O || y
                ? (0, r.jsx)("div", {
                      className: R.playIcon,
                      children: (0, r.jsx)(c.o1U, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                  })
                : null,
            A &&
                (0, r.jsx)(c.IGR, {
                    text: P.intl.string(P.t.y2b7CA),
                    className: R.newTextBadge,
                }),
        ],
    });
}
function F() {
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
                children: P.intl.string(P.t["T+yRY3"]),
            }),
        ],
    });
}
function B(e) {
    let { onClick: t, tooltipText: n, disabled: i = !1 } = e,
        a = (0, s.e7)([g.Z], () => g.Z.hasHotspot(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        h.Kw(C.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let u = a ? P.intl.string(P.t["5TUJOv"]) : n;
    return (0, r.jsx)(l.u, {
        text: u,
        children: (0, r.jsxs)("div", {
            className: R.newBackgroundTooltipContainer,
            children: [
                (0, r.jsxs)(U, {
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
                                children: P.intl.string(P.t["1t7U8W"]),
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
                        text: P.intl.string(P.t.y2b7CA),
                        className: R.newTextBadge,
                    }),
            ],
        }),
    });
}
function V(e) {
    let { onClick: t } = e,
        n = (0, d.O)(),
        { analyticsLocations: i } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, f.ZP)(() => {
            b.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: i,
            });
        }),
        (0, r.jsx)(B, {
            onClick: t,
            tooltipText: P.intl.string(P.t["IqE0T/"]),
        })
    );
}
function H(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        a = (0, c.vRw)(),
        o = i ? P.intl.formatToPlainString(P.t.ykGFeD, { maxCustomBackgrounds: j }) : P.intl.string(P.t.Qx0tFc),
        s = k();
    function l() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("91689"), n.e("89289"), n.e("32603")]).then(
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
                                modalTitle: P.intl.string(P.t.yG2pUi),
                                imageSpecifications: P.intl.string(P.t["72OaxN"]),
                                uploadOptionTitle: P.intl.string(P.t.xsW8u6),
                                showUpsellHeader: !0,
                            },
                            n,
                        ),
                    );
            },
            { contextKey: a },
        );
    }
    return (0, r.jsx)(B, {
        disabled: i,
        onClick: l,
        tooltipText: o,
    });
}
function Y(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: n,
            selectedOption: a,
            onSelectOption: s,
            onUpsellClick: u,
            onAddBackgroundImage: d,
            responsive: f = !0,
        } = e,
        m = i.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? O.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        h = m.length >= j,
        { analyticsLocations: g } = (0, _.ZP)(p.Z.VIDEO_BACKGROUND_OPTIONS),
        E = Object.values((0, S.Z)()).sort((e, t) => I.E1[e.id] - I.E1[t.id]);
    return (0, r.jsx)(_.Gt, {
        value: g,
        children: (0, r.jsxs)("div", {
            className: o()(R.backgroundOptions, !f && R.backgroundOptionsLarge),
            children: [
                (0, r.jsx)(U, {
                    selected: null == a,
                    icon: c.t6m,
                    onClick: () => s(null),
                    text: P.intl.string(P.t.fUdMeO),
                }),
                (0, r.jsx)(U, {
                    selected: a === I.f7,
                    icon: c.yMH,
                    onClick: () => s(I.f7),
                    text: P.intl.string(P.t.LhSyL8),
                    children: (0, r.jsx)("div", { className: R.backgroundOptionBlurBackground }),
                }),
                t
                    ? (0, r.jsx)(H, {
                          onAddBackgroundImage: d,
                          disabled: h,
                      })
                    : (0, r.jsx)(V, { onClick: u }),
                m.map((e) => {
                    let t = (0, y.rI)({
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
                                  __unsupportedReactNodeAsText: (0, r.jsx)(F, {}),
                                  "aria-label": P.intl.string(P.t["T+yRY3"]),
                                  children: (0, r.jsx)(
                                      Z,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, v.rD)(a) && a.id === e.id,
                                          onSelectOption: s,
                                          isVideo: (0, y.ay)(e.asset),
                                          isAnimatedImage: (0, y.xR)(e.asset),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                E.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, r.jsx)(
                        l.u,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, r.jsx)(
                                Z,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: a === e.id,
                                    onSelectOption: s,
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
