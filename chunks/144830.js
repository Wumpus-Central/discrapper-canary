n.d(t, {
    A: () => G,
}),
    n(896048),
    n(638769);
var s = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    o = n(311907),
    a = n(990078),
    c = n(397927),
    u = n(442433),
    d = n(212245),
    p = n(964486),
    m = n(793574),
    O = n(688810),
    f = n(607470),
    j = n(421838),
    g = n(891540),
    b = n(738011),
    x = n(954571),
    y = n(486020),
    A = n(661191),
    h = n(965162),
    v = n(957153),
    N = n(577718),
    E = n(652215),
    _ = n(897513),
    S = n(339984),
    P = n(788868),
    D = n(985018),
    I = n(151e3);

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = s);
            });
    }
    return e;
}

function k(e) {
    let {
        icon: t,
        onClick: n,
        text: r,
        children: l,
        className: o,
        selected: a = !1,
        disabled: u = !1,
        onMouseLeave: d,
        onBlur: p,
    } = e;
    return (0, s.jsxs)(c.DUT, {
        className: i()(o, I.gf, {
            [I.JI]: a,
            [I.A7]: u,
        }),
        onMouseLeave: d,
        onBlur: p,
        onClick: u ? void 0 : n,
        children: [
            a
                ? (0, s.jsx)("div", {
                      className: I.SH,
                  })
                : null,
            (0, s.jsxs)("div", {
                className: I.kV,
                children: [
                    l,
                    (0, s.jsxs)("div", {
                        className: I.fP,
                        children: [
                            (0, s.jsx)(t, {
                                className: I.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, s.jsx)(c.Text, {
                                className: I.V7,
                                color: "none",
                                variant: "text-sm/normal",
                                children: r,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}

function C(e) {
    let { option: t, source: n, isAnimated: l } = e,
        [i, o] = r.useState(!1);
    if (
        (r.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !l || null == t)
    )
        return (0, s.jsx)("div", {
            className: I.PQ,
            style: {
                backgroundImage: "url(".concat(n, ")"),
            },
        });
    let a = (0, y.Bo)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: 720,
        canAnimate: !1,
    });
    return (0, s.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: I.PQ,
        src: i ? n : a,
        alt: t.id,
    });
}

function w(e) {
    let {
            option: t,
            source: l,
            selected: a = !1,
            onSelectOption: p,
            isAnimatedImage: y,
            isVideo: A,
            hotspotLocation: v,
        } = e,
        N = (0, d.p)(),
        { analyticsLocations: _ } = (0, O.Ay)(m.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        S = (0, o.bG)([g.A], () => null != v && g.A.hasHotspot(v)),
        k = r.useCallback((e) => {
            if (!(0, b.u)(e)) throw e;
        }, []),
        w = A
            ? (0, s.jsx)(f.A, {
                  className: I.PQ,
                  src: l,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0,
                  onPlayError: k,
              })
            : (0, s.jsx)(C, {
                  isAnimated: y,
                  option: (0, h.d1)(t) ? t : void 0,
                  source: l,
              });

    function U() {
        null != v &&
            S &&
            (j.sF(v),
            x.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: N.location,
                location_stack: _,
            }));
    }
    return (0, s.jsxs)(c.DUT, {
        className: i()(I.gf, {
            [I.JI]: a,
        }),
        onClick: () => p(t),
        onContextMenu: (e) =>
            (0, u.L3)(e, async () => {
                let { default: e } = await n.e("22305").then(n.bind(n, 5752));
                return (n) => {
                    var r, l;
                    return (0, s.jsx)(
                        e,
                        ((r = T({}, n)),
                        (l = l =
                            {
                                backgroundOption: t,
                                optionIsInUse: a,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, s);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r),
                    );
                };
            }),
        children: [
            a
                ? (0, s.jsx)("div", {
                      className: I.SH,
                  })
                : null,
            (0, s.jsx)("div", {
                onFocus: U,
                onMouseEnter: U,
                className: I.kV,
                children: w,
            }),
            A || y
                ? (0, s.jsx)("div", {
                      className: I.uZ,
                      children: (0, s.jsx)(c.udU, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                  })
                : null,
            S &&
                (0, s.jsx)(c.LpS, {
                    text: D.intl.string(D.t.y2b7CA),
                    className: I.$5,
                }),
        ],
    });
}

function U() {
    return (0, s.jsxs)("div", {
        className: I.j1,
        children: [
            (0, s.jsx)(c.tvc, {
                size: "md",
                color: "currentColor",
                className: I.eo,
            }),
            (0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: D.intl.string(D.t["T+yRY3"]),
            }),
        ],
    });
}

function B(e) {
    let { onClick: t, tooltipText: n, disabled: r = !1 } = e,
        l = (0, o.bG)([g.A], () => g.A.hasHotspot(_._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

    function i() {
        j.sF(_._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let u = l ? D.intl.string(D.t["5TUJOv"]) : n;
    return (0, s.jsx)(a.m, {
        text: u,
        children: (0, s.jsxs)("div", {
            className: I.$g,
            children: [
                (0, s.jsxs)(k, {
                    className: I.__invalid_backgroundOptionBlurred,
                    disabled: r,
                    icon: c.XGR,
                    onClick: t,
                    onMouseLeave: i,
                    onBlur: i,
                    text: (0, s.jsxs)("div", {
                        className: I.Us,
                        children: [
                            (0, s.jsx)(c.tvc, {
                                size: "md",
                                color: "currentColor",
                                className: I.PK,
                            }),
                            (0, s.jsx)("div", {
                                className: I.kr,
                                children: D.intl.string(D.t["1t7U8W"]),
                            }),
                        ],
                    }),
                    children: [
                        (0, s.jsx)("div", {
                            className: I.eD,
                        }),
                        (0, s.jsx)("div", {
                            className: I.G5,
                        }),
                    ],
                }),
                l &&
                    (0, s.jsx)(c.LpS, {
                        text: D.intl.string(D.t.y2b7CA),
                        className: I.$5,
                    }),
            ],
        }),
    });
}

function M(e) {
    let { onClick: t } = e,
        n = (0, d.p)(),
        { analyticsLocations: r } = (0, O.Ay)(m.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, p.Ay)(() => {
            x.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                type: P.e.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: r,
            });
        }),
        (0, s.jsx)(B, {
            onClick: t,
            tooltipText: D.intl.string(D.t["IqE0T/"]),
        })
    );
}

function L(e) {
    let { onAddBackgroundImage: t, disabled: r } = e,
        l = (0, c.k34)(),
        i = r
            ? D.intl.formatToPlainString(D.t.ykGFeD, {
                  maxCustomBackgrounds: 25,
              })
            : D.intl.string(D.t.Qx0tFc),
        o = [
            {
                name: D.intl.string(D.t["Sp2NF+"]),
                extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
            },
        ];
    return (0, s.jsx)(B, {
        disabled: r,
        onClick: function () {
            (0, c.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("79149"), n.e("53653"), n.e("66863")]).then(
                        n.bind(n, 551028),
                    );
                    return (n) =>
                        (0, s.jsx)(
                            e,
                            T(
                                {
                                    maxFileSizeBytes: N.G9,
                                    onComplete: (e) => {
                                        let { imageUri: n, file: s, isFromTenor: r } = e;
                                        return t(n, s, r);
                                    },
                                    uploadType: S.HL.VIDEO_BACKGROUND,
                                    filters: o,
                                    modalTitle: D.intl.string(D.t.yG2pUi),
                                    imageSpecifications: D.intl.string(D.t["72OaxN"]),
                                    uploadOptionTitle: D.intl.string(D.t.xsW8u6),
                                    showUpsellHeader: !0,
                                },
                                n,
                            ),
                        );
                },
                {
                    contextKey: l,
                },
            );
        },
        tooltipText: i,
    });
}

function G(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: n,
            selectedOption: l,
            onSelectOption: i,
            onUpsellClick: o,
            onAddBackgroundImage: u,
        } = e,
        d = r.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? A.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        p = d.length >= 25,
        { analyticsLocations: f } = (0, O.Ay)(m.A.VIDEO_BACKGROUND_OPTIONS),
        j = Object.values((0, v.A)()).sort((e, t) => N.sl[e.id] - N.sl[t.id]);
    return (0, s.jsx)(O.f5, {
        value: f,
        children: (0, s.jsxs)("div", {
            className: I.to,
            children: [
                (0, s.jsx)(k, {
                    selected: null == l,
                    icon: c.KTN,
                    onClick: () => i(null),
                    text: D.intl.string(D.t.fUdMeO),
                }),
                (0, s.jsx)(k, {
                    selected: "blur" === l,
                    icon: c.fBX,
                    onClick: () => i("blur"),
                    text: D.intl.string(D.t.LhSyL8),
                    children: (0, s.jsx)("div", {
                        className: I.LJ,
                    }),
                }),
                t
                    ? (0, s.jsx)(L, {
                          onAddBackgroundImage: u,
                          disabled: p,
                      })
                    : (0, s.jsx)(M, {
                          onClick: o,
                      }),
                d.map((e) => {
                    let t = (0, y.Bo)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: 720,
                    });
                    return null == t
                        ? null
                        : (0, s.jsx)(
                              a.m,
                              {
                                  __unsupportedReactNodeAsText: (0, s.jsx)(U, {}),
                                  "aria-label": D.intl.string(D.t["T+yRY3"]),
                                  children: (0, s.jsx)(
                                      w,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, h.d1)(l) && l.id === e.id,
                                          onSelectOption: i,
                                          isVideo: (0, y.q6)(e.asset),
                                          isAnimatedImage: (0, y.VI)(e.asset),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                j.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, s.jsx)(
                        a.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, s.jsx)(
                                w,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: l === e.id,
                                    onSelectOption: i,
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
