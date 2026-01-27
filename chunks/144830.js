n.d(t, {
    A: () => k,
}),
    n(896048),
    n(638769);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(442433),
    u = n(212245),
    _ = n(964486),
    p = n(793574),
    m = n(688810),
    g = n(607470),
    A = n(421838),
    f = n(891540),
    h = n(738011),
    b = n(954571),
    E = n(486020),
    x = n(661191),
    O = n(965162),
    C = n(957153),
    I = n(577718),
    T = n(652215),
    S = n(897513),
    j = n(339984),
    v = n(788868),
    N = n(985018),
    y = n(151e3);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function R(e) {
    let {
        icon: t,
        onClick: n,
        text: i,
        children: l,
        className: a,
        selected: o = !1,
        disabled: d = !1,
        onMouseLeave: u,
        onBlur: _,
    } = e;
    return (0, r.jsxs)(c.DUT, {
        className: s()(a, y.gf, {
            [y.JI]: o,
            [y.A7]: d,
        }),
        onMouseLeave: u,
        onBlur: _,
        onClick: d ? void 0 : n,
        children: [
            o
                ? (0, r.jsx)("div", {
                      className: y.SH,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: y.kV,
                children: [
                    l,
                    (0, r.jsxs)("div", {
                        className: y.fP,
                        children: [
                            (0, r.jsx)(t, {
                                className: y.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, r.jsx)(c.Text, {
                                className: y.V7,
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

function D(e) {
    let { option: t, source: n, isAnimated: l } = e,
        [s, a] = i.useState(!1);
    if (
        (i.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !l || null == t)
    )
        return (0, r.jsx)("div", {
            className: y.PQ,
            style: {
                backgroundImage: "url(".concat(n, ")"),
            },
        });
    let o = (0, E.Bo)({
        userId: t.user_id,
        assetId: t.id,
        assetHash: t.asset,
        size: 720,
        canAnimate: !1,
    });
    return (0, r.jsx)("img", {
        onMouseMove: () => a(!0),
        onMouseLeave: () => a(!1),
        className: y.PQ,
        src: s ? n : o,
        alt: t.id,
    });
}

function w(e) {
    let {
            option: t,
            source: l,
            selected: o = !1,
            onSelectOption: _,
            isAnimatedImage: E,
            isVideo: x,
            hotspotLocation: C,
        } = e,
        I = (0, u.p)(),
        { analyticsLocations: S } = (0, m.Ay)(p.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        j = (0, a.bG)([f.A], () => null != C && f.A.hasHotspot(C)),
        R = i.useCallback((e) => {
            if (!(0, h.u)(e)) throw e;
        }, []),
        w = x
            ? (0, r.jsx)(g.A, {
                  className: y.PQ,
                  src: l,
                  loop: !0,
                  playOnHover: !0,
                  muted: !0,
                  onPlayError: R,
              })
            : (0, r.jsx)(D, {
                  isAnimated: E,
                  option: (0, O.d1)(t) ? t : void 0,
                  source: l,
              });

    function L() {
        null != C &&
            j &&
            (A.sF(C),
            b.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, {
                type: v.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: I.location,
                location_stack: S,
            }));
    }
    return (0, r.jsxs)(c.DUT, {
        className: s()(y.gf, {
            [y.JI]: o,
        }),
        onClick: () => _(t),
        onContextMenu: (e) =>
            (0, d.L3)(e, async () => {
                let { default: e } = await n.e("22305").then(n.bind(n, 5752));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = P({}, n)),
                        (l = l =
                            {
                                backgroundOption: t,
                                optionIsInUse: o,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            }),
        children: [
            o
                ? (0, r.jsx)("div", {
                      className: y.SH,
                  })
                : null,
            (0, r.jsx)("div", {
                onFocus: L,
                onMouseEnter: L,
                className: y.kV,
                children: w,
            }),
            x || E
                ? (0, r.jsx)("div", {
                      className: y.uZ,
                      children: (0, r.jsx)(c.udU, {
                          size: "xxs",
                          color: "currentColor",
                      }),
                  })
                : null,
            j &&
                (0, r.jsx)(c.LpS, {
                    text: N.intl.string(N.t.y2b7CA),
                    className: y.$5,
                }),
        ],
    });
}

function L() {
    return (0, r.jsxs)("div", {
        className: y.j1,
        children: [
            (0, r.jsx)(c.tvc, {
                size: "md",
                color: "currentColor",
                className: y.eo,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: N.intl.string(N.t["T+yRY3"]),
            }),
        ],
    });
}

function M(e) {
    let { onClick: t, tooltipText: n, disabled: i = !1 } = e,
        l = (0, a.bG)([f.A], () => f.A.hasHotspot(S._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));

    function s() {
        A.sF(S._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let d = l ? N.intl.string(N.t["5TUJOv"]) : n;
    return (0, r.jsx)(o.m, {
        text: d,
        children: (0, r.jsxs)("div", {
            className: y.$g,
            children: [
                (0, r.jsxs)(R, {
                    className: y.__invalid_backgroundOptionBlurred,
                    disabled: i,
                    icon: c.XGR,
                    onClick: t,
                    onMouseLeave: s,
                    onBlur: s,
                    text: (0, r.jsxs)("div", {
                        className: y.Us,
                        children: [
                            (0, r.jsx)(c.tvc, {
                                size: "md",
                                color: "currentColor",
                                className: y.PK,
                            }),
                            (0, r.jsx)("div", {
                                className: y.kr,
                                children: N.intl.string(N.t["1t7U8W"]),
                            }),
                        ],
                    }),
                    children: [
                        (0, r.jsx)("div", {
                            className: y.eD,
                        }),
                        (0, r.jsx)("div", {
                            className: y.G5,
                        }),
                    ],
                }),
                l &&
                    (0, r.jsx)(c.LpS, {
                        text: N.intl.string(N.t.y2b7CA),
                        className: y.$5,
                    }),
            ],
        }),
    });
}

function U(e) {
    let { onClick: t } = e,
        n = (0, u.p)(),
        { analyticsLocations: i } = (0, m.Ay)(p.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, _.Ay)(() => {
            b.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, {
                type: v.e.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: i,
            });
        }),
        (0, r.jsx)(M, {
            onClick: t,
            tooltipText: N.intl.string(N.t["IqE0T/"]),
        })
    );
}

function G(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        l = (0, c.k34)(),
        s = i
            ? N.intl.formatToPlainString(N.t.ykGFeD, {
                  maxCustomBackgrounds: 25,
              })
            : N.intl.string(N.t.Qx0tFc),
        a = [
            {
                name: N.intl.string(N.t["Sp2NF+"]),
                extensions: ["jpg", "jpeg", "png", "gif", "mp4"],
            },
        ];
    return (0, r.jsx)(M, {
        disabled: i,
        onClick: function () {
            (0, c.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("79149"), n.e("53653"), n.e("92812")]).then(
                        n.bind(n, 551028),
                    );
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            P(
                                {
                                    maxFileSizeBytes: I.G9,
                                    onComplete: (e) => {
                                        let { imageUri: n, file: r, isFromTenor: i } = e;
                                        return t(n, r, i);
                                    },
                                    uploadType: j.HL.VIDEO_BACKGROUND,
                                    filters: a,
                                    modalTitle: N.intl.string(N.t.yG2pUi),
                                    imageSpecifications: N.intl.string(N.t["72OaxN"]),
                                    uploadOptionTitle: N.intl.string(N.t.xsW8u6),
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
        tooltipText: s,
    });
}

function k(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: n,
            selectedOption: l,
            onSelectOption: a,
            onUpsellClick: d,
            onAddBackgroundImage: u,
            responsive: _ = !0,
        } = e,
        g = i.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? x.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        A = g.length >= 25,
        { analyticsLocations: f } = (0, m.Ay)(p.A.VIDEO_BACKGROUND_OPTIONS),
        h = Object.values((0, C.A)()).sort((e, t) => I.sl[e.id] - I.sl[t.id]);
    return (0, r.jsx)(m.f5, {
        value: f,
        children: (0, r.jsxs)("div", {
            className: s()(y.to, !_ && y.mK),
            children: [
                (0, r.jsx)(R, {
                    selected: null == l,
                    icon: c.KTN,
                    onClick: () => a(null),
                    text: N.intl.string(N.t.fUdMeO),
                }),
                (0, r.jsx)(R, {
                    selected: "blur" === l,
                    icon: c.fBX,
                    onClick: () => a("blur"),
                    text: N.intl.string(N.t.LhSyL8),
                    children: (0, r.jsx)("div", {
                        className: y.LJ,
                    }),
                }),
                t
                    ? (0, r.jsx)(G, {
                          onAddBackgroundImage: u,
                          disabled: A,
                      })
                    : (0, r.jsx)(U, {
                          onClick: d,
                      }),
                g.map((e) => {
                    let t = (0, E.Bo)({
                        userId: e.user_id,
                        assetId: e.id,
                        assetHash: e.asset,
                        size: 720,
                    });
                    return null == t
                        ? null
                        : (0, r.jsx)(
                              o.m,
                              {
                                  __unsupportedReactNodeAsText: (0, r.jsx)(L, {}),
                                  "aria-label": N.intl.string(N.t["T+yRY3"]),
                                  children: (0, r.jsx)(
                                      w,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, O.d1)(l) && l.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, E.q6)(e.asset),
                                          isAnimatedImage: (0, E.VI)(e.asset),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                h.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, r.jsx)(
                        o.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, r.jsx)(
                                w,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: l === e.id,
                                    onSelectOption: a,
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
