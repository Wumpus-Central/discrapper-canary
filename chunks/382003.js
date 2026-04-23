s.d(t, { A: () => es });
var n = s(627968),
    l = s(64700),
    i = s(17928),
    a = s(192308),
    o = s(452027),
    r = s(212245),
    c = s(287809),
    d = s(927578),
    u = s(285918),
    m = s(912630),
    x = s(965162),
    p = s(413339),
    g = s(952572),
    h = s(503698),
    A = s.n(h),
    v = s(990078),
    f = s(939249),
    j = s(834730),
    N = s(782134),
    _ = s(777666),
    I = s(403581),
    D = s(750943),
    O = s(373495),
    E = s(428678),
    C = s(635739),
    b = s(442433),
    T = s(964486),
    S = s(793574),
    U = s(688810),
    y = s(607470),
    k = s(421838),
    M = s(891540),
    w = s(738011),
    L = s(954571),
    P = s(486020),
    V = s(935208),
    B = s(498559),
    R = s(577718),
    G = s(652215),
    H = s(897513),
    W = s(339984),
    F = s(788868),
    K = s(985018),
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
    return (0, n.jsxs)(f.D, {
        className: A()(a, z.gf, { [z.JI]: o, [z.A7]: r }),
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
                            (0, n.jsx)(j.E, { className: z.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
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
function $(e) {
    let {
            option: t,
            source: a,
            selected: o = !1,
            onSelectOption: c,
            isAnimatedImage: d,
            isVideo: u,
            hotspotLocation: m,
        } = e,
        p = (0, r.p)(),
        { analyticsLocations: g } = (0, U.Ay)(S.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        h = (0, i.bG)([M.A], () => null != m && M.A.hasHotspot(m)),
        v = l.useCallback((e) => {
            if (!(0, w.u)(e)) throw e;
        }, []),
        j = u
            ? (0, n.jsx)(y.A, { className: z.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: v })
            : (0, n.jsx)(Z, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function I() {
        null != m &&
            h &&
            (k.sF(m),
            L.default.track(G.HAw.PREMIUM_UPSELL_VIEWED, {
                type: F.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: p.location,
                location_stack: g,
            }));
    }
    return (0, n.jsxs)(f.D, {
        className: A()(z.gf, { [z.JI]: o }),
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, b.L3)(e, async () => {
                let { default: e } = await s.e("22305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, n.jsx)("div", { className: z.SH }) : null,
            (0, n.jsx)("div", { onFocus: I, onMouseEnter: I, className: z.kV, children: j }),
            u || d
                ? (0, n.jsx)("div", {
                      className: z.uZ,
                      children: (0, n.jsx)(N.u, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            h && (0, n.jsx)(_.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
        ],
    });
}
function Q() {
    return (0, n.jsxs)("div", {
        className: z.j1,
        children: [
            (0, n.jsx)(I.t, { size: "md", color: "currentColor", className: z.eo }),
            (0, n.jsx)(j.E, { variant: "text-sm/normal", children: K.intl.string(K.t["T+yRY3"]) }),
        ],
    });
}
function Y(e) {
    let { onClick: t, tooltipText: s, disabled: l = !1 } = e,
        a = (0, i.bG)([M.A], () => M.A.hasHotspot(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        k.sF(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? K.intl.string(K.t["5TUJOv"]) : s;
    return (0, n.jsx)(v.m, {
        text: r,
        children: (0, n.jsxs)("div", {
            className: z.$g,
            children: [
                (0, n.jsxs)(J, {
                    className: z.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: D.X,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, n.jsxs)("div", {
                        className: z.Us,
                        children: [
                            (0, n.jsx)(I.t, { size: "md", color: "currentColor", className: z.PK }),
                            (0, n.jsx)("div", { className: z.kr, children: K.intl.string(K.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: z.eD }), (0, n.jsx)("div", { className: z.G5 })],
                }),
                a && (0, n.jsx)(_.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
            ],
        }),
    });
}
function q(e) {
    let { onClick: t } = e,
        s = (0, r.p)(),
        { analyticsLocations: l } = (0, U.Ay)(S.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, T.Ay)(() => {
            L.default.track(G.HAw.PREMIUM_UPSELL_VIEWED, {
                type: F.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: l,
            });
        }),
        (0, n.jsx)(Y, { onClick: t, tooltipText: K.intl.string(K.t["IqE0T/"]) })
    );
}
function X(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, O.k)(),
        o = l ? K.intl.formatToPlainString(K.t.ykGFeD, { maxCustomBackgrounds: 25 }) : K.intl.string(K.t.Qx0tFc),
        r = [{ name: K.intl.string(K.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)(Y, {
        disabled: l,
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([s.e("79149"), s.e("60987"), s.e("79354")]).then(
                        s.bind(s, 902550),
                    );
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: R.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: l } = e;
                                return t(s, n, l);
                            },
                            uploadType: W.HL.VIDEO_BACKGROUND,
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
                        ? V.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [s],
        ),
        d = c.length >= 25,
        { analyticsLocations: u } = (0, U.Ay)(S.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, B.A)()).sort((e, t) => R.sl[e.id] - R.sl[t.id]);
    return (0, n.jsx)(U.f5, {
        value: u,
        children: (0, n.jsxs)("div", {
            className: z.to,
            children: [
                (0, n.jsx)(J, {
                    selected: null == i,
                    icon: E.K,
                    onClick: () => a(null),
                    text: K.intl.string(K.t.fUdMeO),
                }),
                (0, n.jsx)(J, {
                    selected: "blur" === i,
                    icon: C.f,
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
                              v.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)(Q, {}),
                                  "aria-label": K.intl.string(K.t["T+yRY3"]),
                                  children: (0, n.jsx)(
                                      $,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, x.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, P.q6)(e.asset),
                                          isAnimatedImage: (0, P.VI)(e.asset),
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
                        v.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, n.jsx)(
                                $,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: i === e.id,
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
var et = s(693591);
function es(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: h,
            onSelectBackgroundOption: A,
            currentDeviceId: v,
            className: f,
        } = e,
        j = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [N, _] = l.useState(null),
        I = (0, g.A)(),
        D = d.Ay.canUseCustomBackgrounds(j);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let O = (0, i.cf)([m.A], () => (D ? m.A.videoFilterAssets : {})),
        E = l.useMemo(() => Object.values(O).filter((e) => e.type === R.yZ.BACKGROUND), [O]),
        C = (0, r.p)(),
        b = { isVideoBackgroundSupported: I, onSelectBackgroundOption: A, selectedBackgroundOption: h },
        T = l.useRef(b);
    l.useEffect(() => {
        T.current = b;
    }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = T.current;
            e ? (0, p.S1)(s, v, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [v]);
    let S = (e) => {
        A(e),
            (0, p.S1)(e, v, { location: C.location })
                .then(() => _(null))
                .catch(() => {
                    _(K.intl.string(K.t.ejrSLe)), (0, p.S1)(null, v, { location: C.location });
                });
    };
    return I
        ? (0, n.jsx)("div", {
              className: f,
              children: (0, n.jsx)(o.D, {
                  label: K.intl.string(K.t.lZTUPs),
                  errorMessage: N,
                  children: (0, n.jsx)(ee, {
                      canUseCustomBackgrounds: D,
                      customBackgroundOptions: E,
                      selectedOption: h,
                      onSelectOption: S,
                      onUpsellClick: () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await s.e("85312").then(s.bind(s, 629959));
                              return (s) =>
                                  (0, n.jsx)(e, {
                                      ...s,
                                      onLearnMore: t,
                                      analyticsSource: { ...C.location, object: G.ZSU.BUTTON_CTA },
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (n) => {
                              try {
                                  let n = await (0, u.F9)(e, R.yZ.BACKGROUND);
                                  S(n), (0, x.D1)(n, t.type === et.a.MP4, s), _(null);
                              } catch (e) {
                                  _(e.message);
                              }
                              n();
                          });
                      },
                  }),
              }),
          })
        : null;
}
