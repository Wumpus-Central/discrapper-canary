s.d(t, { A: () => es });
var n = s(627968),
    l = s(64700),
    i = s(17928),
    a = s(192308),
    o = s(452027),
    r = s(212245),
    c = s(287809),
    d = s(428262),
    u = s(285918),
    m = s(912630),
    x = s(965162),
    p = s(413339),
    g = s(952572),
    A = s(503698),
    j = s.n(A),
    f = s(990078),
    N = s(939249),
    _ = s(834730),
    h = s(782134),
    E = s(777666),
    O = s(403581),
    I = s(750943),
    v = s(638495),
    C = s(428678),
    b = s(635739),
    k = s(442433),
    y = s(964486),
    S = s(793574),
    T = s(688810),
    D = s(607470),
    U = s(421838),
    L = s(891540),
    B = s(738011),
    M = s(174459),
    P = s(486020),
    w = s(935208),
    G = s(498559),
    R = s(577718),
    V = s(652215),
    H = s(897513),
    F = s(339984),
    W = s(788868),
    K = s(375708),
    z = s(941531);
function J(e) {
    let {
        icon: t,
        onClick: s,
        text: l,
        children: i,
        className: a,
        selected: o = !1,
        disabled: r = !1,
        onMouseLeave: c,
        onBlur: d,
    } = e;
    return (0, n.jsxs)(N.D, {
        className: j()(a, z.gf, { [z.JI]: o, [z.A7]: r }),
        onMouseLeave: c,
        onBlur: d,
        onClick: r ? void 0 : s,
        children: [
            o ? (0, n.jsx)("div", { className: z.SH }) : null,
            (0, n.jsxs)("div", {
                className: z.kV,
                children: [
                    i,
                    (0, n.jsxs)("div", {
                        className: z.fP,
                        children: [
                            (0, n.jsx)(t, {
                                className: z.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, n.jsx)(_.E, { className: z.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { option: t, source: s, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !i || null == t)
    )
        return (0, n.jsx)("div", { className: z.PQ, style: { backgroundImage: `url(${s})` } });
    let r = (0, P.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, n.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: z.PQ,
        src: a ? s : r,
        alt: t.id,
    });
}
function Y(e) {
    let {
            option: t,
            source: a,
            selected: o = !1,
            onSelectOption: c,
            isAnimatedImage: d,
            isVideo: u,
            hotspotLocation: m,
            ariaLabel: p,
        } = e,
        g = (0, r.p)(),
        { analyticsLocations: A } = (0, T.Ay)(S.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        f = (0, i.bG)([L.A], () => null != m && L.A.hasHotspot(m)),
        _ = l.useCallback((e) => {
            if (!(0, B.u)(e)) throw e;
        }, []),
        O = u
            ? (0, n.jsx)(D.A, { className: z.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: _ })
            : (0, n.jsx)(Q, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function I() {
        null != m &&
            f &&
            (U.sF(m),
            M.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: g.location,
                location_stack: A,
            }));
    }
    return (0, n.jsxs)(N.D, {
        className: j()(z.gf, { [z.JI]: o }),
        "aria-label": p,
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, k.L3)(e, async () => {
                let { default: e } = await s.e("22305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, n.jsx)("div", { className: z.SH }) : null,
            (0, n.jsx)("div", { onFocus: I, onMouseEnter: I, className: z.kV, children: O }),
            u || d
                ? (0, n.jsx)("div", {
                      className: z.uZ,
                      children: (0, n.jsx)(h.u, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            f && (0, n.jsx)(E.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
        ],
    });
}
function Z() {
    return (0, n.jsxs)("div", {
        className: z.j1,
        children: [
            (0, n.jsx)(O.t, { size: "md", color: "currentColor", className: z.eo }),
            (0, n.jsx)(_.E, { variant: "text-sm/normal", children: K.intl.string(K.t["T+yRY3"]) }),
        ],
    });
}
function $(e) {
    let { onClick: t, tooltipText: s, disabled: l = !1 } = e,
        a = (0, i.bG)([L.A], () => L.A.hasHotspot(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        U.sF(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? K.intl.string(K.t["5TUJOv"]) : s;
    return (0, n.jsx)(f.m, {
        text: r,
        children: (0, n.jsxs)("div", {
            className: z.$g,
            children: [
                (0, n.jsxs)(J, {
                    className: z.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: I.X,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, n.jsxs)("div", {
                        className: z.Us,
                        children: [
                            (0, n.jsx)(O.t, { size: "md", color: "currentColor", className: z.PK }),
                            (0, n.jsx)("div", { className: z.kr, children: K.intl.string(K.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: z.eD }), (0, n.jsx)("div", { className: z.G5 })],
                }),
                a && (0, n.jsx)(E.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
            ],
        }),
    });
}
function q(e) {
    let { onClick: t } = e,
        s = (0, r.p)(),
        { analyticsLocations: l } = (0, T.Ay)(S.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, y.Ay)(() => {
            M.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: l,
            });
        }),
        (0, n.jsx)($, { onClick: t, tooltipText: K.intl.string(K.t["IqE0T/"]) })
    );
}
function X(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, v.k)(),
        o = l ? K.intl.formatToPlainString(K.t.ykGFeD, { maxCustomBackgrounds: 25 }) : K.intl.string(K.t.Qx0tFc),
        r = [{ name: K.intl.string(K.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)($, {
        disabled: l,
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        s.e("66559"),
                        s.e("56024"),
                        s.e("45558"),
                        s.e("63232"),
                        s.e("54048"),
                        s.e("699"),
                        s.e("62680"),
                        s.e("50015"),
                        s.e("99666"),
                        s.e("44695"),
                        s.e("21825"),
                        s.e("90244"),
                        s.e("33902"),
                        s.e("1555"),
                        s.e("99999"),
                        s.e("29666"),
                        s.e("93513"),
                        s.e("47011"),
                        s.e("79149"),
                        s.e("90017"),
                        s.e("99150"),
                        s.e("60987"),
                    ]).then(s.bind(s, 902550));
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: R.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: l } = e;
                                return t(s, n, l);
                            },
                            uploadType: F.HL.VIDEO_BACKGROUND,
                            filters: r,
                            modalTitle: K.intl.string(K.t.yG2pUi),
                            imageSpecifications: K.intl.string(K.t["72OaxN"]),
                            uploadOptionTitle: K.intl.string(K.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...s,
                        });
                },
                { contextKey: i },
            );
        },
        tooltipText: o,
    });
}
function ee(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: s,
            selectedOption: i,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: r,
        } = e,
        c = l.useMemo(
            () =>
                s.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? w.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [s],
        ),
        d = c.length >= 25,
        { analyticsLocations: u } = (0, T.Ay)(S.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, G.A)()).sort((e, t) => R.sl[e.id] - R.sl[t.id]);
    return (0, n.jsx)(T.f5, {
        value: u,
        children: (0, n.jsxs)("div", {
            className: z.to,
            children: [
                (0, n.jsx)(J, {
                    selected: null == i,
                    icon: C.K,
                    onClick: () => a(null),
                    text: K.intl.string(K.t.fUdMeO),
                }),
                (0, n.jsx)(J, {
                    selected: "blur" === i,
                    icon: b.f,
                    onClick: () => a("blur"),
                    text: K.intl.string(K.t.LhSyL8),
                    children: (0, n.jsx)("div", { className: z.LJ }),
                }),
                t ? (0, n.jsx)(X, { onAddBackgroundImage: r, disabled: d }) : (0, n.jsx)(q, { onClick: o }),
                c.map((e) => {
                    let t = (0, P.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, n.jsx)(
                              f.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)(Z, {}),
                                  "aria-label": K.intl.string(K.t["T+yRY3"]),
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(
                                      Y,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, x.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, P.q6)(e.asset),
                                          isAnimatedImage: (0, P.VI)(e.asset),
                                          ariaLabel: K.intl.string(K.t["T+yRY3"]),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                m.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, n.jsx)(
                        f.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            ariaHidden: !0,
                            children: (0, n.jsx)(
                                Y,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: i === e.id,
                                    onSelectOption: a,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation,
                                    ariaLabel: e.name,
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
var et = s(693591);
function es(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: A,
            onSelectBackgroundOption: j,
            currentDeviceId: f,
            className: N,
        } = e,
        _ = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [h, E] = l.useState(null),
        O = (0, g.A)(),
        I = d.Ay.canUseCustomBackgrounds(_);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let v = (0, i.cf)([m.A], () => (I ? m.A.videoFilterAssets : {})),
        C = l.useMemo(() => Object.values(v).filter((e) => e.type === R.yZ.BACKGROUND), [v]),
        b = (0, r.p)(),
        k = { isVideoBackgroundSupported: O, onSelectBackgroundOption: j, selectedBackgroundOption: A },
        y = l.useRef(k);
    l.useEffect(() => {
        y.current = k;
    }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = y.current;
            e ? (0, p.S1)(s, f, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [f]);
    let S = (e) => {
        j(e),
            (0, p.S1)(e, f, { location: b.location })
                .then(() => E(null))
                .catch(() => {
                    E(K.intl.string(K.t.ejrSLe)), (0, p.S1)(null, f, { location: b.location });
                });
    };
    return O
        ? (0, n.jsx)("div", {
              className: N,
              children: (0, n.jsx)(o.D, {
                  label: K.intl.string(K.t.lZTUPs),
                  errorMessage: h,
                  children: (0, n.jsx)(ee, {
                      canUseCustomBackgrounds: I,
                      customBackgroundOptions: C,
                      selectedOption: A,
                      onSelectOption: S,
                      onUpsellClick: () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  s.e("10642"),
                                  s.e("51762"),
                                  s.e("54048"),
                                  s.e("32817"),
                                  s.e("699"),
                                  s.e("62680"),
                                  s.e("87306"),
                                  s.e("38835"),
                                  s.e("99666"),
                                  s.e("41043"),
                                  s.e("98125"),
                                  s.e("21825"),
                                  s.e("8892"),
                                  s.e("99657"),
                                  s.e("32079"),
                                  s.e("1555"),
                                  s.e("5501"),
                                  s.e("62168"),
                                  s.e("86949"),
                                  s.e("52073"),
                                  s.e("66901"),
                                  s.e("40716"),
                              ]).then(s.bind(s, 629959));
                              return (s) =>
                                  (0, n.jsx)(e, {
                                      ...s,
                                      onLearnMore: t,
                                      analyticsSource: { ...b.location, object: V.ZSU.BUTTON_CTA },
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (n) => {
                              try {
                                  let n = await (0, u.F9)(e, R.yZ.BACKGROUND);
                                  S(n), (0, x.D1)(n, t.type === et.a.MP4, s), E(null);
                              } catch (e) {
                                  E(e.message);
                              }
                              n();
                          });
                      },
                  }),
              }),
          })
        : null;
}
