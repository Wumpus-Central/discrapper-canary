n.d(t, { Z: () => Y }), n(388685), n(642613);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(239091),
    u = n(2052),
    d = n(493773),
    f = n(100527),
    _ = n(906732),
    p = n(70097),
    h = n(142497),
    m = n(810788),
    g = n(626135),
    E = n(768581),
    b = n(709054),
    y = n(647177),
    O = n(63985),
    v = n(678916),
    I = n(981631),
    T = n(190378),
    S = n(486324),
    A = n(474936),
    C = n(388032),
    N = n(199306);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
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
function D(e, t) {
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
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let j = 25,
    M = 720;
function k() {
    return [
        {
            name: C.intl.string(C.t.Sp2NFx),
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
        selected: c = !1,
        disabled: u = !1,
        onMouseLeave: d,
        onBlur: f,
    } = e;
    return (0, r.jsxs)(l.P3F, {
        className: o()(s, N.backgroundOption, {
            [N.backgroundOptionSelected]: c,
            [N.backgroundOptionDisabled]: u,
        }),
        onMouseLeave: d,
        onBlur: f,
        onClick: u ? void 0 : n,
        children: [
            c ? (0, r.jsx)("div", { className: N.backgroundOptionRing }) : null,
            (0, r.jsxs)("div", {
                className: N.backgroundOptionInner,
                children: [
                    a,
                    (0, r.jsxs)("div", {
                        className: N.backgroundOptionContent,
                        children: [
                            (0, r.jsx)(t, {
                                className: N.backgroundIconOptionIcon,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, r.jsx)(l.Text, {
                                className: N.backgroundOptionText,
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
            className: N.backgroundImageOption,
            style: { backgroundImage: "url(".concat(n, ")") },
        });
    let l = (0, E.rI)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: M,
        canAnimate: !1,
    });
    return (0, r.jsx)("img", {
        onMouseMove: () => s(!0),
        onMouseLeave: () => s(!1),
        className: N.backgroundImageOption,
        src: o ? n : l,
        alt: t.id,
    });
}
function B(e) {
    var {
            option: t,
            source: i,
            selected: a = !1,
            onSelectOption: d,
            isAnimatedImage: E,
            isVideo: b,
            hotspotLocation: O,
        } = e,
        v = x(e, ["option", "source", "selected", "onSelectOption", "isAnimatedImage", "isVideo", "hotspotLocation"]);
    let T = (0, u.O)(),
        { analyticsLocations: S } = (0, _.ZP)(f.Z.VIDEO_BACKGROUND_IMAGE_OPTION),
        R = (0, s.e7)([m.Z], () => null != O && m.Z.hasHotspot(O)),
        w = b
            ? (0, r.jsx)(p.Z, {
                  className: N.backgroundImageOption,
                  src: i,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0,
              })
            : (0, r.jsx)(G, {
                  isAnimated: E,
                  option: (0, y.rD)(t) ? t : void 0,
                  source: i,
              });
    function L() {
        null != O &&
            R &&
            (h.Kw(O),
            g.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: A.cd.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: T.location,
                location_stack: S,
            }));
    }
    return (0, r.jsxs)(
        l.P3F,
        D(P({}, v), {
            className: o()(N.backgroundOption, { [N.backgroundOptionSelected]: a }),
            onClick: () => d(t),
            onContextMenu: (e) =>
                (0, c.jW)(e, async () => {
                    let { default: e } = await n.e("99414").then(n.bind(n, 187658));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            D(P({}, n), {
                                backgroundOption: t,
                                optionIsInUse: a,
                            }),
                        );
                }),
            children: [
                a ? (0, r.jsx)("div", { className: N.backgroundOptionRing }) : null,
                (0, r.jsx)("div", {
                    onFocus: L,
                    onMouseEnter: L,
                    className: N.backgroundOptionInner,
                    children: w,
                }),
                b || E
                    ? (0, r.jsx)("div", {
                          className: N.playIcon,
                          children: (0, r.jsx)(l.o1U, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                      })
                    : null,
                R &&
                    (0, r.jsx)(l.IGR, {
                        text: C.intl.string(C.t.y2b7CA),
                        className: N.newTextBadge,
                    }),
            ],
        }),
    );
}
function Z() {
    return (0, r.jsxs)("div", {
        className: N.customBackgroundTooltip,
        children: [
            (0, r.jsx)(l.SrA, {
                size: "md",
                color: "currentColor",
                className: N.customBackgroundTooltipIcon,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: C.intl.string(C.t["T+yRY2"]),
            }),
        ],
    });
}
function V(e) {
    let { onClick: t, tooltipText: n, disabled: i = !1 } = e,
        a = (0, s.e7)([m.Z], () => m.Z.hasHotspot(T.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        h.Kw(T.v.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let c = a ? C.intl.string(C.t["5TUJOj"]) : n;
    return (0, r.jsxs)(l.DY3, {
        text: c,
        className: N.newBackgroundTooltipContainer,
        children: [
            (0, r.jsxs)(U, {
                className: N.__invalid_backgroundOptionBlurred,
                disabled: i,
                icon: l.FmF,
                onClick: t,
                onMouseLeave: o,
                onBlur: o,
                text: (0, r.jsxs)("div", {
                    className: N.backgroundCustomInlineUpsell,
                    children: [
                        (0, r.jsx)(l.SrA, {
                            size: "md",
                            color: "currentColor",
                            className: N.backgroundCustomInlineUpsellIcon,
                        }),
                        (0, r.jsx)("div", {
                            className: N.overflowEllipsis,
                            children: C.intl.string(C.t["1t7U8f"]),
                        }),
                    ],
                }),
                children: [
                    (0, r.jsx)("div", { className: N.backgroundCustomInlineUpsellBackground }),
                    (0, r.jsx)("div", { className: N.backgroundCustomInlineUpsellBackgroundDarkener }),
                ],
            }),
            a &&
                (0, r.jsx)(l.IGR, {
                    text: C.intl.string(C.t.y2b7CA),
                    className: N.newTextBadge,
                }),
        ],
    });
}
function F(e) {
    let { onClick: t } = e,
        n = (0, u.O)(),
        { analyticsLocations: i } = (0, _.ZP)(f.Z.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, d.ZP)(() => {
            g.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: A.cd.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: i,
            });
        }),
        (0, r.jsx)(V, {
            onClick: t,
            tooltipText: C.intl.string(C.t.IqE0T0),
        })
    );
}
function H(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        a = (0, l.vRw)(),
        o = i ? C.intl.formatToPlainString(C.t.ykGFeH, { maxCustomBackgrounds: j }) : C.intl.string(C.t.Qx0tFR),
        s = k();
    function c() {
        (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("91689"), n.e("89289"), n.e("53488")]).then(
                    n.bind(n, 28130),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        P(
                            {
                                maxFileSizeBytes: v.SJ,
                                onComplete: (e) => {
                                    let { imageUri: n, file: r, isFromTenor: i } = e;
                                    return t(n, r, i);
                                },
                                uploadType: S.pC.VIDEO_BACKGROUND,
                                filters: s,
                                modalTitle: C.intl.string(C.t.yG2pUl),
                                imageSpecifications: C.intl.string(C.t["72OaxM"]),
                                uploadOptionTitle: C.intl.string(C.t.xsW8u7),
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
        onClick: c,
        tooltipText: o,
    });
}
function Y(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: n,
            selectedOption: a,
            onSelectOption: o,
            onUpsellClick: s,
            onAddBackgroundImage: c,
            smallerOptions: u,
        } = e,
        d = i.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? b.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        p = d.length >= j,
        { analyticsLocations: h } = (0, _.ZP)(f.Z.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, O.Z)()).sort((e, t) => v.E1[e.id] - v.E1[t.id]);
    return (0, r.jsx)(_.Gt, {
        value: h,
        children: (0, r.jsxs)("div", {
            className: u ? N.backgroundOptionsSmall : N.backgroundOptionsLarge,
            children: [
                (0, r.jsx)(U, {
                    selected: null == a,
                    icon: l.t6m,
                    onClick: () => o(null),
                    text: C.intl.string(C.t.fUdMeH),
                }),
                (0, r.jsx)(U, {
                    className: N.__invalid_backgroundOptionBlurred,
                    selected: a === v.f7,
                    icon: l.yMH,
                    onClick: () => o(v.f7),
                    text: C.intl.string(C.t.LhSyLy),
                    children: (0, r.jsx)("div", { className: N.backgroundOptionBlurBackground }),
                }),
                t
                    ? (0, r.jsx)(H, {
                          onAddBackgroundImage: c,
                          disabled: p,
                      })
                    : (0, r.jsx)(F, { onClick: s }),
                d.map((e) =>
                    (0, r.jsx)(
                        l.ua7,
                        {
                            text: (0, r.jsx)(Z, {}),
                            "aria-label": C.intl.string(C.t["T+yRY2"]),
                            children: (t) => {
                                let n = (0, E.rI)({
                                    userId: e.user_id,
                                    assetId: e.id,
                                    assetHash: e.asset,
                                    size: M,
                                });
                                return null == n
                                    ? null
                                    : (0, i.createElement)(
                                          B,
                                          D(P({}, t), {
                                              key: e.id,
                                              option: e,
                                              source: n,
                                              selected: (0, y.rD)(a) && a.id === e.id,
                                              onSelectOption: o,
                                              isVideo: (0, E.ay)(e.asset),
                                              isAnimatedImage: (0, E.xR)(e.asset),
                                          }),
                                      );
                            },
                        },
                        e.id,
                    ),
                ),
                m.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, r.jsx)(
                        l.ua7,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (n) =>
                                (0, i.createElement)(
                                    B,
                                    D(P({}, n), {
                                        key: e.id,
                                        option: e.id,
                                        source: e.source,
                                        selected: a === e.id,
                                        onSelectOption: o,
                                        isVideo: t,
                                        isAnimatedImage: !1,
                                        hotspotLocation: e.hotspotLocation,
                                    }),
                                ),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
