n.d(t, { A: () => el });
var s = n(477900),
    l = n(582128),
    i = n(17928),
    a = n(192308),
    o = n(452027),
    r = n(212245),
    c = n(287809),
    d = n(927578),
    u = n(285918),
    m = n(912630),
    x = n(965162),
    p = n(312987),
    A = n(952572),
    E = n(503698),
    g = n.n(E),
    _ = n(939249),
    N = n(834730),
    j = n(782134),
    f = n(62010),
    h = n(403581),
    I = n(866665),
    v = n(750943),
    O = n(638495),
    S = n(428678),
    C = n(635739),
    U = n(442433),
    y = n(964486),
    D = n(793574),
    T = n(688810),
    b = n(607470),
    k = n(421838),
    L = n(891540),
    P = n(738011),
    M = n(10392),
    B = n(82498),
    R = n(174459),
    G = n(486020),
    w = n(935208),
    V = n(498559),
    H = n(577718),
    W = n(652215),
    K = n(897513),
    F = n(339984),
    z = n(202541),
    J = n(105292),
    q = n(516978);
function Q(e) {
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
    return (0, s.jsxs)(_.D, {
        className: g()(a, q.gf, { [q.JI]: o, [q.A7]: r }),
        onMouseLeave: c,
        onBlur: d,
        onClick: r ? void 0 : n,
        children: [
            o ? (0, s.jsx)("div", { className: q.SH }) : null,
            (0, s.jsxs)("div", {
                className: q.kV,
                children: [
                    i,
                    (0, s.jsxs)("div", {
                        className: q.fP,
                        children: [
                            (0, s.jsx)(t, {
                                className: q.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, s.jsx)(N.E, { className: q.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { option: t, source: n, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = n;
        }, [n]),
        !i || null == t)
    )
        return (0, s.jsx)("div", { className: q.PQ, style: { backgroundImage: `url(${n})` } });
    let r = (0, G.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, s.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: q.PQ,
        src: a ? n : r,
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
            ariaLabel: p,
        } = e,
        A = (0, r.p)(),
        { analyticsLocations: E } = (0, T.Ay)(D.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        N = (0, i.bG)([L.A], () => null != m && L.A.hasHotspot(m)),
        h = l.useCallback((e) => {
            if (!(0, P.u)(e)) throw e;
        }, []),
        I = u
            ? (0, s.jsx)(b.A, { className: q.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: h })
            : (0, s.jsx)(Y, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function v() {
        null != m &&
            N &&
            (k.sF(m),
            R.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                type: z.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: A.location,
                location_stack: E,
            }),
            (0, M.sq)(W.U7l.PREMIUM_UPSELL_VIEWED, E, () => (0, B.uq)(z.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET)));
    }
    return (0, s.jsxs)(_.D, {
        className: g()(q.gf, { [q.JI]: o }),
        "aria-label": p,
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, U.L3)(e, async () => {
                let { default: e } = await n.e("422305").then(n.bind(n, 5752));
                return (n) => (0, s.jsx)(e, { ...n, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, s.jsx)("div", { className: q.SH }) : null,
            (0, s.jsx)("div", { onFocus: v, onMouseEnter: v, className: q.kV, children: I }),
            u || d
                ? (0, s.jsx)("div", {
                      className: q.uZ,
                      children: (0, s.jsx)(j.PlayIcon, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            N &&
                (0, s.jsx)("div", { className: q.sL, children: (0, s.jsx)(f.E, { type: "new", variant: "inverted" }) }),
        ],
    });
}
function $() {
    return (0, s.jsxs)("div", {
        className: q.j1,
        children: [
            (0, s.jsx)(h.t, { size: "md", color: "currentColor", className: q.eo }),
            (0, s.jsx)(N.E, { variant: "text-sm/normal", children: J.intl.string(J.t["T+yRY3"]) }),
        ],
    });
}
function X(e) {
    let { onClick: t, tooltipText: n, disabled: l = !1 } = e,
        a = (0, i.bG)([L.A], () => L.A.hasHotspot(K._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        k.sF(K._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? J.intl.string(J.t["5TUJOv"]) : n;
    return (0, s.jsx)(I.m, {
        text: r,
        children: (0, s.jsxs)("div", {
            className: q.$g,
            children: [
                (0, s.jsxs)(Q, {
                    className: q.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: v.X,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, s.jsxs)("div", {
                        className: q.Us,
                        children: [
                            (0, s.jsx)(h.t, { size: "md", color: "currentColor", className: q.PK }),
                            (0, s.jsx)("div", { className: q.kr, children: J.intl.string(J.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, s.jsx)("div", { className: q.eD }), (0, s.jsx)("div", { className: q.G5 })],
                }),
                a &&
                    (0, s.jsx)("div", {
                        className: q.sL,
                        children: (0, s.jsx)(f.E, { type: "new", variant: "inverted" }),
                    }),
            ],
        }),
    });
}
function ee(e) {
    let { onClick: t } = e,
        n = (0, r.p)(),
        { analyticsLocations: l } = (0, T.Ay)(D.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, y.Ay)(() => {
            (R.default.track(W.HAw.PREMIUM_UPSELL_VIEWED, {
                type: z.e.VIDEO_BACKGROUNDS_INLINE,
                location: n.location,
                location_stack: l,
            }),
                (0, M.sq)(W.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, B.uq)(z.e.VIDEO_BACKGROUNDS_INLINE)));
        }),
        (0, s.jsx)(X, { onClick: t, tooltipText: J.intl.string(J.t["IqE0T/"]) })
    );
}
function et(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, O.k)(),
        o = l ? J.intl.formatToPlainString(J.t.ykGFeD, { maxCustomBackgrounds: 25 }) : J.intl.string(J.t.Qx0tFc),
        r = [{ name: J.intl.string(J.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, s.jsx)(X, {
        disabled: l,
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("191601"),
                        n.e("67702"),
                        n.e("1214"),
                        n.e("475006"),
                        n.e("454048"),
                        n.e("863232"),
                        n.e("300699"),
                        n.e("349619"),
                        n.e("599666"),
                        n.e("221825"),
                        n.e("901555"),
                        n.e("199999"),
                        n.e("844695"),
                        n.e("50015"),
                        n.e("133902"),
                        n.e("790244"),
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
                            maxFileSizeBytes: H.G9,
                            onComplete: (e) => {
                                let { imageUri: n, file: s, isFromTenor: l } = e;
                                return t(n, s, l);
                            },
                            uploadType: F.HL.VIDEO_BACKGROUND,
                            filters: r,
                            modalTitle: J.intl.string(J.t.yG2pUi),
                            imageSpecifications: J.intl.string(J.t["72OaxN"]),
                            uploadOptionTitle: J.intl.string(J.t.xsW8u6),
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
function en(e) {
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
                        ? w.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [n],
        ),
        d = c.length >= 25,
        { analyticsLocations: u } = (0, T.Ay)(D.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, V.A)()).sort((e, t) => H.sl[e.id] - H.sl[t.id]);
    return (0, s.jsx)(T.f5, {
        value: u,
        children: (0, s.jsxs)("div", {
            className: q.to,
            children: [
                (0, s.jsx)(Q, {
                    selected: null == i,
                    icon: S.K,
                    onClick: () => a(null),
                    text: J.intl.string(J.t.fUdMeO),
                }),
                (0, s.jsx)(Q, {
                    selected: "blur" === i,
                    icon: C.f,
                    onClick: () => a("blur"),
                    text: J.intl.string(J.t.LhSyL8),
                    children: (0, s.jsx)("div", { className: q.LJ }),
                }),
                t ? (0, s.jsx)(et, { onAddBackgroundImage: r, disabled: d }) : (0, s.jsx)(ee, { onClick: o }),
                c.map((e) => {
                    let t = (0, G.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, s.jsx)(
                              I.m,
                              {
                                  __unsupportedReactNodeAsText: (0, s.jsx)($, {}),
                                  "aria-label": J.intl.string(J.t["T+yRY3"]),
                                  ariaHidden: !0,
                                  children: (0, s.jsx)(
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
                    return (0, s.jsx)(
                        I.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            ariaHidden: !0,
                            children: (0, s.jsx)(
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
var es = n(693591);
function el(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: E,
            onSelectBackgroundOption: g,
            currentDeviceId: _,
            className: N,
        } = e,
        j = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [f, h] = l.useState(null),
        I = (0, A.A)(),
        v = d.Ay.canUseCustomBackgrounds(j);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let O = (0, i.cf)([m.A], () => (v ? m.A.videoFilterAssets : {})),
        S = l.useMemo(() => Object.values(O).filter((e) => e.type === H.yZ.BACKGROUND || (e.type, !1)), [O]),
        C = (0, r.p)(),
        U = { isVideoBackgroundSupported: I, onSelectBackgroundOption: g, selectedBackgroundOption: E },
        y = l.useRef(U);
    async function D(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
            let s = await (0, u.F9)(e, H.yZ.BACKGROUND);
            (T(s), (0, x.D1)(s, t.type === es.a.MP4, n), h(null));
        } catch (e) {
            h(e.message);
        }
    }
    function T(e) {
        (g(e),
            (0, p.S1)(e, _, { location: C.location })
                .then(() => h(null))
                .catch(() => {
                    (h(J.intl.string(J.t.ejrSLe)), (0, p.S1)(null, _, { location: C.location }));
                }));
    }
    return (l.useEffect(() => {
        y.current = U;
    }),
    l.useEffect(() => {
        let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = y.current;
        e ? (0, p.S1)(n, _, { track: !1 }).catch(() => t(null)) : null != n && t(null);
    }, [_]),
    I)
        ? (0, s.jsx)("div", {
              className: N,
              children: (0, s.jsx)(o.D, {
                  label: J.intl.string(J.t.lZTUPs),
                  errorMessage: f,
                  children: (0, s.jsx)(en, {
                      canUseCustomBackgrounds: v,
                      customBackgroundOptions: S,
                      selectedOption: E,
                      onSelectOption: T,
                      onUpsellClick: function () {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  n.e("166171"),
                                  n.e("392028"),
                                  n.e("621820"),
                                  n.e("334168"),
                                  n.e("935205"),
                                  n.e("454048"),
                                  n.e("300699"),
                                  n.e("349619"),
                                  n.e("599666"),
                                  n.e("398125"),
                                  n.e("221825"),
                                  n.e("930758"),
                                  n.e("244560"),
                                  n.e("901555"),
                                  n.e("707826"),
                                  n.e("776195"),
                                  n.e("832817"),
                                  n.e("561216"),
                                  n.e("799657"),
                                  n.e("562168"),
                                  n.e("766901"),
                                  n.e("840716"),
                              ]).then(n.bind(n, 629959));
                              return (n) =>
                                  (0, s.jsx)(e, {
                                      ...n,
                                      onLearnMore: t,
                                      analyticsSource: { ...C.location, object: W.ZSU.BUTTON_CTA },
                                  });
                          });
                      },
                      onAddBackgroundImage: D,
                  }),
              }),
          })
        : null;
}
