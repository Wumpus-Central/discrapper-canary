n.d(t, { A: () => W }), n(896048), n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(212245),
    f = n(964486),
    p = n(793574),
    _ = n(688810),
    h = n(607470),
    m = n(421838),
    g = n(891540),
    E = n(738011),
    b = n(954571),
    y = n(486020),
    O = n(661191),
    A = n(965162),
    v = n(957153),
    S = n(577718),
    I = n(652215),
    T = n(897513),
    C = n(339984),
    N = n(788868),
    R = n(985018),
    w = n(151000);
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
            name: R.intl.string(R.t["Sp2NF+"]),
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
        className: o,
        selected: l = !1,
        disabled: u = !1,
        onMouseLeave: d,
        onBlur: f,
    } = e;
    return (0, r.jsxs)(c.DUT, {
        className: s()(o, w.gf, {
            [w.JI]: l,
            [w.A7]: u,
        }),
        onMouseLeave: d,
        onBlur: f,
        onClick: u ? void 0 : n,
        children: [
            l ? (0, r.jsx)("div", { className: w.SH }) : null,
            (0, r.jsxs)("div", {
                className: w.kV,
                children: [
                    a,
                    (0, r.jsxs)("div", {
                        className: w.fP,
                        children: [
                            (0, r.jsx)(t, {
                                className: w.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, r.jsx)(c.Text, {
                                className: w.V7,
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
        [s, o] = i.useState(!1);
    if (
        (i.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !a || null == t)
    )
        return (0, r.jsx)("div", {
            className: w.PQ,
            style: { backgroundImage: "url(".concat(n, ")") },
        });
    let l = (0, y.Bo)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: M,
        canAnimate: !1,
    });
    return (0, r.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: w.PQ,
        src: s ? n : l,
        alt: t.id,
    });
}
function V(e) {
    let {
            option: t,
            source: a,
            selected: l = !1,
            onSelectOption: f,
            isAnimatedImage: y,
            isVideo: O,
            hotspotLocation: v,
        } = e,
        S = (0, d.p)(),
        { analyticsLocations: T } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        C = (0, o.bG)([g.A], () => null != v && g.A.hasHotspot(v)),
        P = i.useCallback((e) => {
            if (!(0, E.u)(e)) throw e;
        }, []),
        x = O
            ? (0, r.jsx)(h.A, {
                  className: w.PQ,
                  src: a,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0,
                  onPlayError: P,
              })
            : (0, r.jsx)(G, {
                  isAnimated: y,
                  option: (0, A.d1)(t) ? t : void 0,
                  source: a,
              });
    function j() {
        null != v &&
            C &&
            (m.sF(v),
            b.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: N.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: S.location,
                location_stack: T,
            }));
    }
    return (0, r.jsxs)(c.DUT, {
        className: s()(w.gf, { [w.JI]: l }),
        onClick: () => f(t),
        onContextMenu: (e) =>
            (0, u.L3)(e, async () => {
                let { default: e } = await n.e("22305").then(n.bind(n, 5752));
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
            l ? (0, r.jsx)("div", { className: w.SH }) : null,
            (0, r.jsx)("div", {
                onFocus: j,
                onMouseEnter: j,
                className: w.kV,
                children: x,
            }),
            O || y
                ? (0, r.jsx)("div", {
                      className: w.uZ,
                      children: (0, r.jsx)(c.udU, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                  })
                : null,
            C &&
                (0, r.jsx)(c.LpS, {
                    text: R.intl.string(R.t.y2b7CA),
                    className: w.$5,
                }),
        ],
    });
}
function F() {
    return (0, r.jsxs)("div", {
        className: w.j1,
        children: [
            (0, r.jsx)(c.tvc, {
                size: "md",
                color: "currentColor",
                className: w.eo,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: R.intl.string(R.t["T+yRY3"]),
            }),
        ],
    });
}
function B(e) {
    let { onClick: t, tooltipText: n, disabled: i = !1 } = e,
        a = (0, o.bG)([g.A], () => g.A.hasHotspot(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function s() {
        m.sF(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let u = a ? R.intl.string(R.t["5TUJOv"]) : n;
    return (0, r.jsx)(l.m, {
        text: u,
        children: (0, r.jsxs)("div", {
            className: w.$g,
            children: [
                (0, r.jsxs)(U, {
                    className: w.__invalid_backgroundOptionBlurred,
                    disabled: i,
                    icon: c.XGR,
                    onClick: t,
                    onMouseLeave: s,
                    onBlur: s,
                    text: (0, r.jsxs)("div", {
                        className: w.Us,
                        children: [
                            (0, r.jsx)(c.tvc, {
                                size: "md",
                                color: "currentColor",
                                className: w.PK,
                            }),
                            (0, r.jsx)("div", {
                                className: w.kr,
                                children: R.intl.string(R.t["1t7U8W"]),
                            }),
                        ],
                    }),
                    children: [(0, r.jsx)("div", { className: w.eD }), (0, r.jsx)("div", { className: w.G5 })],
                }),
                a &&
                    (0, r.jsx)(c.LpS, {
                        text: R.intl.string(R.t.y2b7CA),
                        className: w.$5,
                    }),
            ],
        }),
    });
}
function H(e) {
    let { onClick: t } = e,
        n = (0, d.p)(),
        { analyticsLocations: i } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, f.Ay)(() => {
            b.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: N.e.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: i,
            });
        }),
        (0, r.jsx)(B, {
            onClick: t,
            tooltipText: R.intl.string(R.t["IqE0T/"]),
        })
    );
}
function Y(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        a = (0, c.k34)(),
        s = i ? R.intl.formatToPlainString(R.t.ykGFeD, { maxCustomBackgrounds: j }) : R.intl.string(R.t.Qx0tFc),
        o = k();
    function l() {
        (0, c.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(
                    n.bind(n, 551028),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        D(
                            {
                                maxFileSizeBytes: S.G9,
                                onComplete: (e) => {
                                    let { imageUri: n, file: r, isFromTenor: i } = e;
                                    return t(n, r, i);
                                },
                                uploadType: C.HL.VIDEO_BACKGROUND,
                                filters: o,
                                modalTitle: R.intl.string(R.t.yG2pUi),
                                imageSpecifications: R.intl.string(R.t["72OaxN"]),
                                uploadOptionTitle: R.intl.string(R.t.xsW8u6),
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
        tooltipText: s,
    });
}
function W(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: n,
            selectedOption: a,
            onSelectOption: o,
            onUpsellClick: u,
            onAddBackgroundImage: d,
            responsive: f = !0,
        } = e,
        h = i.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? O.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        m = h.length >= j,
        { analyticsLocations: g } = (0, _.Ay)(p.A.VIDEO_BACKGROUND_OPTIONS),
        E = Object.values((0, v.A)()).sort((e, t) => S.sl[e.id] - S.sl[t.id]);
    return (0, r.jsx)(_.f5, {
        value: g,
        children: (0, r.jsxs)("div", {
            className: s()(w.to, !f && w.mK),
            children: [
                (0, r.jsx)(U, {
                    selected: null == a,
                    icon: c.KTN,
                    onClick: () => o(null),
                    text: R.intl.string(R.t.fUdMeO),
                }),
                (0, r.jsx)(U, {
                    selected: "blur" === a,
                    icon: c.fBX,
                    onClick: () => o("blur"),
                    text: R.intl.string(R.t.LhSyL8),
                    children: (0, r.jsx)("div", { className: w.LJ }),
                }),
                t
                    ? (0, r.jsx)(Y, {
                          onAddBackgroundImage: d,
                          disabled: m,
                      })
                    : (0, r.jsx)(H, { onClick: u }),
                h.map((e) => {
                    let t = (0, y.Bo)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: M,
                    });
                    return null == t
                        ? null
                        : (0, r.jsx)(
                              l.m,
                              {
                                  __unsupportedReactNodeAsText: (0, r.jsx)(F, {}),
                                  "aria-label": R.intl.string(R.t["T+yRY3"]),
                                  children: (0, r.jsx)(
                                      V,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, A.d1)(a) && a.id === e.id,
                                          onSelectOption: o,
                                          isVideo: (0, y.q6)(e.asset),
                                          isAnimatedImage: (0, y.VI)(e.asset),
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
                        l.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, r.jsx)(
                                V,
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
