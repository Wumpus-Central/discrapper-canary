n.d(t, { A: () => en });
var s = n(477900),
    l = n(582128),
    i = n(17928),
    a = n(192308),
    o = n(452027),
    r = n(212245),
    c = n(287809),
    d = n(158045),
    u = n(285918),
    m = n(912630),
    x = n(965162),
    p = n(413339),
    g = n(952572),
    A = n(503698),
    j = n.n(A),
    f = n(939249),
    N = n(834730),
    _ = n(782134),
    h = n(812993),
    E = n(403581),
    v = n(866665),
    O = n(750943),
    I = n(638495),
    C = n(428678),
    y = n(635739),
    b = n(442433),
    S = n(964486),
    T = n(793574),
    k = n(688810),
    D = n(607470),
    U = n(421838),
    B = n(891540),
    P = n(738011),
    L = n(174459),
    M = n(486020),
    G = n(935208),
    w = n(498559),
    R = n(577718),
    V = n(652215),
    H = n(897513),
    F = n(339984),
    W = n(202541),
    K = n(375708),
    z = n(993555);
function J(e) {
    let {
        icon: t,
        onClick: n,
        text: l,
        children: i,
        className: a,
        selected: o = !1,
        disabled: r = !1,
        onMouseLeave: c,
        onBlur: d,
    } = e;
    return (0, s.jsxs)(f.D, {
        className: j()(a, z.gf, { [z.JI]: o, [z.A7]: r }),
        onMouseLeave: c,
        onBlur: d,
        onClick: r ? void 0 : n,
        children: [
            o ? (0, s.jsx)("div", { className: z.SH }) : null,
            (0, s.jsxs)("div", {
                className: z.kV,
                children: [
                    i,
                    (0, s.jsxs)("div", {
                        className: z.fP,
                        children: [
                            (0, s.jsx)(t, {
                                className: z.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, s.jsx)(N.E, { className: z.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { option: t, source: n, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !i || null == t)
    )
        return (0, s.jsx)("div", { className: z.PQ, style: { backgroundImage: `url(${n})` } });
    let r = (0, M.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, s.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: z.PQ,
        src: a ? n : r,
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
        { analyticsLocations: A } = (0, k.Ay)(T.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        N = (0, i.bG)([B.A], () => null != m && B.A.hasHotspot(m)),
        E = l.useCallback((e) => {
            if (!(0, P.u)(e)) throw e;
        }, []),
        v = u
            ? (0, s.jsx)(D.A, { className: z.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: E })
            : (0, s.jsx)(Q, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function O() {
        null != m &&
            N &&
            (U.sF(m),
            L.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: g.location,
                location_stack: A,
            }));
    }
    return (0, s.jsxs)(f.D, {
        className: j()(z.gf, { [z.JI]: o }),
        "aria-label": p,
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, b.L3)(e, async () => {
                let { default: e } = await n.e("422305").then(n.bind(n, 5752));
                return (n) => (0, s.jsx)(e, { ...n, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, s.jsx)("div", { className: z.SH }) : null,
            (0, s.jsx)("div", { onFocus: O, onMouseEnter: O, className: z.kV, children: v }),
            u || d
                ? (0, s.jsx)("div", {
                      className: z.uZ,
                      children: (0, s.jsx)(_.PlayIcon, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            N && (0, s.jsx)(h.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
        ],
    });
}
function Z() {
    return (0, s.jsxs)("div", {
        className: z.j1,
        children: [
            (0, s.jsx)(E.t, { size: "md", color: "currentColor", className: z.eo }),
            (0, s.jsx)(N.E, { variant: "text-sm/normal", children: K.intl.string(K.t["T+yRY3"]) }),
        ],
    });
}
function $(e) {
    let { onClick: t, tooltipText: n, disabled: l = !1 } = e,
        a = (0, i.bG)([B.A], () => B.A.hasHotspot(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        U.sF(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? K.intl.string(K.t["5TUJOv"]) : n;
    return (0, s.jsx)(v.m, {
        text: r,
        children: (0, s.jsxs)("div", {
            className: z.$g,
            children: [
                (0, s.jsxs)(J, {
                    className: z.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: O.X,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, s.jsxs)("div", {
                        className: z.Us,
                        children: [
                            (0, s.jsx)(E.t, { size: "md", color: "currentColor", className: z.PK }),
                            (0, s.jsx)("div", { className: z.kr, children: K.intl.string(K.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, s.jsx)("div", { className: z.eD }), (0, s.jsx)("div", { className: z.G5 })],
                }),
                a && (0, s.jsx)(h.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
            ],
        }),
    });
}
function q(e) {
    let { onClick: t } = e,
        n = (0, r.p)(),
        { analyticsLocations: l } = (0, k.Ay)(T.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, S.Ay)(() => {
            L.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: l,
            });
        }),
        (0, s.jsx)($, { onClick: t, tooltipText: K.intl.string(K.t["IqE0T/"]) })
    );
}
function X(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, I.k)(),
        o = l ? K.intl.formatToPlainString(K.t.ykGFeD, { maxCustomBackgrounds: 25 }) : K.intl.string(K.t.Qx0tFc),
        r = [{ name: K.intl.string(K.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, s.jsx)($, {
        disabled: l,
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("773193"),
                        n.e("821581"),
                        n.e("731278"),
                        n.e("22089"),
                        n.e("454048"),
                        n.e("863232"),
                        n.e("599666"),
                        n.e("300699"),
                        n.e("349619"),
                        n.e("221825"),
                        n.e("844695"),
                        n.e("50015"),
                        n.e("901555"),
                        n.e("199999"),
                        n.e("790244"),
                        n.e("133902"),
                        n.e("229666"),
                        n.e("93513"),
                        n.e("647011"),
                        n.e("779149"),
                        n.e("90017"),
                        n.e("199150"),
                        n.e("760987"),
                    ]).then(n.bind(n, 902550));
                    return (n) =>
                        (0, s.jsx)(e, {
                            maxFileSizeBytes: R.G9,
                            onComplete: (e) => {
                                let { imageUri: n, file: s, isFromTenor: l } = e;
                                return t(n, s, l);
                            },
                            uploadType: F.HL.VIDEO_BACKGROUND,
                            filters: r,
                            modalTitle: K.intl.string(K.t.yG2pUi),
                            imageSpecifications: K.intl.string(K.t["72OaxN"]),
                            uploadOptionTitle: K.intl.string(K.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...n,
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
            customBackgroundOptions: n,
            selectedOption: i,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: r,
        } = e,
        c = l.useMemo(
            () =>
                n.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? G.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        d = c.length >= 25,
        { analyticsLocations: u } = (0, k.Ay)(T.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, w.A)()).sort((e, t) => R.sl[e.id] - R.sl[t.id]);
    return (0, s.jsx)(k.f5, {
        value: u,
        children: (0, s.jsxs)("div", {
            className: z.to,
            children: [
                (0, s.jsx)(J, {
                    selected: null == i,
                    icon: C.K,
                    onClick: () => a(null),
                    text: K.intl.string(K.t.fUdMeO),
                }),
                (0, s.jsx)(J, {
                    selected: "blur" === i,
                    icon: y.f,
                    onClick: () => a("blur"),
                    text: K.intl.string(K.t.LhSyL8),
                    children: (0, s.jsx)("div", { className: z.LJ }),
                }),
                t ? (0, s.jsx)(X, { onAddBackgroundImage: r, disabled: d }) : (0, s.jsx)(q, { onClick: o }),
                c.map((e) => {
                    let t = (0, M.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, s.jsx)(
                              v.m,
                              {
                                  __unsupportedReactNodeAsText: (0, s.jsx)(Z, {}),
                                  "aria-label": K.intl.string(K.t["T+yRY3"]),
                                  ariaHidden: !0,
                                  children: (0, s.jsx)(
                                      Y,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, x.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, M.q6)(e.asset),
                                          isAnimatedImage: (0, M.VI)(e.asset),
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
                    return (0, s.jsx)(
                        v.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            ariaHidden: !0,
                            children: (0, s.jsx)(
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
var et = n(693591);
function en(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: A,
            onSelectBackgroundOption: j,
            currentDeviceId: f,
            className: N,
        } = e,
        _ = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [h, E] = l.useState(null),
        v = (0, g.A)(),
        O = d.Ay.canUseCustomBackgrounds(_);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let I = (0, i.cf)([m.A], () => (O ? m.A.videoFilterAssets : {})),
        C = l.useMemo(() => Object.values(I).filter((e) => e.type === R.yZ.BACKGROUND || (e.type, !1)), [I]),
        y = (0, r.p)(),
        b = { isVideoBackgroundSupported: v, onSelectBackgroundOption: j, selectedBackgroundOption: A },
        S = l.useRef(b);
    function T(e) {
        j(e),
            (0, p.S1)(e, f, { location: y.location })
                .then(() => E(null))
                .catch(() => {
                    E(K.intl.string(K.t.ejrSLe)), (0, p.S1)(null, f, { location: y.location });
                });
    }
    return (
        l.useEffect(() => {
            S.current = b;
        }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = S.current;
            e ? (0, p.S1)(n, f, { track: !1 }).catch(() => t(null)) : null != n && t(null);
        }, [f]),
        v
            ? (0, s.jsx)("div", {
                  className: N,
                  children: (0, s.jsx)(o.D, {
                      label: K.intl.string(K.t.lZTUPs),
                      errorMessage: h,
                      children: (0, s.jsx)(ee, {
                          canUseCustomBackgrounds: O,
                          customBackgroundOptions: C,
                          selectedOption: A,
                          onSelectOption: T,
                          onUpsellClick: function () {
                              (0, a.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("135085"),
                                      n.e("225091"),
                                      n.e("869729"),
                                      n.e("819522"),
                                      n.e("454048"),
                                      n.e("599666"),
                                      n.e("300699"),
                                      n.e("349619"),
                                      n.e("740428"),
                                      n.e("398125"),
                                      n.e("221825"),
                                      n.e("276640"),
                                      n.e("431011"),
                                      n.e("832817"),
                                      n.e("338835"),
                                      n.e("901555"),
                                      n.e("799657"),
                                      n.e("562168"),
                                      n.e("766901"),
                                      n.e("840716"),
                                  ]).then(n.bind(n, 629959));
                                  return (n) =>
                                      (0, s.jsx)(e, {
                                          ...n,
                                          onLearnMore: t,
                                          analyticsSource: { ...y.location, object: V.ZSU.BUTTON_CTA },
                                      });
                              });
                          },
                          onAddBackgroundImage: function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              return new Promise(async (s) => {
                                  try {
                                      let s = await (0, u.F9)(e, R.yZ.BACKGROUND);
                                      T(s), (0, x.D1)(s, t.type === et.a.MP4, n), E(null);
                                  } catch (e) {
                                      E(e.message);
                                  }
                                  s();
                              });
                          },
                      }),
                  }),
              })
            : null
    );
}
