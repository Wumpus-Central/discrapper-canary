s.d(t, { A: () => el });
var n = s(477900),
    l = s(582128),
    i = s(17928),
    a = s(192308),
    o = s(452027),
    r = s(212245),
    c = s(287809),
    d = s(158045),
    u = s(285918),
    m = s(912630),
    x = s(965162),
    A = s(712711),
    p = s(952572),
    g = s(503698),
    E = s.n(g),
    _ = s(939249),
    N = s(834730),
    j = s(782134),
    f = s(812993),
    I = s(403581),
    h = s(866665),
    O = s(750943),
    v = s(638495),
    C = s(428678),
    S = s(635739),
    U = s(442433),
    y = s(964486),
    D = s(793574),
    T = s(688810),
    b = s(607470),
    k = s(421838),
    P = s(891540),
    L = s(738011),
    M = s(10392),
    B = s(82498),
    R = s(174459),
    G = s(486020),
    w = s(935208),
    V = s(498559),
    H = s(577718),
    W = s(652215),
    K = s(897513),
    F = s(339984),
    z = s(202541),
    J = s(375708),
    q = s(516978);
function Q(e) {
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
    return (0, n.jsxs)(_.D, {
        className: E()(a, q.gf, { [q.JI]: o, [q.A7]: r }),
        onMouseLeave: c,
        onBlur: d,
        onClick: r ? void 0 : s,
        children: [
            o ? (0, n.jsx)("div", { className: q.SH }) : null,
            (0, n.jsxs)("div", {
                className: q.kV,
                children: [
                    i,
                    (0, n.jsxs)("div", {
                        className: q.fP,
                        children: [
                            (0, n.jsx)(t, {
                                className: q.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, n.jsx)(N.E, { className: q.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { option: t, source: s, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !i || null == t)
    )
        return (0, n.jsx)("div", { className: q.PQ, style: { backgroundImage: `url(${s})` } });
    let r = (0, G.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, n.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: q.PQ,
        src: a ? s : r,
        alt: t.id,
    });
}
function Z(e) {
    let {
            option: t,
            source: a,
            selected: o = !1,
            onSelectOption: c,
            isAnimatedImage: d,
            isVideo: u,
            hotspotLocation: m,
            ariaLabel: A,
        } = e,
        p = (0, r.p)(),
        { analyticsLocations: g } = (0, T.Ay)(D.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        N = (0, i.bG)([P.A], () => null != m && P.A.hasHotspot(m)),
        I = l.useCallback((e) => {
            if (!(0, L.u)(e)) throw e;
        }, []),
        h = u
            ? (0, n.jsx)(b.A, { className: q.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: I })
            : (0, n.jsx)(Y, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function O() {
        null != m &&
            N &&
            (k.sF(m),
            R.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                type: z.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: p.location,
                location_stack: g,
            }),
            (0, M.sq)(W.U7l.PREMIUM_UPSELL_VIEWED, g, () => (0, B.uq)(z.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET)));
    }
    return (0, n.jsxs)(_.D, {
        className: E()(q.gf, { [q.JI]: o }),
        "aria-label": A,
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, U.L3)(e, async () => {
                let { default: e } = await s.e("422305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, n.jsx)("div", { className: q.SH }) : null,
            (0, n.jsx)("div", { onFocus: O, onMouseEnter: O, className: q.kV, children: h }),
            u || d
                ? (0, n.jsx)("div", {
                      className: q.uZ,
                      children: (0, n.jsx)(j.PlayIcon, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            N && (0, n.jsx)(f.Lp, { text: J.intl.string(J.t.y2b7CA), className: q.$5 }),
        ],
    });
}
function $() {
    return (0, n.jsxs)("div", {
        className: q.j1,
        children: [
            (0, n.jsx)(I.t, { size: "md", color: "currentColor", className: q.eo }),
            (0, n.jsx)(N.E, { variant: "text-sm/normal", children: J.intl.string(J.t["T+yRY3"]) }),
        ],
    });
}
function X(e) {
    let { onClick: t, tooltipText: s, disabled: l = !1 } = e,
        a = (0, i.bG)([P.A], () => P.A.hasHotspot(K._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        k.sF(K._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? J.intl.string(J.t["5TUJOv"]) : s;
    return (0, n.jsx)(h.m, {
        text: r,
        children: (0, n.jsxs)("div", {
            className: q.$g,
            children: [
                (0, n.jsxs)(Q, {
                    className: q.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: O.X,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, n.jsxs)("div", {
                        className: q.Us,
                        children: [
                            (0, n.jsx)(I.t, { size: "md", color: "currentColor", className: q.PK }),
                            (0, n.jsx)("div", { className: q.kr, children: J.intl.string(J.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: q.eD }), (0, n.jsx)("div", { className: q.G5 })],
                }),
                a && (0, n.jsx)(f.Lp, { text: J.intl.string(J.t.y2b7CA), className: q.$5 }),
            ],
        }),
    });
}
function ee(e) {
    let { onClick: t } = e,
        s = (0, r.p)(),
        { analyticsLocations: l } = (0, T.Ay)(D.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, y.Ay)(() => {
            R.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                type: z.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: l,
            }),
                (0, M.sq)(W.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, B.uq)(z.e.VIDEO_BACKGROUNDS_INLINE));
        }),
        (0, n.jsx)(X, { onClick: t, tooltipText: J.intl.string(J.t["IqE0T/"]) })
    );
}
function et(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, v.k)(),
        o = l ? J.intl.formatToPlainString(J.t.ykGFeD, { maxCustomBackgrounds: 25 }) : J.intl.string(J.t.Qx0tFc),
        r = [{ name: J.intl.string(J.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)(X, {
        disabled: l,
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        s.e("357625"),
                        s.e("67702"),
                        s.e("1214"),
                        s.e("475006"),
                        s.e("454048"),
                        s.e("863232"),
                        s.e("300699"),
                        s.e("349619"),
                        s.e("599666"),
                        s.e("221825"),
                        s.e("901555"),
                        s.e("844695"),
                        s.e("50015"),
                        s.e("199999"),
                        s.e("790244"),
                        s.e("133902"),
                        s.e("229666"),
                        s.e("93513"),
                        s.e("647011"),
                        s.e("779149"),
                        s.e("90017"),
                        s.e("199150"),
                        s.e("760987"),
                    ]).then(s.bind(s, 902550));
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: H.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: l } = e;
                                return t(s, n, l);
                            },
                            uploadType: F.HL.VIDEO_BACKGROUND,
                            filters: r,
                            modalTitle: J.intl.string(J.t.yG2pUi),
                            imageSpecifications: J.intl.string(J.t["72OaxN"]),
                            uploadOptionTitle: J.intl.string(J.t.xsW8u6),
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
function es(e) {
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
        { analyticsLocations: u } = (0, T.Ay)(D.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, V.A)()).sort((e, t) => H.sl[e.id] - H.sl[t.id]);
    return (0, n.jsx)(T.f5, {
        value: u,
        children: (0, n.jsxs)("div", {
            className: q.to,
            children: [
                (0, n.jsx)(Q, {
                    selected: null == i,
                    icon: C.K,
                    onClick: () => a(null),
                    text: J.intl.string(J.t.fUdMeO),
                }),
                (0, n.jsx)(Q, {
                    selected: "blur" === i,
                    icon: S.f,
                    onClick: () => a("blur"),
                    text: J.intl.string(J.t.LhSyL8),
                    children: (0, n.jsx)("div", { className: q.LJ }),
                }),
                t ? (0, n.jsx)(et, { onAddBackgroundImage: r, disabled: d }) : (0, n.jsx)(ee, { onClick: o }),
                c.map((e) => {
                    let t = (0, G.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, n.jsx)(
                              h.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)($, {}),
                                  "aria-label": J.intl.string(J.t["T+yRY3"]),
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(
                                      Z,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, x.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, G.q6)(e.asset),
                                          isAnimatedImage: (0, G.VI)(e.asset),
                                          ariaLabel: J.intl.string(J.t["T+yRY3"]),
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
                        h.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            ariaHidden: !0,
                            children: (0, n.jsx)(
                                Z,
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
var en = s(693591);
function el(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: g,
            onSelectBackgroundOption: E,
            currentDeviceId: _,
            className: N,
        } = e,
        j = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [f, I] = l.useState(null),
        h = (0, p.A)(),
        O = d.Ay.canUseCustomBackgrounds(j);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let v = (0, i.cf)([m.A], () => (O ? m.A.videoFilterAssets : {})),
        C = l.useMemo(() => Object.values(v).filter((e) => e.type === H.yZ.BACKGROUND || (e.type, !1)), [v]),
        S = (0, r.p)(),
        U = { isVideoBackgroundSupported: h, onSelectBackgroundOption: E, selectedBackgroundOption: g },
        y = l.useRef(U);
    function D(e) {
        E(e),
            (0, A.S1)(e, _, { location: S.location })
                .then(() => I(null))
                .catch(() => {
                    I(J.intl.string(J.t.ejrSLe)), (0, A.S1)(null, _, { location: S.location });
                });
    }
    return (
        l.useEffect(() => {
            y.current = U;
        }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = y.current;
            e ? (0, A.S1)(s, _, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [_]),
        h
            ? (0, n.jsx)("div", {
                  className: N,
                  children: (0, n.jsx)(o.D, {
                      label: J.intl.string(J.t.lZTUPs),
                      errorMessage: f,
                      children: (0, n.jsx)(es, {
                          canUseCustomBackgrounds: O,
                          customBackgroundOptions: C,
                          selectedOption: g,
                          onSelectOption: D,
                          onUpsellClick: function () {
                              (0, a.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      s.e("392028"),
                                      s.e("629972"),
                                      s.e("334168"),
                                      s.e("935205"),
                                      s.e("454048"),
                                      s.e("300699"),
                                      s.e("349619"),
                                      s.e("599666"),
                                      s.e("740428"),
                                      s.e("832817"),
                                      s.e("398125"),
                                      s.e("221825"),
                                      s.e("901555"),
                                      s.e("276640"),
                                      s.e("431011"),
                                      s.e("561216"),
                                      s.e("799657"),
                                      s.e("562168"),
                                      s.e("766901"),
                                      s.e("840716"),
                                  ]).then(s.bind(s, 629959));
                                  return (s) =>
                                      (0, n.jsx)(e, {
                                          ...s,
                                          onLearnMore: t,
                                          analyticsSource: { ...S.location, object: W.ZSU.BUTTON_CTA },
                                      });
                              });
                          },
                          onAddBackgroundImage: function (e, t) {
                              let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              return new Promise(async (n) => {
                                  try {
                                      let n = await (0, u.F9)(e, H.yZ.BACKGROUND);
                                      D(n), (0, x.D1)(n, t.type === en.a.MP4, s), I(null);
                                  } catch (e) {
                                      I(e.message);
                                  }
                                  n();
                              });
                          },
                      }),
                  }),
              })
            : null
    );
}
