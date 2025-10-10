n.d(t, { Z: () => W }), n(388685), n(642613);
var r = n(951288),
    i = n(647438),
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
    R = n(199306);
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
function w(e) {
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
function D(e, t) {
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
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = M(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let j = 25,
    k = 720;
function U() {
    return [
        {
            name: N.intl.string(N.t.Sp2NFx),
            extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
        },
    ];
}
function G(e) {
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
function B(e) {
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
        size: k,
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
    var {
            option: t,
            source: i,
            selected: a = !1,
            onSelectOption: l,
            isAnimatedImage: f,
            isVideo: b,
            hotspotLocation: y,
        } = e,
        v = x(e, ["option", "source", "selected", "onSelectOption", "isAnimatedImage", "isVideo", "hotspotLocation"]);
    let I = (0, d.O)(),
        { analyticsLocations: S } = (0, p.ZP)(_.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        A = (0, s.e7)([g.Z], () => null != y && g.Z.hasHotspot(y)),
        P = b
            ? (0, r.jsx)(h.Z, {
                  className: R.backgroundImageOption,
                  src: i,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0,
              })
            : (0, r.jsx)(B, {
                  isAnimated: f,
                  option: (0, O.rD)(t) ? t : void 0,
                  source: i,
              });
    function D() {
        null != y &&
            A &&
            (m.Kw(y),
            E.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: I.location,
                location_stack: S,
            }));
    }
    return (0, r.jsxs)(
        c.P3F,
        L(w({}, v), {
            className: o()(R.backgroundOption, { [R.backgroundOptionSelected]: a }),
            onClick: () => l(t),
            onContextMenu: (e) =>
                (0, u.jW)(e, async () => {
                    let { default: e } = await n.e("99414").then(n.bind(n, 187658));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            L(w({}, n), {
                                backgroundOption: t,
                                optionIsInUse: a,
                            }),
                        );
                }),
            children: [
                a ? (0, r.jsx)("div", { className: R.backgroundOptionRing }) : null,
                (0, r.jsx)("div", {
                    onFocus: D,
                    onMouseEnter: D,
                    className: R.backgroundOptionInner,
                    children: P,
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
                A &&
                    (0, r.jsx)(c.IGR, {
                        text: N.intl.string(N.t.y2b7CA),
                        className: R.newTextBadge,
                    }),
            ],
        }),
    );
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
                children: N.intl.string(N.t["T+yRY2"]),
            }),
        ],
    });
}
function V(e) {
    let { onClick: t, tooltipText: n, disabled: i = !1 } = e,
        a = (0, s.e7)([g.Z], () => g.Z.hasHotspot(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        m.Kw(S.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let l = a ? N.intl.string(N.t["5TUJOj"]) : n;
    return (0, r.jsxs)(c.DY3, {
        text: l,
        className: R.newBackgroundTooltipContainer,
        children: [
            (0, r.jsxs)(G, {
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
                            children: N.intl.string(N.t["1t7U8f"]),
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
function H(e) {
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
        (0, r.jsx)(V, {
            onClick: t,
            tooltipText: N.intl.string(N.t.IqE0T0),
        })
    );
}
function Y(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        a = (0, c.vRw)(),
        o = i ? N.intl.formatToPlainString(N.t.ykGFeH, { maxCustomBackgrounds: j }) : N.intl.string(N.t.Qx0tFR),
        s = U();
    function l() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("91689"), n.e("89289"), n.e("53488")]).then(
                    n.bind(n, 28130),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        w(
                            {
                                maxFileSizeBytes: I.SJ,
                                onComplete: (e) => {
                                    let { imageUri: n, file: r, isFromTenor: i } = e;
                                    return t(n, r, i);
                                },
                                uploadType: A.pC.VIDEO_BACKGROUND,
                                filters: s,
                                modalTitle: N.intl.string(N.t.yG2pUl),
                                imageSpecifications: N.intl.string(N.t["72OaxM"]),
                                uploadOptionTitle: N.intl.string(N.t.xsW8u7),
                                showUpsellHeader: !0,
                            },
                            n,
                        ),
                    );
            },
            { contextKey: a },
        );
    }
    return (0, r.jsx)(V, {
        disabled: i,
        onClick: l,
        tooltipText: o,
    });
}
function W(e) {
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
        h = f.length >= j,
        { analyticsLocations: m } = (0, p.ZP)(_.Z.VIDEO_BACKGROUND_OPTIONS),
        g = Object.values((0, v.Z)()).sort((e, t) => I.E1[e.id] - I.E1[t.id]);
    return (0, r.jsx)(p.Gt, {
        value: m,
        children: (0, r.jsxs)("div", {
            className: d ? R.backgroundOptionsSmall : R.backgroundOptionsLarge,
            children: [
                (0, r.jsx)(G, {
                    selected: null == a,
                    icon: c.t6m,
                    onClick: () => o(null),
                    text: N.intl.string(N.t.fUdMeH),
                }),
                (0, r.jsx)(G, {
                    selected: a === I.f7,
                    icon: c.yMH,
                    onClick: () => o(I.f7),
                    text: N.intl.string(N.t.LhSyLy),
                    children: (0, r.jsx)("div", { className: R.backgroundOptionBlurBackground }),
                }),
                t
                    ? (0, r.jsx)(Y, {
                          onAddBackgroundImage: u,
                          disabled: h,
                      })
                    : (0, r.jsx)(H, { onClick: s }),
                f.map((e) =>
                    (0, r.jsx)(
                        c.ua7,
                        {
                            "data-migration-pending": !0,
                            text: (0, r.jsx)(F, {}),
                            "aria-label": N.intl.string(N.t["T+yRY2"]),
                            children: (t) => {
                                let n = (0, b.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: k,
                                });
                                return null == n
                                    ? null
                                    : (0, i.createElement)(
                                          Z,
                                          L(w({}, t), {
                                              key: e.id,
                                              option: e,
                                              source: n,
                                              selected: (0, O.rD)(a) && a.id === e.id,
                                              onSelectOption: o,
                                              isVideo: (0, b.ay)(e.asset),
                                              isAnimatedImage: (0, b.xR)(e.asset),
                                          }),
                                      );
                            },
                        },
                        e.id,
                    ),
                ),
                g.map((e) => {
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
